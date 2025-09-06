// Estructura de datos para contenido adaptado por grado

export interface GradeContent {
  temas: {
    id: string;
    nombre: string;
    descripcion: string;
    videos: {
      id: string;
      titulo: string;
      duracion: string;
      url: string;
      descripcion: string;
    }[];
    preguntas: {
      id: number;
      pregunta: string;
      opciones: string[];
      respuestaCorrecta: number;
    }[];
    sosContent: {
      titulo: string;
      explicacion: string;
      imagen: string;
      audio: string;
    }[];
    pistas: string[][];
    explicacionVoz: string;
    audioRadio: {
      titulo: string;
      duracion: string;
      archivo: string;
    }[];
  }[];
}

export interface GradeData {
  [grade: string]: GradeContent;
}

// Datos para Matemáticas por grado
export const matematicasByGrade: GradeData = {
  '1': {
    temas: [
      {
        id: 'sumas-restas-20',
        nombre: 'Sumas y restas hasta 20',
        descripcion: 'Aprende a sumar y restar números hasta 20',
        videos: [
          {
            id: 'sumas-1',
            titulo: 'Sumando hasta 20',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a sumar números pequeños'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuánto es 5 + 3?',
            opciones: ['7', '8', '9', '10'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuánto es 12 - 4?',
            opciones: ['6', '7', '8', '9'],
            respuestaCorrecta: 2
          },
          {
            id: 3,
            pregunta: '¿Cuánto es 7 + 6?',
            opciones: ['12', '13', '14', '15'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Cuánto es 15 - 8?',
            opciones: ['6', '7', '8', '9'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuánto es 9 + 9?',
            opciones: ['16', '17', '18', '19'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Usa tus dedos para sumar',
            explicacion: 'Cuenta con tus dedos para sumar números pequeños. Es fácil y divertido.',
            imagen: 'dedos-sumar.svg',
            audio: 'sos-mate-1-1.mp3'
          },
          {
            titulo: 'Dibuja los números',
            explicacion: 'Dibuja los números y cuenta los objetos para resolver las sumas.',
            imagen: 'numeros-dibujo.svg',
            audio: 'sos-mate-1-2.mp3'
          },
          {
            titulo: 'Practica con objetos',
            explicacion: 'Usa juguetes, lápices o cualquier cosa para practicar sumas y restas.',
            imagen: 'objetos-contar.svg',
            audio: 'sos-mate-1-3.mp3'
          }
        ],
        pistas: [
          ['Usa tus dedos para contar', 'Empieza con el número más grande', 'Cuenta hacia adelante'],
          ['Dibuja los números', 'Cuenta los objetos', 'Practica escribiendo'],
          ['Busca objetos pequeños', 'Cuenta uno por uno', 'Dile el resultado en voz alta']
        ],
        explicacionVoz: 'Las sumas y restas hasta 20 son las primeras operaciones que aprendemos. Para sumar, juntamos cantidades. Para restar, quitamos cantidades. Usa tus dedos, dibuja los números o cuenta objetos para resolver los problemas.',
        audioRadio: [
          {
            titulo: 'Canción de sumas',
            duracion: '1:30',
            archivo: 'audio-sumas-20.mp3'
          },
          {
            titulo: 'Rimas de restas',
            duracion: '1:45',
            archivo: 'audio-restas-20.mp3'
          }
        ]
      },
      {
        id: 'figuras-patrones',
        nombre: 'Figuras y patrones',
        descripcion: 'Reconoce figuras geométricas y crea patrones',
        videos: [
          {
            id: 'figuras-1',
            titulo: 'Formas básicas',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre círculos, cuadrados y triángulos'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué forma tiene una pelota?',
            opciones: ['Cuadrado', 'Círculo', 'Triángulo', 'Rectángulo'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuántos lados tiene un cuadrado?',
            opciones: ['2', '3', '4', '5'],
            respuestaCorrecta: 2
          },
          {
            id: 3,
            pregunta: '¿Qué viene después en el patrón: rojo, azul, rojo, azul, ___?',
            opciones: ['Verde', 'Rojo', 'Azul', 'Amarillo'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Qué forma tiene una puerta?',
            opciones: ['Círculo', 'Triángulo', 'Rectángulo', 'Cuadrado'],
            respuestaCorrecta: 2
          },
          {
            id: 5,
            pregunta: '¿Cuántos lados tiene un triángulo?',
            opciones: ['2', '3', '4', '5'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Busca figuras en tu casa',
            explicacion: 'Mira a tu alrededor y encuentra círculos, cuadrados y triángulos.',
            imagen: 'figuras-casa.svg',
            audio: 'sos-mate-1-4.mp3'
          },
          {
            titulo: 'Dibuja las formas',
            explicacion: 'Practica dibujando círculos, cuadrados y triángulos en papel.',
            imagen: 'figuras-dibujar.svg',
            audio: 'sos-mate-1-5.mp3'
          },
          {
            titulo: 'Crea patrones con colores',
            explicacion: 'Usa crayones para crear patrones de colores: rojo, azul, rojo, azul.',
            imagen: 'patrones-colores.svg',
            audio: 'sos-mate-1-6.mp3'
          }
        ],
        pistas: [
          ['Busca objetos redondos', 'Mira ventanas y puertas', 'Cuenta los lados'],
          ['Dibuja círculos grandes', 'Haz cuadrados perfectos', 'Practica triángulos'],
          ['Usa colores diferentes', 'Repite el patrón', 'Dile el patrón en voz alta']
        ],
        explicacionVoz: 'Las figuras geométricas están en todas partes. Los círculos son redondos como una pelota. Los cuadrados tienen 4 lados iguales. Los triángulos tienen 3 lados. Los patrones son secuencias que se repiten, como rojo, azul, rojo, azul.',
        audioRadio: [
          {
            titulo: 'Canción de las formas',
            duracion: '1:30',
            archivo: 'audio-figuras-basicas.mp3'
          },
          {
            titulo: 'Patrones musicales',
            duracion: '1:45',
            archivo: 'audio-patrones-colores.mp3'
          }
        ]
      },
      {
        id: 'medir-unidades',
        nombre: 'Medir con unidades no estándar',
        descripcion: 'Aprende a medir usando objetos como reglas',
        videos: [
          {
            id: 'medir-1',
            titulo: 'Midamos con pasos',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Usa tus pasos para medir distancias'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Con qué podemos medir la longitud de una mesa?',
            opciones: ['Con agua', 'Con pasos', 'Con sonido', 'Con olores'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuál es más largo: 3 pasos o 5 pasos?',
            opciones: ['3 pasos', '5 pasos', 'Son iguales', 'No sé'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Con qué podemos medir el ancho de un libro?',
            opciones: ['Con dedos', 'Con agua', 'Con sonido', 'Con olores'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Cuál es más corto: 2 dedos o 4 dedos?',
            opciones: ['2 dedos', '4 dedos', 'Son iguales', 'No sé'],
            respuestaCorrecta: 0
          },
          {
            id: 5,
            pregunta: '¿Para qué sirve medir?',
            opciones: ['Para jugar', 'Para saber el tamaño', 'Para comer', 'Para dormir'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Usa tu cuerpo para medir',
            explicacion: 'Usa tus pasos, dedos y brazos para medir objetos.',
            imagen: 'medir-cuerpo.svg',
            audio: 'sos-mate-1-7.mp3'
          },
          {
            titulo: 'Compara tamaños',
            explicacion: 'Dice cuál objeto es más largo, más corto o igual.',
            imagen: 'comparar-tamaños.svg',
            audio: 'sos-mate-1-8.mp3'
          },
          {
            titulo: 'Practica midiendo',
            explicacion: 'Mide tu mesa, tu cama y tus juguetes con pasos.',
            imagen: 'practicar-medir.svg',
            audio: 'sos-mate-1-9.mp3'
          }
        ],
        pistas: [
          ['Usa tus pasos', 'Cuenta los dedos', 'Mide con tus brazos'],
          ['Mira cuál es más largo', 'Compara los tamaños', 'Dice cuál es más grande'],
          ['Mide objetos reales', 'Cuenta los pasos', 'Practica en casa']
        ],
        explicacionVoz: 'Medir es saber qué tan grande o pequeño es algo. Podemos usar nuestro cuerpo para medir: pasos para distancias largas, dedos para cosas pequeñas, y brazos para objetos medianos. Es importante comparar tamaños para entender mejor el mundo.',
        audioRadio: [
          {
            titulo: 'Canción de medir',
            duracion: '1:30',
            archivo: 'audio-medir-unidades.mp3'
          },
          {
            titulo: 'Comparando tamaños',
            duracion: '1:45',
            archivo: 'audio-comparar-tamaños.mp3'
          }
        ]
      }
    ]
  },
  '6': {
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
          }
        ],
        sosContent: [
          {
            titulo: 'Identifica las partes',
            explicacion: 'Una fracción tiene dos partes: el numerador (arriba) y el denominador (abajo).',
            imagen: 'fraccion-partes.svg',
            audio: 'sos-mate-6-1.mp3'
          },
          {
            titulo: 'Dibuja la fracción',
            explicacion: 'Dibuja un círculo o rectángulo y divídelo en partes iguales según el denominador.',
            imagen: 'fraccion-dibujo.svg',
            audio: 'sos-mate-6-2.mp3'
          },
          {
            titulo: 'Compara con objetos',
            explicacion: 'Usa una pizza, chocolate o cualquier cosa que puedas dividir en partes.',
            imagen: 'fraccion-objetos.svg',
            audio: 'sos-mate-6-3.mp3'
          }
        ],
        pistas: [
          ['El numerador está arriba', 'El denominador está abajo', 'El denominador dice en cuántas partes se divide'],
          ['Dibuja un círculo', 'Divídelo en partes iguales', 'Colorea las partes que indica el numerador'],
          ['Piensa en una pizza', '¿En cuántas rebanadas la divides?', '¿Cuántas rebanadas tomas?']
        ],
        explicacionVoz: 'Las fracciones son como dividir algo en partes iguales. Si tienes una pizza y la divides en 4 partes iguales, cada parte es 1/4 de la pizza. Si tomas 2 partes, tienes 2/4 de la pizza, que es lo mismo que 1/2. El número de arriba (numerador) dice cuántas partes tomas, y el de abajo (denominador) dice en cuántas partes se divide el todo.',
        audioRadio: [
          {
            titulo: 'Explicación de fracciones',
            duracion: '2:00',
            archivo: 'audio-fracciones-explicacion.mp3'
          },
          {
            titulo: 'Ejemplos con pizza',
            duracion: '1:45',
            archivo: 'audio-fracciones-pizza.mp3'
          }
        ]
      }
    ]
  },
  '9': {
    temas: [
      {
        id: 'algebra-basica',
        nombre: 'Álgebra básica',
        descripcion: 'Introducción a las ecuaciones y expresiones algebraicas',
        videos: [
          {
            id: 'algebra-1',
            titulo: '¿Qué es el álgebra?',
            duracion: '6:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Conceptos básicos del álgebra y las variables'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuál es el valor de x en la ecuación x + 5 = 12?',
            opciones: ['6', '7', '8', '17'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Qué significa 2x?',
            opciones: ['x + 2', 'x × 2', 'x - 2', 'x ÷ 2'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Cuál es el resultado de 3x + 2x?',
            opciones: ['5x', '6x', '5x²', '6x²'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Qué es una variable?',
            opciones: ['Un número fijo', 'Una letra que representa un número', 'Una operación', 'Un resultado'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuál es el valor de y en 2y = 14?',
            opciones: ['6', '7', '8', '12'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Identifica la variable',
            explicacion: 'Busca la letra (x, y, z) en la ecuación. Esa es tu incógnita.',
            imagen: 'algebra-variable.svg',
            audio: 'sos-mate-9-1.mp3'
          },
          {
            titulo: 'Aísla la variable',
            explicacion: 'Usa operaciones inversas para dejar sola la variable en un lado.',
            imagen: 'algebra-aislar.svg',
            audio: 'sos-mate-9-2.mp3'
          },
          {
            titulo: 'Verifica tu respuesta',
            explicacion: 'Sustituye el valor encontrado en la ecuación original para comprobar.',
            imagen: 'algebra-verificar.svg',
            audio: 'sos-mate-9-3.mp3'
          }
        ],
        pistas: [
          ['Busca la letra en la ecuación', 'x, y, z son variables comunes', 'La variable es lo que no conoces'],
          ['Si está sumando, resta', 'Si está multiplicando, divide', 'Haz lo mismo en ambos lados'],
          ['Reemplaza la variable con tu respuesta', 'Calcula ambos lados', 'Deben ser iguales']
        ],
        explicacionVoz: 'El álgebra es como resolver un misterio matemático. Usamos letras como x o y para representar números que no conocemos. Por ejemplo, si x + 5 = 12, necesitamos encontrar qué número, cuando le sumamos 5, nos da 12. La respuesta es 7, porque 7 + 5 = 12. El álgebra nos ayuda a resolver problemas más complejos usando estas "letras misteriosas".',
        audioRadio: [
          {
            titulo: 'Introducción al álgebra',
            duracion: '2:30',
            archivo: 'audio-algebra-intro.mp3'
          },
          {
            titulo: 'Resolviendo ecuaciones',
            duracion: '2:15',
            archivo: 'audio-algebra-ecuaciones.mp3'
          }
        ]
      }
    ]
  }
};

// Datos para Español por grado
export const espanolByGrade: GradeData = {
  '1': {
    temas: [
      {
        id: 'conciencia-fonologica',
        nombre: 'Conciencia fonológica y sílabas',
        descripcion: 'Aprende a identificar sonidos y dividir palabras en sílabas',
        videos: [
          {
            id: 'fonologia-1',
            titulo: 'Los sonidos de las palabras',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Identifica los sonidos que forman las palabras'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuántas sílabas tiene la palabra "casa"?',
            opciones: ['1', '2', '3', '4'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Con qué sonido empieza "mesa"?',
            opciones: ['M', 'S', 'A', 'E'],
            respuestaCorrecta: 0
          },
          {
            id: 3,
            pregunta: '¿Cuántas sílabas tiene "elefante"?',
            opciones: ['2', '3', '4', '5'],
            respuestaCorrecta: 2
          },
          {
            id: 4,
            pregunta: '¿Qué sonido hace la letra M?',
            opciones: ['Mmm', 'Sss', 'Rrr', 'Ttt'],
            respuestaCorrecta: 0
          },
          {
            id: 5,
            pregunta: '¿Cuántas sílabas tiene "sol"?',
            opciones: ['1', '2', '3', '4'],
            respuestaCorrecta: 0
          }
        ],
        sosContent: [
          {
            titulo: 'Escucha los sonidos',
            explicacion: 'Presta atención a los sonidos que forman cada palabra.',
            imagen: 'sonidos-escuchar.svg',
            audio: 'sos-espanol-1-1.mp3'
          },
          {
            titulo: 'Golpea las sílabas',
            explicacion: 'Da palmadas por cada sílaba: ca-sa (2 palmadas).',
            imagen: 'silabas-palmadas.svg',
            audio: 'sos-espanol-1-2.mp3'
          },
          {
            titulo: 'Dibuja las sílabas',
            explicacion: 'Dibuja una línea por cada sílaba: ca | sa.',
            imagen: 'silabas-dibujar.svg',
            audio: 'sos-espanol-1-3.mp3'
          }
        ],
        pistas: [
          ['Escucha cada sonido', 'Pronuncia despacio', 'Cuenta los sonidos'],
          ['Da una palmada por sílaba', 'Pronuncia ca-sa', 'Cuenta las palmadas'],
          ['Dibuja líneas', 'Una línea por sílaba', 'Practica con más palabras']
        ],
        explicacionVoz: 'La conciencia fonológica es la capacidad de identificar y manipular los sonidos del lenguaje. Las sílabas son las partes en que se divide una palabra. Por ejemplo, "casa" tiene dos sílabas: ca-sa. Aprender esto nos ayuda a leer y escribir mejor.',
        audioRadio: [
          {
            titulo: 'Sonidos y sílabas',
            duracion: '1:30',
            archivo: 'audio-conciencia-fonologica.mp3'
          },
          {
            titulo: 'Palmadas por sílabas',
            duracion: '1:45',
            archivo: 'audio-silabas-palmadas.mp3'
          }
        ]
      },
      {
        id: 'lectura-oraciones',
        nombre: 'Lectura de oraciones cortas',
        descripcion: 'Aprende a leer oraciones simples con palabras conocidas',
        videos: [
          {
            id: 'lectura-1',
            titulo: 'Leyendo oraciones',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Lee oraciones cortas paso a paso'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué dice esta oración: "Mamá come pan"?',
            opciones: ['Mamá duerme', 'Mamá come pan', 'Mamá juega', 'Mamá lee'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuántas palabras tiene "El gato corre"?',
            opciones: ['2', '3', '4', '5'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué palabra falta: "Papá ___ en el auto"?',
            opciones: ['come', 'duerme', 'va', 'lee'],
            respuestaCorrecta: 2
          },
          {
            id: 4,
            pregunta: '¿Cuál es la primera palabra de "La casa es grande"?',
            opciones: ['La', 'casa', 'es', 'grande'],
            respuestaCorrecta: 0
          },
          {
            id: 5,
            pregunta: '¿Qué dice "El perro ladra"?',
            opciones: ['El perro come', 'El perro ladra', 'El perro duerme', 'El perro corre'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Lee palabra por palabra',
            explicacion: 'Lee cada palabra despacio y luego toda la oración.',
            imagen: 'lectura-palabra-palabra.svg',
            audio: 'sos-espanol-1-4.mp3'
          },
          {
            titulo: 'Señala mientras lees',
            explicacion: 'Señala cada palabra con tu dedo mientras la lees.',
            imagen: 'lectura-senalar.svg',
            audio: 'sos-espanol-1-5.mp3'
          },
          {
            titulo: 'Dibuja lo que lees',
            explicacion: 'Dibuja lo que dice la oración para entender mejor.',
            imagen: 'lectura-dibujar.svg',
            audio: 'sos-espanol-1-6.mp3'
          }
        ],
        pistas: [
          ['Lee despacio', 'Una palabra a la vez', 'Pronuncia bien cada palabra'],
          ['Usa tu dedo', 'Señala cada palabra', 'Sigue con el dedo'],
          ['Piensa en la imagen', 'Dibuja lo que lees', 'Relaciona palabras con dibujos']
        ],
        explicacionVoz: 'Leer oraciones cortas es el primer paso para entender textos. Empezamos leyendo palabra por palabra, luego juntamos las palabras para formar una idea completa. Es importante leer despacio y entender lo que dice cada oración.',
        audioRadio: [
          {
            titulo: 'Oraciones simples',
            duracion: '1:30',
            archivo: 'audio-oraciones-cortas.mp3'
          },
          {
            titulo: 'Leyendo paso a paso',
            duracion: '1:45',
            archivo: 'audio-lectura-paso-paso.mp3'
          }
        ]
      },
      {
        id: 'signos-basicos',
        nombre: 'Signos básicos (. ? ¡!)',
        descripcion: 'Aprende a usar el punto, signos de interrogación y exclamación',
        videos: [
          {
            id: 'signos-1',
            titulo: 'Los signos de puntuación',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Conoce el punto, interrogación y exclamación'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué signo se usa al final de una oración normal?',
            opciones: ['?', '!', '.', ','],
            respuestaCorrecta: 2
          },
          {
            id: 2,
            pregunta: '¿Qué signo se usa para hacer una pregunta?',
            opciones: ['.', '?', '!', ','],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué signo se usa para mostrar sorpresa?',
            opciones: ['.', '?', '!', ','],
            respuestaCorrecta: 2
          },
          {
            id: 4,
            pregunta: '¿Cómo termina "¿Cómo estás"?',
            opciones: ['.', '?', '!', ','],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cómo termina "¡Qué bonito día"?',
            opciones: ['.', '?', '!', ','],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Observa los signos',
            explicacion: 'Mira los signos al final de las oraciones y observa cómo cambian el significado.',
            imagen: 'signos-observar.svg',
            audio: 'sos-espanol-1-7.mp3'
          },
          {
            titulo: 'Practica con tu voz',
            explicacion: 'Lee las oraciones con diferentes tonos según el signo.',
            imagen: 'signos-voz.svg',
            audio: 'sos-espanol-1-8.mp3'
          },
          {
            titulo: 'Dibuja los signos',
            explicacion: 'Practica escribiendo punto, interrogación y exclamación.',
            imagen: 'signos-dibujar.svg',
            audio: 'sos-espanol-1-9.mp3'
          }
        ],
        pistas: [
          ['Mira el final de la oración', 'Observa el signo', 'Piensa en el significado'],
          ['Lee con tono normal', 'Lee con tono de pregunta', 'Lee con tono de sorpresa'],
          ['Dibuja un punto', 'Dibuja ?', 'Dibuja !']
        ],
        explicacionVoz: 'Los signos de puntuación nos ayudan a entender cómo se debe leer una oración. El punto (.) termina una oración normal. El signo de interrogación (?) se usa para preguntas. El signo de exclamación (!) se usa para mostrar sorpresa o emoción.',
        audioRadio: [
          {
            titulo: 'Signos de puntuación',
            duracion: '1:30',
            archivo: 'audio-signos-puntuacion.mp3'
          },
          {
            titulo: 'Tonos de voz',
            duracion: '1:45',
            archivo: 'audio-tonos-voz.mp3'
          }
        ]
      }
    ]
  },
  '2': {
    temas: [
      {
        id: 'comprension-literal-basica',
        nombre: 'Comprensión literal básica',
        descripcion: 'Aprende a entender lo que lees literalmente',
        videos: [
          {
            id: 'comprension-1',
            titulo: 'Entendiendo lo que leo',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende comprensión literal'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es comprensión literal?',
            opciones: ['Entender lo que dice el texto', 'Inventar historias', 'Dibujar', 'Cantar'],
            respuestaCorrecta: 0
          },
          {
            id: 2,
            pregunta: '¿Qué hace el personaje en la historia?',
            opciones: ['Lo que dice el texto', 'Lo que yo pienso', 'Lo que me gusta', 'Lo que sueño'],
            respuestaCorrecta: 0
          },
          {
            id: 3,
            pregunta: '¿Dónde ocurre la historia?',
            opciones: ['En mi casa', 'Donde dice el texto', 'En la luna', 'En el mar'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Cuándo ocurre la historia?',
            opciones: ['Ayer', 'Cuando dice el texto', 'Mañana', 'Nunca'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Quién es el personaje principal?',
            opciones: ['Yo', 'El que dice el texto', 'Mi mamá', 'Mi perro'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Lee despacio',
            explicacion: 'Lee cada palabra despacio para entender mejor.',
            imagen: 'leer-despacio.svg',
            audio: 'sos-espanol-2-1.mp3'
          },
          {
            titulo: 'Busca las respuestas',
            explicacion: 'Busca en el texto las respuestas a las preguntas.',
            imagen: 'buscar-respuestas.svg',
            audio: 'sos-espanol-2-2.mp3'
          },
          {
            titulo: 'Subraya lo importante',
            explicacion: 'Subraya las partes importantes del texto.',
            imagen: 'subrayar-importante.svg',
            audio: 'sos-espanol-2-3.mp3'
          }
        ],
        pistas: [
          ['Lee palabra por palabra', 'No te apresures', 'Entiende cada frase'],
          ['Mira el texto', 'Busca las palabras clave', 'Encuentra la respuesta'],
          ['Usa un lápiz', 'Marca lo importante', 'Revisa lo que subrayaste']
        ],
        explicacionVoz: 'La comprensión literal es entender exactamente lo que dice el texto, sin inventar o imaginar cosas que no están escritas. Es como ser un detective que busca pistas en las palabras.',
        audioRadio: [
          {
            titulo: 'Comprensión literal',
            duracion: '1:30',
            archivo: 'audio-comprension-literal.mp3'
          },
          {
            titulo: 'Buscando respuestas',
            duracion: '1:45',
            archivo: 'audio-buscar-respuestas.mp3'
          }
        ]
      },
      {
        id: 'clases-palabras-comunes',
        nombre: 'Clases de palabras comunes',
        descripcion: 'Aprende sobre sustantivos, verbos y adjetivos',
        videos: [
          {
            id: 'clases-1',
            titulo: 'Tipos de palabras',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sustantivos, verbos y adjetivos'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es un sustantivo?',
            opciones: ['Una acción', 'Una persona, lugar o cosa', 'Una cualidad', 'Una pregunta'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Qué es un verbo?',
            opciones: ['Una persona', 'Una acción', 'Una cualidad', 'Un lugar'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué es un adjetivo?',
            opciones: ['Una acción', 'Una persona', 'Una cualidad', 'Un lugar'],
            respuestaCorrecta: 2
          },
          {
            id: 4,
            pregunta: '¿Cuál es un sustantivo?',
            opciones: ['Corre', 'Casa', 'Bonito', 'Rápido'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuál es un verbo?',
            opciones: ['Perro', 'Camina', 'Grande', 'Azul'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Busca sustantivos',
            explicacion: 'Busca palabras que nombran personas, animales, lugares o cosas.',
            imagen: 'buscar-sustantivos.svg',
            audio: 'sos-espanol-2-4.mp3'
          },
          {
            titulo: 'Busca verbos',
            explicacion: 'Busca palabras que dicen qué hace alguien o algo.',
            imagen: 'buscar-verbos.svg',
            audio: 'sos-espanol-2-5.mp3'
          },
          {
            titulo: 'Busca adjetivos',
            explicacion: 'Busca palabras que describen cómo es algo.',
            imagen: 'buscar-adjetivos.svg',
            audio: 'sos-espanol-2-6.mp3'
          }
        ],
        pistas: [
          ['¿Quién? ¿Qué?', 'Personas, animales, cosas', 'Nombres de lugares'],
          ['¿Qué hace?', 'Acciones', 'Movimientos'],
          ['¿Cómo es?', 'Cualidades', 'Características']
        ],
        explicacionVoz: 'Las palabras se dividen en clases. Los sustantivos nombran cosas (casa, perro, mamá). Los verbos dicen acciones (corre, come, duerme). Los adjetivos describen cualidades (grande, bonito, rápido).',
        audioRadio: [
          {
            titulo: 'Sustantivos',
            duracion: '1:30',
            archivo: 'audio-sustantivos.mp3'
          },
          {
            titulo: 'Verbos y adjetivos',
            duracion: '1:45',
            archivo: 'audio-verbos-adjetivos.mp3'
          }
        ]
      },
      {
        id: 'mayusculas-punto',
        nombre: 'Mayúsculas y punto',
        descripcion: 'Aprende cuándo usar mayúsculas y el punto',
        videos: [
          {
            id: 'mayusculas-1',
            titulo: 'Mayúsculas y puntuación',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende mayúsculas y punto'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuándo usamos mayúscula?',
            opciones: ['Al final de la oración', 'Al principio de la oración', 'En el medio', 'Nunca'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuándo usamos punto?',
            opciones: ['Al principio', 'Al final de la oración', 'En el medio', 'Siempre'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué va después del punto?',
            opciones: ['Minúscula', 'Mayúscula', 'Nada', 'Un espacio'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Cuál está bien escrito?',
            opciones: ['mamá come pan.', 'Mamá come pan.', 'Mamá come pan', 'mamá come pan'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Dónde va el punto?',
            opciones: ['Antes de la oración', 'Después de la oración', 'En el medio', 'No se usa'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Empieza con mayúscula',
            explicacion: 'La primera letra de cada oración debe ser mayúscula.',
            imagen: 'mayuscula-inicio.svg',
            audio: 'sos-espanol-2-7.mp3'
          },
          {
            titulo: 'Termina con punto',
            explicacion: 'Cada oración debe terminar con un punto.',
            imagen: 'punto-final.svg',
            audio: 'sos-espanol-2-8.mp3'
          },
          {
            titulo: 'Revisa tu escritura',
            explicacion: 'Lee lo que escribiste y verifica mayúsculas y puntos.',
            imagen: 'revisar-escritura.svg',
            audio: 'sos-espanol-2-9.mp3'
          }
        ],
        pistas: [
          ['Primera letra grande', 'Al empezar oración', 'Nombres propios'],
          ['Al final de oración', 'Después de la última palabra', 'Antes del espacio'],
          ['Lee en voz alta', 'Verifica mayúsculas', 'Verifica puntos']
        ],
        explicacionVoz: 'Las mayúsculas se usan al principio de cada oración y en nombres propios. El punto se usa al final de cada oración para indicar que terminó. Esto hace que la escritura sea más clara.',
        audioRadio: [
          {
            titulo: 'Mayúsculas',
            duracion: '1:30',
            archivo: 'audio-mayusculas.mp3'
          },
          {
            titulo: 'El punto',
            duracion: '1:45',
            archivo: 'audio-punto.mp3'
          }
        ]
      }
    ]
  },
  '6': {
    temas: [
      {
        id: 'acentuacion',
        nombre: 'Acentuación',
        descripcion: 'Reglas básicas de acentuación en español',
        videos: [
          {
            id: 'acento-1',
            titulo: '¿Cuándo usar tilde?',
            duracion: '6:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende las reglas de acentuación'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuál es la sílaba tónica de "casa"?',
            opciones: ['ca', 'sa', 'cas', 'asa'],
            respuestaCorrecta: 0
          },
          {
            id: 2,
            pregunta: '¿Qué palabra lleva tilde?',
            opciones: ['casa', 'mesa', 'café', 'gato'],
            respuestaCorrecta: 2
          },
          {
            id: 3,
            pregunta: '¿Cuántas sílabas tiene "árbol"?',
            opciones: ['1', '2', '3', '4'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Qué tipo de palabra es "casa"?',
            opciones: ['Aguda', 'Grave', 'Esdrújula', 'Sobreesdrújula'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuál palabra es aguda?',
            opciones: ['casa', 'mesa', 'corazón', 'árbol'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Cuenta las sílabas',
            explicacion: 'Divide la palabra en sílabas. Cada vocal forma una sílaba.',
            imagen: 'acento-silabas.svg',
            audio: 'sos-espanol-6-1.mp3'
          },
          {
            titulo: 'Encuentra la sílaba tónica',
            explicacion: 'La sílaba que suena más fuerte es la tónica.',
            imagen: 'acento-tonica.svg',
            audio: 'sos-espanol-6-2.mp3'
          },
          {
            titulo: 'Aplica las reglas',
            explicacion: 'Agudas: tilde si terminan en n, s o vocal. Graves: tilde si NO terminan en n, s o vocal.',
            imagen: 'acento-reglas.svg',
            audio: 'sos-espanol-6-3.mp3'
          }
        ],
        pistas: [
          ['ca-sa = 2 sílabas', 'me-sa = 2 sílabas', 'á-rbol = 2 sílabas'],
          ['En "casa" suena más fuerte "ca"', 'En "mesa" suena más fuerte "me"', 'En "árbol" suena más fuerte "ár"'],
          ['Agudas terminan en n, s, vocal', 'Graves NO terminan en n, s, vocal', 'Esdrújulas siempre llevan tilde']
        ],
        explicacionVoz: 'La acentuación es como la música de las palabras. Cada palabra tiene una sílaba que suena más fuerte, llamada sílaba tónica. Las palabras se clasifican en agudas (última sílaba fuerte), graves (penúltima sílaba fuerte) y esdrújulas (antepenúltima sílaba fuerte). Las reglas de tilde nos ayudan a saber cuándo escribir el acento gráfico.',
        audioRadio: [
          {
            titulo: 'Reglas de acentuación',
            duracion: '2:00',
            archivo: 'audio-acentuacion-reglas.mp3'
          },
          {
            titulo: 'Ejemplos de palabras',
            duracion: '1:45',
            archivo: 'audio-acentuacion-ejemplos.mp3'
          }
        ]
      }
    ]
  }
};

// Datos para Ciencias Sociales por grado
export const cienciasSocialesByGrade: GradeData = {
  '1': {
    temas: [
      {
        id: 'mi-familia-comunidad',
        nombre: 'Mi familia y comunidad',
        descripcion: 'Conoce los miembros de tu familia y las personas de tu comunidad',
        videos: [
          {
            id: 'familia-1',
            titulo: 'Mi familia y mi comunidad',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre tu familia y las personas que viven cerca'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Quién es el papá de tu papá?',
            opciones: ['Tu tío', 'Tu abuelo', 'Tu primo', 'Tu hermano'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Quién vive en tu comunidad?',
            opciones: ['Solo tu familia', 'Muchas familias', 'Solo niños', 'Solo adultos'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué hace un doctor en la comunidad?',
            opciones: ['Enseña', 'Cura enfermos', 'Vende comida', 'Arregla carros'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Qué hace un maestro en la comunidad?',
            opciones: ['Cura enfermos', 'Enseña a los niños', 'Vende comida', 'Arregla carros'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Por qué es importante la comunidad?',
            opciones: ['Para jugar', 'Para ayudarnos', 'Para dormir', 'Para comer'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Dibuja tu familia',
            explicacion: 'Haz un dibujo de tu familia. Incluye a papá, mamá, hermanos y abuelos.',
            imagen: 'familia-dibujo.svg',
            audio: 'sos-sociales-1-1.mp3'
          },
          {
            titulo: 'Dibuja tu comunidad',
            explicacion: 'Dibuja las casas, la escuela, el hospital y otros lugares de tu comunidad.',
            imagen: 'comunidad-dibujo.svg',
            audio: 'sos-sociales-1-2.mp3'
          },
          {
            titulo: 'Habla con tus vecinos',
            explicacion: 'Saluda a tus vecinos y pregúntales sobre su trabajo.',
            imagen: 'comunidad-vecinos.svg',
            audio: 'sos-sociales-1-3.mp3'
          }
        ],
        pistas: [
          ['Dibuja a cada persona', 'Escribe sus nombres', 'Colorea el dibujo'],
          ['Dibuja casas', 'Dibuja la escuela', 'Dibuja el hospital'],
          ['Saluda con respeto', 'Haz preguntas', 'Escucha las respuestas']
        ],
        explicacionVoz: 'La familia es el grupo más importante en nuestras vidas. La comunidad son todas las personas que viven cerca de nosotros. En la comunidad hay doctores que nos curan, maestros que nos enseñan, y muchas otras personas que nos ayudan. Todos trabajamos juntos para que la comunidad sea un buen lugar para vivir.',
        audioRadio: [
          {
            titulo: 'Mi familia',
            duracion: '1:30',
            archivo: 'audio-familia-miembros.mp3'
          },
          {
            titulo: 'Mi comunidad',
            duracion: '1:45',
            archivo: 'audio-comunidad-servicios.mp3'
          }
        ]
      },
      {
        id: 'ubicacion-direcciones',
        nombre: 'Ubicación y direcciones simples',
        descripcion: 'Aprende a ubicarte y dar direcciones básicas',
        videos: [
          {
            id: 'ubicacion-1',
            titulo: '¿Dónde estoy?',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a ubicarte en tu casa y comunidad'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Dónde está tu habitación en tu casa?',
            opciones: ['Arriba', 'Abajo', 'En el centro', 'Afuera'],
            respuestaCorrecta: 0
          },
          {
            id: 2,
            pregunta: '¿Cómo llegas de tu casa a la escuela?',
            opciones: ['Derecho', 'Izquierda', 'Derecha', 'Depende del camino'],
            respuestaCorrecta: 3
          },
          {
            id: 3,
            pregunta: '¿Qué está arriba de tu cabeza?',
            opciones: ['El suelo', 'El techo', 'Las paredes', 'La puerta'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Qué está abajo de tus pies?',
            opciones: ['El techo', 'El suelo', 'Las paredes', 'La ventana'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Para qué sirven las direcciones?',
            opciones: ['Para jugar', 'Para no perderse', 'Para dormir', 'Para comer'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Mira a tu alrededor',
            explicacion: 'Observa qué hay arriba, abajo, a la derecha y a la izquierda.',
            imagen: 'ubicacion-mirar.svg',
            audio: 'sos-sociales-1-4.mp3'
          },
          {
            titulo: 'Camina por tu casa',
            explicacion: 'Camina de una habitación a otra y di cómo llegas.',
            imagen: 'ubicacion-caminar.svg',
            audio: 'sos-sociales-1-5.mp3'
          },
          {
            titulo: 'Dibuja un mapa simple',
            explicacion: 'Dibuja tu casa y marca dónde está cada habitación.',
            imagen: 'ubicacion-mapa.svg',
            audio: 'sos-sociales-1-6.mp3'
          }
        ],
        pistas: [
          ['Mira hacia arriba', 'Mira hacia abajo', 'Mira a los lados'],
          ['Dice "primero voy a..."', 'Luego "después voy a..."', 'Finalmente "llego a..."'],
          ['Dibuja las habitaciones', 'Marca las puertas', 'Dibuja el camino']
        ],
        explicacionVoz: 'Ubicarse es saber dónde estás y cómo llegar a otros lugares. Usamos palabras como arriba, abajo, derecha, izquierda, cerca y lejos. Las direcciones nos ayudan a no perdernos y a llegar donde queremos ir. Es importante saber cómo llegar de un lugar a otro.',
        audioRadio: [
          {
            titulo: 'Direcciones básicas',
            duracion: '1:30',
            archivo: 'audio-direcciones-basicas.mp3'
          },
          {
            titulo: 'Ubicándome en casa',
            duracion: '1:45',
            archivo: 'audio-ubicacion-casa.mp3'
          }
        ]
      },
      {
        id: 'normas-valores',
        nombre: 'Normas y valores',
        descripcion: 'Aprende sobre las reglas importantes y valores en la familia y escuela',
        videos: [
          {
            id: 'normas-1',
            titulo: 'Las reglas importantes',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Conoce las normas y valores que nos ayudan a convivir'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es una norma?',
            opciones: ['Un juguete', 'Una regla', 'Una comida', 'Un color'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuál es una norma en la escuela?',
            opciones: ['Jugar todo el día', 'Escuchar al maestro', 'Gritar mucho', 'No hacer caso'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué es el respeto?',
            opciones: ['Gritar a otros', 'Tratar bien a otros', 'No hacer caso', 'Ser grosero'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Por qué son importantes las normas?',
            opciones: ['Para jugar', 'Para convivir bien', 'Para dormir', 'Para comer'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Qué pasa si no seguimos las normas?',
            opciones: ['Todo está bien', 'Puede haber problemas', 'Es divertido', 'No pasa nada'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Observa las reglas',
            explicacion: 'Mira las reglas que hay en tu casa y en la escuela.',
            imagen: 'normas-observar.svg',
            audio: 'sos-sociales-1-7.mp3'
          },
          {
            titulo: 'Practica el respeto',
            explicacion: 'Trata bien a tus compañeros y escucha cuando hablan.',
            imagen: 'valores-respeto.svg',
            audio: 'sos-sociales-1-8.mp3'
          },
          {
            titulo: 'Ayuda a otros',
            explicacion: 'Ayuda a tus compañeros cuando necesiten algo.',
            imagen: 'valores-ayuda.svg',
            audio: 'sos-sociales-1-9.mp3'
          }
        ],
        pistas: [
          ['Mira las reglas escritas', 'Escucha las reglas', 'Pregunta si no entiendes'],
          ['Habla con respeto', 'Escucha a otros', 'Espera tu turno'],
          ['Ofrece tu ayuda', 'Comparte tus cosas', 'Sé amable']
        ],
        explicacionVoz: 'Las normas son reglas que nos ayudan a convivir bien con otros. Los valores son principios importantes como el respeto, la honestidad y la solidaridad. Cuando seguimos las normas y practicamos buenos valores, todos podemos vivir mejor juntos en la familia, la escuela y la comunidad.',
        audioRadio: [
          {
            titulo: 'Normas en casa y escuela',
            duracion: '1:30',
            archivo: 'audio-normas-importantes.mp3'
          },
          {
            titulo: 'Valores importantes',
            duracion: '1:45',
            archivo: 'audio-valores-convivencia.mp3'
          }
        ]
      }
    ]
  },
  '2': {
    temas: [
      {
        id: 'simbolos-patrios-comunidad',
        nombre: 'Símbolos patrios y comunidad',
        descripcion: 'Conoce los símbolos patrios y su importancia en la comunidad',
        videos: [
          {
            id: 'simbolos-1',
            titulo: 'Símbolos patrios',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre los símbolos patrios'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cuál es el símbolo patrio más importante?',
            opciones: ['La bandera', 'El escudo', 'El himno', 'Todos son importantes'],
            respuestaCorrecta: 3
          },
          {
            id: 2,
            pregunta: '¿Qué colores tiene la bandera de Honduras?',
            opciones: ['Rojo, blanco y azul', 'Verde, blanco y rojo', 'Azul y blanco', 'Rojo y amarillo'],
            respuestaCorrecta: 2
          },
          {
            id: 3,
            pregunta: '¿Cuándo se canta el himno nacional?',
            opciones: ['Solo en la escuela', 'En actos oficiales', 'Nunca', 'Solo en casa'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Qué representa el escudo nacional?',
            opciones: ['La historia del país', 'Los recursos naturales', 'La cultura', 'Todo lo anterior'],
            respuestaCorrecta: 3
          },
          {
            id: 5,
            pregunta: '¿Por qué son importantes los símbolos patrios?',
            opciones: ['Son bonitos', 'Representan nuestro país', 'Son obligatorios', 'No son importantes'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Observa la bandera',
            explicacion: 'Mira los colores y elementos de la bandera nacional.',
            imagen: 'observar-bandera.svg',
            audio: 'sos-sociales-2-1.mp3'
          },
          {
            titulo: 'Dibuja el escudo',
            explicacion: 'Practica dibujando el escudo nacional.',
            imagen: 'dibujar-escudo.svg',
            audio: 'sos-sociales-2-2.mp3'
          },
          {
            titulo: 'Canta el himno',
            explicacion: 'Aprende a cantar el himno nacional con respeto.',
            imagen: 'cantar-himno.svg',
            audio: 'sos-sociales-2-3.mp3'
          }
        ],
        pistas: [
          ['Mira los colores', 'Observa los elementos', 'Cuenta las estrellas'],
          ['Dibuja paso a paso', 'Usa los colores correctos', 'Practica varias veces'],
          ['Canta con respeto', 'Párate derecho', 'Mira hacia adelante']
        ],
        explicacionVoz: 'Los símbolos patrios representan nuestra identidad como hondureños. La bandera con sus colores azul y blanco, el escudo con elementos históricos, y el himno nacional que cantamos con orgullo.',
        audioRadio: [
          {
            titulo: 'Símbolos patrios',
            duracion: '1:30',
            archivo: 'audio-simbolos-patrios.mp3'
          },
          {
            titulo: 'Himno nacional',
            duracion: '1:45',
            archivo: 'audio-himno-nacional.mp3'
          }
        ]
      },
      {
        id: 'servicios-publicos',
        nombre: 'Servicios públicos',
        descripcion: 'Conoce los servicios públicos y su importancia en la comunidad',
        videos: [
          {
            id: 'servicios-1',
            titulo: 'Servicios públicos',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre servicios públicos'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es un servicio público?',
            opciones: ['Un negocio privado', 'Un servicio para todos', 'Una tienda', 'Un restaurante'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cuál es un servicio público?',
            opciones: ['Una tienda', 'Un hospital', 'Un restaurante', 'Una casa'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Para qué sirve la escuela?',
            opciones: ['Para jugar', 'Para aprender', 'Para dormir', 'Para comer'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Para qué sirve el hospital?',
            opciones: ['Para estudiar', 'Para curar enfermos', 'Para jugar', 'Para comprar'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Quién paga los servicios públicos?',
            opciones: ['Solo los ricos', 'Todos los ciudadanos', 'Solo los niños', 'Nadie'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Identifica servicios públicos',
            explicacion: 'Busca en tu comunidad: escuela, hospital, policía, bomberos.',
            imagen: 'identificar-servicios.svg',
            audio: 'sos-sociales-2-4.mp3'
          },
          {
            titulo: 'Dibuja tu comunidad',
            explicacion: 'Dibuja los servicios públicos que hay en tu comunidad.',
            imagen: 'dibujar-comunidad.svg',
            audio: 'sos-sociales-2-5.mp3'
          },
          {
            titulo: 'Visita un servicio público',
            explicacion: 'Pide a tus padres que te lleven a conocer un servicio público.',
            imagen: 'visitar-servicio.svg',
            audio: 'sos-sociales-2-6.mp3'
          }
        ],
        pistas: [
          ['Busca edificios grandes', 'Mira las señales', 'Pregunta a tus padres'],
          ['Dibuja la escuela', 'Dibuja el hospital', 'Dibuja la policía'],
          ['Pide permiso', 'Ve con un adulto', 'Observa y aprende']
        ],
        explicacionVoz: 'Los servicios públicos son lugares que sirven a toda la comunidad. La escuela nos enseña, el hospital nos cura, la policía nos protege, y los bomberos nos ayudan en emergencias.',
        audioRadio: [
          {
            titulo: 'Servicios públicos',
            duracion: '1:30',
            archivo: 'audio-servicios-publicos.mp3'
          },
          {
            titulo: 'Mi comunidad',
            duracion: '1:45',
            archivo: 'audio-mi-comunidad.mp3'
          }
        ]
      },
      {
        id: 'mapa-simple-honduras',
        nombre: 'Mapa simple de Honduras',
        descripcion: 'Aprende a ubicar Honduras en el mapa y sus características básicas',
        videos: [
          {
            id: 'mapa-1',
            titulo: 'Mapa de Honduras',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre el mapa de Honduras'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Dónde está Honduras?',
            opciones: ['En Europa', 'En América Central', 'En África', 'En Asia'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Qué países están cerca de Honduras?',
            opciones: ['México y Brasil', 'Guatemala y El Salvador', 'Colombia y Venezuela', 'Cuba y Jamaica'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué océanos rodean Honduras?',
            opciones: ['Pacífico y Atlántico', 'Solo Pacífico', 'Solo Atlántico', 'Ninguno'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Cuál es la capital de Honduras?',
            opciones: ['San Pedro Sula', 'Tegucigalpa', 'La Ceiba', 'Choloma'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Qué forma tiene Honduras?',
            opciones: ['Redonda', 'Cuadrada', 'Alargada', 'Triangular'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Mira el mapa',
            explicacion: 'Observa la forma de Honduras en el mapa.',
            imagen: 'mirar-mapa.svg',
            audio: 'sos-sociales-2-7.mp3'
          },
          {
            titulo: 'Dibuja Honduras',
            explicacion: 'Practica dibujando la forma de Honduras.',
            imagen: 'dibujar-honduras.svg',
            audio: 'sos-sociales-2-8.mp3'
          },
          {
            titulo: 'Ubica la capital',
            explicacion: 'Encuentra Tegucigalpa en el mapa de Honduras.',
            imagen: 'ubicar-capital.svg',
            audio: 'sos-sociales-2-9.mp3'
          }
        ],
        pistas: [
          ['Mira la forma', 'Observa los bordes', 'Compara con otros países'],
          ['Dibuja la forma', 'Usa líneas suaves', 'Practica varias veces'],
          ['Busca en el centro', 'Mira las ciudades grandes', 'Pregunta si no encuentras']
        ],
        explicacionVoz: 'Honduras está en América Central, entre Guatemala y El Salvador. Tiene forma alargada y está rodeada por el Océano Pacífico y el Mar Caribe. Su capital es Tegucigalpa.',
        audioRadio: [
          {
            titulo: 'Mapa de Honduras',
            duracion: '1:30',
            archivo: 'audio-mapa-honduras.mp3'
          },
          {
            titulo: 'Ubicación geográfica',
            duracion: '1:45',
            archivo: 'audio-ubicacion-geografica.mp3'
          }
        ]
      }
    ]
  },
  '6': {
    temas: [
      {
        id: 'independencia-mexico',
        nombre: 'Independencia de México',
        descripcion: 'El proceso de independencia de México del dominio español',
        videos: [
          {
            id: 'independencia-1',
            titulo: 'El Grito de Dolores',
            duracion: '7:00',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Miguel Hidalgo y el inicio de la independencia'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Quién dio el Grito de Dolores?',
            opciones: ['José María Morelos', 'Miguel Hidalgo', 'Agustín de Iturbide', 'Vicente Guerrero'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿En qué año comenzó la Independencia?',
            opciones: ['1808', '1810', '1812', '1821'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿En qué pueblo comenzó la Independencia?',
            opciones: ['Dolores', 'Guanajuato', 'Querétaro', 'San Miguel'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Qué celebración se hace el 16 de septiembre?',
            opciones: ['Día de la Revolución', 'Día de la Independencia', 'Día de la Constitución', 'Día de la Bandera'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿En qué año terminó la Independencia?',
            opciones: ['1810', '1815', '1821', '1824'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Recuerda las fechas importantes',
            explicacion: '1810: Inicio. 1821: Fin. 16 de septiembre: Grito de Dolores.',
            imagen: 'independencia-fechas.svg',
            audio: 'sos-sociales-6-1.mp3'
          },
          {
            titulo: 'Identifica a los personajes',
            explicacion: 'Miguel Hidalgo: iniciador. José María Morelos: continuador. Agustín de Iturbide: consumador.',
            imagen: 'independencia-personajes.svg',
            audio: 'sos-sociales-6-2.mp3'
          },
          {
            titulo: 'Conecta con el presente',
            explicacion: 'La Independencia nos dio libertad. Por eso celebramos el 16 de septiembre.',
            imagen: 'independencia-presente.svg',
            audio: 'sos-sociales-6-3.mp3'
          }
        ],
        pistas: [
          ['1810 es el año del inicio', '1821 es el año del fin', '16 de septiembre es la fecha del grito'],
          ['Hidalgo inició el movimiento', 'Morelos continuó la lucha', 'Iturbide consumó la independencia'],
          ['Antes éramos colonia de España', 'Ahora somos un país libre', 'Celebramos nuestra libertad']
        ],
        explicacionVoz: 'La Independencia de México fue un proceso que duró 11 años, de 1810 a 1821. Todo comenzó cuando Miguel Hidalgo, un cura del pueblo de Dolores, dio el famoso "Grito de Dolores" el 16 de septiembre de 1810, llamando al pueblo a luchar por su libertad. Después de muchos años de lucha, México finalmente se independizó de España en 1821. Por eso celebramos el 16 de septiembre como el día de nuestra independencia.',
        audioRadio: [
          {
            titulo: 'El Grito de Dolores',
            duracion: '2:00',
            archivo: 'audio-grito-dolores.mp3'
          },
          {
            titulo: 'Personajes de la Independencia',
            duracion: '2:15',
            archivo: 'audio-independencia-personajes.mp3'
          }
        ]
      }
    ]
  }
};

// Datos para Computación por grado
export const computacionByGrade: GradeData = {
  '1': {
    temas: [
      {
        id: 'mouse-teclado',
        nombre: 'Usar mouse y teclado',
        descripcion: 'Aprende a usar el mouse y el teclado correctamente',
        videos: [
          {
            id: 'mouse-1',
            titulo: 'Usando el mouse',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a mover el mouse y hacer clic'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Cómo se llama el "ratón" de la computadora?',
            opciones: ['Teclado', 'Monitor', 'Mouse', 'CPU'],
            respuestaCorrecta: 2
          },
          {
            id: 2,
            pregunta: '¿Para qué sirve el mouse?',
            opciones: ['Para escribir', 'Para señalar y hacer clic', 'Para ver', 'Para escuchar'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué pasa cuando mueves el mouse?',
            opciones: ['Nada', 'Se mueve la flecha en la pantalla', 'Se apaga la computadora', 'Se cambia el color'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Para qué sirve el teclado?',
            opciones: ['Para ver', 'Para escribir letras y números', 'Para escuchar', 'Para dibujar'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuántos botones tiene el mouse?',
            opciones: ['1', '2', '3', '4'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Mueve el mouse suavemente',
            explicacion: 'Mueve el mouse despacio y observa cómo se mueve la flecha en la pantalla.',
            imagen: 'mouse-mover.svg',
            audio: 'sos-computacion-1-1.mp3'
          },
          {
            titulo: 'Haz clic con cuidado',
            explicacion: 'Presiona el botón izquierdo del mouse suavemente para hacer clic.',
            imagen: 'mouse-clic.svg',
            audio: 'sos-computacion-1-2.mp3'
          },
          {
            titulo: 'Practica escribiendo',
            explicacion: 'Presiona las teclas del teclado una por una para escribir tu nombre.',
            imagen: 'teclado-escribir.svg',
            audio: 'sos-computacion-1-3.mp3'
          }
        ],
        pistas: [
          ['Mueve el mouse lentamente', 'Observa la flecha', 'No lo levantes de la mesa'],
          ['Presiona suavemente', 'No golpees el botón', 'Escucha el sonido del clic'],
          ['Busca las letras', 'Presiona una tecla a la vez', 'Mira lo que aparece en la pantalla']
        ],
        explicacionVoz: 'El mouse es como un ratón que nos ayuda a señalar cosas en la pantalla. Cuando lo movemos, la flecha se mueve también. Hacemos clic presionando el botón izquierdo. El teclado tiene letras y números que podemos presionar para escribir palabras y números en la computadora.',
        audioRadio: [
          {
            titulo: 'Usando el mouse',
            duracion: '1:30',
            archivo: 'audio-mouse-basico.mp3'
          },
          {
            titulo: 'Escribiendo con el teclado',
            duracion: '1:45',
            archivo: 'audio-teclado-basico.mp3'
          }
        ]
      },
      {
        id: 'abrir-cerrar-apps',
        nombre: 'Abrir y cerrar aplicaciones',
        descripcion: 'Aprende a abrir y cerrar programas en la computadora',
        videos: [
          {
            id: 'apps-1',
            titulo: 'Abriendo programas',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a abrir y cerrar aplicaciones'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es una aplicación?',
            opciones: ['Una comida', 'Un programa de computadora', 'Un juguete', 'Un color'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cómo abres una aplicación?',
            opciones: ['Gritando', 'Haciendo doble clic', 'Cerrando los ojos', 'Saltando'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué es doble clic?',
            opciones: ['Un clic', 'Dos clics seguidos', 'Tres clics', 'No hacer clic'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Cómo cierras una aplicación?',
            opciones: ['Gritando', 'Haciendo clic en la X', 'Cerrando los ojos', 'Saltando'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Para qué sirven las aplicaciones?',
            opciones: ['Para comer', 'Para hacer cosas en la computadora', 'Para dormir', 'Para jugar fútbol'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Busca el ícono',
            explicacion: 'Busca el dibujo pequeño de la aplicación que quieres abrir.',
            imagen: 'apps-buscar.svg',
            audio: 'sos-computacion-1-4.mp3'
          },
          {
            titulo: 'Haz doble clic',
            explicacion: 'Presiona dos veces seguidas el botón izquierdo del mouse.',
            imagen: 'apps-doble-clic.svg',
            audio: 'sos-computacion-1-5.mp3'
          },
          {
            titulo: 'Cierra con la X',
            explicacion: 'Busca la X en la esquina y haz clic para cerrar la aplicación.',
            imagen: 'apps-cerrar.svg',
            audio: 'sos-computacion-1-6.mp3'
          }
        ],
        pistas: [
          ['Mira los dibujos pequeños', 'Busca el que quieres', 'Están en el escritorio'],
          ['Primer clic', 'Segundo clic rápido', 'Espera a que se abra'],
          ['Busca la X', 'Está en la esquina', 'Haz clic en la X']
        ],
        explicacionVoz: 'Las aplicaciones son programas que nos ayudan a hacer cosas en la computadora. Para abrir una aplicación, buscamos su ícono (dibujo pequeño) y hacemos doble clic (dos clics seguidos). Para cerrar una aplicación, buscamos la X en la esquina y hacemos clic en ella.',
        audioRadio: [
          {
            titulo: 'Abriendo aplicaciones',
            duracion: '1:30',
            archivo: 'audio-abrir-apps.mp3'
          },
          {
            titulo: 'Cerrando aplicaciones',
            duracion: '1:45',
            archivo: 'audio-cerrar-apps.mp3'
          }
        ]
      },
      {
        id: 'cuidado-equipo',
        nombre: 'Cuidado del equipo',
        descripcion: 'Aprende a cuidar y proteger la computadora',
        videos: [
          {
            id: 'cuidado-1',
            titulo: 'Cuidando la computadora',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a cuidar tu computadora'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Puedes comer cerca de la computadora?',
            opciones: ['Sí, siempre', 'No, puede dañarla', 'Solo dulces', 'Solo agua'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cómo debes limpiar la pantalla?',
            opciones: ['Con agua', 'Con un paño suave', 'Con jabón', 'Con papel áspero'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué pasa si tiras la computadora?',
            opciones: ['Nada', 'Se puede romper', 'Se hace más rápida', 'Cambia de color'],
            respuestaCorrecta: 1
          },
          {
            id: 4,
            pregunta: '¿Dónde debes guardar la computadora?',
            opciones: ['En el suelo', 'En un lugar seguro', 'En la lluvia', 'En el sol'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Por qué es importante cuidar la computadora?',
            opciones: ['Para que se vea bonita', 'Para que dure mucho tiempo', 'Para que sea más grande', 'Para que cambie de color'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Lávate las manos',
            explicacion: 'Lávate las manos antes de usar la computadora para mantenerla limpia.',
            imagen: 'cuidado-manos.svg',
            audio: 'sos-computacion-1-7.mp3'
          },
          {
            titulo: 'Usa la computadora con cuidado',
            explicacion: 'No golpees el teclado ni tires el mouse. Trátala con respeto.',
            imagen: 'cuidado-suave.svg',
            audio: 'sos-computacion-1-8.mp3'
          },
          {
            titulo: 'Guárdala en un lugar seguro',
            explicacion: 'Cuando termines, guarda la computadora en un lugar donde no se pueda caer.',
            imagen: 'cuidado-guardar.svg',
            audio: 'sos-computacion-1-9.mp3'
          }
        ],
        pistas: [
          ['Lávate las manos', 'Sécatelas bien', 'Antes de tocar la computadora'],
          ['Presiona suavemente', 'No golpees', 'Trata todo con cuidado'],
          ['Busca un lugar seguro', 'Donde no se caiga', 'Donde no le dé el sol']
        ],
        explicacionVoz: 'Es muy importante cuidar la computadora para que dure mucho tiempo y funcione bien. Debemos lavarnos las manos antes de usarla, no comer cerca de ella, tratarla con cuidado y guardarla en un lugar seguro. Si cuidamos la computadora, podremos usarla por mucho tiempo.',
        audioRadio: [
          {
            titulo: 'Cuidando la computadora',
            duracion: '1:30',
            archivo: 'audio-cuidado-equipo.mp3'
          },
          {
            titulo: 'Reglas de seguridad',
            duracion: '1:45',
            archivo: 'audio-reglas-seguridad.mp3'
          }
        ]
      }
    ]
  },
  '2': {
    temas: [
      {
        id: 'teclear-oraciones',
        nombre: 'Teclear oraciones',
        descripcion: 'Aprende a escribir oraciones completas en el teclado',
        videos: [
          {
            id: 'teclear-1',
            titulo: 'Escribiendo oraciones',
            duracion: '4:30',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende a teclear oraciones'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es una oración?',
            opciones: ['Una palabra', 'Un grupo de palabras', 'Una letra', 'Un número'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Cómo empieza una oración?',
            opciones: ['Con minúscula', 'Con mayúscula', 'Con número', 'Con símbolo'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Cómo termina una oración?',
            opciones: ['Con punto', 'Con coma', 'Con espacio', 'Sin nada'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Qué tecla usas para hacer mayúscula?',
            opciones: ['Enter', 'Shift', 'Espacio', 'Tab'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Qué tecla usas para hacer espacio?',
            opciones: ['Enter', 'Shift', 'Espacio', 'Tab'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Empieza con mayúscula',
            explicacion: 'Presiona Shift y la primera letra para hacer mayúscula.',
            imagen: 'mayuscula-teclado.svg',
            audio: 'sos-computacion-2-1.mp3'
          },
          {
            titulo: 'Escribe palabra por palabra',
            explicacion: 'Escribe cada palabra y presiona espacio entre ellas.',
            imagen: 'escribir-palabras.svg',
            audio: 'sos-computacion-2-2.mp3'
          },
          {
            titulo: 'Termina con punto',
            explicacion: 'Al final de la oración, presiona el punto.',
            imagen: 'terminar-punto.svg',
            audio: 'sos-computacion-2-3.mp3'
          }
        ],
        pistas: [
          ['Presiona Shift + letra', 'Mantén presionado Shift', 'Suelta y escribe'],
          ['Escribe una palabra', 'Presiona espacio', 'Escribe la siguiente'],
          ['Busca el punto', 'Presiona el punto', 'Termina la oración']
        ],
        explicacionVoz: 'Para escribir una oración en el teclado, empieza con mayúscula usando Shift, escribe cada palabra separada por espacios, y termina con un punto.',
        audioRadio: [
          {
            titulo: 'Escribiendo oraciones',
            duracion: '1:30',
            archivo: 'audio-escribir-oraciones.mp3'
          },
          {
            titulo: 'Uso del teclado',
            duracion: '1:45',
            archivo: 'audio-uso-teclado.mp3'
          }
        ]
      },
      {
        id: 'guardar-abrir-archivos',
        nombre: 'Guardar y abrir archivos',
        descripcion: 'Aprende a guardar y abrir archivos en la computadora',
        videos: [
          {
            id: 'archivos-1',
            titulo: 'Guardar y abrir archivos',
            duracion: '4:15',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre archivos'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es un archivo?',
            opciones: ['Una carpeta', 'Un documento guardado', 'Un programa', 'Una imagen'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Para qué sirve guardar un archivo?',
            opciones: ['Para perderlo', 'Para conservarlo', 'Para borrarlo', 'Para olvidarlo'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué tecla usas para guardar?',
            opciones: ['Ctrl + S', 'Ctrl + A', 'Ctrl + C', 'Ctrl + V'],
            respuestaCorrecta: 0
          },
          {
            id: 4,
            pregunta: '¿Dónde se guardan los archivos?',
            opciones: ['En el teclado', 'En la pantalla', 'En el disco duro', 'En el mouse'],
            respuestaCorrecta: 2
          },
          {
            id: 5,
            pregunta: '¿Qué necesitas para abrir un archivo?',
            opciones: ['El nombre del archivo', 'La ubicación', 'Ambos', 'Nada'],
            respuestaCorrecta: 2
          }
        ],
        sosContent: [
          {
            titulo: 'Guarda tu trabajo',
            explicacion: 'Presiona Ctrl + S para guardar tu documento.',
            imagen: 'guardar-documento.svg',
            audio: 'sos-computacion-2-4.mp3'
          },
          {
            titulo: 'Dale un nombre',
            explicacion: 'Escribe un nombre para tu archivo antes de guardarlo.',
            imagen: 'nombre-archivo.svg',
            audio: 'sos-computacion-2-5.mp3'
          },
          {
            titulo: 'Abre el archivo',
            explicacion: 'Busca el archivo en la carpeta y haz doble clic para abrirlo.',
            imagen: 'abrir-archivo.svg',
            audio: 'sos-computacion-2-6.mp3'
          }
        ],
        pistas: [
          ['Presiona Ctrl + S', 'Mantén presionado Ctrl', 'Presiona S'],
          ['Escribe un nombre claro', 'Usa palabras que recuerdes', 'No uses símbolos raros'],
          ['Busca en la carpeta', 'Haz doble clic', 'Espera a que se abra']
        ],
        explicacionVoz: 'Los archivos son documentos que guardamos en la computadora. Para guardar presionamos Ctrl + S, le damos un nombre, y para abrirlos buscamos en la carpeta y hacemos doble clic.',
        audioRadio: [
          {
            titulo: 'Guardar archivos',
            duracion: '1:30',
            archivo: 'audio-guardar-archivos.mp3'
          },
          {
            titulo: 'Abrir archivos',
            duracion: '1:45',
            archivo: 'audio-abrir-archivos.mp3'
          }
        ]
      },
      {
        id: 'internet-seguro-basico',
        nombre: 'Internet seguro básico',
        descripcion: 'Aprende a usar internet de forma segura',
        videos: [
          {
            id: 'internet-1',
            titulo: 'Internet seguro',
            duracion: '3:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Aprende sobre internet seguro'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es internet?',
            opciones: ['Una computadora', 'Una red de computadoras', 'Un programa', 'Una pantalla'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Con quién puedes hablar en internet?',
            opciones: ['Solo con familia', 'Solo con amigos conocidos', 'Con extraños', 'Con cualquiera'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Qué información NO debes compartir?',
            opciones: ['Tu nombre', 'Tu dirección', 'Tu edad', 'Todas las anteriores'],
            respuestaCorrecta: 3
          },
          {
            id: 4,
            pregunta: '¿Qué debes hacer si ves algo raro en internet?',
            opciones: ['Ignorarlo', 'Contárselo a un adulto', 'Hacer clic', 'Guardarlo'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Cuánto tiempo debes usar internet?',
            opciones: ['Todo el día', 'Solo un rato', 'Nunca', 'Cuando quieras'],
            respuestaCorrecta: 1
          }
        ],
        sosContent: [
          {
            titulo: 'Pide permiso',
            explicacion: 'Siempre pide permiso a un adulto antes de usar internet.',
            imagen: 'pedir-permiso.svg',
            audio: 'sos-computacion-2-7.mp3'
          },
          {
            titulo: 'No hables con extraños',
            explicacion: 'Solo habla con personas que conoces en la vida real.',
            imagen: 'no-extraños.svg',
            audio: 'sos-computacion-2-8.mp3'
          },
          {
            titulo: 'Cuenta si algo te molesta',
            explicacion: 'Si ves algo que te molesta, cuéntaselo a un adulto.',
            imagen: 'contar-adulto.svg',
            audio: 'sos-computacion-2-9.mp3'
          }
        ],
        pistas: [
          ['Pide permiso primero', 'Espera la respuesta', 'Solo si te dan permiso'],
          ['Solo con familia', 'Solo con amigos conocidos', 'Nunca con extraños'],
          ['Habla con tus padres', 'Habla con tu maestro', 'No te quedes callado']
        ],
        explicacionVoz: 'Internet es una herramienta útil pero debemos usarla con cuidado. Siempre pide permiso a un adulto, no hables con extraños, y si ves algo que te molesta, cuéntaselo a un adulto de confianza.',
        audioRadio: [
          {
            titulo: 'Internet seguro',
            duracion: '1:30',
            archivo: 'audio-internet-seguro.mp3'
          },
          {
            titulo: 'Reglas de seguridad',
            duracion: '1:45',
            archivo: 'audio-reglas-seguridad-internet.mp3'
          }
        ]
      }
    ]
  },
  '6': {
    temas: [
      {
        id: 'internet-basico',
        nombre: 'Internet básico',
        descripcion: 'Conceptos básicos sobre internet y navegación web',
        videos: [
          {
            id: 'internet-1',
            titulo: '¿Qué es internet?',
            duracion: '5:45',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            descripcion: 'Introducción al mundo de internet'
          }
        ],
        preguntas: [
          {
            id: 1,
            pregunta: '¿Qué es internet?',
            opciones: ['Un programa', 'Una red de computadoras', 'Un juego', 'Una aplicación'],
            respuestaCorrecta: 1
          },
          {
            id: 2,
            pregunta: '¿Qué necesitas para conectarte a internet?',
            opciones: ['Solo una computadora', 'Computadora y conexión', 'Solo un teléfono', 'Solo un tablet'],
            respuestaCorrecta: 1
          },
          {
            id: 3,
            pregunta: '¿Cómo se llama el programa para navegar en internet?',
            opciones: ['Word', 'Excel', 'Navegador', 'PowerPoint'],
            respuestaCorrecta: 2
          },
          {
            id: 4,
            pregunta: '¿Qué es una URL?',
            opciones: ['Un programa', 'La dirección de una página web', 'Un archivo', 'Una imagen'],
            respuestaCorrecta: 1
          },
          {
            id: 5,
            pregunta: '¿Qué significa "www"?',
            opciones: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
            respuestaCorrecta: 0
          }
        ],
        sosContent: [
          {
            titulo: 'Identifica el navegador',
            explicacion: 'Busca el ícono de tu navegador (Chrome, Firefox, Safari) en tu computadora.',
            imagen: 'internet-navegador.svg',
            audio: 'sos-computacion-6-1.mp3'
          },
          {
            titulo: 'Escribe una URL',
            explicacion: 'En la barra de direcciones, escribe www.google.com y presiona Enter.',
            imagen: 'internet-url.svg',
            audio: 'sos-computacion-6-2.mp3'
          },
          {
            titulo: 'Navega con seguridad',
            explicacion: 'Solo visita sitios seguros y confiables. Pregunta a un adulto si tienes dudas.',
            imagen: 'internet-seguridad.svg',
            audio: 'sos-computacion-6-3.mp3'
          }
        ],
        pistas: [
          ['Chrome tiene un círculo de colores', 'Firefox tiene un zorro', 'Safari tiene una brújula'],
          ['www.google.com es seguro', 'www.youtube.com es divertido', 'www.wikipedia.org tiene información'],
          ['Pregunta antes de hacer clic', 'No descargues archivos extraños', 'Cierra ventanas sospechosas']
        ],
        explicacionVoz: 'Internet es como una gran red que conecta computadoras de todo el mundo. Es como una biblioteca gigante donde puedes encontrar información sobre cualquier tema. Para usar internet necesitas un navegador, que es como una ventana que te permite ver las páginas web. Las páginas web tienen direcciones llamadas URLs, que empiezan con www. Internet es muy útil, pero también hay que usarlo con cuidado y seguridad.',
        audioRadio: [
          {
            titulo: 'Introducción a internet',
            duracion: '2:00',
            archivo: 'audio-internet-intro.mp3'
          },
          {
            titulo: 'Navegación segura',
            duracion: '1:45',
            archivo: 'audio-internet-seguridad.mp3'
          }
        ]
      }
    ]
  }
};

// Función para obtener contenido por grado y módulo
export const getContentByGrade = (grade: string, module: 'matematicas' | 'espanol' | 'ciencias-sociales' | 'computacion'): GradeContent | null => {
  const gradeData = {
    'matematicas': matematicasByGrade,
    'espanol': espanolByGrade,
    'ciencias-sociales': cienciasSocialesByGrade,
    'computacion': computacionByGrade
  };

  // Intentar obtener contenido específico para el grado
  const specificContent = gradeData[module]?.[grade];
  if (specificContent) {
    return specificContent;
  }

  // Sistema de fallback: usar contenido del grado más cercano disponible
  const availableGrades = Object.keys(gradeData[module] || {});
  if (availableGrades.length === 0) {
    return null;
  }

  // Convertir grados a números para comparación
  const gradeNum = parseInt(grade);
  const availableGradeNums = availableGrades.map(g => parseInt(g)).sort((a, b) => a - b);

  // Encontrar el grado más cercano
  let closestGrade = availableGradeNums[0];
  let minDistance = Math.abs(gradeNum - closestGrade);

  for (const availableGrade of availableGradeNums) {
    const distance = Math.abs(gradeNum - availableGrade);
    if (distance < minDistance) {
      minDistance = distance;
      closestGrade = availableGrade;
    }
  }

  // Retornar contenido del grado más cercano
  return gradeData[module]?.[closestGrade.toString()] || null;
};
