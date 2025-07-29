import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 3,
  name: 'Kali Mirch Paneer',
  description: `Creamy, peppery, and perfectly balanced — Atpata’s Kali Mirch Paneer Masala brings a gourmet-style paneer experience to your kitchen without the fuss. This premix blends the sharpness of black pepper with subtle Indian spices to create a dish that’s rich, smooth, and layered with flavour.\n\nNo need to add haldi, garam masala, or guesswork — just cook your paneer with this premix and you’ve got a dish that rivals your favourite restaurant. It’s mildly spicy and loved by kids and adults alike.\n\nServe it with naan, jeera rice or paratha — it’s comfort food with a classy twist, made effortlessly at home.\n\nCooking made simple. Flavour made unforgettable.`,
  image:  jar3,
  color: 'from-red-600 to-red-800',
};

const steps = [
  {
    title: 'Prep the Paneer',
    description: 'Cut paneer into cubes and keep aside. Fry lightly if preferred.'
  },
  {
    title: 'Cook the Masala',
    description: 'Heat oil, add the premix with water or cream, and cook till it thickens.'
  },
  {
    title: 'Add & Simmer',
    description: 'Mix in paneer, let it simmer for 5–7 minutes, and serve hot.'
  }
];

const KaliMirchPaneerPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default KaliMirchPaneerPage;
