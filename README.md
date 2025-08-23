# Aprendo+ - Plataforma de Aprendizaje Interactivo

Una aplicación educativa moderna desarrollada con React y Ant Design v5 que ofrece una experiencia de aprendizaje interactiva y personalizada.

## 🚀 Características Principales

### 📚 Módulos de Aprendizaje
- **Matemáticas** (Activo): Tutoriales, exámenes y seguimiento de progreso
- **Español** (Próximamente): Gramática, ortografía y comprensión lectora
- **Ciencias Sociales** (Próximamente): Historia, geografía y civismo
- **Computación** (Próximamente): Programación básica y herramientas digitales

### 🎯 Funcionalidades del Módulo de Matemáticas

#### Tutoriales
- **Videos por tema**: Contenido educativo paso a paso
- **Temas disponibles**:
  - Fracciones básicas (2 videos)
  - Suma y resta (2 videos)
  - Multiplicación y división (1 video)
- **Reproductor integrado**: Visualización de videos en modal
- **Manejo de errores**: Mensajes informativos si el video no carga

#### Exámenes
- **Dos modos de evaluación**:
  - **Práctica**: Sin guardar puntaje, para practicar sin presión
  - **Calificado**: Con puntaje guardado en localStorage
- **5 preguntas aleatorias** por examen
- **Banco de preguntas**: Algoritmo Fisher-Yates para mezclar preguntas
- **Navegación intuitiva**: Anterior/Siguiente entre preguntas
- **Validación completa**: Solo se puede finalizar con todas las preguntas respondidas

#### Resultados
- **Puntaje sobre 100**: Cálculo automático del rendimiento
- **Estadísticas detalladas**: Correctas/total y porcentaje
- **Mensajes motivacionales**: Según el puntaje obtenido
- **Persistencia**: Guardado automático en modo calificado
- **Opciones post-examen**: Reintentar o volver al módulo

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1**: Framework principal
- **Ant Design 5.27.1**: Componentes de UI
- **React Router DOM**: Navegación entre páginas
- **Vite 7.1.2**: Build tool y servidor de desarrollo
- **CSS3**: Estilos personalizados y animaciones

## 📱 Rutas de la Aplicación

```
/ → Home (Selección de módulos)
/matematicas → Módulo de Matemáticas
/matematicas/tutoriales → Lista de temas
/matematicas/tutoriales/:temaId → Videos del tema
/matematicas/examenes → Configuración de examen
/matematicas/examenes/:temaId/quiz?mode=practice|graded → Quiz
/resultado → Resultados del examen
```

## 🎨 Componentes Ant Design Utilizados

### Layout & Navigation
- `Layout`, `Header`, `Content`: Estructura de páginas
- `Button`: Navegación y acciones
- `Space`, `Row`, `Col`: Sistema de grid responsivo

### UI Components
- `Card`: Contenedores principales
- `Modal`: Videos y confirmaciones
- `Select`: Selector de temas
- `Switch`: Toggle modo práctica/calificado
- `Radio`: Opciones de respuestas
- `Progress`: Barras de progreso
- `Statistic`: Mostrar puntajes
- `Alert`: Mensajes informativos
- `Typography`: Jerarquía de texto

### Icons
- `PlayCircleOutlined`: Videos y reproducción
- `FileTextOutlined`: Exámenes
- `CalculatorOutlined`: Matemáticas
- `TrophyOutlined`: Resultados
- `CheckCircleOutlined`: Correcto
- `ArrowLeftOutlined`: Navegación

## 📊 Datos de Demo

### Temas de Matemáticas
1. **Fracciones básicas**
   - 2 videos educativos
   - 6 preguntas de examen
   - Conceptos: fracciones, equivalencias, operaciones

2. **Suma y resta**
   - 2 videos educativos
   - 6 preguntas de examen
   - Operaciones con números de 2 cifras

3. **Multiplicación y división**
   - 1 video educativo
   - 6 preguntas de examen
   - Tablas básicas y divisiones exactas

## 🔧 Funcionalidades Técnicas

### Algoritmo de Preguntas
- **Fisher-Yates shuffle**: Mezcla aleatoria de preguntas
- **Selección de 5**: Preguntas aleatorias por examen
- **Banco de preguntas**: Mínimo 5 preguntas por tema

### Persistencia de Datos
- **localStorage**: Guardado de resultados calificados
- **Clave**: `score:matematicas:[temaId]`
- **Datos**: puntaje, timestamp, temaId

### Validaciones
- **Examen completo**: Solo finalizar con todas las preguntas
- **Confirmación de salida**: Evitar pérdida de respuestas
- **Manejo de errores**: Videos no disponibles, temas inexistentes

## 🎯 Criterios de Aceptación Implementados

✅ **Home muestra 4 módulos**: Solo Matemáticas navega
✅ **Flujo completo en Matemáticas**: Módulo → Tutoriales → Videos y Módulo → Exámenes → Quiz → Resultados
✅ **"Comenzar" deshabilitado**: Hasta elegir tema y modo
✅ **Cálculo correcto de puntaje**: /100 y aciertos
✅ **Botones Reintentar y Volver**: Operativos
✅ **Modal "Próximamente"**: Para módulos inactivos

## 🚀 Instalación y Uso

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar repositorio
git clone <tu-repositorio>
cd aprendo-mas

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
- `npm run dev`: Servidor de desarrollo (puerto 5173/5174)
- `npm run build`: Construcción para producción
- `npm run preview`: Previsualizar build de producción
- `npm run lint`: Ejecutar linter

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles** (0-576px): Layout vertical, botones grandes
- **Tablets** (576-992px): Grid adaptativo
- **Desktop** (992px+): Layout completo con sidebar

## 🎨 Personalización

### Colores del Tema
```css
:root {
  --ant-primary-color: #667eea;
  --ant-primary-color-hover: #5a6fd8;
  --ant-primary-color-active: #4a5fc8;
}
```

### Gradientes
- **Header principal**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Botones primarios**: Gradiente azul-morado
- **Efectos hover**: Transiciones suaves

## 🔒 Accesibilidad

- **Navegación por teclado**: Todos los elementos son navegables
- **Contraste AA**: Cumple estándares de accesibilidad
- **Tipografía ≥16px**: Legibilidad optimizada
- **Etiquetas aria**: Descripciones para lectores de pantalla
- **Focus visible**: Indicadores claros de foco

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para el aprendizaje interactivo**

*"La educación es el arma más poderosa que puedes usar para cambiar el mundo" - Nelson Mandela*
