import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AchariAlooDumPage from './pages/Product/AchariAlooDumPage';
import EggplantPreservePage from './pages/Product/EggplantPreservePage';
import KaliMirchPaneerPage from './pages/Product/KaliMirchPaneerPage';
import SaucyPapadPremixPage from './pages/Product/SaucyPapadPremixPage';
import MoringaPaneerPage from './pages/Product/MoringaPaneerPage';
import BihariLittiPremixPage from './pages/Product/BihariLittiPremixPage';
import BitterMelonPreservePage from './pages/Product/BitterMelonPreservePage';
import NavratnaKadhiPremixPage from './pages/Product/NavratnaKadhiPremixPage';
import AboutPage from './pages/AboutPage';
import Products from './pages/Product/Products';
import StoryPage from './pages/Story';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CartPage from './pages/CartPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OurTeamPage from './pages/OurTean';
import ExplorePage from './pages/ExplorePage';
import HomePreviewPage from './pages/HomePreviewPage';
import './index.css';
import { initializeEmailJS } from './services/emailService';

// Initialize EmailJS on app start
initializeEmailJS();

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/home-preview" element={<HomePreviewPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/ourteam" element={<OurTeamPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order-success" element={<OrderSuccessPage />} />
      <Route path="/product/achari-aloo-dum" element={<AchariAlooDumPage />} />
      <Route path="/product/eggplant-preserve" element={<EggplantPreservePage />} />
      <Route path="/product/kali-mirch-paneer" element={<KaliMirchPaneerPage />} />
      <Route path="/product/saucy-papad-premix" element={<SaucyPapadPremixPage />} />
      <Route path="/product/moringa-paneer" element={<MoringaPaneerPage />} />
      <Route path="/product/bihari-litti-premix" element={<BihariLittiPremixPage />} />
      <Route path="/product/bitter-melon-preserve" element={<BitterMelonPreservePage />} />
      <Route path="/product/navratna-kadhi-premix" element={<NavratnaKadhiPremixPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
