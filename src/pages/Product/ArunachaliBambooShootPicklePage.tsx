import ProductPage from './ProductPage';
import jar6 from '../../img/jar6.png';

const product = {
  id: 30,
  name: 'Arunachali Bamboo Shoot Pickle',
  description: `Taste the wild Eastern Himalayas with Atpata's Arunachali Bamboo Shoot Pickle — a tangy, fiery pickle mix featuring the legendary Raja Mircha chilli and aromatic mountain herbs.\n\nBamboo shoots are the backbone of Arunachal Pradesh's cuisine — crunchy, tangy, and versatile. Our pickle mix combines dried bamboo shoot with Raja Mircha (King Chilli), turmeric, and mustard for a pickle that's bold, complex, and deeply rooted in tribal tradition.\n\nWhether you enjoy it with rice, as a side with dal, or as a fiery accompaniment to any meal — this pickle brings the untamed flavours of India's frontier state to your table.\n\nCooking made simple. Flavour made unforgettable.`,
  image: jar6,
  color: 'from-green-600 to-yellow-500',
};

const steps = [
  {
    title: 'Prep Bamboo Shoots',
    description: 'Soak dried bamboo shoots in water for 30 minutes. Drain and chop.'
  },
  {
    title: 'Mix with Pickle Blend',
    description: 'Toss bamboo shoots with Atpata pickle mix and warm mustard oil.'
  },
  {
    title: 'Jar & Mature',
    description: 'Store in a glass jar for 2–3 days for best flavour. Refrigerate after opening.'
  }
];

const ArunachaliBambooShootPicklePage = () => {
  return <ProductPage product={product} steps={steps} />;
};

export default ArunachaliBambooShootPicklePage;
