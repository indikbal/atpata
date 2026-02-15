import ProductPage from './ProductPage';
import jar5 from '../../img/jar5.png';

const product = {
  id: 13,
  name: 'Butter Chicken Premix',
  description: `Recreate the legendary taste of Old Delhi with Atpata's Butter Chicken Premix — a creamy, tomato-rich spice blend that makes restaurant-style butter chicken ridiculously easy at home.\n\nThis all-in-one premix combines the warmth of Kashmiri chilli, fenugreek, and garam masala with the richness of dried cream and tomato powder. The result? A velvety, mildly spiced gravy that hugs every piece of chicken in pure indulgence.\n\nNo more complicated recipes or long ingredient lists. Just marinate, cook, and let the premix handle the rest. From Chandni Chowk to your kitchen — this is the real deal.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar5,
  color: 'from-red-600 to-amber-500',
};

const steps = [
  {
    title: 'Marinate Chicken',
    description: 'Mix chicken with yoghurt and half the premix. Marinate for 1 hour.'
  },
  {
    title: 'Cook the Gravy',
    description: 'Sauté onions, add remaining premix with tomato puree and butter. Simmer.'
  },
  {
    title: 'Combine & Serve',
    description: 'Add grilled chicken to the gravy, finish with cream. Serve with naan or rice.'
  }
];

const DelhiButterChickenPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default DelhiButterChickenPremixPage;
