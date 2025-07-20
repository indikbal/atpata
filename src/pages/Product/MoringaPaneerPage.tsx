import ProductPage from './ProductPage';
import jar5 from '../../img/jar5.png';

const product = {
  id: 5,
  name: 'Moringa Paneer',
  description: 'A Moringa Paneer that transforms potatoes into a pickle-flavored delight.',
  image: jar5,
  color: 'from-red-500 to-red-900',
};

const MoringaPaneerPage = () => {
  return <ProductPage product={product} />;
};

export default MoringaPaneerPage;
