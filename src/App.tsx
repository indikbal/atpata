import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePreviewPage from './pages/HomePreviewPage';
import './index.css';
import { initializeEmailJS } from './services/emailService';

// Lazy-load all non-homepage routes so they don't bloat the initial bundle
const HomePage = lazy(() => import('./pages/HomePage'));
const AchariAlooDumPage = lazy(() => import('./pages/Product/AchariAlooDumPage'));
const EggplantPreservePage = lazy(() => import('./pages/Product/EggplantPreservePage'));
const KaliMirchPaneerPage = lazy(() => import('./pages/Product/KaliMirchPaneerPage'));
const SaucyPapadPremixPage = lazy(() => import('./pages/Product/SaucyPapadPremixPage'));
const MoringaPaneerPage = lazy(() => import('./pages/Product/MoringaPaneerPage'));
const BihariLittiPremixPage = lazy(() => import('./pages/Product/BihariLittiPremixPage'));
const BitterMelonPreservePage = lazy(() => import('./pages/Product/BitterMelonPreservePage'));
const NavratnaKadhiPremixPage = lazy(() => import('./pages/Product/NavratnaKadhiPremixPage'));
const BengaliFishCurryMasalaPage = lazy(() => import('./pages/Product/BengaliFishCurryMasalaPage'));
const OdiaDalmaPremixPage = lazy(() => import('./pages/Product/OdiaDalmaPremixPage'));
const GoanVindalooPastePage = lazy(() => import('./pages/Product/GoanVindalooPastePage'));
const KeralaCoconutCurryMixPage = lazy(() => import('./pages/Product/KeralaCoconutCurryMixPage'));
const DelhiButterChickenPremixPage = lazy(() => import('./pages/Product/DelhiButterChickenPremixPage'));
const JharkhandRugraMasalaPage = lazy(() => import('./pages/Product/JharkhandRugraMasalaPage'));
const KarnatakaBisiBeleBathPowderPage = lazy(() => import('./pages/Product/KarnatakaBisiBeleBathPowderPage'));
const AndhraGonguraPicklePage = lazy(() => import('./pages/Product/AndhraGonguraPicklePage'));
const TelanganaSarvaPindiPremixPage = lazy(() => import('./pages/Product/TelanganaSarvaPindiPremixPage'));
const ChhattisgarhiChilaPremixPage = lazy(() => import('./pages/Product/ChhattisgarhiChilaPremixPage'));
const KashmiriRoganJoshMasalaPage = lazy(() => import('./pages/Product/KashmiriRoganJoshMasalaPage'));
const HaryanviBajraKhichdiMasalaPage = lazy(() => import('./pages/Product/HaryanviBajraKhichdiMasalaPage'));
const HimachaliMadraMasalaPage = lazy(() => import('./pages/Product/HimachaliMadraMasalaPage'));
const UttarakhandiKafuliMasalaPage = lazy(() => import('./pages/Product/UttarakhandiKafuliMasalaPage'));
const AssameseMasorTengaMixPage = lazy(() => import('./pages/Product/AssameseMasorTengaMixPage'));
const ManipuriErombaMasalaPage = lazy(() => import('./pages/Product/ManipuriErombaMasalaPage'));
const MeghalayaJadohMasalaPage = lazy(() => import('./pages/Product/MeghalayaJadohMasalaPage'));
const MizoBaiMasalaPage = lazy(() => import('./pages/Product/MizoBaiMasalaPage'));
const NagaKingChilliChutneyPage = lazy(() => import('./pages/Product/NagaKingChilliChutneyPage'));
const SikkimeseGundrukPicklePage = lazy(() => import('./pages/Product/SikkimeseGundrukPicklePage'));
const TripuriBermaChutneyMixPage = lazy(() => import('./pages/Product/TripuriBermaChutneyMixPage'));
const ArunachaliBambooShootPicklePage = lazy(() => import('./pages/Product/ArunachaliBambooShootPicklePage'));
const PuducherryMasalaFishMixPage = lazy(() => import('./pages/Product/PuducherryMasalaFishMixPage'));
const ChandigarhiCholeMasalaPage = lazy(() => import('./pages/Product/ChandigarhiCholeMasalaPage'));
const AndamanCoconutCrabMasalaPage = lazy(() => import('./pages/Product/AndamanCoconutCrabMasalaPage'));
const LakshadweepTunaMasalaPage = lazy(() => import('./pages/Product/LakshadweepTunaMasalaPage'));
const DadraUbadiyuMasalaPage = lazy(() => import('./pages/Product/DadraUbadiyuMasalaPage'));
const DamanPrawnBalchaoMixPage = lazy(() => import('./pages/Product/DamanPrawnBalchaoMixPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Products = lazy(() => import('./pages/Product/Products'));
const StoryPage = lazy(() => import('./pages/Story'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const ContactPage = lazy(() => import('./pages/Contact'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const CancellationRefundPolicy = lazy(() => import('./pages/CancellationRefundPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CartPage = lazy(() => import('./pages/CartPage'));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage'));
const OurTeamPage = lazy(() => import('./pages/OurTean'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));

// Initialize EmailJS on app start
initializeEmailJS();

function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
