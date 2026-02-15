import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 18,
  name: 'Chhattisgarhi Chila Premix',
  description: `Savour the earthy, wholesome taste of Chhattisgarh with Atpata's Chila Premix — a traditional rice batter pancake mix with aromatic spices from the heart of India.\n\nChila is Chhattisgarh's beloved breakfast — a thin, crispy rice pancake that's light, flavourful, and incredibly satisfying. Our premix combines rice flour with the perfect blend of cumin, ajwain, and green chilli for an authentic taste that takes you straight to a Chhattisgarhi home.\n\nPerfect for busy mornings or as an evening snack — just add water, spread thin, and cook to golden perfection. It's simple, it's delicious, and it's unmistakably Chhattisgarhi.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar2,
  color: 'from-green-600 to-amber-600',
};

const steps = [
  {
    title: 'Make the Batter',
    description: 'Mix the premix with water to form a smooth, thin batter. Rest for 5 minutes.'
  },
  {
    title: 'Pour & Spread',
    description: 'Pour a ladleful on a hot tawa and spread thin like a dosa.'
  },
  {
    title: 'Cook & Enjoy',
    description: 'Drizzle oil, cook until crispy and golden. Serve with green chutney or tomato chutney.'
  }
];

const ChhattisgarhiChilaPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default ChhattisgarhiChilaPremixPage;
