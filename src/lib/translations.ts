export type Language = 'fr' | 'en' | 'es';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    challenge: string;
    journal: string;
    trackers: string;
    routine: string;
    visionBoard: string;
    bonus: string;
    settings: string;
  };
  
  // Onboarding
  onboarding: {
    title: string;
    subtitle: string;
    description: string;
    startButton: string;
    thirtyDays: string;
    fullContent: string;
    advancedTracking: string;
    selfReflection: string;
    habits: string;
  };
  
  // Language Selection
  languageSelection: {
    title: string;
    subtitle: string;
    selectLanguage: string;
    continue: string;
  };
  
  // Dashboard
  dashboard: {
    welcome: string;
    progress: string;
    daysCompleted: string;
    currentDay: string;
    startDay: string;
    continueChallenge: string;
    quickActions: string;
    todayChallenge: string;
    viewDetails: string;
    yourProgress: string;
    week: string;
    continueYourChallenge: string;
  };
  
  // Challenge
  challenge: {
    title: string;
    day: string;
    completed: string;
    notCompleted: string;
    markComplete: string;
    markIncomplete: string;
    notes: string;
    addNotes: string;
    saveNotes: string;
    viewDay: string;
    congratulations: string;
    dayCompletedTitle: string;
    dayCompletedMessage: string;
    seeYouTomorrow: string;
    keepGoing: string;
    lockedDay: string;
    completeCurrentDay: string;
    week: string;
    yourDailyActions: string;
    beauty: string;
    mental: string;
    lifestyle: string;
    notesPlaceholder: string;
    completedButton: string;
    completeButton: string;
    progression: string;
    days: string;
  };
  
  // Journal
  journal: {
    title: string;
    newEntry: string;
    editEntry: string;
    deleteEntry: string;
    date: string;
    mood: string;
    feelings: string;
    glow: string;
    learned: string;
    freeContent: string;
    save: string;
    cancel: string;
    confirmDelete: string;
    expressYourself: string;
    howFeelToday: string;
    yourMood: string;
    whatBroughtGlow: string;
    momentsOfJoy: string;
    whatLearned: string;
    discoveriesLearnings: string;
    addToJournal: string;
    history: string;
    noEntries: string;
    glowOfDay: string;
    entries: string;
  };
  
  // Trackers
  trackers: {
    title: string;
    today: string;
    waterGlasses: string;
    sleepHours: string;
    mood: string;
    activityMinutes: string;
    skincare: string;
    habits: string;
    save: string;
    dailyHabits: string;
    meditation5min: string;
    journaling: string;
    gratitude: string;
    exercise: string;
    reading: string;
    noScrollBeforeSleep: string;
    skincareCompleted: string;
    todaysRoutine: string;
    hydration: string;
    glasses: string;
    sleep: string;
    sleepHoursPlaceholder: string;
    activity: string;
    activityPlaceholder: string;
  };
  
  // Routine
  routine: {
    title: string;
    customize: string;
    step: string;
    markComplete: string;
    completed: string;
    save: string;
    myGlowUpRoutine: string;
    dailyRoutine: string;
    customizeRoutine: string;
    completedToday: string;
    completedQuestion: string;
    markWhenDone: string;
    steps: string;
  };
  
  // Vision Board
  visionBoard: {
    title: string;
    addImage: string;
    addCaption: string;
    imageUrl: string;
    caption: string;
    add: string;
    delete: string;
    download: string;
    myImages: string;
    noImages: string;
    addImagesInspire: string;
    uploadInspire: string;
    optional: string;
    descriptionPlaceholder: string;
    addToVisionBoard: string;
    images: string;
  };
  
  // Bonus
  bonus: {
    title: string;
    affirmations: string;
    checklists: string;
    miniGuide: string;
    duration: string;
    completed: string;
    fiftyThingsAlone: string;
    completedItems: string;
    weeklyTracking: string;
    weeks: string;
    guides: string;
    globalProgress: string;
    affirmationOfDay: string;
    myImages: string;
    noImages: string;
    addImages: string;
    discoverSoftLife: string;
    arsenalPositive: string;
    practicalGuides: string;
    softLifeSteps: string;
    guide: string;
    steps: string;
  };
  
  // Settings
  settings: {
    title: string;
    theme: string;
    light: string;
    dark: string;
    notifications: string;
    enabled: string;
    disabled: string;
    language: string;
    selectLanguage: string;
    changeAppearance: string;
    export: string;
    downloadData: string;
    percentage: string;
  };
  
  // Common
  common: {
    close: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    yes: string;
    no: string;
    loading: string;
    error: string;
    success: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      challenge: 'Challenge',
      journal: 'Journal',
      trackers: 'Trackers',
      routine: 'Routine',
      visionBoard: 'Vision Board',
      bonus: 'Bonus',
      settings: 'Profil',
    },
    onboarding: {
      title: 'Glow Up Challenge',
      subtitle: '30 jours pour rayonner',
      description: 'Transforme ta vie en 30 jours avec des défis quotidiens, du journaling, et des outils de bien-être.',
      startButton: 'Commencer le Challenge',
      thirtyDays: '30 Jours',
      fullContent: 'Contenu complet',
      advancedTracking: 'Suivi avancé',
      selfReflection: 'Introspection',
      habits: 'Habitudes',
    },
    languageSelection: {
      title: 'Bienvenue',
      subtitle: 'Choisissez votre langue',
      selectLanguage: 'Sélectionner la langue',
      continue: 'Continuer',
    },
    dashboard: {
      welcome: 'Bienvenue',
      progress: 'Progression',
      daysCompleted: 'jours complétés',
      currentDay: 'Jour actuel',
      startDay: 'Commencer le jour',
      continueChallenge: 'Continuer le challenge',
      quickActions: 'Actions rapides',
      todayChallenge: 'Challenge du jour',
      viewDetails: 'Voir les détails',
      yourProgress: 'Ta Progression',
      week: 'Semaine',
      continueYourChallenge: 'Continue ton Glow Up Challenge',
    },
    challenge: {
      title: 'Challenge 30 Jours',
      day: 'Jour',
      completed: 'Complété',
      notCompleted: 'Non complété',
      markComplete: 'Marquer comme complété',
      markIncomplete: 'Marquer comme non complété',
      notes: 'Notes',
      addNotes: 'Ajouter des notes',
      saveNotes: 'Sauvegarder les notes',
      viewDay: 'Voir le jour',
      congratulations: 'Félicitations ! 🎉',
      dayCompletedTitle: 'Jour complété avec succès !',
      dayCompletedMessage: 'Tu as terminé le défi d\'aujourd\'hui. Continue comme ça !',
      seeYouTomorrow: 'On se retrouve demain pour le prochain défi ! 💪',
      keepGoing: 'Continue ton Glow Up !',
      lockedDay: 'Jour verrouillé',
      completeCurrentDay: 'Complète d\'abord le jour actuel pour débloquer celui-ci.',
      week: 'Semaine',
      yourDailyActions: 'Tes Actions du Jour',
      beauty: 'Beauté',
      mental: 'Mental',
      lifestyle: 'Lifestyle',
      notesPlaceholder: 'Note tes pensées, tes ressentis...',
      completedButton: 'Jour Complété ✓',
      completeButton: 'J\'ai complété ce jour',
      progression: 'Progression',
      days: 'jours',
    },
    journal: {
      title: 'Mon Journal',
      newEntry: 'Nouvelle entrée',
      editEntry: 'Modifier l\'entrée',
      deleteEntry: 'Supprimer l\'entrée',
      date: 'Date',
      mood: 'Humeur',
      feelings: 'Ressentis',
      glow: 'Glow du jour',
      learned: 'Apprentissages',
      freeContent: 'Journal libre',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      confirmDelete: 'Êtes-vous sûr de vouloir supprimer cette entrée ?',
      expressYourself: 'Exprime-toi librement',
      howFeelToday: 'Comment je me sens aujourd\'hui ?',
      yourMood: 'Ton humeur du moment...',
      whatBroughtGlow: 'Qu\'est-ce qui m\'a apporté du glow ?',
      momentsOfJoy: 'Les petits moments de joie...',
      whatLearned: 'Qu\'est-ce que j\'ai appris ?',
      discoveriesLearnings: 'Tes découvertes et apprentissages...',
      addToJournal: 'Ajouter au Journal',
      history: 'Historique',
      noEntries: 'Aucune entrée pour le moment',
      glowOfDay: 'Glow du jour',
      entries: 'entrées',
    },
    trackers: {
      title: 'Mes Trackers',
      today: 'Aujourd\'hui',
      waterGlasses: 'Verres d\'eau',
      sleepHours: 'Heures de sommeil',
      mood: 'Humeur',
      activityMinutes: 'Minutes d\'activité',
      skincare: 'Routine skincare',
      habits: 'Habitudes',
      save: 'Sauvegarder',
      dailyHabits: 'Habitudes quotidiennes',
      meditation5min: 'Méditation 5 min',
      journaling: 'Journaling',
      gratitude: 'Gratitude',
      exercise: 'Exercice',
      reading: 'Lecture',
      noScrollBeforeSleep: 'Pas de scroll avant de dormir',
      skincareCompleted: 'Skincare complété',
      todaysRoutine: 'Routine du jour',
      hydration: 'Hydratation',
      glasses: 'verres',
      sleep: 'Sommeil',
      sleepHoursPlaceholder: 'Nombre d\'heures',
      activity: 'Activité / Mouvement',
      activityPlaceholder: 'Minutes d\'activité',
    },
    routine: {
      title: 'Ma Routine',
      customize: 'Personnaliser',
      step: 'Étape',
      markComplete: 'Marquer comme complété',
      completed: 'Complété aujourd\'hui',
      save: 'Sauvegarder',
      myGlowUpRoutine: 'Ma Routine Glow Up',
      dailyRoutine: 'Routine Quotidienne - 5 Étapes',
      customizeRoutine: 'Personnalise ta routine Glow Up',
      completedToday: 'Routine Glow Up complétée aujourd\'hui ! ✨',
      completedQuestion: 'Routine complétée aujourd\'hui ?',
      markWhenDone: 'Marque quand tu as fini',
      steps: 'étapes',
    },
    visionBoard: {
      title: 'Vision Board',
      addImage: 'Ajouter une image',
      addCaption: 'Ajouter une légende',
      imageUrl: 'URL de l\'image',
      caption: 'Légende',
      add: 'Ajouter',
      delete: 'Supprimer',
      download: 'Télécharger',
      myImages: 'Mes Images',
      noImages: 'Aucune image pour le moment',
      addImagesInspire: 'Ajoute des images qui t\'inspirent',
      uploadInspire: 'Upload une image qui t\'inspire',
      optional: 'optionnel',
      descriptionPlaceholder: 'Une description ou affirmation...',
      addToVisionBoard: 'Ajouter au Vision Board',
      images: 'images',
    },
    bonus: {
      title: 'Mes Bonus',
      affirmations: 'Affirmations',
      checklists: 'Checklists',
      miniGuide: 'Mini-Guide',
      duration: 'Durée',
      completed: 'complétées',
      fiftyThingsAlone: '50 choses à faire seule',
      completedItems: 'complétées',
      weeklyTracking: 'Suivi Hebdomadaire',
      weeks: 'semaines',
      guides: 'Guides',
      globalProgress: 'Progression Globale',
      affirmationOfDay: 'Affirmation du jour',
      myImages: 'Mes Images',
      noImages: 'Aucune image pour le moment',
      addImages: 'Ajoute des images qui t\'inspirent',
      discoverSoftLife: 'Découvre comment créer une vie alignée et sereine',
      arsenalPositive: 'Ton arsenal de pensées positives',
      practicalGuides: 'Des guides pratiques pour t\'organiser',
      softLifeSteps: '5 étapes pour une vie douce et épanouie',
      guide: 'Guide',
      steps: 'étapes',
    },
    settings: {
      title: 'Profil',
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      notifications: 'Notifications',
      enabled: 'Activées',
      disabled: 'Désactivées',
      language: 'Langue',
      selectLanguage: 'Choisir la langue',
      changeAppearance: 'Change l\'apparence',
      export: 'Export',
      downloadData: 'Télécharge tes données',
      percentage: 'Pourcentage',
    },
    common: {
      close: 'Fermer',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      add: 'Ajouter',
      yes: 'Oui',
      no: 'Non',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
  },
  en: {
    nav: {
      home: 'Home',
      challenge: 'Challenge',
      journal: 'Journal',
      trackers: 'Trackers',
      routine: 'Routine',
      visionBoard: 'Vision Board',
      bonus: 'Bonus',
      settings: 'Profile',
    },
    onboarding: {
      title: 'Glow Up Challenge',
      subtitle: '30 days to shine',
      description: 'Transform your life in 30 days with daily challenges, journaling, and wellness tools.',
      startButton: 'Start the Challenge',
      thirtyDays: '30 Days',
      fullContent: 'Full content',
      advancedTracking: 'Advanced tracking',
      selfReflection: 'Self-reflection',
      habits: 'Habits',
    },
    languageSelection: {
      title: 'Welcome',
      subtitle: 'Choose your language',
      selectLanguage: 'Select language',
      continue: 'Continue',
    },
    dashboard: {
      welcome: 'Welcome',
      progress: 'Progress',
      daysCompleted: 'days completed',
      currentDay: 'Current day',
      startDay: 'Start day',
      continueChallenge: 'Continue challenge',
      quickActions: 'Quick actions',
      todayChallenge: 'Today\'s challenge',
      viewDetails: 'View details',
      yourProgress: 'Your Progress',
      week: 'Week',
      continueYourChallenge: 'Continue your Glow Up Challenge',
    },
    challenge: {
      title: '30-Day Challenge',
      day: 'Day',
      completed: 'Completed',
      notCompleted: 'Not completed',
      markComplete: 'Mark as complete',
      markIncomplete: 'Mark as incomplete',
      notes: 'Notes',
      addNotes: 'Add notes',
      saveNotes: 'Save notes',
      viewDay: 'View day',
      congratulations: 'Congratulations! 🎉',
      dayCompletedTitle: 'Day completed successfully!',
      dayCompletedMessage: 'You\'ve finished today\'s challenge. Keep it up!',
      seeYouTomorrow: 'See you tomorrow for the next challenge! 💪',
      keepGoing: 'Keep up your Glow Up!',
      lockedDay: 'Locked day',
      completeCurrentDay: 'Complete the current day first to unlock this one.',
      week: 'Week',
      yourDailyActions: 'Your Daily Actions',
      beauty: 'Beauty',
      mental: 'Mental',
      lifestyle: 'Lifestyle',
      notesPlaceholder: 'Write your thoughts, feelings...',
      completedButton: 'Day Completed ✓',
      completeButton: 'I completed this day',
      progression: 'Progress',
      days: 'days',
    },
    journal: {
      title: 'My Journal',
      newEntry: 'New entry',
      editEntry: 'Edit entry',
      deleteEntry: 'Delete entry',
      date: 'Date',
      mood: 'Mood',
      feelings: 'Feelings',
      glow: 'Today\'s glow',
      learned: 'Learnings',
      freeContent: 'Free journal',
      save: 'Save',
      cancel: 'Cancel',
      confirmDelete: 'Are you sure you want to delete this entry?',
      expressYourself: 'Express yourself freely',
      howFeelToday: 'How do I feel today?',
      yourMood: 'Your current mood...',
      whatBroughtGlow: 'What brought me glow?',
      momentsOfJoy: 'Little moments of joy...',
      whatLearned: 'What did I learn?',
      discoveriesLearnings: 'Your discoveries and learnings...',
      addToJournal: 'Add to Journal',
      history: 'History',
      noEntries: 'No entries yet',
      glowOfDay: 'Today\'s glow',
      entries: 'entries',
    },
    trackers: {
      title: 'My Trackers',
      today: 'Today',
      waterGlasses: 'Water glasses',
      sleepHours: 'Sleep hours',
      mood: 'Mood',
      activityMinutes: 'Activity minutes',
      skincare: 'Skincare routine',
      habits: 'Habits',
      save: 'Save',
      dailyHabits: 'Daily Habits',
      meditation5min: '5 min Meditation',
      journaling: 'Journaling',
      gratitude: 'Gratitude',
      exercise: 'Exercise',
      reading: 'Reading',
      noScrollBeforeSleep: 'No scrolling before bed',
      skincareCompleted: 'Skincare completed',
      todaysRoutine: 'Today\'s routine',
      hydration: 'Hydration',
      glasses: 'glasses',
      sleep: 'Sleep',
      sleepHoursPlaceholder: 'Number of hours',
      activity: 'Activity / Movement',
      activityPlaceholder: 'Activity minutes',
    },
    routine: {
      title: 'My Routine',
      customize: 'Customize',
      step: 'Step',
      markComplete: 'Mark as complete',
      completed: 'Completed today',
      save: 'Save',
      myGlowUpRoutine: 'My Glow Up Routine',
      dailyRoutine: 'Daily Routine - 5 Steps',
      customizeRoutine: 'Customize your Glow Up routine',
      completedToday: 'Glow Up routine completed today! ✨',
      completedQuestion: 'Routine completed today?',
      markWhenDone: 'Mark when you\'re done',
      steps: 'steps',
    },
    visionBoard: {
      title: 'Vision Board',
      addImage: 'Add image',
      addCaption: 'Add caption',
      imageUrl: 'Image URL',
      caption: 'Caption',
      add: 'Add',
      delete: 'Delete',
      download: 'Download',
      myImages: 'My Images',
      noImages: 'No images yet',
      addImagesInspire: 'Add images that inspire you',
      uploadInspire: 'Upload an image that inspires you',
      optional: 'optional',
      descriptionPlaceholder: 'A description or affirmation...',
      addToVisionBoard: 'Add to Vision Board',
      images: 'images',
    },
    bonus: {
      title: 'My Bonuses',
      affirmations: 'Affirmations',
      checklists: 'Checklists',
      miniGuide: 'Mini-Guide',
      duration: 'Duration',
      completed: 'completed',
      fiftyThingsAlone: '50 things to do alone',
      completedItems: 'completed',
      weeklyTracking: 'Weekly Tracking',
      weeks: 'weeks',
      guides: 'Guides',
      globalProgress: 'Overall Progress',
      affirmationOfDay: 'Today\'s affirmation',
      myImages: 'My Images',
      noImages: 'No images yet',
      addImages: 'Add images that inspire you',
      discoverSoftLife: 'Discover how to create an aligned and serene life',
      arsenalPositive: 'Your arsenal of positive thoughts',
      practicalGuides: 'Practical guides to organize yourself',
      softLifeSteps: '5 steps for a soft and fulfilling life',
      guide: 'Guide',
      steps: 'steps',
    },
    settings: {
      title: 'Profile',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      notifications: 'Notifications',
      enabled: 'Enabled',
      disabled: 'Disabled',
      language: 'Language',
      selectLanguage: 'Choose language',
      changeAppearance: 'Change appearance',
      export: 'Export',
      downloadData: 'Download your data',
      percentage: 'Percentage',
    },
    common: {
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      yes: 'Yes',
      no: 'No',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      challenge: 'Desafío',
      journal: 'Diario',
      trackers: 'Rastreadores',
      routine: 'Rutina',
      visionBoard: 'Tablero de Visión',
      bonus: 'Bonus',
      settings: 'Perfil',
    },
    onboarding: {
      title: 'Desafío Glow Up',
      subtitle: '30 días para brillar',
      description: 'Transforma tu vida en 30 días con desafíos diarios, diario personal y herramientas de bienestar.',
      startButton: 'Comenzar el Desafío',
      thirtyDays: '30 Días',
      fullContent: 'Contenido completo',
      advancedTracking: 'Seguimiento avanzado',
      selfReflection: 'Introspección',
      habits: 'Hábitos',
    },
    languageSelection: {
      title: 'Bienvenida',
      subtitle: 'Elige tu idioma',
      selectLanguage: 'Seleccionar idioma',
      continue: 'Continuar',
    },
    dashboard: {
      welcome: 'Bienvenida',
      progress: 'Progreso',
      daysCompleted: 'días completados',
      currentDay: 'Día actual',
      startDay: 'Comenzar día',
      continueChallenge: 'Continuar desafío',
      quickActions: 'Acciones rápidas',
      todayChallenge: 'Desafío de hoy',
      viewDetails: 'Ver detalles',
      yourProgress: 'Tu Progreso',
      week: 'Semana',
      continueYourChallenge: 'Continúa tu Desafío Glow Up',
    },
    challenge: {
      title: 'Desafío de 30 Días',
      day: 'Día',
      completed: 'Completado',
      notCompleted: 'No completado',
      markComplete: 'Marcar como completado',
      markIncomplete: 'Marcar como no completado',
      notes: 'Notas',
      addNotes: 'Agregar notas',
      saveNotes: 'Guardar notas',
      viewDay: 'Ver día',
      congratulations: '¡Felicitaciones! 🎉',
      dayCompletedTitle: '¡Día completado con éxito!',
      dayCompletedMessage: 'Has terminado el desafío de hoy. ¡Sigue así!',
      seeYouTomorrow: '¡Nos vemos mañana para el próximo desafío! 💪',
      keepGoing: '¡Continúa tu Glow Up!',
      lockedDay: 'Día bloqueado',
      completeCurrentDay: 'Completa primero el día actual para desbloquear este.',
      week: 'Semana',
      yourDailyActions: 'Tus Acciones del Día',
      beauty: 'Belleza',
      mental: 'Mental',
      lifestyle: 'Estilo de vida',
      notesPlaceholder: 'Escribe tus pensamientos, sentimientos...',
      completedButton: 'Día Completado ✓',
      completeButton: 'He completado este día',
      progression: 'Progreso',
      days: 'días',
    },
    journal: {
      title: 'Mi Diario',
      newEntry: 'Nueva entrada',
      editEntry: 'Editar entrada',
      deleteEntry: 'Eliminar entrada',
      date: 'Fecha',
      mood: 'Estado de ánimo',
      feelings: 'Sentimientos',
      glow: 'Brillo del día',
      learned: 'Aprendizajes',
      freeContent: 'Diario libre',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirmDelete: '¿Estás segura de que quieres eliminar esta entrada?',
      expressYourself: 'Exprésate libremente',
      howFeelToday: '¿Cómo me siento hoy?',
      yourMood: 'Tu estado de ánimo actual...',
      whatBroughtGlow: '¿Qué me trajo brillo?',
      momentsOfJoy: 'Pequeños momentos de alegría...',
      whatLearned: '¿Qué aprendí?',
      discoveriesLearnings: 'Tus descubrimientos y aprendizajes...',
      addToJournal: 'Agregar al Diario',
      history: 'Historial',
      noEntries: 'Sin entradas por ahora',
      glowOfDay: 'Brillo del día',
      entries: 'entradas',
    },
    trackers: {
      title: 'Mis Rastreadores',
      today: 'Hoy',
      waterGlasses: 'Vasos de agua',
      sleepHours: 'Horas de sueño',
      mood: 'Estado de ánimo',
      activityMinutes: 'Minutos de actividad',
      skincare: 'Rutina de cuidado de la piel',
      habits: 'Hábitos',
      save: 'Guardar',
      dailyHabits: 'Hábitos diarios',
      meditation5min: 'Meditación 5 min',
      journaling: 'Diario personal',
      gratitude: 'Gratitud',
      exercise: 'Ejercicio',
      reading: 'Lectura',
      noScrollBeforeSleep: 'No desplazarse antes de dormir',
      skincareCompleted: 'Cuidado de la piel completado',
      todaysRoutine: 'Rutina del día',
      hydration: 'Hidratación',
      glasses: 'vasos',
      sleep: 'Sueño',
      sleepHoursPlaceholder: 'Número de horas',
      activity: 'Actividad / Movimiento',
      activityPlaceholder: 'Minutos de actividad',
    },
    routine: {
      title: 'Mi Rutina',
      customize: 'Personalizar',
      step: 'Paso',
      markComplete: 'Marcar como completado',
      completed: 'Completado hoy',
      save: 'Guardar',
      myGlowUpRoutine: 'Mi Rutina Glow Up',
      dailyRoutine: 'Rutina Diaria - 5 Pasos',
      customizeRoutine: 'Personaliza tu rutina Glow Up',
      completedToday: '¡Rutina Glow Up completada hoy! ✨',
      completedQuestion: '¿Rutina completada hoy?',
      markWhenDone: 'Marca cuando termines',
      steps: 'pasos',
    },
    visionBoard: {
      title: 'Tablero de Visión',
      addImage: 'Agregar imagen',
      addCaption: 'Agregar leyenda',
      imageUrl: 'URL de la imagen',
      caption: 'Leyenda',
      add: 'Agregar',
      delete: 'Eliminar',
      download: 'Descargar',
      myImages: 'Mis Imágenes',
      noImages: 'Sin imágenes por ahora',
      addImagesInspire: 'Agrega imágenes que te inspiren',
      uploadInspire: 'Sube una imagen que te inspire',
      optional: 'opcional',
      descriptionPlaceholder: 'Una descripción o afirmación...',
      addToVisionBoard: 'Agregar al Tablero de Visión',
      images: 'imágenes',
    },
    bonus: {
      title: 'Mis Bonus',
      affirmations: 'Afirmaciones',
      checklists: 'Listas de verificación',
      miniGuide: 'Mini-Guía',
      duration: 'Duración',
      completed: 'completadas',
      fiftyThingsAlone: '50 cosas para hacer sola',
      completedItems: 'completadas',
      weeklyTracking: 'Seguimiento Semanal',
      weeks: 'semanas',
      guides: 'Guías',
      globalProgress: 'Progreso Global',
      affirmationOfDay: 'Afirmación del día',
      myImages: 'Mis Imágenes',
      noImages: 'Sin imágenes por ahora',
      addImages: 'Agrega imágenes que te inspiren',
      discoverSoftLife: 'Descubre cómo crear una vida alineada y serena',
      arsenalPositive: 'Tu arsenal de pensamientos positivos',
      practicalGuides: 'Guías prácticas para organizarte',
      softLifeSteps: '5 pasos para una vida suave y plena',
      guide: 'Guía',
      steps: 'pasos',
    },
    settings: {
      title: 'Perfil',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      notifications: 'Notificaciones',
      enabled: 'Activadas',
      disabled: 'Desactivadas',
      language: 'Idioma',
      selectLanguage: 'Elegir idioma',
      changeAppearance: 'Cambiar apariencia',
      export: 'Exportar',
      downloadData: 'Descarga tus datos',
      percentage: 'Porcentaje',
    },
    common: {
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      add: 'Agregar',
      yes: 'Sí',
      no: 'No',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
    },
  },
};


