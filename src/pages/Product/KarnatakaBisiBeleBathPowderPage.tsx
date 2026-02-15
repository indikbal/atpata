import ProductPage from './ProductPage';
import jar7 from '../../img/jar7.png';

const product = {
  id: 15,
  name: 'Bisi Bele Bath Powder',
  description: `Taste the royal flavours of Karnataka with Atpata's Bisi Bele Bath Powder — an aromatic spice blend for the beloved one-pot rice and lentil dish that's comfort food at its finest.\n\nBisi Bele Bath (hot lentil rice) is Karnataka's answer to the perfect comfort meal — a rich, spicy, and wholesome dish that brings together toor dal, rice, vegetables, and a symphony of roasted spices. Our powder captures this magic in one ready-to-use blend.\n\nFrom the kitchens of Mysore to Bangalore's legendary darshinis — this is the taste of Karnataka in every spoonful. Just add it to your cooked dal-rice and let the aroma do the talking.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar7,
  color: 'from-red-700 to-yellow-600',
};

const steps = [
  {
    title: 'Cook Dal & Rice',
    description: 'Pressure cook toor dal and rice together with chopped vegetables.'
  },
  {
    title: 'Add the Powder',
    description: 'Stir in Atpata Bisi Bele Bath Powder with tamarind extract and jaggery.'
  },
  {
    title: 'Temper & Serve',
    description: 'Finish with a ghee tadka of cashews and curry leaves. Serve with boondi raita.'
  }
];

const KarnatakaBisiBeleBathPowderPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default KarnatakaBisiBeleBathPowderPage;
