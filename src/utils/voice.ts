import { Language } from '../types';
import { SYMPTOMS_LIST } from '../data/knowledgeBase';

// Web Speech API interfaces
interface IWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SpeechRecognition?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webkitSpeechRecognition?: any;
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as IWindow;
  return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

export function matchSymptomsFromText(text: string, lang: Language): string[] {
  const normalized = text.toLowerCase().trim();
  const matchedIds = new Set<string>();

  SYMPTOMS_LIST.forEach((symptom) => {
    // Check keywords for the active language
    const currentKeywords = symptom.keywords[lang] || [];
    currentKeywords.forEach((kw) => {
      if (normalized.includes(kw.toLowerCase())) {
        matchedIds.add(symptom.id);
      }
    });

    // Also check cross-language keywords (e.g. English medical words like 'fever', 'cough' spoken in Hindi/Kannada)
    if (lang !== 'en') {
      symptom.keywords.en.forEach((kw) => {
        if (normalized.includes(kw.toLowerCase())) {
          matchedIds.add(symptom.id);
        }
      });
    }
  });

  return Array.from(matchedIds);
}

export function startSpeechRecognition(
  lang: Language,
  onResult: (transcript: string, matchedSymptomIds: string[]) => void,
  onError: (err: string) => void,
  onEnd: () => void
): () => void {
  const win = window as IWindow;
  const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

  if (!SpeechRec) {
    onError('Speech recognition not supported on this browser');
    return () => {};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognition: any = new SpeechRec();
  recognition.continuous = false;
  recognition.interimResults = true;

  const langCodeMap: Record<Language, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    kn: 'kn-IN'
  };

  recognition.lang = langCodeMap[lang] || 'en-IN';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onresult = (event: any) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript;
    }
    const matched = matchSymptomsFromText(transcript, lang);
    onResult(transcript, matched);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onerror = (event: any) => {
    console.warn('Speech recognition error:', event.error);
    onError(event.error);
  };

  recognition.onend = () => {
    onEnd();
  };

  try {
    recognition.start();
  } catch (e) {
    console.warn('Recognition start exception:', e);
    onError('Failed to start microphone');
  }

  return () => {
    try {
      recognition.stop();
    } catch {
      // ignore
    }
  };
}

export function speakText(text: string, lang: Language): void {
  if (!isSpeechSynthesisSupported()) return;

  try {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const langCodeMap: Record<Language, string> = {
      en: 'en-IN',
      hi: 'hi-IN',
      kn: 'kn-IN'
    };
    utterance.lang = langCodeMap[lang] || 'en-IN';
    utterance.rate = 0.9; // Slightly slower for clear rural understanding
    utterance.pitch = 1.0;

    // Pick best available voice for language
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find((v) => v.lang.startsWith(utterance.lang) || v.lang.startsWith(lang));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Speech synthesis error:', err);
  }
}

export function stopSpeaking(): void {
  if (isSpeechSynthesisSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }
}
