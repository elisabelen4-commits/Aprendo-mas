import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ModuloMatematicas from './pages/ModuloMatematicas'
import Tutoriales from './pages/Tutoriales'
import VideosTema from './pages/VideosTema'
import Examenes from './pages/Examenes'
import Quiz from './pages/Quiz'
import Resultado from './pages/Resultado'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rutas del módulo de Matemáticas */}
        <Route path="/matematicas" element={<ModuloMatematicas />} />
        
        {/* Rutas de Tutoriales */}
        <Route path="/matematicas/tutoriales" element={<Tutoriales />} />
        <Route path="/matematicas/tutoriales/:temaId" element={<VideosTema />} />
        
        {/* Rutas de Exámenes */}
        <Route path="/matematicas/examenes" element={<Examenes />} />
        <Route path="/matematicas/examenes/:temaId/quiz" element={<Quiz />} />
        
        {/* Ruta de Resultados */}
        <Route path="/resultado" element={<Resultado />} />
        
        {/* Ruta de fallback - redirige al home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
