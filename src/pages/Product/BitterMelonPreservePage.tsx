import ProductPage from './ProductPage';
import jar7 from '../../img/jar7.png';

const product = {
  id: 7,
  name: 'Bitter Melon Preserve',
  description: 'A Bitter Melon Preserve that transforms potatoes into a pickle-flavored delight.',
  image: jar7,
  color: 'from-yellow-500 to-amber-600',
};

const BitterMelonPreservePage = () => {
  return <ProductPage product={product} />;
};

export default BitterMelonPreservePage;
