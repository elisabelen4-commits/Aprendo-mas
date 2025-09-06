import { matematicasData } from './matematicasData';
import { espanolData } from './espanolData';
import { cienciasSocialesData } from './cienciasSocialesData';
import { computacionData } from './computacionData';

interface ModuloData {
  temas: Array<{
    id: string;
    nombre: string;
    descripcion: string;
    videos: Array<{
      id: string;
      titulo: string;
      duracion: string;
      url: string;
      descripcion: string;
    }>;
    preguntas: Array<{
      id: number;
      pregunta: string;
      opciones: string[];
      respuestaCorrecta: number;
    }>;
    sosContent: Array<{
      titulo: string;
      explicacion: string;
      imagen: string;
      audio: string;
    }>;
    pistas: string[][];
    explicacionVoz: string;
    audioRadio: Array<{
      titulo: string;
      duracion: string;
      archivo: string;
    }>;
  }>;
}

export interface Modulo {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  activo: boolean;
  color: string;
  requiereAuth: boolean;
  data: ModuloData;
  rutas: {
    principal: string;
    tutoriales: string;
    examenes: string;
  };
}

export const modulosActivos: Modulo[] = [
  {
    id: 'matematicas',
    nombre: 'Matemáticas',
    descripcion: 'Números, operaciones y problemas',
    icono: 'CalculatorOutlined',
    activo: true,
    color: '#1890ff',
    requiereAuth: true,
    data: matematicasData,
    rutas: {
      principal: '/matematicas',
      tutoriales: '/matematicas/tutoriales',
      examenes: '/matematicas/examenes'
    }
  },
  {
    id: 'espanol',
    nombre: 'Español',
    descripcion: 'Gramática, ortografía y comprensión lectora',
    icono: 'BookOutlined',
    activo: true,
    color: '#52c41a',
    requiereAuth: true,
    data: espanolData,
    rutas: {
      principal: '/espanol',
      tutoriales: '/espanol/tutoriales',
      examenes: '/espanol/examenes'
    }
  },
  {
    id: 'ciencias-sociales',
    nombre: 'Ciencias Sociales',
    descripcion: 'Historia, geografía y civismo',
    icono: 'GlobalOutlined',
    activo: true,
    color: '#fa8c16',
    requiereAuth: true,
    data: cienciasSocialesData,
    rutas: {
      principal: '/ciencias-sociales',
      tutoriales: '/ciencias-sociales/tutoriales',
      examenes: '/ciencias-sociales/examenes'
    }
  },
  {
    id: 'computacion',
    nombre: 'Computación',
    descripcion: 'Programación básica y herramientas digitales',
    icono: 'LaptopOutlined',
    activo: true,
    color: '#722ed1',
    requiereAuth: true,
    data: computacionData,
    rutas: {
      principal: '/computacion',
      tutoriales: '/computacion/tutoriales',
      examenes: '/computacion/examenes'
    }
  }
];

// Función para obtener un módulo por ID
export const obtenerModulo = (id: string): Modulo | undefined => {
  return modulosActivos.find(modulo => modulo.id === id);
};

// Función para obtener todos los módulos activos
export const obtenerModulosActivos = (): Modulo[] => {
  return modulosActivos.filter(modulo => modulo.activo);
};

// Función para obtener datos de un módulo específico
export const obtenerDatosModulo = (id: string) => {
  const modulo = obtenerModulo(id);
  return modulo ? modulo.data : null;
};
