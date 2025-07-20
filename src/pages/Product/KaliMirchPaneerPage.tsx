import ProductPage from './ProductPage';
import jar3 from '../../img/jar3.png';

const product = {
  id: 3,
  name: 'Kali Mirch Paneer',
  description: 'A Kali Mirch Paneer that transforms potatoes into a pickle-flavored delight.',
  image:  jar3,
  color: 'from-red-600 to-red-800',
};

const KaliMirchPaneerPage = () => {
  return <ProductPage product={product} />;
};

export default KaliMirchPaneerPage;
