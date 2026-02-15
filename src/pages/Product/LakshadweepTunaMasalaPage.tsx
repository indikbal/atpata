import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 34,
  name: 'Lakshadweep Tuna Masala',
  description: `Dive into the coral island flavours of Lakshadweep with Atpata's Tuna Masala — a coconut-based spice blend crafted for the perfect island-style tuna curry.\n\nLakshadweep's cuisine revolves around two things — coconut and tuna. Our masala combines freshly ground coconut with curry leaves, kokum, and a medley of coastal spices for a curry that's rich, tangy, and deeply satisfying. It's the authentic taste of India's tropical coral paradise.\n\nPerfect for tuna steaks, canned tuna, or any firm fish — just add coconut milk, the masala, and let it simmer. The aroma alone will transport you to white sandy beaches.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar2,
  color: 'from-blue-500 to-teal-500',
};

const steps = [
  {
    title: 'Prep the Tuna',
    description: 'Cut tuna into chunks. Rub with turmeric, salt, and a pinch of the masala.'
  },
  {
    title: 'Cook the Base',
    description: 'Heat coconut oil, add onions and Atpata Tuna Masala with coconut milk.'
  },
  {
    title: 'Add Tuna & Serve',
    description: 'Gently add tuna, simmer for 10 minutes. Serve with rice or island-style roti.'
  }
];

const LakshadweepTunaMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default LakshadweepTunaMasalaPage;
