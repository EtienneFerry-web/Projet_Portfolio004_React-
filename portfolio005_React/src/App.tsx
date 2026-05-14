import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Collection from './components/Collection';
import ShopByCategory from './components/ShopByCategory';
import FreshShipment from './components/FreshShipment';
import MarqueeBanner from './components/MarqueeBanner';
import SecretCollection from './components/SecretCollection';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Catalog from './pages/Catalog';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  useEffect(() => {
    document.title = 'Simply Furniture — Simple furniture for soft life';
  }, []);

  return (
    <>
      <Hero />
      <StatsBar />
      <Collection />
      <ShopByCategory />
      <FreshShipment />
      <MarqueeBanner />
      <SecretCollection />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
