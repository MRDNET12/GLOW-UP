'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

/**
 * Hook personnalisé pour gérer l'hydratation du store Zustand
 * Évite les problèmes d'hydratation entre serveur et client
 */
export function useHydratedStore() {
  const [hydrated, setHydrated] = useState(false);
  const store = useStore();

  useEffect(() => {
    // Marquer comme hydraté une fois côté client
    setHydrated(true);
  }, []);

  return {
    ...store,
    hydrated
  };
}

