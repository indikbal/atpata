import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 12,
  name: 'Coconut Curry Mix',
  description: `Experience the lush flavours of God's Own Country with Atpata's Kerala Coconut Curry Mix — a rich blend of coconut, curry leaves, black pepper, and warm spices for an authentic Malabar-style curry.\n\nKerala is the spice capital of India, and this mix is a tribute to its legendary culinary heritage. Whether you're making a creamy vegetable stew, fish moilee, or chicken curry — this blend delivers the silky, aromatic depth that defines Kerala cuisine.\n\nJust add coconut milk, your choice of protein or vegetables, and let this mix work its magic. From the backwaters of Alleppey to your dining table — Kerala has never been closer.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar4,
  color: 'from-green-600 to-emerald-700',
};

const steps = [
  {
    title: 'Sauté the Base',
    description: 'Heat coconut oil, add onions and Atpata Coconut Curry Mix. Sauté until fragrant.'
  },
  {
    title: 'Add Coconut Milk',
    description: 'Pour in coconut milk with your choice of vegetables, fish, or chicken.'
  },
  {
    title: 'Simmer & Serve',
    description: 'Let it simmer for 15 minutes. Serve with appam, rice, or parotta.'
  }
];

const KeralaCoconutCurryMixPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default KeralaCoconutCurryMixPage;
