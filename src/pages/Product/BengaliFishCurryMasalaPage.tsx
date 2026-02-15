import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 9,
  name: 'Fish Curry Masala',
  description: `Dive into the authentic flavours of Bengal with Atpata's Fish Curry Masala — a mustard-based spice blend crafted to create the perfect Maacher Jhol every single time.\n\nThis all-in-one premix combines panchphoron, mustard paste, turmeric, and the subtle heat of green chillies — everything you need for a light, tangy fish curry that's pure Bengali soul food.\n\nNo more juggling multiple spice boxes. Just marinate your fish, add this blend with water, and let it simmer to golden perfection. Whether it's Rohu, Hilsa, or Katla — this masala makes every fish taste like it came straight from a Bengali grandmother's kitchen.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar1,
  color: 'from-yellow-500 to-red-500',
};

const steps = [
  {
    title: 'Marinate the Fish',
    description: 'Rub fish pieces with turmeric and salt. Let it rest for 10 minutes.'
  },
  {
    title: 'Cook the Masala',
    description: 'Heat mustard oil, add Atpata Fish Curry Masala with water and bring to a simmer.'
  },
  {
    title: 'Add Fish & Serve',
    description: 'Gently add the fish, cook for 8–10 minutes, and serve hot with steamed rice.'
  }
];

const BengaliFishCurryMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default BengaliFishCurryMasalaPage;
