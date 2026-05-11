import { Routes, Route } from 'react-router-dom';
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

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Collection />
      <ShopByCategory />
      <FreshShipment />
      <MarqueeBanner />
      <SecretCollection />
      <MarqueeBanner />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
