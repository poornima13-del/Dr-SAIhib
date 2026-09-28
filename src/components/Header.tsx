import React, { useState, useEffect } from 'react';
import { Language, AppSettings } from '../types';
import { translations } from '../data/translations';
import { Wifi, WifiOff, ShieldCheck, HeartPulse, UserCheck, Download } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onOpenAsha: () => void;
  onOpenPrivacy: () => void;
  onResetToHome: () => void;
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  settings,
  onUpdateSettings,
  onOpenAsha,
  onOpenPrivacy,
  onResetToHome
}) => {
  const t = translations[language] || translations.en;
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isStandalone);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
    }
  };

  const cycleFontSize = () => {
    if (settings.fontSize === 'normal') onUpdateSettings({ fontSize: 'large' });
    else if (settings.fontSize === 'large') onUpdateSettings({ fontSize: 'xlarge' });
    else onUpdateSettings({ fontSize: 'normal' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-4xl mx-auto px-3 py-2.5 sm:px-4 flex items-center justify-between gap-2">
        {/* Brand Logo with Highlighted AI */}
        <button
          onClick={onResetToHome}
          className="flex items-center gap-2 text-left group focus:outline-hidden focus:ring-2 focus:ring-teal-500 rounded-xl p-1"
          aria-label="Dr SAIhib Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            <HeartPulse className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center">
              <span>Dr S</span>
              <span className="mx-0.5 px-1.5 py-0.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 text-slate-950 font-black shadow-xs text-[1.1em] tracking-normal border border-amber-300/60 inline-block">
                AI
              </span>
              <span>hib</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-none hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </button>

        {/* Right Header Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sovereign Offline Badge */}
          <div
            title={t.offlineDesc}
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                : 'bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-700 animate-pulse'
            }`}
          >
            {isOnline ? <Wifi className="w-3.5 h-3.5 text-emerald-600" /> : <WifiOff className="w-3.5 h-3.5 text-amber-600" />}
            <span>{isOnline ? t.online : t.offline}</span>
            <span className="text-[10px] opacity-75 font-normal">({t.sovereignBadge})</span>
          </div>

          {/* Text Size Toggle */}
          <button
            onClick={cycleFontSize}
            title={t.fontSizeBtn}
            className="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition"
          >
            {settings.fontSize === 'normal' ? 'A' : settings.fontSize === 'large' ? 'A+' : 'A++'}
          </button>

          {/* High Contrast / Dark Mode Toggle */}
          <button
            onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
            title={t.contrastBtn}
            className={`p-1.5 rounded-lg text-xs font-semibold border transition ${
              settings.highContrast
                ? 'bg-black text-yellow-300 border-yellow-300'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
            }`}
          >
            🌓
          </button>

          {/* Language Selector Dropdown / Buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-300 dark:border-slate-700">
            {(['en', 'hi', 'kn'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-1 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  language === lang
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिन्दी' : 'ಕನ್ನಡ'}
              </button>
            ))}
          </div>

          {/* ASHA Mode Quick Access */}
          <button
            onClick={onOpenAsha}
            className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1 text-xs font-semibold"
            title={t.ashaModeBtn}
          >
            <UserCheck className="w-4 h-4" />
            <span className="hidden sm:inline">ASHA</span>
          </button>

          {/* In-App PWA Install Prompt */}
          {!isInstalled && deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs transition"
              title="Install App Offline"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Install</span>
            </button>
          )}

          {/* Privacy Info Modal Button */}
          <button
            onClick={onOpenPrivacy}
            title={t.privacyNoticeBtn}
            className="p-1.5 rounded-lg text-slate-500 hover:text-teal-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
