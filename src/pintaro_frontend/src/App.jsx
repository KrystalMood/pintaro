import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import DaftarPage from './pages/Daftar';
import MasukPage from './pages/Masuk';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/daftar" element={<DaftarPage />} />
          <Route path="/masuk" element={<MasukPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
