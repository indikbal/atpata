import ProductPage from './ProductPage';
import jar8 from '../../img/jar8.png';

const product = {
  id: 8,
  name: 'Navratna Kadhi Premix',
  description: 'A Navratna Kadhi Premix that transforms potatoes into a pickle-flavored delight.',
  image: jar8,
  color: 'from-yellow-500 to-amber-600',
};

const NavratnaKadhiPremixPage = () => {
  return <ProductPage product={product} />;
};

export default NavratnaKadhiPremixPage;
