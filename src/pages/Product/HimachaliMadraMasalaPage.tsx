import ProductPage from './ProductPage';
import jar5 from '../../img/jar5.png';

const product = {
  id: 21,
  name: 'Himachali Madra Masala',
  description: `Celebrate the festive flavours of Himachal Pradesh with Atpata's Madra Masala — a yoghurt-based chickpea curry spice blend straight from the royal Dham feasts of the hills.\n\nMadra is Himachal's most iconic dish — creamy chickpeas simmered in a rich yoghurt gravy with cardamom, cinnamon, and cloves. It's the star of every Dham (festive feast) and our masala makes it incredibly easy to recreate this heritage recipe at home.\n\nWhether it's a special occasion or a Sunday treat, Madra brings warmth and richness to your table. Just add soaked chickpeas, yoghurt, and let this masala work its mountain magic.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar5,
  color: 'from-emerald-600 to-teal-500',
};

const steps = [
  {
    title: 'Soak & Boil Chickpeas',
    description: 'Soak chickpeas overnight and pressure cook until soft but firm.'
  },
  {
    title: 'Cook the Madra',
    description: 'Heat ghee, add Atpata Madra Masala with yoghurt and cook on low heat.'
  },
  {
    title: 'Combine & Serve',
    description: 'Add chickpeas, simmer for 10 minutes. Serve with rice or puri.'
  }
];

const HimachaliMadraMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default HimachaliMadraMasalaPage;
