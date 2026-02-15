import ProductPage from './ProductPage';
import jar7 from '../../img/jar7.png';

const product = {
  id: 23,
  name: 'Assamese Masor Tenga Mix',
  description: `Dive into the soul of Assamese cuisine with Atpata's Masor Tenga Mix — a tangy, light fish curry spice blend that captures the authentic taste of Assam's most beloved dish.\n\nMasor Tenga is Assam's comfort food — a sour fish curry made with tomatoes, lemon, and subtle spices that's light yet incredibly flavourful. Our premix combines the tang of dried Kaji Nemu with turmeric, mustard, and gentle warmth for a curry that's pure Assamese poetry.\n\nPerfect with any freshwater fish — just add the mix to hot oil with tomatoes, pour in water, and let the fish simmer to perfection. It's the taste of an Assamese kitchen in every spoonful.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar7,
  color: 'from-red-500 to-yellow-500',
};

const steps = [
  {
    title: 'Fry the Fish',
    description: 'Lightly fry turmeric-rubbed fish pieces in mustard oil. Set aside.'
  },
  {
    title: 'Cook the Tenga',
    description: 'In the same oil, add tomatoes and Atpata Masor Tenga Mix with water.'
  },
  {
    title: 'Simmer & Serve',
    description: 'Add the fish back, simmer for 8 minutes. Serve with steamed rice.'
  }
];

const AssameseMasorTengaMixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default AssameseMasorTengaMixPage;
