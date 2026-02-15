import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 19,
  name: 'Rogan Josh Masala',
  description: `Transport yourself to the valleys of Kashmir with Atpata's Rogan Josh Masala — an aromatic slow-cooked curry spice blend that's the crown jewel of Kashmiri Wazwan cuisine.\n\nRogan Josh is poetry in a pot — tender meat simmered in a rich, crimson gravy infused with Kashmiri chilli, fennel, dry ginger, and saffron. Our masala captures every layer of this complex, aromatic flavour so you can recreate the magic of a Kashmiri feast at home.\n\nNo need for rare spice hunting. Just marinate your meat, add this masala, and slow cook to perfection. The deep red colour and intoxicating aroma will make your kitchen smell like a Srinagar wazwan.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar3,
  color: 'from-red-700 to-amber-500',
};

const steps = [
  {
    title: 'Marinate the Meat',
    description: 'Coat lamb or mutton with yoghurt and Atpata Rogan Josh Masala. Rest for 1 hour.'
  },
  {
    title: 'Slow Cook',
    description: 'Sear the meat, add water, and simmer on low heat for 45–60 minutes until tender.'
  },
  {
    title: 'Garnish & Serve',
    description: 'Finish with a pinch of saffron and dry ginger. Serve with steamed rice or naan.'
  }
];

const KashmiriRoganJoshMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default KashmiriRoganJoshMasalaPage;
