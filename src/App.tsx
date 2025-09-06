import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ModuloMatematicas from './pages/ModuloMatematicas';
import ModuloEspanol from './pages/ModuloEspanol';
import ModuloCienciasSociales from './pages/ModuloCienciasSociales';
import ModuloComputacion from './pages/ModuloComputacion';
import Tutoriales from './pages/Tutoriales';
import Examenes from './pages/Examenes';
import Quiz from './pages/Quiz';
import Resultado from './pages/Resultado';
import './App.css';

const { Content } = Layout;

function App(): React.ReactElement {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Ruta principal */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta del Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas del módulo de Matemáticas */}
            <Route 
              path="/matematicas" 
              element={
                <ProtectedRoute>
                  <ModuloMatematicas />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas del módulo de Español */}
            <Route 
              path="/espanol" 
              element={
                <ProtectedRoute>
                  <ModuloEspanol />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas del módulo de Ciencias Sociales */}
            <Route 
              path="/ciencias-sociales" 
              element={
                <ProtectedRoute>
                  <ModuloCienciasSociales />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas del módulo de Computación */}
            <Route 
              path="/computacion" 
              element={
                <ProtectedRoute>
                  <ModuloComputacion />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Tutoriales - Matemáticas */}
            <Route 
              path="/matematicas/tutoriales" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/matematicas/tutoriales/:temaId" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Tutoriales - Español */}
            <Route 
              path="/espanol/tutoriales" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/espanol/tutoriales/:temaId" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Tutoriales - Ciencias Sociales */}
            <Route 
              path="/ciencias-sociales/tutoriales" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ciencias-sociales/tutoriales/:temaId" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Tutoriales - Computación */}
            <Route 
              path="/computacion/tutoriales" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/computacion/tutoriales/:temaId" 
              element={
                <ProtectedRoute>
                  <Tutoriales />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Exámenes - Matemáticas */}
            <Route 
              path="/matematicas/examenes" 
              element={
                <ProtectedRoute>
                  <Examenes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/matematicas/examenes/:temaId/quiz" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Exámenes - Español */}
            <Route 
              path="/espanol/examenes" 
              element={
                <ProtectedRoute>
                  <Examenes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/espanol/examenes/:temaId/quiz" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Exámenes - Ciencias Sociales */}
            <Route 
              path="/ciencias-sociales/examenes" 
              element={
                <ProtectedRoute>
                  <Examenes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ciencias-sociales/examenes/:temaId/quiz" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            
            {/* Rutas protegidas de Exámenes - Computación */}
            <Route 
              path="/computacion/examenes" 
              element={
                <ProtectedRoute>
                  <Examenes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/computacion/examenes/:temaId/quiz" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            
            {/* Ruta protegida de Resultados */}
            <Route 
              path="/resultado" 
              element={
                <ProtectedRoute>
                  <Resultado />
                </ProtectedRoute>
              } 
            />
            
            {/* Ruta de fallback - redirige al home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
