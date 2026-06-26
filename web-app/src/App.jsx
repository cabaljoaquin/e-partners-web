import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
// Gym: desarrollo guardado, no se promociona ni se rutea por ahora.
// Al no importarse, Vite lo excluye del bundle (tree-shaking).
// import Gym from './pages/Gym';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gym" element={<Gym />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
