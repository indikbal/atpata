import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 36,
  name: 'Daman Prawn Balchao Mix',
  description: `Taste the Portuguese-Indian legacy of Daman with Atpata's Prawn Balchao Mix — a tangy, fiery prawn pickle spice blend that's a coastal masterpiece.\n\nBalchao is Daman's crown jewel — a vinegar-kissed, chilli-packed prawn pickle that's been perfected over centuries of Portuguese-Indian culinary exchange. Our mix combines Kashmiri chillies, toddy vinegar spices, and aromatic cloves for a condiment that's tangy, fiery, and absolutely irresistible.\n\nWhether you use it with prawns, shrimp, or fish — this mix creates a pickle that gets better with every passing day. It's Daman's colonial heritage in a jar, made modern and easy.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar4,
  color: 'from-rose-600 to-red-500',
};

const steps = [
  {
    title: 'Clean the Prawns',
    description: 'Clean and devein prawns. Pat dry and lightly fry until pink.'
  },
  {
    title: 'Cook the Balchao',
    description: 'Sauté onions, add Atpata Prawn Balchao Mix with vinegar. Cook for 5 minutes.'
  },
  {
    title: 'Mix & Store',
    description: 'Add prawns, toss well. Cool and store in a glass jar. Serve as pickle or side.'
  }
];

const DamanPrawnBalchaoMixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default DamanPrawnBalchaoMixPage;
