import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 10,
  name: 'Odia Dalma Premix',
  description: `Taste the divine flavours of Jagannath Puri with Atpata's Odia Dalma Premix — a traditional lentil and vegetable stew spice blend that's wholesome, aromatic, and deeply satisfying.\n\nDalma is the heart of Odia cuisine — a comforting mix of moong dal, raw banana, papaya, and pumpkin simmered with earthy spices. Our premix brings this temple kitchen magic to your home without any fuss.\n\nJust cook your dal and vegetables, stir in this premix, and let the flavours bloom. No grinding, no guesswork — just pure, soulful Odia comfort in every spoonful.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar2,
  color: 'from-orange-500 to-amber-600',
};

const steps = [
  {
    title: 'Cook the Dal',
    description: 'Pressure cook moong dal with chopped vegetables until soft.'
  },
  {
    title: 'Add the Premix',
    description: 'Stir in Atpata Odia Dalma Premix and let it simmer for 5 minutes.'
  },
  {
    title: 'Temper & Serve',
    description: 'Add a tadka of ghee and curry leaves — serve with steamed rice.'
  }
];

const OdiaDalmaPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default OdiaDalmaPremixPage;
