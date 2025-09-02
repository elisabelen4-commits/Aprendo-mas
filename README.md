# Aprendo+ - Plataforma de Aprendizaje Interactivo

Una plataforma educativa moderna construida con **React + TypeScript**, Redux Toolkit y Ant Design que ofrece módulos de aprendizaje interactivos con sistema de autenticación completo.

## 🚀 Características

### Sistema de Autenticación
- **Login/Registro**: Sistema completo de autenticación de usuarios
- **Credenciales por defecto**: `admin/123` para acceso inmediato
- **Persistencia**: Sesiones guardadas en localStorage
- **Rutas protegidas**: Acceso controlado a módulos educativos
- **Recuperación de contraseña**: Sistema de forgot password

### Módulos Educativos
- **Matemáticas**: Módulo activo con tutoriales y exámenes
- **Español**: Próximamente
- **Ciencias Sociales**: Próximamente
- **Tecnología**: Próximamente

### Tecnologías
- **React 19 + TypeScript** + Vite
- **Redux Toolkit** para gestión de estado
- **Redux Persist** para persistencia
- **Ant Design** para UI/UX
- **React Router** para navegación

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd Aprendo-mas
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

5. **Verificar tipos TypeScript**
```bash
npm run type-check
```

## 🔐 Sistema de Autenticación

### Credenciales por Defecto
- **Usuario**: `admin`
- **Contraseña**: `123`
- **Rol**: Administrador

### Flujo de Autenticación

1. **Acceso público**: Solo la página de inicio está disponible sin autenticación
2. **Login**: Usuarios existentes pueden iniciar sesión
3. **Registro**: Nuevos usuarios pueden crear cuentas
4. **Acceso protegido**: Módulos educativos requieren autenticación
5. **Persistencia**: Las sesiones se mantienen entre recargas del navegador

### Rutas de Autenticación
- `/login` - Iniciar sesión
- `/register` - Crear cuenta
- `/forgot-password` - Recuperar contraseña

