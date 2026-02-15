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
import BengaliFishCurryMasalaPage from './pages/Product/BengaliFishCurryMasalaPage';
import OdiaDalmaPremixPage from './pages/Product/OdiaDalmaPremixPage';
import GoanVindalooPastePage from './pages/Product/GoanVindalooPastePage';
import KeralaCoconutCurryMixPage from './pages/Product/KeralaCoconutCurryMixPage';
import DelhiButterChickenPremixPage from './pages/Product/DelhiButterChickenPremixPage';
import JharkhandRugraMasalaPage from './pages/Product/JharkhandRugraMasalaPage';
import KarnatakaBisiBeleBathPowderPage from './pages/Product/KarnatakaBisiBeleBathPowderPage';
import AndhraGonguraPicklePage from './pages/Product/AndhraGonguraPicklePage';
import TelanganaSarvaPindiPremixPage from './pages/Product/TelanganaSarvaPindiPremixPage';
import ChhattisgarhiChilaPremixPage from './pages/Product/ChhattisgarhiChilaPremixPage';
import KashmiriRoganJoshMasalaPage from './pages/Product/KashmiriRoganJoshMasalaPage';
import HaryanviBajraKhichdiMasalaPage from './pages/Product/HaryanviBajraKhichdiMasalaPage';
import HimachaliMadraMasalaPage from './pages/Product/HimachaliMadraMasalaPage';
import UttarakhandiKafuliMasalaPage from './pages/Product/UttarakhandiKafuliMasalaPage';
import AssameseMasorTengaMixPage from './pages/Product/AssameseMasorTengaMixPage';
import ManipuriErombaMasalaPage from './pages/Product/ManipuriErombaMasalaPage';
import MeghalayaJadohMasalaPage from './pages/Product/MeghalayaJadohMasalaPage';
import MizoBaiMasalaPage from './pages/Product/MizoBaiMasalaPage';
import NagaKingChilliChutneyPage from './pages/Product/NagaKingChilliChutneyPage';
import SikkimeseGundrukPicklePage from './pages/Product/SikkimeseGundrukPicklePage';
import TripuriBermaChutneyMixPage from './pages/Product/TripuriBermaChutneyMixPage';
import ArunachaliBambooShootPicklePage from './pages/Product/ArunachaliBambooShootPicklePage';
import PuducherryMasalaFishMixPage from './pages/Product/PuducherryMasalaFishMixPage';
import ChandigarhiCholeMasalaPage from './pages/Product/ChandigarhiCholeMasalaPage';
import AndamanCoconutCrabMasalaPage from './pages/Product/AndamanCoconutCrabMasalaPage';
import LakshadweepTunaMasalaPage from './pages/Product/LakshadweepTunaMasalaPage';
import DadraUbadiyuMasalaPage from './pages/Product/DadraUbadiyuMasalaPage';
import DamanPrawnBalchaoMixPage from './pages/Product/DamanPrawnBalchaoMixPage';
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
      <Route path="/" element={<HomePreviewPage />} />
      <Route path="/home-old" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/ourteam" element={<OurTeamPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order-success" element={<OrderSuccessPage />} />
      {/* Original 8 products */}
      <Route path="/product/achari-aloo-dum" element={<AchariAlooDumPage />} />
      <Route path="/product/eggplant-preserve" element={<EggplantPreservePage />} />
      <Route path="/product/kali-mirch-paneer" element={<KaliMirchPaneerPage />} />
      <Route path="/product/saucy-papad-premix" element={<SaucyPapadPremixPage />} />
      <Route path="/product/moringa-paneer" element={<MoringaPaneerPage />} />
      <Route path="/product/bihari-litti-premix" element={<BihariLittiPremixPage />} />
      <Route path="/product/bitter-melon-preserve" element={<BitterMelonPreservePage />} />
      <Route path="/product/navratna-kadhi-premix" element={<NavratnaKadhiPremixPage />} />
      {/* State-specific products */}
      <Route path="/product/bengali-fish-curry-masala" element={<BengaliFishCurryMasalaPage />} />
      <Route path="/product/odia-dalma-premix" element={<OdiaDalmaPremixPage />} />
      <Route path="/product/goan-vindaloo-paste" element={<GoanVindalooPastePage />} />
      <Route path="/product/kerala-coconut-curry-mix" element={<KeralaCoconutCurryMixPage />} />
      <Route path="/product/delhi-butter-chicken-premix" element={<DelhiButterChickenPremixPage />} />
      <Route path="/product/jharkhand-rugra-masala" element={<JharkhandRugraMasalaPage />} />
      <Route path="/product/karnataka-bisi-bele-bath-powder" element={<KarnatakaBisiBeleBathPowderPage />} />
      <Route path="/product/andhra-gongura-pickle" element={<AndhraGonguraPicklePage />} />
      <Route path="/product/telangana-sarva-pindi-premix" element={<TelanganaSarvaPindiPremixPage />} />
      <Route path="/product/chhattisgarhi-chila-premix" element={<ChhattisgarhiChilaPremixPage />} />
      <Route path="/product/kashmiri-rogan-josh-masala" element={<KashmiriRoganJoshMasalaPage />} />
      {/* New state products */}
      <Route path="/product/haryanvi-bajra-khichdi-masala" element={<HaryanviBajraKhichdiMasalaPage />} />
      <Route path="/product/himachali-madra-masala" element={<HimachaliMadraMasalaPage />} />
      <Route path="/product/uttarakhandi-kafuli-masala" element={<UttarakhandiKafuliMasalaPage />} />
      <Route path="/product/assamese-masor-tenga-mix" element={<AssameseMasorTengaMixPage />} />
      <Route path="/product/manipuri-eromba-masala" element={<ManipuriErombaMasalaPage />} />
      <Route path="/product/meghalaya-jadoh-masala" element={<MeghalayaJadohMasalaPage />} />
      <Route path="/product/mizo-bai-masala" element={<MizoBaiMasalaPage />} />
      <Route path="/product/naga-king-chilli-chutney" element={<NagaKingChilliChutneyPage />} />
      <Route path="/product/sikkimese-gundruk-pickle" element={<SikkimeseGundrukPicklePage />} />
      <Route path="/product/tripuri-berma-chutney-mix" element={<TripuriBermaChutneyMixPage />} />
      <Route path="/product/arunachali-bamboo-shoot-pickle" element={<ArunachaliBambooShootPicklePage />} />
      <Route path="/product/puducherry-masala-fish-mix" element={<PuducherryMasalaFishMixPage />} />
      <Route path="/product/chandigarhi-chole-masala" element={<ChandigarhiCholeMasalaPage />} />
      <Route path="/product/andaman-coconut-crab-masala" element={<AndamanCoconutCrabMasalaPage />} />
      <Route path="/product/lakshadweep-tuna-masala" element={<LakshadweepTunaMasalaPage />} />
      <Route path="/product/dadra-ubadiyu-masala" element={<DadraUbadiyuMasalaPage />} />
      <Route path="/product/daman-prawn-balchao-mix" element={<DamanPrawnBalchaoMixPage />} />
      {/* Legal & other pages */}
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
