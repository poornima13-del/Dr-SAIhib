import React from 'react';
import { Symptom, Language, SymptomCategory } from '../types';
import { SYMPTOMS_LIST, BODY_PARTS_MAPPING } from '../data/knowledgeBase';
import { speakText } from '../utils/voice';
import { Volume2, CheckCircle2, PlusCircle, AlertTriangle } from 'lucide-react';

interface SymptomCardsProps {
  language: Language;
  selectedSymptomIds: string[];
  onToggleSymptom: (id: string) => void;
  activeCategory: SymptomCategory | 'all';
  activeBodyPart: string | null;
  onOpenOtherModal: () => void;
  otherText?: string;
  hasOtherPhotos?: boolean;
}

export const SymptomCards: React.FC<SymptomCardsProps> = ({
  language,
  selectedSymptomIds,
  onToggleSymptom,
  activeCategory,
  activeBodyPart,
  onOpenOtherModal,
  otherText,
  hasOtherPhotos
}) => {
  // Filter symptoms based on active category or body part
  const filteredSymptoms = SYMPTOMS_LIST.filter((symptom) => {
    if (activeBodyPart) {
      const partData = BODY_PARTS_MAPPING[activeBodyPart];
      if (partData && !partData.symptomIds.includes(symptom.id)) {
        return false;
      }
    }
    if (activeCategory !== 'all' && symptom.category !== activeCategory) {
      return false;
    }
    return true;
  });

  const getSymptomLabel = (symptom: Symptom) => {
    const list = symptom.keywords[language] || symptom.keywords.en;
    return list[0] || symptom.id;
  };

  const handleCardClick = (symptom: Symptom) => {
    onToggleSymptom(symptom.id);
    const label = getSymptomLabel(symptom);
    speakText(label, language);
  };

  const handleAudioOnly = (e: React.MouseEvent, symptom: Symptom) => {
    e.stopPropagation();
    const label = getSymptomLabel(symptom);
    speakText(label, language);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {filteredSymptoms.map((symptom) => {
        const isSelected = selectedSymptomIds.includes(symptom.id);
        const label = getSymptomLabel(symptom);

        return (
          <div
            key={symptom.id}
            onClick={() => handleCardClick(symptom)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(symptom);
              }
            }}
            aria-pressed={isSelected}
            className={`relative min-h-[96px] sm:min-h-[104px] p-3 sm:p-4 rounded-2xl border-2 flex flex-col justify-between cursor-pointer select-none transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 ${
              isSelected
                ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 shadow-md shadow-teal-500/10'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 shadow-xs'
            }`}
          >
            {/* Top row: Emoji & Speaker & Check */}
            <div className="flex items-center justify-between gap-1">
              <span className="text-3xl sm:text-4xl filter drop-shadow-xs">{symptom.emoji}</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={(e) => handleAudioOnly(e, symptom)}
                  title="Hear name"
                  aria-label={`Hear ${label}`}
                  className="p-1 rounded-full text-slate-400 hover:text-teal-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                {isSelected ? (
                  <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 fill-teal-100 dark:fill-teal-950" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                )}
              </div>
            </div>

            {/* Label */}
            <div className="mt-2">
              <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-tight">
                {label}
              </span>
              {symptom.isCancerWarning && (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-violet-600 dark:text-violet-400 mt-1">
                  <AlertTriangle className="w-3 h-3" />
                  {language === 'hi' ? 'विशेष जांच' : language === 'kn' ? 'ಮುನ್ನೆಚ್ಚರಿಕೆ' : 'Warning sign'}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* "Other" Card in Every Category View */}
      <div
        onClick={onOpenOtherModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenOtherModal();
          }
        }}
        className={`min-h-[96px] sm:min-h-[104px] p-3 sm:p-4 rounded-2xl border-2 border-dashed flex flex-col justify-between cursor-pointer select-none transition-all duration-200 hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 ${
          otherText || hasOtherPhotos
            ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-500 shadow-sm'
            : 'bg-slate-50/50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-600'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-3xl sm:text-4xl">✍️</span>
          {otherText || hasOtherPhotos ? (
            <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          ) : (
            <PlusCircle className="w-5 h-5 text-slate-400" />
          )}
        </div>
        <div className="mt-2">
          <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 block">
            {language === 'hi' ? '+ अन्य समस्या' : language === 'kn' ? '+ ಬೇರೆ ತೊಂದರೆ' : '+ Other Problem'}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {otherText ? (
              <span className="text-amber-700 dark:text-amber-300 font-semibold truncate block">
                {otherText}
              </span>
            ) : (
              language === 'hi' ? 'बोलें, लिखें या फोटो लें' : language === 'kn' ? 'ಮಾತನಾಡಿ, ಬರೆಯಿರಿ' : 'Speak, type, or photo'
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