### Rutas Protegidas
- `/matematicas` - Módulo de matemáticas
- `/matematicas/tutoriales` - Tutoriales de matemáticas
- `/matematicas/examenes` - Exámenes de matemáticas
- `/resultado` - Resultados de exámenes

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Header con navegación y usuario
│   ├── Login.tsx       # Formulario de login
│   ├── Register.tsx    # Formulario de registro
│   ├── ForgotPassword.tsx # Recuperación de contraseña
│   ├── ProtectedRoute.tsx # Componente de ruta protegida
│   └── ModalProximamente.tsx # Modal para módulos próximamente
├── store/              # Estado global con Redux
│   ├── store.ts        # Configuración del store
│   └── authSlice.ts    # Slice de autenticación
├── hooks/              # Hooks personalizados
│   ├── useAppDispatch.ts
│   └── useAppSelector.ts
├── config/             # Configuración de la aplicación
│   └── routes.ts       # Configuración de rutas
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página principal
│   ├── ModuloMatematicas.tsx # Módulo de matemáticas
│   ├── Tutoriales.tsx  # Lista de tutoriales
│   ├── VideosTema.tsx  # Videos del tema
│   ├── Examenes.tsx    # Configuración de exámenes
│   ├── Quiz.tsx        # Examen interactivo
│   └── Resultado.tsx   # Resultados del examen
├── data/               # Datos estáticos
│   └── matematicasData.ts # Datos de matemáticas
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── vite-env.d.ts       # Tipos de Vite
```

## 🔧 Configuración de TypeScript

### Archivos de Configuración
- `tsconfig.json` - Configuración principal de TypeScript
- `tsconfig.node.json` - Configuración para herramientas Node.js
- `vite.config.ts` - Configuración de Vite con soporte TypeScript

### Scripts de TypeScript
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

## 🔧 Configuración de Redux

### Store Principal
```typescript
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};
```

### Slice de Autenticación
- Gestión de estado de usuario con tipos TypeScript
- Acciones de login/logout/registro tipadas
- Manejo de errores y mensajes
- Validación de credenciales

## 🎨 UI/UX con Ant Design

### Componentes Utilizados
- **Layout**: Estructura principal de la aplicación
- **Form**: Formularios de autenticación tipados
- **Card**: Tarjetas de módulos educativos
- **Button**: Botones de acción
- **Alert**: Mensajes informativos
- **Avatar**: Representación visual del usuario

### Estilos Personalizados
- Gradientes modernos
- Sombras y bordes redondeados
- Transiciones suaves
- Diseño responsive

## 🚦 Gestión de Estado

### Estado de Autenticación
```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  message: string | null;
}
```

### Acciones Disponibles
- `loginUser(credentials: LoginCredentials)` - Iniciar sesión
- `registerUser(userData: RegisterData)` - Registrar usuario
- `forgotPassword(email: string)` - Recuperar contraseña
- `logout()` - Cerrar sesión
- `clearError()` - Limpiar errores
- `clearMessage()` - Limpiar mensajes

## 🔒 Seguridad

### Protección de Rutas
- **Rutas públicas**: Accesibles sin autenticación
- **Rutas protegidas**: Requieren autenticación
- **Rutas de admin**: Requieren rol de administrador

### Validación de Usuarios
- Verificación de credenciales
- Prevención de nombres de usuario duplicados
- Validación de formato de email
- Requisitos de contraseña

## 📱 Responsive Design

- **Desktop**: Layout completo con sidebar
- **Tablet**: Layout adaptativo
- **Mobile**: Layout vertical optimizado

## 🚀 Despliegue

### GitHub Pages
```bash
npm run deploy
```

### Otros Servicios
- Netlify
- Vercel
- Firebase Hosting

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Desarrollador**: [Tu Nombre]
- **Email**: [tu-email@ejemplo.com]
- **Proyecto**: [https://github.com/usuario/Aprendo-mas](https://github.com/usuario/Aprendo-mas)

---

**Nota**: Este proyecto es una demostración de implementación de autenticación con Redux Toolkit, TypeScript y React. Las credenciales por defecto (`admin/123`) están configuradas para facilitar las pruebas y demostraciones.

## 🔄 Migración a TypeScript

### Archivos Convertidos
- ✅ `src/store/authSlice.js` → `src/store/authSlice.ts`
- ✅ `src/store/store.js` → `src/store/store.ts`
- ✅ `src/hooks/useAppDispatch.js` → `src/hooks/useAppDispatch.ts`
- ✅ `src/hooks/useAppSelector.js` → `src/hooks/useAppSelector.ts`
- ✅ `src/config/routes.js` → `src/config/routes.ts`
- ✅ `src/data/matematicasData.js` → `src/data/matematicasData.ts`
- ✅ `src/main.jsx` → `src/main.tsx`
- ✅ `src/App.jsx` → `src/App.tsx`
- ✅ `src/components/Login.jsx` → `src/components/Login.tsx`
- ✅ `src/components/Register.jsx` → `src/components/Register.tsx`
- ✅ `src/components/ForgotPassword.jsx` → `src/components/ForgotPassword.tsx`
- ✅ `src/components/ProtectedRoute.jsx` → `src/components/ProtectedRoute.tsx`
- ✅ `src/components/Header.jsx` → `src/components/Header.tsx`
- ✅ `src/components/ModalProximamente.jsx` → `src/components/ModalProximamente.tsx`
- ✅ `src/pages/Home.jsx` → `src/pages/Home.tsx`
- ✅ `src/pages/ModuloMatematicas.jsx` → `src/pages/ModuloMatematicas.tsx`
- ✅ `src/pages/Tutoriales.jsx` → `src/pages/Tutoriales.tsx`
- ✅ `src/pages/VideosTema.jsx` → `src/pages/VideosTema.tsx`
- ✅ `src/pages/Examenes.jsx` → `src/pages/Examenes.tsx`
- ✅ `src/pages/Quiz.jsx` → `src/pages/Quiz.tsx`
- ✅ `src/pages/Resultado.jsx` → `src/pages/Resultado.tsx`

### Beneficios de la Migración
- **Tipado estático**: Detección temprana de errores
- **Mejor IntelliSense**: Autocompletado y navegación mejorada
- **Refactoring seguro**: Cambios de código más confiables
- **Documentación viva**: Los tipos sirven como documentación
- **Mantenibilidad**: Código más fácil de mantener y escalar
