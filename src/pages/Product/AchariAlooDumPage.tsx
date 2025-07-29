import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 1,
  name: 'Achari Aloo Dum',
  description: `Bring the bold flavours of North India to your kitchen in just one step! Atpata’s Achari Aloo Dum Masala is a ready-to-use premix that captures the rich, tangy punch of traditional pickle spices — all blended to perfection. No need to add haldi, jeera, dhaniya or any other masalas — just toss it with potatoes, and you’re done!\n\nPerfect for busy kitchens, this all-in-one spice blend makes every bite taste like it's straight from a home-cooked feast.\n\nCrafted for simplicity, made for indulgence. Whether you're cooking for family, hosting guests, or treating yourself to comfort food, this masala delivers flavour that speaks for itself. With Atpata, great taste is never complicated — it's just one spoon away.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar1,
  color: 'from-amber-500 to-red-500',
};

const steps = [
  {
    title: 'Boil & Prep',
    description: 'Boil and peel baby potatoes. Keep them slightly firm for best texture.'
  },
  {
    title: 'Cook the Masala',
    description: 'Heat oil in a pan, add Atpata Achari Aloo Dum Masala, and sauté briefly.'
  },
  {
    title: 'Toss & Serve',
    description: 'Add the potatoes, mix well, cook for 5–7 minutes — and enjoy hot!'
  }
];

const AchariAlooDumPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default AchariAlooDumPage;
