import ProductPage from './ProductPage';
import jar6 from '../../img/jar6.png';

const product = {
  id: 6,
  name: 'Bihari Litti Premix',
  description: `Experience Bihar’s heritage on your plate with Atpata’s Bihari Litti Premix — an authentic blend of roasted spices, sattu (gram flour), and earthy masalas crafted to give you perfectly flavoured litti every time.\n\nNo need to grind or roast anything — just use this premix to fill your litti dough and get the same smoky, spicy, tangy hit that you’d find on the streets of Patna. It’s perfectly balanced and unbelievably easy.\n\nPaired best with chokha or curd, this is desi comfort food at its finest — simplified for modern kitchens.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar6,
  color: 'from-yellow-500 to-amber-600',
};

const steps = [
  {
    title: 'Mix the Filling',
    description: 'Add mustard oil to the premix to make a crumbly stuffing.'
  },
  {
    title: 'Stuff the Litti',
    description: 'Fill wheat dough balls with the mixture and seal well.'
  },
  {
    title: 'Bake or Roast',
    description: 'Cook in an oven, tandoor or on coal — and serve with chokha.'
  }
];

const BihariLittiPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default BihariLittiPremixPage;
