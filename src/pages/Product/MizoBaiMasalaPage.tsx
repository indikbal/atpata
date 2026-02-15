import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 26,
  name: 'Mizo Bai Masala',
  description: `Discover the herbal soul of Mizoram with Atpata's Bai Masala — a gentle, aromatic stew spice blend featuring mustard leaf, local herbs, and the soothing warmth of Mizo home cooking.\n\nBai is Mizoram's most cherished dish — a herbal stew of boiled vegetables and greens with subtle, smoky flavours. Unlike the fiery Northeast clichés, Bai is gentle, nourishing, and deeply comforting. Our masala captures this delicate balance perfectly.\n\nJust boil your favourite vegetables, add the masala, and let it simmer into a fragrant broth. It's healthy, wholesome, and a beautiful introduction to Mizo cuisine.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar2,
  color: 'from-teal-600 to-green-500',
};

const steps = [
  {
    title: 'Boil Vegetables',
    description: 'Boil mustard leaves, pumpkin, beans, and any seasonal greens in water.'
  },
  {
    title: 'Add the Masala',
    description: 'Stir in Atpata Bai Masala and let it simmer for 10 minutes.'
  },
  {
    title: 'Serve Warm',
    description: 'Serve as a warm broth alongside steamed rice. Comfort in a bowl.'
  }
];

const MizoBaiMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default MizoBaiMasalaPage;
