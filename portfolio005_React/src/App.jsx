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

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Collection />
      <ShopByCategory />
      <FreshShipment />
      <MarqueeBanner />
      <SecretCollection />
      <MarqueeBanner />
      <Footer />
    </>
  );
}
