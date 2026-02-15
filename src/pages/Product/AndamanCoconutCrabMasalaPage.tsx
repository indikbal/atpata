import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 33,
  name: 'Andaman Coconut Crab Masala',
  description: `Bring the tropical island flavours of the Andaman to your kitchen with Atpata's Coconut Crab Masala — a lush coconut and seafood spice blend for the perfect island-style crab curry.\n\nThe Andaman Islands are blessed with pristine waters and the freshest seafood. Our masala blends aromatic coconut with curry leaves, black pepper, and a touch of star anise to create a creamy, fragrant curry that celebrates the bounty of the Bay of Bengal.\n\nWhether you're cooking crab, prawns, or any seafood — this masala transports you to a beachside shack with every bite. Close your eyes, take a spoonful, and you're in paradise.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar1,
  color: 'from-cyan-600 to-blue-500',
};

const steps = [
  {
    title: 'Clean the Crab',
    description: 'Clean and crack the crab. Marinate with turmeric and salt.'
  },
  {
    title: 'Cook the Curry',
    description: 'Sauté onions, add Atpata Coconut Crab Masala with coconut milk and water.'
  },
  {
    title: 'Add Crab & Serve',
    description: 'Add crab pieces, simmer for 15 minutes. Serve with steamed rice or bread.'
  }
];

const AndamanCoconutCrabMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default AndamanCoconutCrabMasalaPage;
