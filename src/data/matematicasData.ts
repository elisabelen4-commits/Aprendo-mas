// Types
export interface Video {
  id: string;
  titulo: string;
  duracion: string;
  url: string;
  descripcion: string;
}

export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export interface Tema {
  id: string;
  nombre: string;
  descripcion: string;
  videos: Video[];
  preguntas: Pregunta[];
}

export interface ModuloInactivo {
  id: string;
  nombre: string;
  descripcion: string;
  activo: false;
}

export interface Resultado {
  correctas: number;
  total: number;
  puntaje: number;
  timestamp: string;
  temaId: string;
}

export const matematicasData: { temas: Tema[] } = {
  temas: [
    {
      id: 'fracciones-basicas',
      nombre: 'Fracciones básicas',
      descripcion: 'Aprende los conceptos fundamentales de las fracciones',
      videos: [
        {
          id: 'fraccion-1',
          titulo: '¿Qué es una fracción?',
          duracion: '5:30',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Conceptos básicos de fracciones y su representación'
        },
        {
          id: 'fraccion-2',
          titulo: 'Sumar fracciones',
          duracion: '7:15',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Métodos para sumar fracciones con el mismo denominador'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuánto es 1/2 + 1/2?',
          opciones: ['1/4', '1', '2/4', '1/2'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿A qué fracción equivale 3/6?',
          opciones: ['1/3', '1/2', '2/3', '3/4'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿Qué relación tienen 2/4 y 1/2?',
          opciones: ['Mayor que', 'Menor que', 'Equivalentes', 'Diferentes'],
          respuestaCorrecta: 2
        },
        {
          id: 4,
          pregunta: '¿Cuál es el numerador de 3/5?',
          opciones: ['3', '5', '8', '2'],
          respuestaCorrecta: 0
        },
        {
          id: 5,
          pregunta: '¿Cuánto es 1/3 + 1/3?',
          opciones: ['1/6', '2/3', '1/3', '2/6'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Cuál es la fracción más simple de 4/8?',
          opciones: ['1/4', '1/2', '2/4', '4/8'],
          respuestaCorrecta: 1
        }
      ]
    },
    {
      id: 'suma-resta',
      nombre: 'Suma y resta',
      descripcion: 'Operaciones básicas de suma y resta con números de dos cifras',
      videos: [
        {
          id: 'suma-1',
          titulo: 'Sumas con llevadas',
          duracion: '6:45',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Cómo resolver sumas que requieren llevar números'
        },
        {
          id: 'resta-1',
          titulo: 'Restas con préstamos',
          duracion: '8:20',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Técnicas para restas que requieren préstamos'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuánto es 45 + 37?',
          opciones: ['72', '82', '81', '83'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Cuánto es 63 - 28?',
          opciones: ['35', '45', '25', '55'],
          respuestaCorrecta: 0
        },
        {
          id: 3,
          pregunta: '¿Cuánto es 89 + 12?',
          opciones: ['101', '100', '99', '102'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿Cuánto es 76 - 49?',
          opciones: ['27', '37', '25', '29'],
          respuestaCorrecta: 0
        },
        {
          id: 5,
          pregunta: '¿Cuánto es 34 + 58?',
          opciones: ['82', '92', '91', '93'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Cuánto es 95 - 67?',
          opciones: ['28', '38', '27', '29'],
          respuestaCorrecta: 0
        }
      ]
    },
    {
      id: 'multiplicacion-division',
      nombre: 'Multiplicación y división',
      descripcion: 'Tablas de multiplicar y divisiones básicas',
      videos: [
        {
          id: 'multiplicacion-1',
          titulo: 'Multiplicar paso a paso',
          duracion: '9:10',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Método paso a paso para multiplicar números'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuánto es 7 × 8?',
          opciones: ['54', '56', '58', '60'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Cuánto es 63 ÷ 9?',
          opciones: ['6', '7', '8', '9'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿Cuánto es 6 × 9?',
          opciones: ['54', '56', '58', '60'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿Cuánto es 48 ÷ 6?',
          opciones: ['6', '7', '8', '9'],
          respuestaCorrecta: 2
        },
        {
          id: 5,
          pregunta: '¿Cuánto es 5 × 7?',
          opciones: ['30', '35', '40', '45'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Cuánto es 81 ÷ 9?',
          opciones: ['7', '8', '9', '10'],
          respuestaCorrecta: 2
        }
      ]
    }
  ]
};

// Función para obtener preguntas aleatorias
export const obtenerPreguntasAleatorias = (temaId: string, cantidad: number = 5): Pregunta[] => {
  const tema = matematicasData.temas.find(t => t.id === temaId);
  if (!tema || !tema.preguntas) return [];
  
  const preguntas = [...tema.preguntas];
  // Algoritmo Fisher-Yates para mezclar
  for (let i = preguntas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
  }
  
  return preguntas.slice(0, cantidad);
};

// Función para calcular puntaje
export const calcularPuntaje = (respuestas: number[], preguntas: Pregunta[]): Omit<Resultado, 'timestamp' | 'temaId'> => {
  let correctas = 0;
  respuestas.forEach((respuesta, index) => {
    if (respuesta === preguntas[index].respuestaCorrecta) {
      correctas++;
    }
  });
  return {
    correctas,
    total: preguntas.length,
    puntaje: Math.round((correctas / preguntas.length) * 100)
  };
};

// Función para guardar resultado en localStorage
export const guardarResultado = (temaId: string, resultado: Omit<Resultado, 'timestamp' | 'temaId'>): void => {
  const clave = `score:matematicas:${temaId}`;
  const datos: Resultado = {
    ...resultado,
    timestamp: new Date().toISOString(),
    temaId
  };
  localStorage.setItem(clave, JSON.stringify(datos));
};

// Función para obtener último resultado
export const obtenerUltimoResultado = (temaId: string): Resultado | null => {
  const clave = `score:matematicas:${temaId}`;
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
};
