import ProductPage from './ProductPage';
import jar8 from '../../img/jar8.png';

const product = {
  id: 24,
  name: 'Manipuri Eromba Masala',
  description: `Experience the fiery spirit of Manipur with Atpata's Eromba Masala — a smoky, pungent spice blend that turns boiled vegetables into a Meitei culinary masterpiece.\n\nEromba is Manipur's everyday comfort dish — boiled vegetables and fish mashed together with fiery U-morok (king chilli) and fermented fish. Our masala captures the smoky heat and umami depth that makes Eromba irresistible to anyone who's tasted it.\n\nWhether you use potatoes, beans, or any seasonal vegetables — this masala adds the authentic Manipuri punch that transforms simple ingredients into something extraordinary.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar8,
  color: 'from-orange-600 to-red-500',
};

const steps = [
  {
    title: 'Boil Vegetables',
    description: 'Boil potatoes, beans, and any seasonal vegetables until soft.'
  },
  {
    title: 'Mash & Mix',
    description: 'Mash the vegetables roughly. Mix in Atpata Eromba Masala thoroughly.'
  },
  {
    title: 'Garnish & Serve',
    description: 'Top with fresh coriander and sliced chillies. Serve with steamed rice.'
  }
];

const ManipuriErombaMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default ManipuriErombaMasalaPage;
