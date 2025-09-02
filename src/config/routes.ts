// Configuración de rutas de la aplicación
export const ROUTES = {
  // Rutas públicas
  PUBLIC: {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password'
  },
  
  // Rutas protegidas (requieren autenticación)
  PROTECTED: {
    MATEMATICAS: '/matematicas',
    ESPANOL: '/espanol',
    CIENCIAS_SOCIALES: '/ciencias-sociales',
    COMPUTACION: '/computacion',
    TUTORIALES: '/matematicas/tutoriales',
    VIDEOS_TEMA: '/matematicas/tutoriales/:temaId',
    EXAMENES: '/matematicas/examenes',
    QUIZ: '/matematicas/examenes/:temaId/quiz',
    RESULTADO: '/resultado'
  },
  
  // Rutas de admin (requieren rol de administrador)
  ADMIN: {
    // Futuras rutas de administración
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    CONTENT: '/admin/content'
  }
} as const;

// Tipos para las rutas
export type RoutePath = typeof ROUTES.PUBLIC[keyof typeof ROUTES.PUBLIC] | 
                       typeof ROUTES.PROTECTED[keyof typeof ROUTES.PROTECTED] |
                       typeof ROUTES.ADMIN[keyof typeof ROUTES.ADMIN];

// Configuración de protección de rutas
export const ROUTE_PROTECTION: Record<string, { requireAuth: boolean; adminOnly: boolean }> = {
  [ROUTES.PROTECTED.MATEMATICAS]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.ESPANOL]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.CIENCIAS_SOCIALES]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.COMPUTACION]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.TUTORIALES]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.VIDEOS_TEMA]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.EXAMENES]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.QUIZ]: { requireAuth: true, adminOnly: false },
  [ROUTES.PROTECTED.RESULTADO]: { requireAuth: true, adminOnly: false },
  
  // Rutas de admin
  [ROUTES.ADMIN.DASHBOARD]: { requireAuth: true, adminOnly: true },
  [ROUTES.ADMIN.USERS]: { requireAuth: true, adminOnly: true },
  [ROUTES.ADMIN.CONTENT]: { requireAuth: true, adminOnly: true }
};

// Función para verificar si una ruta requiere autenticación
export const isRouteProtected = (path: string): boolean => {
  return ROUTE_PROTECTION[path]?.requireAuth || false;
};

// Función para verificar si una ruta requiere rol de admin
export const isRouteAdminOnly = (path: string): boolean => {
  return ROUTE_PROTECTION[path]?.adminOnly || false;
};

// Función para obtener la configuración de protección de una ruta
export const getRouteProtection = (path: string): { requireAuth: boolean; adminOnly: boolean } => {
  return ROUTE_PROTECTION[path] || { requireAuth: false, adminOnly: false };
};
