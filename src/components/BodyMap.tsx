import React, { useState } from 'react';
import { Language } from '../types';
import { BODY_PARTS_MAPPING } from '../data/knowledgeBase';
import { translations } from '../data/translations';

interface BodyMapProps {
  language: Language;
  selectedPart: string | null;
  onSelectPart: (part: string) => void;
}

export const BodyMap: React.FC<BodyMapProps> = ({ language, selectedPart, onSelectPart }) => {
  const [view, setView] = useState<'front' | 'back'>('front');
  const t = translations[language] || translations.en;

  const partLabels = (key: string) => {
    const item = BODY_PARTS_MAPPING[key];
    if (!item) return key;
    return item.label[language] || item.label.en;
  };

  const getPartClass = (partKey: string) => {
    const isSelected = selectedPart === partKey;
    return `cursor-pointer transition-all duration-200 ${
      isSelected
        ? 'fill-teal-500 stroke-teal-700 stroke-2 filter drop-shadow-md'
        : 'fill-slate-200 dark:fill-slate-700 hover:fill-teal-200 dark:hover:fill-teal-800/60 stroke-slate-400 dark:stroke-slate-500 stroke-1'
    }`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center">
      {/* Front / Back Toggle Buttons */}
      <div className="flex items-center gap-2 mb-3 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl">
        <button
          type="button"
          onClick={() => setView('front')}
          className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${
            view === 'front'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          👤 {t.frontBody}
        </button>
        <button
          type="button"
          onClick={() => setView('back')}
          className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${
            view === 'back'
              ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          🔄 {t.backBody}
        </button>
      </div>

      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 text-center">
        {language === 'hi' ? 'दर्द वाले अंग को छुएं' : language === 'kn' ? 'ನೋವಿರುವ ಜಾಗವನ್ನು ಮುಟ್ಟಿ' : 'Tap on the body part that hurts'}
      </p>

      {/* SVG Interactive Body */}
      <div className="relative w-64 h-80 sm:w-72 sm:h-96">
        <svg viewBox="0 0 240 320" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          {view === 'front' ? (
            <g>
              {/* Head & Face */}
              <circle
                cx="120"
                cy="32"
                r="24"
                className={getPartClass('head')}
                onClick={() => onSelectPart('head')}
                role="button"
                aria-label={partLabels('head')}
              />
              <text x="120" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" className="fill-slate-600 dark:fill-slate-300 pointer-events-none">
                🧠
              </text>

              {/* Throat / Neck */}
              <rect
                x="110"
                y="57"
                width="20"
                height="15"
                rx="4"
                className={getPartClass('throat')}
                onClick={() => onSelectPart('throat')}
                role="button"
                aria-label={partLabels('throat')}
              />

              {/* Chest */}
              <path
                d="M85 75 C85 75, 120 78, 155 75 L150 115 C135 120, 105 120, 90 115 Z"
                className={getPartClass('chest')}
                onClick={() => onSelectPart('chest')}
                role="button"
                aria-label={partLabels('chest')}
              />
              <text x="120" y="98" textAnchor="middle" fontSize="10" fontWeight="bold" className="fill-slate-600 dark:fill-slate-300 pointer-events-none">
                🫁
              </text>

              {/* Breast / Underarm targets */}
              <circle
                cx="98"
                cy="104"
                r="10"
                className={getPartClass('breast')}
                onClick={() => onSelectPart('breast')}
                role="button"
                aria-label={partLabels('breast')}
              />
              <circle
                cx="142"
                cy="104"
                r="10"
                className={getPartClass('breast')}
                onClick={() => onSelectPart('breast')}
                role="button"
                aria-label={partLabels('breast')}
              />

              {/* Stomach / Belly */}
              <path
                d="M90 116 C105 121, 135 121, 150 116 L146 160 C132 165, 108 165, 94 160 Z"
                className={getPartClass('stomach')}
                onClick={() => onSelectPart('stomach')}
                role="button"
                aria-label={partLabels('stomach')}
              />
              <text x="120" y="142" textAnchor="middle" fontSize="11" fontWeight="bold" className="fill-slate-600 dark:fill-slate-300 pointer-events-none">
                🤢
              </text>

              {/* Pelvis / Urinary Area */}
              <path
                d="M94 161 C108 166, 132 166, 146 161 L138 185 C128 190, 112 190, 102 185 Z"
                className={getPartClass('urinary')}
                onClick={() => onSelectPart('urinary')}
                role="button"
                aria-label={partLabels('urinary')}
              />
              <text x="120" y="177" textAnchor="middle" fontSize="9" fontWeight="bold" className="fill-slate-600 dark:fill-slate-300 pointer-events-none">
                🚽
              </text>

              {/* Left Arm (viewer right) */}
              <path
                d="M156 78 L185 145 C188 152, 178 156, 174 150 L149 95 Z"
                className={getPartClass('arms')}
                onClick={() => onSelectPart('arms')}
                role="button"
                aria-label={partLabels('arms')}
              />

              {/* Right Arm (viewer left) */}
              <path
                d="M84 78 L55 145 C52 152, 62 156, 66 150 L91 95 Z"
                className={getPartClass('arms')}
                onClick={() => onSelectPart('arms')}
                role="button"
                aria-label={partLabels('arms')}
              />

              {/* Left Leg */}
              <path
                d="M123 186 L134 290 C135 296, 118 296, 116 290 L112 187 Z"
                className={getPartClass('legs')}
                onClick={() => onSelectPart('legs')}
                role="button"
                aria-label={partLabels('legs')}
              />

              {/* Right Leg */}
              <path
                d="M117 186 L106 290 C105 296, 122 296, 124 290 L128 187 Z"
                className={getPartClass('legs')}
                onClick={() => onSelectPart('legs')}
                role="button"
                aria-label={partLabels('legs')}
              />
            </g>
          ) : (
            <g>
              {/* Back of Head */}
              <circle
                cx="120"
                cy="32"
                r="24"
                className={getPartClass('head')}
                onClick={() => onSelectPart('head')}
                role="button"
                aria-label={partLabels('head')}
              />

              {/* Back / Spine */}
              <path
                d="M88 74 C110 77, 130 77, 152 74 L146 162 C130 166, 110 166, 94 162 Z"
                className={getPartClass('back')}
                onClick={() => onSelectPart('back')}
                role="button"
                aria-label={partLabels('back')}
              />
              <line x1="120" y1="78" x2="120" y2="158" stroke="#94a3b8" strokeWidth="3" strokeDasharray="4 4" pointerEvents="none" />
              <text x="120" y="122" textAnchor="middle" fontSize="11" fontWeight="bold" className="fill-slate-600 dark:fill-slate-300 pointer-events-none">
                🦴
              </text>

              {/* Buttocks / Lower spine */}
              <path
                d="M94 163 C110 167, 130 167, 146 163 L138 188 C128 193, 112 193, 102 188 Z"
                className={getPartClass('back')}
                onClick={() => onSelectPart('back')}
                role="button"
                aria-label={partLabels('back')}
              />

              {/* Arms (back) */}
              <path
                d="M154 78 L185 145 C188 152, 178 156, 174 150 L147 95 Z"
                className={getPartClass('arms')}
                onClick={() => onSelectPart('arms')}
                role="button"
                aria-label={partLabels('arms')}
              />
              <path
                d="M86 78 L55 145 C52 152, 62 156, 66 150 L93 95 Z"
                className={getPartClass('arms')}
                onClick={() => onSelectPart('arms')}
                role="button"
                aria-label={partLabels('arms')}
              />

              {/* Legs (back) */}
              <path
                d="M123 188 L134 290 C135 296, 118 296, 116 290 L112 189 Z"
                className={getPartClass('legs')}
                onClick={() => onSelectPart('legs')}
                role="button"
                aria-label={partLabels('legs')}
              />
              <path
                d="M117 188 L106 290 C105 296, 122 296, 124 290 L128 189 Z"
                className={getPartClass('legs')}
                onClick={() => onSelectPart('legs')}
                role="button"
                aria-label={partLabels('legs')}
              />
            </g>
          )}
        </svg>
      </div>

      {/* Selected Body Part Tag */}
      {selectedPart && (
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">Selected area:</span>
          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200 text-xs font-bold rounded-full">
            {partLabels(selectedPart)}
          </span>
          <button
            onClick={() => onSelectPart('')}
            className="text-xs text-rose-500 hover:underline font-semibold"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
