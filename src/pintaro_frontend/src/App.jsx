import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DaftarPage from './pages/Daftar';
import MasukPage from './pages/Masuk';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<DaftarPage />} />
        <Route path="/masuk" element={<MasukPage />} />
      </Routes>
    </Router>
  );
}

export default App;
