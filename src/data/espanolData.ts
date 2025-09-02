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

export const espanolData: { temas: Tema[] } = {
  temas: [
    {
      id: 'gramatica-basica',
      nombre: 'Gramática básica',
      descripcion: 'Aprende los fundamentos de la gramática española',
      videos: [
        {
          id: 'sustantivos-1',
          titulo: '¿Qué son los sustantivos?',
          duracion: '6:15',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Conceptos básicos de sustantivos y su clasificación'
        },
        {
          id: 'verbos-1',
          titulo: 'Conjugación de verbos',
          duracion: '8:30',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Aprende a conjugar verbos en presente'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuál es la función principal de un sustantivo?',
          opciones: ['Describir acciones', 'Nombrar personas, lugares o cosas', 'Conectar palabras', 'Expresar cualidades'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Qué tipo de palabra es "casa"?',
          opciones: ['Verbo', 'Sustantivo', 'Adjetivo', 'Adverbio'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿Cuál es la conjugación correcta de "hablar" en primera persona?',
          opciones: ['Hablas', 'Hablo', 'Habla', 'Hablan'],
          respuestaCorrecta: 1
        },
        {
          id: 4,
          pregunta: '¿Qué palabra es un sinónimo de "grande"?',
          opciones: ['Pequeño', 'Enorme', 'Mediano', 'Chico'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es el plural de "papel"?',
          opciones: ['Papeles', 'Papel', 'Papelitos', 'Papelones'],
          respuestaCorrecta: 0
        },
        {
          id: 6,
          pregunta: '¿Qué tipo de palabra es "rápidamente"?',
          opciones: ['Sustantivo', 'Verbo', 'Adjetivo', 'Adverbio'],
          respuestaCorrecta: 3
        }
      ]
    },
    {
      id: 'ortografia',
      nombre: 'Ortografía',
      descripcion: 'Reglas de escritura y acentuación',
      videos: [
        {
          id: 'acentos-1',
          titulo: 'Reglas de acentuación',
          duracion: '7:45',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Aprende cuándo y dónde colocar acentos'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuál es la palabra correctamente acentuada?',
          opciones: ['árbol', 'árbol', 'árbol', 'árbol'],
          respuestaCorrecta: 0
        },
        {
          id: 2,
          pregunta: '¿Cuál es la regla para palabras agudas?',
          opciones: ['Siempre llevan acento', 'Llevan acento si terminan en vocal', 'Llevan acento si terminan en n, s o vocal', 'Nunca llevan acento'],
          respuestaCorrecta: 2
        },
        {
          id: 3,
          pregunta: '¿Cuál es la palabra correctamente escrita?',
          opciones: ['Haber', 'A ver', 'Haber', 'A ver'],
          respuestaCorrecta: 0
        },
        {
          id: 4,
          pregunta: '¿Cuál es la regla para palabras graves?',
          opciones: ['Llevan acento si terminan en vocal', 'Llevan acento si NO terminan en n, s o vocal', 'Siempre llevan acento', 'Nunca llevan acento'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es la palabra correctamente escrita?',
          opciones: ['Vaya', 'Valla', 'Vaya', 'Valla'],
          respuestaCorrecta: 0
        },
        {
          id: 6,
          pregunta: '¿Cuál es la regla para palabras esdrújulas?',
          opciones: ['Siempre llevan acento', 'Nunca llevan acento', 'Llevan acento en la antepenúltima sílaba', 'Llevan acento en la penúltima sílaba'],
          respuestaCorrecta: 2
        }
      ]
    },
    {
      id: 'comprension-lectora',
      nombre: 'Comprensión lectora',
      descripcion: 'Técnicas para entender mejor lo que lees',
      videos: [
        {
          id: 'lectura-1',
          titulo: 'Estrategias de lectura',
          duracion: '9:20',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Métodos para mejorar la comprensión lectora'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Cuál es el primer paso para una buena comprensión lectora?',
          opciones: ['Leer rápido', 'Identificar el tema principal', 'Memorizar el texto', 'Hacer resumen'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Qué significa "hacer inferencias" al leer?',
          opciones: ['Leer en voz alta', 'Sacar conclusiones no explícitas', 'Subrayar palabras importantes', 'Contar las palabras'],
          respuestaCorrecta: 1
        },
        {
          id: 3,
          pregunta: '¿Cuál es una estrategia efectiva para recordar lo leído?',
          opciones: ['Leer una sola vez', 'Hacer preguntas sobre el texto', 'Saltar párrafos', 'Leer solo el título'],
          respuestaCorrecta: 1
        },
        {
          id: 4,
          pregunta: '¿Qué es el "contexto" en la lectura?',
          opciones: ['El número de páginas', 'La información que rodea una palabra', 'El autor del texto', 'La fecha de publicación'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es el propósito de hacer un resumen?',
          opciones: ['Demostrar que leíste', 'Identificar las ideas principales', 'Cambiar el texto', 'Añadir información'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Qué significa "leer entre líneas"?',
          opciones: ['Leer solo las líneas impares', 'Entender el significado implícito', 'Contar las líneas', 'Leer de abajo hacia arriba'],
          respuestaCorrecta: 1
        }
      ]
    }
  ]
};

// Función para obtener preguntas aleatorias
export const obtenerPreguntasAleatorias = (temaId: string, cantidad: number = 5): Pregunta[] => {
  const tema = espanolData.temas.find(t => t.id === temaId);
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
  const clave = `score:espanol:${temaId}`;
  const datos = {
    ...resultado,
    timestamp: new Date().toISOString(),
    temaId
  };
  localStorage.setItem(clave, JSON.stringify(datos));
};

// Función para obtener último resultado
export const obtenerUltimoResultado = (temaId: string): any => {
  const clave = `score:espanol:${temaId}`;
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
};
