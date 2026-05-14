import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSEO } from './hooks/useSEO';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Collection from './components/Collection';
import ShopByCategory from './components/ShopByCategory';
import FreshShipment from './components/FreshShipment';
import MarqueeBanner from './components/MarqueeBanner';
import SecretCollection from './components/SecretCollection';
import DeliverySection from './components/DeliverySection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Catalog from './pages/Catalog';
import LegalPage from './pages/LegalPage';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  useSEO({
    title: 'Simply Furniture — Simple furniture for soft life',
    description: 'Discover furniture crafted for comfort and beauty. Armchairs, sofas, lounge chairs and more. Free delivery from €200.',
    url: '/',
  });

  return (
    <>
      <Hero />
      <StatsBar />
      <Collection />
      <ShopByCategory />
      <FreshShipment />
      <MarqueeBanner />
      <SecretCollection />
      <DeliverySection />
      <Newsletter />
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
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
