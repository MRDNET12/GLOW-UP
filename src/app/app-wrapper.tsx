'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import AppLoader from '@/components/AppLoader';

// Import dynamique du composant principal sans SSR
const GlowUpChallengeApp = dynamic(
  () => import('./main-app'),
  { 
    ssr: false,
    loading: () => <AppLoader />
  }
);

export default function AppWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // S'assurer qu'on est bien côté client
    setIsClient(true);

    // Nettoyer les erreurs d'hydratation potentielles
    if (typeof window !== 'undefined') {
      // Supprimer les attributs de Next.js qui peuvent causer des problèmes
      const removeNextDataAttributes = () => {
        const elements = document.querySelectorAll('[data-reactroot]');
        elements.forEach(el => {
          el.removeAttribute('data-reactroot');
        });
      };

      // Exécuter après le premier rendu
      setTimeout(removeNextDataAttributes, 0);
    }
  }, []);

  // Afficher le loader pendant l'hydratation
  if (!isClient) {
    return <AppLoader />;
  }

  return <GlowUpChallengeApp />;
}

