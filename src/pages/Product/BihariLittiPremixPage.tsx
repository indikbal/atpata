import ProductPage from './ProductPage';
import jar6 from '../../img/jar6.png';

const product = {
  id: 6,
  name: 'Bihari Litti Premix',
  description: 'A Bihari Litti Premix that transforms potatoes into a pickle-flavored delight.',
  image: jar6,
  color: 'from-yellow-500 to-amber-600',
};

const BihariLittiPremixPage = () => {
  return <ProductPage product={product} />;
};

export default BihariLittiPremixPage;
