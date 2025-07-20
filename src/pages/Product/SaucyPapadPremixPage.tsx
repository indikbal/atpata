import ProductPage from './ProductPage';
import jar4 from '../../img/jar4.png';

const product = {
  id: 4,
  name: 'Saucy Papad Premix',
  description: 'A Saucy Papad Premix that transforms potatoes into a pickle-flavored delight.',
  image: jar4,
  color: 'from-amber-400 to-yellow-600',
};

const SaucyPapadPremixPage = () => {
  return <ProductPage product={product} />;
};

export default SaucyPapadPremixPage;
