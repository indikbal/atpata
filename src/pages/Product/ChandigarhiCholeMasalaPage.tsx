import ProductPage from './ProductPage';
import jar8 from '../../img/jar8.png';

const product = {
  id: 32,
  name: 'Chandigarhi Chole Masala',
  description: `Relish the bold, street-food spirit of Chandigarh with Atpata's Chole Masala — a robust chickpea curry spice blend that's the heart of every Sector 17 food stall.\n\nChandigarh's Chole Bhature is legendary — dark, intensely spiced chickpeas paired with fluffy bhature that locals queue up for. Our masala combines amchur, anardana, pomegranate seeds, and a secret tea-bag darkening technique for that authentic deep colour and bold taste.\n\nNo shortcuts, no compromises — just the real deal. Soak your chickpeas, add this masala, and slow cook to perfection. The result is chole that's dark, rich, and absolutely irresistible.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar8,
  color: 'from-red-600 to-orange-500',
};

const steps = [
  {
    title: 'Soak & Boil Chickpeas',
    description: 'Soak chickpeas overnight. Pressure cook with a tea bag for dark colour.'
  },
  {
    title: 'Cook the Masala',
    description: 'Heat oil, add onion-tomato paste and Atpata Chole Masala. Cook until oil separates.'
  },
  {
    title: 'Combine & Serve',
    description: 'Add chickpeas, simmer for 15 minutes. Serve hot with bhature or rice.'
  }
];

const ChandigarhiCholeMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default ChandigarhiCholeMasalaPage;
