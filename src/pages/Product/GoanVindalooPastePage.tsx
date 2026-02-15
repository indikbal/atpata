import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 11,
  name: 'Goan Vindaloo Paste',
  description: `Bring the fiery, tangy spirit of Goa to your kitchen with Atpata's Goan Vindaloo Paste — a bold blend of Kashmiri chillies, vinegar, garlic, and warm spices that creates an unforgettable curry.\n\nInspired by the Portuguese-Goan culinary traditions, this paste is the shortcut to an authentic Vindaloo that's rich, tangy, and packed with layers of flavour. Whether you use it with pork, chicken, or paneer — the result is always spectacular.\n\nNo more sourcing rare ingredients. Just marinate, cook, and let this paste do all the heavy lifting. It's Goa on a plate — sans the beach, plus all the flavour.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar3,
  color: 'from-red-500 to-orange-500',
};

const steps = [
  {
    title: 'Marinate',
    description: 'Coat your meat or paneer generously with the Vindaloo Paste. Rest for 30 minutes.'
  },
  {
    title: 'Slow Cook',
    description: 'Sear the marinated pieces, add water, and simmer on low heat for 20–25 minutes.'
  },
  {
    title: 'Serve Hot',
    description: 'Garnish with fresh coriander and serve with pao bread or steamed rice.'
  }
];

const GoanVindalooPastePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default GoanVindalooPastePage;
