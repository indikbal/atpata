import ProductPage from './ProductPage';
import jar5 from '../../img/jar5.png';

const product = {
  id: 5,
  name: 'Moringa Paneer',
  description: `Give your daily paneer a nutritious twist with Atpata’s Moringa Paneer Masala — a unique all-in-one blend powered by the goodness of moringa (drumstick leaves) and Indian spices. Earthy, aromatic, and full of flavour, this blend turns an ordinary paneer dish into a wholesome delight.\n\nMade for those who want both taste and health on one plate, this premix eliminates the need for haldi, mirch, or any other spices. Just add paneer and you're done — with zero compromise on flavour.\n\nLight on the stomach, rich in nutrition, and perfect for weekday meals or special occasions alike.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar5,
  color: 'from-red-500 to-red-900',
};

const steps = [
  {
    title: 'Prep the Paneer',
    description: 'Cut fresh paneer into cubes or slices.'
  },
  {
    title: 'Cook the Masala',
    description: 'Sauté the masala in oil with a bit of water or curd for creaminess.'
  },
  {
    title: 'Mix & Serve',
    description: 'Add paneer, mix gently, simmer for 5–7 mins and serve hot.'
  }
];

const MoringaPaneerPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default MoringaPaneerPage;
