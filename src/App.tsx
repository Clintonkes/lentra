import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Quote from '@/pages/Quote';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
