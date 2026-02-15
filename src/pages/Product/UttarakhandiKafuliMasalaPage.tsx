import ProductPage from './ProductPage';
import jar6 from '../../img/jar6.png';

const product = {
  id: 22,
  name: 'Uttarakhandi Kafuli Masala',
  description: `Breathe in the mountain flavours of Uttarakhand with Atpata's Kafuli Masala — a wild spinach and fenugreek curry spice blend enriched with aromatic jakhiya seeds unique to the Garhwal hills.\n\nKafuli is Uttarakhand's signature green curry — a silky blend of spinach, fenugreek, and rice paste simmered with jakhiya (wild mustard) seeds that pop and crackle with flavour. Our masala captures this highland magic perfectly.\n\nServe it over steamed rice with a drizzle of ghee, and you have a nutritious, flavourful meal that tastes like the Himalayas. Pure, wholesome, and deeply satisfying.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar6,
  color: 'from-green-700 to-lime-500',
};

const steps = [
  {
    title: 'Blanch the Greens',
    description: 'Blanch spinach and fenugreek leaves. Blend into a smooth paste.'
  },
  {
    title: 'Cook with Masala',
    description: 'Heat ghee, add Atpata Kafuli Masala, and cook with the green paste.'
  },
  {
    title: 'Thicken & Serve',
    description: 'Add rice paste to thicken, simmer for 5 minutes. Serve with steamed rice.'
  }
];

const UttarakhandiKafuliMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default UttarakhandiKafuliMasalaPage;
