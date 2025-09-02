import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
export interface VideoProgress {
  videoId: string;
  completed: boolean;
  completedAt: string;
  watchTime: number; // en segundos
}

export interface ExamResult {
  temaId: string;
  moduloId: string;
  puntaje: number;
  correctas: number;
  total: number;
  tiempoTotal: number;
  completedAt: string;
  attempts: number;
}

export interface Badge {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
  unlockedAt?: string;
  requirement: {
    type: 'videos' | 'exams' | 'streak' | 'score';
    value: number;
    description: string;
  };
}

export interface Achievement {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
  unlockedAt?: string;
  requirement: {
    type: 'videos' | 'exams' | 'streak' | 'score' | 'time';
    value: number;
    description: string;
  };
}

export interface UserStats {
  totalVideosWatched: number;
  totalExamsTaken: number;
  averageScore: number;
  totalStudyTime: number; // en minutos
  currentStreak: number; // días consecutivos
  longestStreak: number;
  badgesUnlocked: number;
  achievementsUnlocked: number;
  lastStudyDate?: string;
}

export interface ProgressState {
  // Progreso por módulo
  videoProgress: Record<string, VideoProgress[]>; // moduloId -> videos
  examResults: Record<string, ExamResult[]>; // moduloId -> resultados
  
  // Estadísticas del usuario
  userStats: UserStats;
  
  // Sistema de badges y logros
  badges: Badge[];
  achievements: Achievement[];
  
  // Estado de carga
  isLoading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: ProgressState = {
  videoProgress: {},
  examResults: {},
  userStats: {
    totalVideosWatched: 0,
    totalExamsTaken: 0,
    averageScore: 0,
    totalStudyTime: 0,
    currentStreak: 0,
    longestStreak: 0,
    badgesUnlocked: 0,
    achievementsUnlocked: 0
  },
  badges: [
    {
      id: 'first-video',
      nombre: 'Primer Paso',
      descripcion: 'Completaste tu primer video',
      icono: 'PlayCircleOutlined',
      color: '#52c41a',
      requirement: {
        type: 'videos',
        value: 1,
        description: 'Completar 1 video'
      }
    },
    {
      id: 'video-master',
      nombre: 'Maestro del Video',
      descripcion: 'Completaste 10 videos',
      icono: 'VideoCameraOutlined',
      color: '#1890ff',
      requirement: {
        type: 'videos',
        value: 10,
        description: 'Completar 10 videos'
      }
    },
    {
      id: 'exam-champion',
      nombre: 'Campeón del Examen',
      descripcion: 'Obtuviste 100% en un examen',
      icono: 'TrophyOutlined',
      color: '#faad14',
      requirement: {
        type: 'score',
        value: 100,
        description: 'Obtener 100% en un examen'
      }
    },
    {
      id: 'streak-warrior',
      nombre: 'Guerrero de la Racha',
      descripcion: 'Estudiaste 7 días consecutivos',
      icono: 'FireOutlined',
      color: '#f5222d',
      requirement: {
        type: 'streak',
        value: 7,
        description: 'Estudiar 7 días consecutivos'
      }
    }
  ],
  achievements: [
    {
      id: 'early-bird',
      nombre: 'Madrugador',
      descripcion: 'Estudiaste antes de las 8 AM',
      icono: 'SunOutlined',
      color: '#faad14',
      requirement: {
        type: 'time',
        value: 1,
        description: 'Estudiar antes de las 8 AM'
      }
    },
    {
      id: 'night-owl',
      nombre: 'Búho Nocturno',
      descripcion: 'Estudiaste después de las 10 PM',
      icono: 'MoonOutlined',
      color: '#722ed1',
      requirement: {
        type: 'time',
        value: 1,
        description: 'Estudiar después de las 10 PM'
      }
    },
    {
      id: 'weekend-warrior',
      nombre: 'Guerrero del Fin de Semana',
      descripcion: 'Estudiaste durante 3 fines de semana',
      icono: 'CalendarOutlined',
      color: '#52c41a',
      requirement: {
        type: 'streak',
        value: 3,
        description: 'Estudiar durante 3 fines de semana'
      }
    }
  ],
  isLoading: false,
  error: null
};

// Thunks
export const markVideoAsCompleted = createAsyncThunk(
  'progress/markVideoAsCompleted',
  async ({ moduloId, videoId, watchTime }: { moduloId: string; videoId: string; watchTime: number }) => {
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return { moduloId, videoId, watchTime };
  }
);

export const saveExamResult = createAsyncThunk(
  'progress/saveExamResult',
  async (examResult: Omit<ExamResult, 'completedAt'>) => {
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return examResult;
  }
);

export const loadUserProgress = createAsyncThunk(
  'progress/loadUserProgress',
  async (userId: string) => {
    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 200));
    return { userId };
  }
);

