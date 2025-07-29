import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 4,
  name: 'Saucy Papad Premix',
  description: `Turn a humble papad into a spicy, tangy, irresistible snack in seconds! Atpata’s Saucy Papad Premix is a ready-to-use masala blend that transforms roasted or fried papads into a street-style flavour bomb — no chopping, mixing, or fuss.\n\nInspired by thecha, chaat, and tangy desi condiments, this premix brings together chilli, masala, and a touch of sourness in perfect harmony. Whether it’s a quick tea-time snack or a party appetizer, it’s your shortcut to instant deliciousness.\n\nJust roast a papad, spread the magic, and let the flavours do the talking. Crunchy, zesty, and unforgettable — it’s not just papad anymore.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar4,
  color: 'from-amber-400 to-yellow-600',
};

const steps = [
  {
    title: 'Prep the Papad',
    description: 'Roast or fry the papad of your choice till crisp.'
  },
  {
    title: 'Spread the Premix',
    description: 'While warm, spoon on Atpata Saucy Papad Premix evenly.'
  },
  {
    title: 'Serve Instantly',
    description: 'Top with chopped onion (optional) — and serve immediately!'
  }
];

const SaucyPapadPremixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default SaucyPapadPremixPage;
