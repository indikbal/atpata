import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePreviewPage from './pages/HomePreviewPage';
import './index.css';
import { initializeEmailJS } from './services/emailService';

// Lazy-load all non-homepage routes so they don't bloat the initial bundle
const HomePage = lazy(() => import('./pages/HomePage'));
// Single dynamic product detail page — resolves the product from its slug
const DynamicProductPage = lazy(() => import('./pages/Product/DynamicProductPage'));
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
        {/* All product detail pages resolve dynamically from the product slug */}
        <Route path="/product/:slug" element={<DynamicProductPage />} />
        {/* Legal & other pages */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
