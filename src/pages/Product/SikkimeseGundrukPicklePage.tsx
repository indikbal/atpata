import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 28,
  name: 'Sikkimese Gundruk Pickle',
  description: `Taste the Himalayan heritage of Sikkim with Atpata's Gundruk Pickle — a tangy fermented leafy greens pickle enriched with the fiery kick of Dalle Khursani chilli.\n\nGundruk is Sikkim's superfood — naturally fermented mustard and radish leaves that are tangy, probiotic-rich, and bursting with umami. Our pickle mix combines this ancient tradition with Dalle Khursani (cherry pepper) for a condiment that's healthy, tangy, and incredibly addictive.\n\nFrom India's first fully organic state comes a pickle that's clean, green, and packed with Himalayan goodness. Perfect with dal-rice, momos, or thukpa.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar4,
  color: 'from-lime-600 to-green-700',
};

const steps = [
  {
    title: 'Soak the Gundruk',
    description: 'Soak dried gundruk in warm water for 15 minutes. Drain well.'
  },
  {
    title: 'Mix with Pickle Blend',
    description: 'Toss the gundruk with Atpata Gundruk Pickle blend and mustard oil.'
  },
  {
    title: 'Rest & Serve',
    description: 'Let it rest for an hour for flavours to meld. Serve as a side dish.'
  }
];

const SikkimeseGundrukPicklePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default SikkimeseGundrukPicklePage;
