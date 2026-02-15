import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 35,
  name: 'Dadra Ubadiyu Masala',
  description: `Unearth the tribal flavours of Dadra and Nagar Haveli with Atpata's Ubadiyu Masala — a mixed vegetable spice blend inspired by the ancient underground-cooking tradition of the region.\n\nUbadiyu is a unique dish where mixed vegetables, beans, and raw banana are slow-cooked underground with earthy spices — a technique passed down through generations of tribal communities. Our masala captures this rustic, smoky depth so you can recreate it in your kitchen.\n\nPerfect for a hearty mixed vegetable dish — just toss your favourite veggies with this masala and slow cook for rich, complex flavours that taste like they came from the earth itself.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar3,
  color: 'from-amber-500 to-green-600',
};

const steps = [
  {
    title: 'Prep the Vegetables',
    description: 'Chop surti papdi, raw banana, brinjal, yam, and potatoes into chunks.'
  },
  {
    title: 'Layer & Cook',
    description: 'Layer vegetables in a pot with Atpata Ubadiyu Masala and oil. Cook covered on low.'
  },
  {
    title: 'Slow Cook & Serve',
    description: 'Let it cook for 30–40 minutes without stirring. Serve with rotla or puri.'
  }
];

const DadraUbadiyuMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default DadraUbadiyuMasalaPage;
