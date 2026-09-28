/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Language,
  CheckRecord,
  PatientProfile,
  AppSettings,
  AshaContact,
  SymptomCategory,
  SkinAnswers
} from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { BodyMap } from './components/BodyMap';
import { SymptomCards } from './components/SymptomCards';
import { CameraCapture } from './components/CameraCapture';
import { SkinQuestionnaire } from './components/SkinQuestionnaire';
import { ResultScreen } from './components/ResultScreen';
import { RecordsScreen } from './components/RecordsScreen';
import { AshaScreen } from './components/AshaScreen';
import { PrintSlip } from './components/PrintSlip';
import { PrivacyModal } from './components/PrivacyModal';
import { evaluateSymptoms } from './utils/engine';
import {
  initDB,
  saveCheckRecord,
  savePatient,
  getAllPatients,
  getSettings,
  saveSettings,
  getAshaContact
} from './utils/db';
import {
  startSpeechRecognition,
  isSpeechRecognitionSupported,
  speakText
} from './utils/voice';
import {
  Mic,
  MicOff,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Camera,
  Activity,
  HeartPulse,
  Plus,
  Minus,
  Check,
  X,
  FileText,
  UserCheck,
  HelpCircle
} from 'lucide-react';

export default function App() {
  // Navigation & Screen state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentScreen, setCurrentScreen] = useState<'wizard' | 'records' | 'asha'>('wizard');
  const [showPrintSlip, setShowPrintSlip] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showOtherModal, setShowOtherModal] = useState(false);
  const [showPatientPicker, setShowPatientPicker] = useState(false);

  // Settings & DB State
  const [settings, setSettings] = useState<AppSettings>({
    language: 'en',
    fontSize: 'normal',
    highContrast: false,
    darkMode: false,
    ashaPin: '1234'
  });
  const [ashaContact, setAshaContact] = useState<AshaContact | null>(null);
  const [savedPatients, setSavedPatients] = useState<PatientProfile[]>([]);

  // Wizard state: Step 1 (About You)
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('female');
  const [isPregnant, setIsPregnant] = useState(false);
  const [conditions, setConditions] = useState<string[]>([]);
  const [habits, setHabits] = useState<string[]>([]);
  const [cancerFamilyHistory, setCancerFamilyHistory] = useState<'yes' | 'no' | 'unknown'>('unknown');

  // Wizard state: Step 2 (Symptoms)
  const [symptomNavTab, setSymptomNavTab] = useState<'body' | 'categories'>('categories');
  const [activeBodyPart, setActiveBodyPart] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<SymptomCategory | 'all'>('all');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

  // Wizard state: Step 3 (Follow-up)
  const [duration, setDuration] = useState<'today' | '1-3_days' | 'more_than_3_days' | 'more_than_3_weeks'>('1-3_days');
  const [severityResponse, setSeverityResponse] = useState<'mild' | 'medium' | 'severe'>('medium');
  const [gettingWorse, setGettingWorse] = useState(false);
  const [skinAnswers, setSkinAnswers] = useState<SkinAnswers>({
    color: 'red',
    itching: false,
    spreading: false,
    painful: false,
    hasFever: false,
    days: '1-3',
    changingMole: false
  });

  // Wizard state: Step 4 (Result)
  const [completedRecord, setCompletedRecord] = useState<CheckRecord | null>(null);

  // Voice recognition active state
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [stopListeningFn, setStopListeningFn] = useState<(() => void) | null>(null);

  const t = translations[settings.language] || translations.en;

  // Initialize DB and load settings
  useEffect(() => {
    async function setup() {
      try {
        await initDB();
        const loadedSettings = await getSettings();
        if (loadedSettings) setSettings(loadedSettings);
        const contact = await getAshaContact();
        if (contact) setAshaContact(contact);
        const patients = await getAllPatients();
        setSavedPatients(patients);
      } catch (err) {
        console.warn('DB initialization notice:', err);
      }
    }
    setup();
  }, []);

  const handleUpdateSettings = async (partial: Partial<AppSettings>) => {
    const updated = { ...settings, ...partial };
    setSettings(updated);
    await saveSettings(updated);
  };

  const handleLanguageChange = (lang: Language) => {
    handleUpdateSettings({ language: lang });
  };

  // Toggle selection
  const handleToggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleToggleCondition = (cond: string) => {
    if (cond === 'none') {
      setConditions([]);
      return;
    }
    setConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  const handleToggleHabit = (h: string) => {
    if (h === 'none') {
      setHabits([]);
      return;
    }
    setHabits((prev) =>
      prev.includes(h) ? prev.filter((item) => item !== h) : [...prev, h]
    );
  };

  // Voice handler
  const handleToggleVoice = () => {
    if (isListening && stopListeningFn) {
      stopListeningFn();
      setIsListening(false);
      setStopListeningFn(null);
      return;
    }

    setVoiceTranscript('');
    const stopFn = startSpeechRecognition(
      settings.language,
      (transcript, matchedIds) => {
        setVoiceTranscript(transcript);
        if (matchedIds.length > 0) {
          setSelectedSymptoms((prev) => Array.from(new Set([...prev, ...matchedIds])));
        }
      },
      (err) => {
        console.warn('Voice error:', err);
        setIsListening(false);
      },
      () => {
        setIsListening(false);
      }
    );

    setIsListening(true);
    setStopListeningFn(() => stopFn);
  };

  // Triage computation & save
  const handleFinishTriage = async () => {
    const evalResult = evaluateSymptoms({
      selectedSymptoms,
      otherText,
      duration,
      severityResponse,
      age,
      gender,
      isPregnant,
      conditions,
      habits,
      cancerFamilyHistory,
      skinAnswers
    });

    const record: CheckRecord = {
      patientName: patientName.trim() || (settings.language === 'hi' ? 'मरीज' : 'Patient'),
      age,
      gender,
      isPregnant: gender === 'female' ? isPregnant : false,
      conditions,
      habits,
      cancerFamilyHistory,
      selectedSymptoms,
      otherText: otherText.trim() || undefined,
      needsReview: !!otherText.trim(),
      duration,
      severityResponse,
      gettingWorse,
      skinAnswers,
      photos,
      resultSeverity: evalResult.severity,
      cancerWarningLevel: evalResult.cancerWarningLevel,
      cancerWarningReasons: evalResult.cancerWarningReasons,
      underlyingHints: evalResult.underlyingHints,
      matchedConditions: evalResult.matchedConditions,
      date: Date.now(),
      followUpDone: false
    };

    try {
      const savedId = await saveCheckRecord(record);
      record.id = savedId;

      // Save patient profile for returning pickers
      if (patientName.trim()) {
        await savePatient({
          name: patientName.trim(),
          age,
          gender,
          isPregnant,
          conditions,
          habits,
          cancerFamilyHistory,
          createdAt: Date.now()
        });
        const updatedPatients = await getAllPatients();
        setSavedPatients(updatedPatients);
      }
    } catch (err) {
      console.warn('Saving check record notice:', err);
    }

    setCompletedRecord(record);
    setCurrentStep(4);
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setCurrentScreen('wizard');
    setSelectedSymptoms([]);
    setOtherText('');
    setPhotos([]);
    setVoiceTranscript('');
    setCompletedRecord(null);
  };

  const handleSelectExistingPatient = (pat: PatientProfile) => {
    setPatientName(pat.name);
    setAge(pat.age);
    setGender(pat.gender);
    setIsPregnant(pat.isPregnant || false);
    setConditions(pat.conditions || []);
    setHabits(pat.habits || []);
    setCancerFamilyHistory(pat.cancerFamilyHistory || 'unknown');
    setShowPatientPicker(false);
  };

  // Font size classes
  const fontClass =
    settings.fontSize === 'large'
      ? 'text-lg'
      : settings.fontSize === 'xlarge'
      ? 'text-xl'
      : 'text-base';

  const contrastClass = settings.highContrast ? 'contrast-125 saturate-150' : '';

  return (
    <div
      className={`min-h-screen font-sans ${contrastClass} ${
        settings.darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#FAFCFF] text-slate-800'
      }`}
    >
      {/* Top Header */}
      <Header
        language={settings.language}
        onLanguageChange={handleLanguageChange}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenAsha={() => setCurrentScreen('asha')}
        onOpenPrivacy={() => setShowPrivacyModal(true)}
        onResetToHome={handleStartOver}
      />

      <main className={`max-w-3xl mx-auto px-4 py-4 sm:py-6 ${fontClass}`}>
        {/* VIEW: Records Screen */}
        {currentScreen === 'records' && (
          <RecordsScreen
            language={settings.language}
            onBack={() => setCurrentScreen('wizard')}
            onViewRecord={(rec) => {
              setCompletedRecord(rec);
              setCurrentStep(4);
              setCurrentScreen('wizard');
            }}
            onPrintRecord={(rec) => {
              setCompletedRecord(rec);
              setShowPrintSlip(true);
            }}
          />
        )}

        {/* VIEW: ASHA Mode Screen */}
        {currentScreen === 'asha' && (
          <AshaScreen
            language={settings.language}
            onBack={() => setCurrentScreen('wizard')}
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
          />
        )}

        {/* VIEW: Wizard Flow */}
        {currentScreen === 'wizard' && (
          <div>
            {/* Step 0: Welcome Screen */}
            {currentStep === 0 && (
              <div className="space-y-6 pt-2 pb-16">
                {/* Hero Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-500 via-sky-500 to-indigo-600 text-white shadow-xl relative overflow-hidden text-center sm:text-left">
                  <div className="relative z-10 max-w-lg">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs inline-block mb-2">
                      🇮🇳 Sovereign Rural Health AI
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                      <span>Dr S</span>
                      <span className="mx-1 px-2 py-0.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-black shadow-md inline-block">
                        AI
                      </span>
                      <span>hib</span>
                    </h1>
                    <p className="text-sm sm:text-base text-teal-50 font-medium mt-1">
                      {t.tagline}
                    </p>
                    <p className="text-xs text-white/80 mt-3 leading-relaxed">
                      {t.welcomeSubtitle}
                    </p>
                  </div>

                  {/* Decorative Medical SVG Artwork */}
                  <div className="absolute -right-6 -bottom-6 w-48 h-48 opacity-15 pointer-events-none">
                    <HeartPulse className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Big Language Choice Buttons */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 text-center sm:text-left">
                    {t.chooseLanguage}
                  </h3>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { code: 'en' as Language, title: 'English', script: 'English' },
                      { code: 'hi' as Language, title: 'हिन्दी', script: 'Hindi' },
                      { code: 'kn' as Language, title: 'ಕನ್ನಡ', script: 'Kannada' }
                    ].map((item) => (
                      <button
                        key={item.code}
                        onClick={() => handleLanguageChange(item.code)}
                        className={`p-3.5 sm:p-4 rounded-2xl border-2 flex flex-col items-center justify-center font-black text-sm sm:text-base transition active:scale-95 ${
                          settings.language === item.code
                            ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-800 dark:text-teal-200 shadow-md ring-2 ring-teal-400/30'
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-300'
                        }`}
                      >
                        <span>{item.title}</span>
                        <span className="text-[10px] font-normal text-slate-500 mt-0.5">{item.script}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Big Picture Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Card 1: Check Symptoms */}
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-left shadow-lg hover:shadow-xl transition-all group flex items-center justify-between"
                  >
                    <div>
                      <span className="text-3xl block mb-1">🤒</span>
                      <h3 className="text-lg sm:text-xl font-black">{t.checkSymptomsBtn}</h3>
                      <p className="text-xs text-teal-50 mt-1">{t.checkSymptomsDesc}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </button>

                  {/* Card 2: Cancer Early-Warning Check */}
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setActiveCategory('warning_signs');
                    }}
                    className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-700 text-white text-left shadow-lg hover:shadow-xl transition-all group flex items-center justify-between"
                  >
                    <div>
                      <span className="text-3xl block mb-1">💜</span>
                      <h3 className="text-lg sm:text-xl font-black">{t.cancerCheckBtn}</h3>
                      <p className="text-xs text-violet-100 mt-1">{t.cancerCheckDesc}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </button>
                </div>

                {/* Voice Quick Start Button */}
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-3xl border border-amber-200 dark:border-amber-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentStep(2);
                        handleToggleVoice();
                      }}
                      className="w-12 h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-md active:scale-95 transition shrink-0"
                    >
                      <Mic className="w-6 h-6" />
                    </button>
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-amber-950 dark:text-amber-100 block">
                        {t.speakBtn}
                      </span>
                      <span className="text-[11px] text-amber-800 dark:text-amber-300">
                        {t.voiceStartPrompt}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentStep(2);
                      handleToggleVoice();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-xs shrink-0"
                  >
                    Start Voice
                  </button>
                </div>

                {/* Secondary Cards: Past Records & ASHA Mode */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCurrentScreen('records')}
                    className="p-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left hover:border-teal-400 shadow-xs transition"
                  >
                    <FileText className="w-6 h-6 text-teal-600 mb-1" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">{t.pastRecordsBtn}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.pastRecordsDesc}</p>
                  </button>

                  <button
                    onClick={() => setCurrentScreen('asha')}
                    className="p-4 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left hover:border-indigo-400 shadow-xs transition"
                  >
                    <UserCheck className="w-6 h-6 text-indigo-600 mb-1" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100">{t.ashaModeBtn}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.ashaModeDesc}</p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 1 to 4: Progress Bar & Back / Start Over Controls */}
            {currentStep > 0 && currentStep < 4 && (
              <div className="mb-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <button
                    onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                    className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-300 hover:text-teal-600"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.back}</span>
                  </button>

                  <span className="font-bold text-slate-400">
                    Step {currentStep} of 3
                  </span>

                  <button
                    onClick={handleStartOver}
                    className="flex items-center gap-1 font-bold text-rose-500 hover:underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.startOver}</span>
                  </button>
                </div>

                {/* Colorful Progress Bar */}
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 via-sky-500 to-indigo-600 transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* STEP 1: About You */}
            {currentStep === 1 && (
              <div className="space-y-5 pb-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                      {t.aboutYouTitle}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.aboutYouSubtitle}
                    </p>
                  </div>
                  {savedPatients.length > 0 && (
                    <button
                      onClick={() => setShowPatientPicker(true)}
                      className="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 text-xs font-bold"
                    >
                      {t.loadPatientBtn}
                    </button>
                  )}
                </div>

                {/* Patient Name (Optional) */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Age with Big +/- Steppers */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase">
                      {t.ageLabel}
                    </span>
                    <span className="text-3xl font-black text-slate-800 dark:text-slate-100">
                      {age} <span className="text-sm font-normal text-slate-500">years</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAge((prev) => Math.max(0, prev - 1))}
                      className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-800 dark:text-slate-100 flex items-center justify-center font-black text-xl active:scale-95 shadow-xs"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setAge((prev) => Math.min(110, prev + 1))}
                      className="w-12 h-12 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center font-black text-xl active:scale-95 shadow-md"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Gender Large Picture Cards */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">
                    {t.genderLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'male' as const, label: t.male, emoji: '👨' },
                      { id: 'female' as const, label: t.female, emoji: '👩' },
                      { id: 'other' as const, label: t.other, emoji: '🧑' }
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGender(g.id)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 font-bold text-sm transition active:scale-95 ${
                          gender === g.id
                            ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-900 dark:text-teal-200 shadow-md ring-2 ring-teal-400/20'
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-3xl">{g.emoji}</span>
                        <span>{g.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pregnancy Status (if female 15-49) */}
                {gender === 'female' && age >= 15 && age <= 49 && (
                  <div className="p-4 rounded-3xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-200 dark:border-rose-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🤰</span>
                      <span className="text-xs sm:text-sm font-bold text-rose-950 dark:text-rose-200">
                        {t.pregnantLabel}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIsPregnant(true)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold ${
                          isPregnant ? 'bg-rose-600 text-white shadow-xs' : 'bg-white dark:bg-slate-800 text-slate-700'
                        }`}
                      >
                        {t.yes}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsPregnant(false)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold ${
                          !isPregnant ? 'bg-slate-700 text-white' : 'bg-white dark:bg-slate-800 text-slate-700'
                        }`}
                      >
                        {t.no}
                      </button>
                    </div>
                  </div>
                )}

                {/* Existing Conditions Icon Chips */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">
                    {t.existingConditionsLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'diabetes', label: t.diabetes, emoji: '🩸' },
                      { id: 'high_bp', label: t.highBp, emoji: '💓' },
                      { id: 'asthma', label: t.asthma, emoji: '🫁' },
                      { id: 'heart_disease', label: t.heartDisease, emoji: '❤️' },
                      { id: 'none', label: t.none, emoji: '✨' }
                    ].map((item) => {
                      const isSel = conditions.includes(item.id) || (item.id === 'none' && conditions.length === 0);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleToggleCondition(item.id)}
                          className={`px-3 py-2 rounded-2xl text-xs font-bold border flex items-center gap-1.5 transition ${
                            isSel
                              ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-800 dark:text-teal-200 shadow-2xs'
                              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <span>{item.emoji}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Habits Icon Chips */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase">
                    {t.habitsLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'tobacco', label: t.tobacco, emoji: '🍃' },
                      { id: 'smoking', label: t.smoking, emoji: '🚬' },
                      { id: 'alcohol', label: t.alcohol, emoji: '🍺' },
                      { id: 'none', label: t.none, emoji: '✨' }
                    ].map((item) => {
                      const isSel = habits.includes(item.id) || (item.id === 'none' && habits.length === 0);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleToggleHabit(item.id)}
                          className={`px-3 py-2 rounded-2xl text-xs font-bold border flex items-center gap-1.5 transition ${
                            isSel
                              ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-800 dark:text-amber-200 shadow-2xs'
                              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <span>{item.emoji}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Family History of Cancer */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      {t.cancerHistoryLabel}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {[
                      { id: 'yes' as const, label: t.yes },
                      { id: 'no' as const, label: t.no },
                      { id: 'unknown' as const, label: t.notSure }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCancerFamilyHistory(opt.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                          cancerFamilyHistory === opt.id
                            ? 'bg-violet-700 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Step Button */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-base shadow-lg flex items-center justify-center gap-2 active:scale-98 transition"
                >
                  <span>{t.next}: {t.symptomsTitle}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* STEP 2: Symptoms */}
            {currentStep === 2 && (
              <div className="space-y-4 pb-28">
                {/* Header & Voice Mic Button */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                      {t.symptomsTitle}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.symptomsSubtitle}
                    </p>
                  </div>

                  {/* Big Voice Button */}
                  {isSpeechRecognitionSupported() && (
                    <button
                      onClick={handleToggleVoice}
                      className={`flex items-center gap-2 px-3 py-2 rounded-2xl font-bold text-xs shadow-md transition ${
                        isListening
                          ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-300'
                          : 'bg-amber-500 text-white hover:bg-amber-600'
                      }`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      <span className="hidden sm:inline">{isListening ? t.listening : t.speakBtn}</span>
                    </button>
                  )}
                </div>

                {/* Voice feedback banner */}
                {isListening && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-300 dark:border-amber-700 text-xs text-amber-900 dark:text-amber-200 animate-pulse">
                    <p className="font-bold">{t.listening}</p>
                    <p className="italic mt-0.5">{voiceTranscript || t.speakTip}</p>
                  </div>
                )}

                {/* Sub-Nav Toggle: (a) Body Map vs (b) Category Tabs */}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => {
                      setSymptomNavTab('body');
                      setActiveCategory('all');
                    }}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                      symptomNavTab === 'body'
                        ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    📍 {t.tapBodyTab}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSymptomNavTab('categories');
                      setActiveBodyPart(null);
                    }}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                      symptomNavTab === 'categories'
                        ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    📑 {t.categoriesTab}
                  </button>
                </div>

                {/* Mode A: Interactive SVG Body Map */}
                {symptomNavTab === 'body' && (
                  <BodyMap
                    language={settings.language}
                    selectedPart={activeBodyPart}
                    onSelectPart={(part) => setActiveBodyPart(part || null)}
                  />
                )}

                {/* Mode B: Category Tabs */}
                {symptomNavTab === 'categories' && (
                  <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {[
                      { id: 'all', label: 'All', emoji: '🌟' },
                      { id: 'general', label: 'General', emoji: '🌡️' },
                      { id: 'head_face', label: 'Head & Face', emoji: '🤕' },
                      { id: 'chest_breathing', label: 'Chest & Lungs', emoji: '🫁' },
                      { id: 'stomach', label: 'Stomach', emoji: '🤢' },
                      { id: 'skin_injury', label: 'Skin & Wound', emoji: '🩹' },
                      { id: 'urinary_women', label: 'Urinary & Women', emoji: '🚽' },
                      { id: 'bones_joints', label: 'Bones & Joints', emoji: '🦴' },
                      { id: 'warning_signs', label: 'Warning Signs', emoji: '⚠️' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id as SymptomCategory | 'all')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition flex items-center gap-1.5 ${
                          activeCategory === cat.id
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat.emoji}</span>
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Camera / Photo Capture Section */}
                <CameraCapture
                  language={settings.language}
                  photos={photos}
                  onPhotosChange={setPhotos}
                />

                {/* Symptoms Cards Grid */}
                <SymptomCards
                  language={settings.language}
                  selectedSymptomIds={selectedSymptoms}
                  onToggleSymptom={handleToggleSymptom}
                  activeCategory={activeCategory}
                  activeBodyPart={activeBodyPart}
                  onOpenOtherModal={() => setShowOtherModal(true)}
                  otherText={otherText}
                  hasOtherPhotos={photos.length > 0}
                />

                {/* Sticky Bottom Bar for Selected Symptoms */}
                <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-xl">
                  <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-teal-700 dark:text-teal-400">
                          {selectedSymptoms.length} {t.selectedCount}
                        </span>
                        {selectedSymptoms.length > 0 && (
                          <button
                            type="button"
                            onClick={() => setSelectedSymptoms([])}
                            className="text-[10px] text-rose-500 font-semibold hover:underline"
                          >
                            {t.clearAll}
                          </button>
                        )}
                      </div>
                      <div className="flex gap-1.5 overflow-x-auto py-1 no-scrollbar">
                        {selectedSymptoms.map((symId) => (
                          <span
                            key={symId}
                            onClick={() => handleToggleSymptom(symId)}
                            className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-[10px] font-bold shrink-0 cursor-pointer flex items-center gap-1 hover:bg-rose-100 hover:text-rose-700"
                          >
                            <span>{symId}</span>
                            <X className="w-2.5 h-2.5" />
                          </span>
                        ))}
                        {selectedSymptoms.length === 0 && !otherText && (
                          <span className="text-[11px] text-slate-400">
                            Tap cards above to select symptoms
                          </span>
                        )}
                        {otherText && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold shrink-0">
                            + Other problem
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={selectedSymptoms.length === 0 && !otherText}
                      onClick={() => setCurrentStep(3)}
                      className={`px-5 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-md transition ${
                        selectedSymptoms.length > 0 || otherText
                          ? 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span>{t.next}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Follow-up Questions & Skin Questionnaire */}
            {currentStep === 3 && (
              <div className="space-y-5 pb-16">
                <div>
                  <h2 className="text-xl font-black text-slate-800 dark:text-slate-100">
                    {t.followUpTitle}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.followUpSubtitle}
                  </p>
                </div>

                {/* 1. Duration (How Long) */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase">
                    {t.howLongLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'today' as const, label: t.durationToday, emoji: '⚡' },
                      { id: '1-3_days' as const, label: t.duration13Days, emoji: '📅' },
                      { id: 'more_than_3_days' as const, label: t.duration3PlusDays, emoji: '⏳' },
                      { id: 'more_than_3_weeks' as const, label: t.duration3PlusWeeks, emoji: '🚨' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDuration(item.id)}
                        className={`p-3.5 rounded-2xl border-2 flex items-center gap-2 font-bold text-xs sm:text-sm text-left transition ${
                          duration === item.id
                            ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-900 dark:text-teal-200 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Severity (How Bad - Faces) */}
                <div className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase">
                    {t.howBadLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'mild' as const, label: t.severityMild, emoji: '🙂', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' },
                      { id: 'medium' as const, label: t.severityMedium, emoji: '😐', color: 'border-amber-500 bg-amber-50 text-amber-900' },
                      { id: 'severe' as const, label: t.severitySevere, emoji: '😫', color: 'border-rose-500 bg-rose-50 text-rose-900' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSeverityResponse(item.id)}
                        className={`p-3 sm:p-4 rounded-2xl border-2 flex flex-col items-center justify-center text-center font-bold transition ${
                          severityResponse === item.id
                            ? `${item.color} shadow-md ring-2 ring-teal-400/20`
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-3xl mb-1">{item.emoji}</span>
                        <span className="text-xs leading-tight">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Getting Worse? */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {t.gettingWorseLabel}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setGettingWorse(true)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                        gettingWorse ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-700 text-slate-700'
                      }`}
                    >
                      {t.yes}
                    </button>
                    <button
                      type="button"
                      onClick={() => setGettingWorse(false)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                        !gettingWorse ? 'bg-slate-700 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700'
                      }`}
                    >
                      {t.no}
                    </button>
                  </div>
                </div>

                {/* 4. Skin Questionnaire (if skin symptoms or photos attached) */}
                {(selectedSymptoms.some((s) => s.includes('skin') || s.includes('cut') || s.includes('burn')) || photos.length > 0) && (
                  <SkinQuestionnaire
                    language={settings.language}
                    answers={skinAnswers}
                    onChange={setSkinAnswers}
                  />
                )}

                {/* Submit & Get Report Button */}
                <button
                  type="button"
                  onClick={handleFinishTriage}
                  className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-base shadow-xl flex items-center justify-center gap-2 active:scale-98 transition"
                >
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>{settings.language === 'hi' ? 'स्वास्थ्य सलाह रिपोर्ट देखें' : settings.language === 'kn' ? 'ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ ವರದಿ ನೋಡಿ' : 'Get Health Guidance Report'}</span>
                </button>
              </div>
            )}

            {/* STEP 4: Results */}
            {currentStep === 4 && completedRecord && (
              <ResultScreen
                language={settings.language}
                record={completedRecord}
                ashaContact={ashaContact}
                onPrint={() => setShowPrintSlip(true)}
                onStartOver={handleStartOver}
                onOpenRecords={() => setCurrentScreen('records')}
              />
            )}
          </div>
        )}
      </main>

      {/* "Other" Problem Modal */}
      {showOtherModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span>✍️</span>
                <span>{t.otherModalTitle}</span>
              </h3>
              <button
                onClick={() => setShowOtherModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <textarea
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder={t.otherInputPlaceholder}
              rows={3}
              className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />

            {/* Attached photo inside other modal */}
            <CameraCapture
              language={settings.language}
              photos={photos}
              onPhotosChange={setPhotos}
              maxPhotos={3}
            />

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setOtherText('');
                  setShowOtherModal(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={() => setShowOtherModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Returning Patient Picker Modal */}
      {showPatientPicker && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-slate-800 dark:text-slate-100">
                {t.selectExistingPatient}
              </h3>
              <button onClick={() => setShowPatientPicker(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2">
              {savedPatients.map((pat, i) => (
                <div
                  key={i}
                  onClick={() => handleSelectExistingPatient(pat)}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-slate-700 cursor-pointer flex items-center justify-between transition"
                >
                  <div>
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-100">{pat.name}</span>
                    <span className="text-xs text-slate-400 ml-2">({pat.age}y, {pat.gender})</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Printable A4 Slip Modal */}
      {showPrintSlip && completedRecord && (
        <PrintSlip
          language={settings.language}
          record={completedRecord}
          ashaContact={ashaContact}
          onClose={() => setShowPrintSlip(false)}
        />
      )}

      {/* Privacy / How It Works Modal */}
      {showPrivacyModal && (
        <PrivacyModal
          language={settings.language}
          onClose={() => setShowPrivacyModal(false)}
        />
      )}

      {/* Persistent Gentle Disclaimer Footer */}
      <footer className="mt-8 border-t border-slate-200 dark:border-slate-800 py-6 px-4 text-center text-[11px] text-slate-500 dark:text-slate-400">
        <div className="max-w-xl mx-auto space-y-1">
          <p className="font-semibold">
            {t.appName} — Sovereign AI Health Guidance for Rural India.
          </p>
          <p className="text-[10px] opacity-80">
            {t.printDisclaimer}
          </p>
        </div>
      </footer>
    </div>
  );
}
