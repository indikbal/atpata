import ProductPage from './ProductPage';
import jar7 from '../../img/jar7.png';

const product = {
  id: 7,
  name: 'Bitter Melon Preserve',
  description: `Bold, bitter, and beautifully balanced — Atpata’s Bitter Melon Preserve turns karela into a gourmet condiment you’ll keep going back to. Cooked low and slow with jaggery, spices, and mustard oil, it’s the perfect mix of bitter, sweet, spicy, and tangy.\n\nForget everything you thought you knew about karela — this preserve brings a surprising depth of flavour that pairs effortlessly with simple meals. A tiny spoonful can turn plain dal-chawal or paratha into something memorable.\n\nHomestyle, preservative-free, and full of character — this is karela done right.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar7,
  color: 'from-yellow-500 to-amber-600',
};

const steps = [
  {
    title: 'Ready to Eat',
    description: 'Just open and enjoy directly — no prep needed.'
  },
  {
    title: 'Pair It Right',
    description: 'Goes great with rice, rotis, paratha or khichdi.'
  },
  {
    title: 'Relish the Twist',
    description: 'Savour the sweet-bitter-spicy combo in every bite.'
  }
];

const BitterMelonPreservePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default BitterMelonPreservePage;
