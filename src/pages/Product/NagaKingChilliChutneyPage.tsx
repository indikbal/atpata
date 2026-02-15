import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 27,
  name: 'Naga King Chilli Chutney',
  description: `Dare to taste the fire of Nagaland with Atpata's Naga King Chilli Chutney — a fiery Bhut Jolokia chutney mix that packs one of the world's hottest punches in every spoonful.\n\nThe Naga King Chilli (Bhut Jolokia) is no ordinary chilli — it's a legend. Our chutney mix tames its extreme heat with smoky undertones, garlic, and a hint of fermented soybean (axone) to create a condiment that's addictive, flavourful, and unmistakably Naga.\n\nA tiny dab transforms any meal — rice, momos, grilled meat, or even a sandwich. Handle with respect, enjoy with abandon. This is Nagaland in a jar.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar3,
  color: 'from-red-700 to-orange-500',
};

const steps = [
  {
    title: 'Roast & Blend',
    description: 'Dry roast the chutney mix briefly. Blend with a little water and garlic.'
  },
  {
    title: 'Temper the Chutney',
    description: 'Heat oil, add the paste and cook on low heat for 5 minutes.'
  },
  {
    title: 'Cool & Store',
    description: 'Let it cool. Store in a jar — use sparingly! A little goes a very long way.'
  }
];

const NagaKingChilliChutneyPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default NagaKingChilliChutneyPage;
