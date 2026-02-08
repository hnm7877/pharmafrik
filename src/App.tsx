import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Presentation from './pages/Presentation';
import Services from './pages/Services';
import MarketingVente from './pages/MarketingVente';
import OperationClinique from './pages/OperationClinique';
import ManagementMedical from './pages/ManagementMedical';
import AffairesReglementaires from './pages/AffairesReglementaires';
import Charter from './pages/Charter';
import Testimonials from './pages/Testimonials';
import Carriere from './pages/Carriere';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="services" element={<Services />} />
          <Route path="marketing-vente" element={<MarketingVente />} />
          <Route path="operation-clinique" element={<OperationClinique />} />
          <Route path="management-medical" element={<ManagementMedical />} />
          <Route path="affaires-reglementaires" element={<AffairesReglementaires />} />
          <Route path="charter" element={<Charter />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="carriere" element={<Carriere />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
