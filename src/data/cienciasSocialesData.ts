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

export const cienciasSocialesData: { temas: Tema[] } = {
  temas: [
    {
      id: 'historia-mexico',
      nombre: 'Historia de México',
      descripcion: 'Descubre la rica historia de nuestro país',
      videos: [
        {
          id: 'independencia-1',
          titulo: 'La Independencia de México',
          duracion: '8:45',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'El proceso de independencia y sus principales personajes'
        },
        {
          id: 'revolucion-1',
          titulo: 'La Revolución Mexicana',
          duracion: '10:15',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Causas y consecuencias de la revolución de 1910'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿En qué año comenzó la Independencia de México?',
          opciones: ['1808', '1810', '1821', '1815'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Quién es conocido como el "Padre de la Patria"?',
          opciones: ['José María Morelos', 'Miguel Hidalgo', 'Agustín de Iturbide', 'Vicente Guerrero'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿En qué fecha se celebra la Independencia de México?',
          opciones: ['15 de septiembre', '16 de septiembre', '27 de septiembre', '28 de septiembre'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿Quién fue el líder de la Revolución Mexicana?',
          opciones: ['Emiliano Zapata', 'Francisco Villa', 'Porfirio Díaz', 'Francisco I. Madero'],
          respuestaCorrecta: 3
        },
        {
          id: 5,
          pregunta: '¿En qué año terminó la Revolución Mexicana?',
          opciones: ['1910', '1917', '1920', '1921'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Cuál fue el lema de la Revolución Mexicana?',
          opciones: ['"Viva México"', '"Tierra y Libertad"', '"Justicia y Paz"', '"Unión y Progreso"'],
          respuestaCorrecta: 1
        }
      ]
    },
    {
      id: 'geografia-mexico',
      nombre: 'Geografía de México',
      descripcion: 'Conoce la geografía y recursos naturales de México',
      videos: [
        {
          id: 'relieve-1',
          titulo: 'Relieve y montañas de México',
          duracion: '7:30',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Las principales cadenas montañosas y formas del relieve'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuál es la montaña más alta de México?',
          opciones: ['Popocatépetl', 'Iztaccíhuatl', 'Pico de Orizaba', 'Nevado de Colima'],
          respuestaCorrecta: 2
        },
        {
          id: 2,
          pregunta: '¿Qué océanos bañan las costas de México?',
          opciones: ['Pacífico y Atlántico', 'Pacífico y Índico', 'Pacífico y Ártico', 'Solo Pacífico'],
          respuestaCorrecta: 0
        },
        {
          id: 3,
          pregunta: '¿Cuál es el río más largo de México?',
          opciones: ['Río Bravo', 'Río Lerma', 'Río Usumacinta', 'Río Grijalva'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿En qué estado se encuentra el desierto de Chihuahua?',
          opciones: ['Sonora', 'Chihuahua', 'Coahuila', 'Nuevo León'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es la península más grande de México?',
          opciones: ['Baja California', 'Yucatán', 'Baja California Sur', 'Campeche'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Qué tipo de clima predomina en el centro de México?',
          opciones: ['Tropical', 'Templado', 'Desértico', 'Polar'],
          respuestaCorrecta: 1
        }
      ]
    },
    {
      id: 'civismo',
      nombre: 'Civismo y valores',
      descripcion: 'Aprende sobre ciudadanía y valores democráticos',
      videos: [
        {
          id: 'derechos-1',
          titulo: 'Derechos y deberes ciudadanos',
          duracion: '9:10',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Los derechos fundamentales y responsabilidades del ciudadano'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuál es la edad mínima para votar en México?',
          opciones: ['16 años', '18 años', '21 años', '25 años'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Qué es la democracia?',
          opciones: ['Un tipo de gobierno', 'El gobierno del pueblo', 'Una forma de dictadura', 'Un sistema económico'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿Cuál es un deber del ciudadano?',
          opciones: ['Votar', 'Recibir educación', 'Tener salud', 'Trabajar'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿Qué significa "tolerancia"?',
          opciones: ['Estar de acuerdo con todo', 'Respetar las diferencias', 'Ignorar los problemas', 'Ser indiferente'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es un valor democrático fundamental?',
          opciones: ['La igualdad', 'La riqueza', 'El poder', 'La fama'],
          respuestaCorrecta: 0
        },
        {
          id: 6,
          pregunta: '¿Qué es la participación ciudadana?',
          opciones: ['Solo votar', 'Involucrarse en asuntos públicos', 'Solo protestar', 'Solo quejarse'],
          respuestaCorrecta: 1
        }
      ]
    }
  ]
};

// Función para obtener preguntas aleatorias
export const obtenerPreguntasAleatorias = (temaId: string, cantidad: number = 5): Pregunta[] => {
  const tema = cienciasSocialesData.temas.find(t => t.id === temaId);
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
export const calcularPuntaje = (respuestas: number[], preguntas: Pregunta[]): { correctas: number; total: number; puntaje: number } => {
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
export const guardarResultado = (temaId: string, resultado: { correctas: number; total: number; puntaje: number }): void => {
  const clave = `score:ciencias-sociales:${temaId}`;
  const datos = {
    ...resultado,
    timestamp: new Date().toISOString(),
    temaId
  };
  localStorage.setItem(clave, JSON.stringify(datos));
};

// Función para obtener último resultado
export const obtenerUltimoResultado = (temaId: string): any => {
  const clave = `score:ciencias-sociales:${temaId}`;
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
};
