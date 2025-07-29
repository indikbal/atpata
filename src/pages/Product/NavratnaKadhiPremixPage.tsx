import ProductPage from './ProductPage';
import jar8 from '../../img/jar8.png';

const product = {
  id: 8,
  name: 'Navratna Kadhi Premix',
  description: `Nine spices. One soul-satisfying kadhi. Atpata’s Navratna Kadhi Premix brings you the depth and complexity of traditional kadhi in a single, perfectly balanced blend. Tangy, aromatic, and silky-smooth — this kadhi is your go-to comfort food made effortless.\n\nWith this all-in-one premix, there's no need for curd-balancing, roasting spices, or guesswork. Whether you're serving it with rice or enjoying it on its own, it’s flavourful, wholesome, and comforting down to the last spoon.\n\nFestive or everyday — this kadhi is made to impress with minimal effort.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar8,
  color: 'from-yellow-500 to-amber-600',
};

const steps = [
  {
    title: 'Mix the Base',
    description: 'Blend the premix with curd and water to make a kadhi base.'
  },
  {
    title: 'Cook Gently',
    description: 'Simmer the mixture till it thickens and becomes aromatic.'
  },
  {
    title: 'Serve Hot',
    description: 'Serve with steamed rice or khichdi — and enjoy pure comfort.'
  }
];

const NavratnaKadhiPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default NavratnaKadhiPremixPage;