// Slice
const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    // Acciones síncronas
    updateVideoProgress: (state, action: PayloadAction<{ moduloId: string; videoId: string; completed: boolean }>) => {
      const { moduloId, videoId, completed } = action.payload;
      
      if (!state.videoProgress[moduloId]) {
        state.videoProgress[moduloId] = [];
      }
      
      const existingIndex = state.videoProgress[moduloId].findIndex(v => v.videoId === videoId);
      
      if (existingIndex >= 0) {
        state.videoProgress[moduloId][existingIndex].completed = completed;
        if (completed) {
          state.videoProgress[moduloId][existingIndex].completedAt = new Date().toISOString();
        }
      } else {
        state.videoProgress[moduloId].push({
          videoId,
          completed,
          completedAt: completed ? new Date().toISOString() : '',
          watchTime: 0
        });
      }
      
      // Actualizar estadísticas
      state.userStats.totalVideosWatched = Object.values(state.videoProgress)
        .flat()
        .filter(v => v.completed).length;
    },
    
    updateStudyStreak: (state) => {
      const today = new Date().toDateString();
      const lastStudy = state.userStats.lastStudyDate ? new Date(state.userStats.lastStudyDate).toDateString() : null;
      
      if (lastStudy === today) {
        // Ya estudió hoy
        return;
      }
      
      if (lastStudy === new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()) {
        // Estudió ayer, continuar racha
        state.userStats.currentStreak += 1;
      } else {
        // Romper racha
        state.userStats.currentStreak = 1;
      }
      
      if (state.userStats.currentStreak > state.userStats.longestStreak) {
        state.userStats.longestStreak = state.userStats.currentStreak;
      }
      
      state.userStats.lastStudyDate = new Date().toISOString();
    },
    
    checkBadgesAndAchievements: (state) => {
      // Verificar badges
      state.badges.forEach(badge => {
        if (badge.unlockedAt) return; // Ya desbloqueado
        
        let shouldUnlock = false;
        
        switch (badge.requirement.type) {
          case 'videos':
            shouldUnlock = state.userStats.totalVideosWatched >= badge.requirement.value;
            break;
          case 'exams':
            shouldUnlock = state.userStats.totalExamsTaken >= badge.requirement.value;
            break;
          case 'streak':
            shouldUnlock = state.userStats.currentStreak >= badge.requirement.value;
            break;
          case 'score':
            shouldUnlock = state.userStats.averageScore >= badge.requirement.value;
            break;
        }
        
        if (shouldUnlock) {
          badge.unlockedAt = new Date().toISOString();
          state.userStats.badgesUnlocked += 1;
        }
      });
      
      // Verificar achievements
      state.achievements.forEach(achievement => {
        if (achievement.unlockedAt) return; // Ya desbloqueado
        
        // Lógica específica para achievements
        let shouldUnlock = false;
        
        switch (achievement.id) {
          case 'early-bird':
            const now = new Date();
            shouldUnlock = now.getHours() < 8;
            break;
          case 'night-owl':
            const currentHour = new Date().getHours();
            shouldUnlock = currentHour >= 22;
            break;
          // Más achievements pueden ser agregados aquí
        }
        
        if (shouldUnlock) {
          achievement.unlockedAt = new Date().toISOString();
          state.userStats.achievementsUnlocked += 1;
        }
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(markVideoAsCompleted.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(markVideoAsCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        const { moduloId, videoId, watchTime } = action.payload;
        
        // Actualizar progreso del video
        if (!state.videoProgress[moduloId]) {
          state.videoProgress[moduloId] = [];
        }
        
        const existingIndex = state.videoProgress[moduloId].findIndex(v => v.videoId === videoId);
        if (existingIndex >= 0) {
          state.videoProgress[moduloId][existingIndex].watchTime += watchTime;
        }
        
        // Actualizar tiempo de estudio
        state.userStats.totalStudyTime += Math.round(watchTime / 60);
        
        // Verificar badges y achievements
        progressSlice.caseReducers.checkBadgesAndAchievements(state);
      })
      .addCase(markVideoAsCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error al marcar video como completado';
      })
      
      .addCase(saveExamResult.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveExamResult.fulfilled, (state, action) => {
        state.isLoading = false;
        const examResult = {
          ...action.payload,
          completedAt: new Date().toISOString()
        };
        
        // Guardar resultado del examen
        if (!state.examResults[examResult.moduloId]) {
          state.examResults[examResult.moduloId] = [];
        }
        state.examResults[examResult.moduloId].push(examResult);
        
        // Actualizar estadísticas
        state.userStats.totalExamsTaken += 1;
        
        // Calcular promedio de puntajes
        const allScores = Object.values(state.examResults)
          .flat()
          .map(r => r.puntaje);
        state.userStats.averageScore = allScores.length > 0 
          ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
          : 0;
        
        // Verificar badges y achievements
        progressSlice.caseReducers.checkBadgesAndAchievements(state);
      })
      .addCase(saveExamResult.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error al guardar resultado del examen';
      })
      
      .addCase(loadUserProgress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadUserProgress.fulfilled, (state) => {
        state.isLoading = false;
        // Aquí se cargarían los datos del usuario desde la API
      })
      .addCase(loadUserProgress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error al cargar progreso del usuario';
      });
  }
});

// Exportar acciones y reducer
export const { 
  updateVideoProgress, 
  updateStudyStreak, 
  checkBadgesAndAchievements 
} = progressSlice.actions;

export default progressSlice.reducer;
