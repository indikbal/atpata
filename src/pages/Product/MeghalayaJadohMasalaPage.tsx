import ProductPage from './ProductPage';
import jar1 from '../../img/jar1.png';

const product = {
  id: 25,
  name: 'Meghalaya Jadoh Masala',
  description: `Taste the tribal heritage of Meghalaya with Atpata's Jadoh Masala — an aromatic rice and meat spice blend inspired by the Khasi community's most celebrated dish.\n\nJadoh is Meghalaya's pride — fragrant rice cooked with meat (traditionally pork) in a blend of turmeric, black sesame, ginger, and bay leaves. Our masala captures the earthy, aromatic essence that makes Jadoh a must-have at every Khasi gathering.\n\nWhether you're cooking with pork, chicken, or making it vegetarian — this masala infuses your rice with the deep, warm flavours of the Abode of Clouds.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar1,
  color: 'from-green-600 to-amber-500',
};

const steps = [
  {
    title: 'Cook the Meat',
    description: 'Sauté meat pieces with Atpata Jadoh Masala in oil until browned.'
  },
  {
    title: 'Add Rice & Water',
    description: 'Add washed rice and water. Bring to a boil, then reduce heat.'
  },
  {
    title: 'Steam & Serve',
    description: 'Cover and cook on low heat for 20 minutes. Fluff and serve hot.'
  }
];

const MeghalayaJadohMasalaPage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default MeghalayaJadohMasalaPage;
