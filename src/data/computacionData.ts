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

export const computacionData: { temas: Tema[] } = {
  temas: [
    {
      id: 'programacion-basica',
      nombre: 'Programación básica',
      descripcion: 'Introducción a los conceptos fundamentales de programación',
      videos: [
        {
          id: 'variables-1',
          titulo: 'Variables y tipos de datos',
          duracion: '8:20',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Conceptos básicos de variables y tipos de datos en programación'
        },
        {
          id: 'condicionales-1',
          titulo: 'Estructuras condicionales',
          duracion: '9:15',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Uso de if, else y switch en programación'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Qué es una variable en programación?',
          opciones: ['Un número fijo', 'Un contenedor para almacenar datos', 'Un programa completo', 'Un error del código'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Cuál es el símbolo para asignar un valor a una variable?',
          opciones: ['=', '==', '===', '->'],
          respuestaCorrecta: 0
        },
        {
          id: 3,
          pregunta: '¿Qué estructura se usa para tomar decisiones en programación?',
          opciones: ['Loop', 'Variable', 'Condicional', 'Función'],
          respuestaCorrecta: 2
        },
        {
          id: 4,
          pregunta: '¿Cuál es la palabra clave para la condición "si no"?',
          opciones: ['if', 'else', 'then', 'when'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Qué tipo de dato se usa para texto?',
          opciones: ['Integer', 'Float', 'String', 'Boolean'],
          respuestaCorrecta: 2
        },
        {
          id: 6,
          pregunta: '¿Qué estructura se repite mientras una condición sea verdadera?',
          opciones: ['If', 'While', 'Switch', 'Else'],
          respuestaCorrecta: 1
        }
      ]
    },
    {
      id: 'herramientas-digitales',
      nombre: 'Herramientas digitales',
      descripcion: 'Aprende a usar herramientas básicas de computación',
      videos: [
        {
          id: 'office-1',
          titulo: 'Microsoft Office básico',
          duracion: '10:30',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Uso básico de Word, Excel y PowerPoint'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Qué programa se usa para crear documentos de texto?',
          opciones: ['Excel', 'Word', 'PowerPoint', 'Access'],
          respuestaCorrecta: 1
        },
        {
          id: 2,
          pregunta: '¿Qué programa se usa para crear presentaciones?',
          opciones: ['Word', 'Excel', 'PowerPoint', 'Publisher'],
          respuestaCorrecta: 2
        },
        {
          id: 3,
          pregunta: '¿Qué programa se usa para crear hojas de cálculo?',
          opciones: ['Word', 'Excel', 'PowerPoint', 'Outlook'],
          respuestaCorrecta: 1
        },
        {
          id: 4,
          pregunta: '¿Cuál es la extensión de un archivo de Word?',
          opciones: ['.txt', '.docx', '.xlsx', '.pptx'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuál es la extensión de un archivo de Excel?',
          opciones: ['.docx', '.xlsx', '.pptx', '.txt'],
          respuestaCorrecta: 1
        },
        {
          id: 6,
          pregunta: '¿Qué tecla se usa para guardar un documento?',
          opciones: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + X'],
          respuestaCorrecta: 0
        }
      ]
    },
    {
      id: 'internet-seguridad',
      nombre: 'Internet y seguridad',
      descripcion: 'Navegación segura y uso responsable de internet',
      videos: [
        {
          id: 'seguridad-1',
          titulo: 'Seguridad en internet',
          duracion: '7:45',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          descripcion: 'Consejos para navegar de forma segura en internet'
        }
      ],
      preguntas: [
        {
          id: 1,
          pregunta: '¿Qué es una contraseña segura?',
          opciones: ['Solo números', 'Solo letras', 'Combinación de letras, números y símbolos', 'Tu nombre'],
          respuestaCorrecta: 2
        },
        {
          id: 2,
          pregunta: '¿Qué debes hacer si recibes un email sospechoso?',
          opciones: ['Abrirlo inmediatamente', 'Hacer clic en todos los enlaces', 'No abrirlo y reportarlo', 'Reenviarlo a amigos'],
          respuestaCorrecta: 2
        },
        {
          id: 3,
          pregunta: '¿Qué significa HTTPS en una URL?',
          opciones: ['Sitio web rápido', 'Sitio web seguro', 'Sitio web gratuito', 'Sitio web oficial'],
          respuestaCorrecta: 1
        },
        {
          id: 4,
          pregunta: '¿Qué es el phishing?',
          opciones: ['Un tipo de virus', 'Un intento de robar información personal', 'Un programa de chat', 'Un tipo de spam'],
          respuestaCorrecta: 1
        },
        {
          id: 5,
          pregunta: '¿Cuándo debes actualizar tu software?',
          opciones: ['Nunca', 'Solo cuando quieras', 'Cuando haya actualizaciones de seguridad disponibles', 'Solo una vez al año'],
          respuestaCorrecta: 2
        },
        {
          id: 6,
          pregunta: '¿Qué debes hacer antes de descargar un archivo?',
          opciones: ['Descargarlo inmediatamente', 'Verificar que sea de una fuente confiable', 'Reenviarlo a otros', 'Ignorarlo'],
          respuestaCorrecta: 1
        }
      ]
    }
  ]
};

// Función para obtener preguntas aleatorias
export const obtenerPreguntasAleatorias = (temaId: string, cantidad: number = 5): Pregunta[] => {
  const tema = computacionData.temas.find(t => t.id === temaId);
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
  const clave = `score:computacion:${temaId}`;
  const datos = {
    ...resultado,
    timestamp: new Date().toISOString(),
    temaId
  };
  localStorage.setItem(clave, JSON.stringify(datos));
};

// Función para obtener último resultado
export const obtenerUltimoResultado = (temaId: string): {
  correctas: number;
  total: number;
  puntaje: number;
  timestamp: string;
  temaId: string;
  grade: string;
} | null => {
  const clave = `score:computacion:${temaId}`;
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
};
