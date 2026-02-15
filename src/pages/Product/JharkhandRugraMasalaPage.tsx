import ProductPage from './ProductPage';
import jar6 from '../../img/jar6.png';

const product = {
  id: 14,
  name: 'Jharkhand Rugra Masala',
  description: `Discover the wild, earthy flavours of Jharkhand with Atpata's Rugra Masala — a tribal mushroom spice blend crafted from the forests of Chhotanagpur Plateau.\n\nRugra (wild mushrooms) are a prized delicacy in Jharkhand's tribal cuisine, and this masala elevates any mushroom dish with smoky, earthy depth. Blended with mustard oil-roasted spices, dried herbs, and a touch of heat — it transforms simple mushrooms into a tribal feast.\n\nWhether you're cooking button mushrooms, oyster mushrooms, or lucky enough to have wild rugra — this masala makes every bite a celebration of Jharkhand's forest heritage.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar6,
  color: 'from-amber-600 to-green-700',
};

const steps = [
  {
    title: 'Prep the Mushrooms',
    description: 'Clean and slice your mushrooms. Pat them dry for best results.'
  },
  {
    title: 'Cook with Masala',
    description: 'Heat mustard oil, add Atpata Rugra Masala, and sauté mushrooms for 5 minutes.'
  },
  {
    title: 'Finish & Serve',
    description: 'Add a splash of water, cover and cook for 3 minutes. Serve with rice or roti.'
  }
];

const JharkhandRugraMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default JharkhandRugraMasalaPage;
