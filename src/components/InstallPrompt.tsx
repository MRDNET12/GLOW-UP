'use client';

import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const { language } = useStore();

  const translations = {
    fr: {
      title: 'Installer UPGLOW',
      description: 'Installez l\'application pour un accès rapide et hors ligne',
      install: 'Installer',
      later: 'Plus tard'
    },
    en: {
      title: 'Install UPGLOW',
      description: 'Install the app for quick access and offline use',
      install: 'Install',
      later: 'Later'
    },
    es: {
      title: 'Instalar UPGLOW',
      description: 'Instala la aplicación para acceso rápido y sin conexión',
      install: 'Instalar',
      later: 'Más tarde'
    }
  };

  const t = translations[language] || translations.fr;

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Check if user has dismissed before
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
    
    // Show again after 7 days
    setTimeout(() => {
      localStorage.removeItem('pwa-install-dismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-lg mx-auto flex items-center gap-4">
        <Download className="w-8 h-8 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-bold text-sm">{t.title}</h3>
          <p className="text-xs opacity-90">{t.description}</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleInstall}
            size="sm"
            className="bg-white text-rose-500 hover:bg-rose-50 font-semibold"
          >
            {t.install}
          </Button>
          <Button
            onClick={handleDismiss}
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

