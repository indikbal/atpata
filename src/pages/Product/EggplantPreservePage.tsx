import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 2,
  name: 'Eggplant Preserve',
  description: `Bold. Earthy. Irresistibly spiced. Atpata’s Eggplant Preserve is a handcrafted achar-style delight made from tender brinjals slow-cooked in aromatic spices and mustard oil. It captures the essence of traditional Indian pickling — smoky, tangy, and deeply flavourful.\n\nUnlike mass-produced pickles, this preserve is made in small batches using a time-honoured recipe with no artificial preservatives. Every spoonful adds a rustic, homestyle punch that instantly elevates even the simplest meals.\n\nPair it with dal-chawal, parathas, curd rice, or khichdi — and experience how something as humble as brinjal can become the highlight of your plate.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar2,
  color: 'from-green-500 to-amber-500',
};

const steps = [
  {
    title: 'Ready to Eat',
    description: 'Open the jar and enjoy directly with your favourite meals.'
  },
  {
    title: 'Pair It Right',
    description: 'Goes beautifully with rice, paratha, khichdi, or thepla.'
  },
  {
    title: 'Taste the Kick',
    description: 'A little goes a long way — savour the bold, spiced depth in every bite.'
  }
];

const EggplantPreservePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default EggplantPreservePage;
