import ProductPage from './ProductPage';
import jar8 from '../../img/jar8.png';

const product = {
  id: 16,
  name: 'Andhra Gongura Pickle',
  description: `Feel the fiery soul of Andhra Pradesh with Atpata's Gongura Pickle — a tangy, spicy sorrel leaf pickle that's the undisputed king of Andhra condiments.\n\nGongura (sorrel leaves) are to Andhra what butter is to Punjab — absolutely essential. This pickle blend combines the natural sourness of gongura with Guntur chillies, garlic, and mustard for a flavour explosion that elevates any meal.\n\nSpread it on rice, pair it with dosa, or eat it with curd rice — this pickle is addictively tangy, fiery, and impossible to resist. Once you try it, every meal feels incomplete without it.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar8,
  color: 'from-red-600 to-green-600',
};

const steps = [
  {
    title: 'Prep the Leaves',
    description: 'Wash and chop fresh gongura (sorrel) leaves. Remove stems.'
  },
  {
    title: 'Cook with Masala',
    description: 'Heat oil, add Atpata Gongura Pickle blend and cook with the leaves for 10 minutes.'
  },
  {
    title: 'Cool & Store',
    description: 'Let it cool completely. Store in a glass jar — it gets better with time!'
  }
];

const AndhraGonguraPicklePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default AndhraGonguraPicklePage;
