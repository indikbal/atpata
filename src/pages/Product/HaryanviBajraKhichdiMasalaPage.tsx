import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 20,
  name: 'Haryanvi Bajra Khichdi Masala',
  description: `Fuel up with the robust flavours of Haryana with Atpata's Bajra Khichdi Masala — an earthy pearl millet spice blend that turns humble ingredients into a hearty, comforting meal.\n\nBajra Khichdi is Haryana's ultimate comfort food — wholesome, warming, and loaded with the goodness of pearl millet and moong dal. Our masala adds the perfect balance of cumin, ajwain, and gentle heat to make every bowl taste like it was cooked in a Haryanvi farmhouse kitchen.\n\nPaired with a dollop of ghee and fresh curd, this khichdi is winter's best friend and any day's perfect meal. No fuss, no fancy ingredients — just honest, heartland cooking.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar4,
  color: 'from-amber-600 to-yellow-500',
};

const steps = [
  {
    title: 'Wash & Soak',
    description: 'Wash bajra and moong dal. Soak for 15 minutes for faster cooking.'
  },
  {
    title: 'Cook with Masala',
    description: 'Pressure cook bajra and dal with Atpata Bajra Khichdi Masala and water.'
  },
  {
    title: 'Serve with Ghee',
    description: 'Top with a generous dollop of ghee and serve with curd and pickle.'
  }
];

const HaryanviBajraKhichdiMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default HaryanviBajraKhichdiMasalaPage;
