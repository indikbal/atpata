import ProductPage from './ProductPage';
import jar5 from '../../img/jar5.png';

const product = {
  id: 29,
  name: 'Tripuri Berma Chutney Mix',
  description: `Explore the fermented flavours of Tripura with Atpata's Berma Chutney Mix — a pungent, umami-rich spice blend that captures the essence of traditional Tripuri tribal cooking.\n\nBerma is Tripura's secret weapon — dried and fermented fish that adds an incredible depth of flavour to chutneys, curries, and stir-fries. Our chutney mix combines this traditional ingredient with chillies, garlic, and local herbs for a condiment that's bold, complex, and utterly unique.\n\nA small amount adds massive flavour — mix it into rice, use it as a dip, or stir it into vegetable dishes for an instant umami boost. This is Tripura's gift to your kitchen.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar5,
  color: 'from-amber-500 to-orange-600',
};

const steps = [
  {
    title: 'Dry Roast',
    description: 'Lightly dry roast the chutney mix in a pan for 2 minutes.'
  },
  {
    title: 'Blend the Chutney',
    description: 'Grind with a little water, garlic, and fresh chillies to a coarse paste.'
  },
  {
    title: 'Serve Fresh',
    description: 'Serve immediately with rice and dal, or store in a jar for up to a week.'
  }
];

const TripuriBermaChutneyMixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default TripuriBermaChutneyMixPage;
