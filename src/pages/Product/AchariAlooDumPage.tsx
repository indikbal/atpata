import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 1,
  name: 'Achari Aloo Dum',
  description: 'A tangy and spicy blend that transforms potatoes into a pickle-flavored delight.',
  image: jar1,
  color: 'from-amber-500 to-red-500',
};

const AchariAlooDumPage = () => {
  return <ProductPage product={product} />;
};

export default AchariAlooDumPage;
