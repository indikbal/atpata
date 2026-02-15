import ProductPage from './ProductPage';
import jar7 from '../../img/jar7.png';

const product = {
  id: 31,
  name: 'Puducherry Masala Fish Mix',
  description: `Savour the Franco-Tamil fusion of Puducherry with Atpata's Masala Fish Mix — a unique spice blend that marries French culinary finesse with South Indian spice mastery.\n\nPuducherry's cuisine is unlike anywhere else in India — influenced by centuries of French presence yet deeply rooted in Tamil tradition. Our Masala Fish Mix captures this duality with curry leaves, tamarind, black pepper, and a hint of Mediterranean herbs.\n\nPerfect for grilling, pan-frying, or making a coastal curry — this blend makes any fish dish taste like it's served at a beachside café on the Promenade. C'est magnifique!\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar7,
  color: 'from-blue-600 to-cyan-500',
};

const steps = [
  {
    title: 'Marinate the Fish',
    description: 'Coat fish with Atpata Masala Fish Mix, lemon juice, and oil. Rest for 20 minutes.'
  },
  {
    title: 'Pan Fry or Grill',
    description: 'Cook on medium heat until golden and crispy on both sides.'
  },
  {
    title: 'Serve with Style',
    description: 'Garnish with fresh curry leaves and lemon. Serve with rice or crusty bread.'
  }
];

const PuducherryMasalaFishMixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default PuducherryMasalaFishMixPage;
