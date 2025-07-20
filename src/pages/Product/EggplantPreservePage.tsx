import ProductPage from './ProductPage';
import jar2 from '../../img/jar2.png';

const product = {
  id: 2,
  name: 'Eggplant Preserve',
  description: 'A Eggplant Preserve that transforms potatoes into a pickle-flavored delight.',
  image: jar2,
  color: 'from-green-500 to-amber-500',
};

const EggplantPreservePage = () => {
  return <ProductPage product={product} />;
};

export default EggplantPreservePage;
