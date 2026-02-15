import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 17,
  name: 'Sarva Pindi Premix',
  description: `Crunch into the authentic taste of Telangana with Atpata's Sarva Pindi Premix — a crispy rice flour snack spice blend that's a beloved breakfast staple across the state.\n\nSarva Pindi is Telangana's answer to the perfect savory pancake — crispy on the outside, spiced on the inside, with peanuts, chana dal, and curry leaves adding layers of texture and flavour. Our premix makes this traditional delight effortlessly easy.\n\nWhether it's a lazy Sunday breakfast or an evening snack with chai — Sarva Pindi never disappoints. Just mix, spread on a pan, and cook until golden and crispy.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar1,
  color: 'from-orange-600 to-red-600',
};

const steps = [
  {
    title: 'Mix the Batter',
    description: 'Combine the premix with water to form a thick, spreadable batter.'
  },
  {
    title: 'Spread & Cook',
    description: 'Spread on a hot tawa with oil. Cook on medium heat until edges turn golden.'
  },
  {
    title: 'Flip & Serve',
    description: 'Flip carefully, cook until crispy on both sides. Serve hot with chutney.'
  }
];

const TelanganaSarvaPindiPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default TelanganaSarvaPindiPremixPage;
