// State to Products mapping
// Using state IDs from @svg-maps/india library

import jar1 from '../img/jar1.png';
import jar2 from '../img/jar2.png';
import jar3 from '../img/jar3.png';
import jar4 from '../img/jar4.png';
import jar5 from '../img/jar5.png';
import jar6 from '../img/jar6.png';
import jar7 from '../img/jar7.png';
import jar8 from '../img/jar8.png';

// State landmark icons from public folder

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  price: string;
  slug: string;
}

export interface StateData {
  id: string;
  name: string;
  tagline: string;
  themeColor: string;
  bgGradient: string;
  famousFor: string[];
  products: Product[];
  story: string;
  landmarkIcon: string;
  labelText: string;
}

// All products with their details
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Achari Aloo Dum',
    description: 'Spice up your potatoes with bold, tangy achari magic — in just one step',
    image: jar1,
    color: 'from-amber-500 to-red-500',
    price: '₹ 299',
    slug: 'achari-aloo-dum',
  },
  {
    id: 2,
    name: 'Eggplant Preserve',
    description: 'Smoky, spiced brinjal pickle that transforms any simple meal.',
    image: jar2,
    color: 'from-green-500 to-amber-500',
    price: '₹ 299',
    slug: 'eggplant-preserve',
  },
  {
    id: 3,
    name: 'Kali Mirch Paneer',
    description: 'Peppery, creamy paneer — gourmet-style and effortlessly made.',
    image: jar3,
    color: 'from-red-600 to-red-800',
    price: '₹ 299',
    slug: 'kali-mirch-paneer',
  },
  {
    id: 4,
    name: 'Saucy Papad Premix',
    description: 'Your papad\'s spicy, tangy upgrade — ready in seconds!',
    image: jar4,
    color: 'from-amber-400 to-yellow-600',
    price: '₹ 299',
    slug: 'saucy-papad-premix',
  },
  {
    id: 5,
    name: 'Moringa Paneer',
    description: 'Healthy meets tasty with this moringa-powered paneer blend.',
    image: jar5,
    color: 'from-red-500 to-red-900',
    price: '₹ 299',
    slug: 'moringa-paneer',
  },
  {
    id: 6,
    name: 'Bihari Litti Premix',
    description: 'Authentic litti flavour, no grinding, roasting, or hassle',
    image: jar6,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    slug: 'bihari-litti-premix',
  },
  {
    id: 7,
    name: 'Bitter Melon Preserve',
    description: 'Karela like never before — sweet, bitter, bold, and addictive.',
    image: jar7,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    slug: 'bitter-melon-preserve',
  },
  {
    id: 8,
    name: 'Navratna Kadhi Premix',
    description: 'Nine spices, one soul-soothing kadhi — comfort in a spoon.',
    image: jar8,
    color: 'from-yellow-500 to-amber-600',
    price: '₹ 299',
    slug: 'navratna-kadhi-premix',
  },
  {
    id: 9,
    name: 'Fish Curry Masala',
    description: 'Authentic Bengali mustard-based fish curry spice blend for the perfect maacher jhol.',
    image: jar1,
    color: 'from-yellow-500 to-red-500',
    price: '₹ 299',
    slug: 'bengali-fish-curry-masala',
  },
  {
    id: 10,
    name: 'Odia Dalma Premix',
    description: 'Traditional Odia lentil and vegetable stew spice mix — wholesome and aromatic.',
    image: jar2,
    color: 'from-orange-500 to-amber-600',
    price: '₹ 299',
    slug: 'odia-dalma-premix',
  },
  {
    id: 11,
    name: 'Goan Vindaloo Paste',
    description: 'Fiery, tangy vindaloo paste inspired by Portuguese-Goan culinary traditions.',
    image: jar3,
    color: 'from-red-500 to-orange-500',
    price: '₹ 299',
    slug: 'goan-vindaloo-paste',
  },
  {
    id: 12,
    name: 'Coconut Curry Mix',
    description: 'Rich coconut and curry leaf blend for an authentic Malabar-style curry.',
    image: jar4,
    color: 'from-green-600 to-emerald-700',
    price: '₹ 299',
    slug: 'kerala-coconut-curry-mix',
  },
  {
    id: 13,
    name: 'Butter Chicken Premix',
    description: 'Creamy, tomato-rich butter chicken masala — the taste of Old Delhi at home.',
    image: jar5,
    color: 'from-red-600 to-amber-500',
    price: '₹ 299',
    slug: 'delhi-butter-chicken-premix',
  },
  {
    id: 14,
    name: 'Jharkhand Rugra Masala',
    description: 'Earthy tribal mushroom spice blend from the forests of Jharkhand.',
    image: jar6,
    color: 'from-amber-600 to-green-700',
    price: '₹ 299',
    slug: 'jharkhand-rugra-masala',
  },
  {
    id: 15,
    name: 'Bisi Bele Bath Powder',
    description: 'Aromatic spice powder for the beloved Karnataka-style rice and lentil dish.',
    image: jar7,
    color: 'from-red-700 to-yellow-600',
    price: '₹ 299',
    slug: 'karnataka-bisi-bele-bath-powder',
  },
  {
    id: 16,
    name: 'Andhra Gongura Pickle',
    description: 'Tangy, fiery gongura leaf pickle — the pride of Andhra cuisine.',
    image: jar8,
    color: 'from-red-600 to-green-600',
    price: '₹ 299',
    slug: 'andhra-gongura-pickle',
  },
  {
    id: 17,
    name: 'Sarva Pindi Premix',
    description: 'Crispy rice flour snack spice blend — a beloved Telangana breakfast staple.',
    image: jar1,
    color: 'from-orange-600 to-red-600',
    price: '₹ 299',
    slug: 'telangana-sarva-pindi-premix',
  },
  {
    id: 18,
    name: 'Chhattisgarhi Chila Premix',
    description: 'Traditional rice batter pancake mix with earthy spices from the heart of India.',
    image: jar2,
    color: 'from-green-600 to-amber-600',
    price: '₹ 299',
    slug: 'chhattisgarhi-chila-premix',
  },
  {
    id: 19,
    name: 'Rogan Josh Masala',
    description: 'Aromatic slow-cooked curry spice blend with Kashmiri chilli, fennel, and dry ginger.',
    image: jar3,
    color: 'from-red-700 to-amber-500',
    price: '₹ 299',
    slug: 'kashmiri-rogan-josh-masala',
  },
];

// State data with assigned products (using IDs from @svg-maps/india)
// State IDs: up=Uttar Pradesh, mh=Maharashtra, pb=Punjab, rj=Rajasthan,
//           tn=Tamil Nadu, br=Bihar, gj=Gujarat, mp=Madhya Pradesh
export const stateProductsMap: Record<string, StateData> = {
  'up': {
    id: 'up',
    name: 'Uttar Pradesh',
    tagline: 'The Heart of Indian Cuisine',
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-orange-900 to-amber-900',
    famousFor: ['Dum Aloo', 'Chaat Masala', 'Garam Masala', 'Pickle Spices'],
    products: [allProducts[0]], // Achari Aloo Dum
    story: 'Uttar Pradesh, the land of Awadhi cuisine, brings you the authentic taste of slow-cooked dum aloo with rich, aromatic spices passed down through generations.',
    landmarkIcon: '/uttar pradesh.png',
    labelText: 'Uttar Pradesh se',
  },
  'mh': {
    id: 'mh',
    name: 'Maharashtra',
    tagline: 'Flavors of the Western Ghats',
    themeColor: '#F59E0B',
    bgGradient: 'from-amber-900 via-orange-900 to-red-900',
    famousFor: ['Kolhapuri Masala', 'Goda Masala', 'Baingan Bharta', 'Kanda Lasun'],
    products: [allProducts[1]], // Eggplant Preserve
    story: 'Maharashtra\'s culinary heritage features bold, smoky flavors. Our Eggplant Preserve captures the essence of traditional Maharashtrian bharta with perfectly balanced spices.',
    landmarkIcon: '/Maharastra.png',
    labelText: 'Maharashtra se',
  },
  'pb': {
    id: 'pb',
    name: 'Punjab',
    tagline: 'Land of Rich & Creamy Delights',
    themeColor: '#EF4444',
    bgGradient: 'from-red-900 via-rose-900 to-pink-900',
    famousFor: ['Paneer Dishes', 'Tandoori Spices', 'Makkhani Masala', 'Sarson'],
    products: [allProducts[2]], // Kali Mirch Paneer
    story: 'Punjab, the land of butter and cream, brings you the perfect blend of black pepper and aromatic spices for restaurant-style paneer at home.',
    landmarkIcon: '/punjab.png',
    labelText: 'Punjab se',
  },
  'rj': {
    id: 'rj',
    name: 'Rajasthan',
    tagline: 'Royal Spices of the Desert',
    themeColor: '#D97706',
    bgGradient: 'from-orange-900 via-amber-900 to-yellow-900',
    famousFor: ['Papad', 'Ker Sangri', 'Mathania Mirch', 'Dal Baati Masala'],
    products: [allProducts[3]], // Saucy Papad Premix
    story: 'Rajasthan\'s desert cuisine is known for its innovative use of dried ingredients. Our Saucy Papad Premix brings you the tangy, spicy flavors of traditional Rajasthani papad masala.',
    landmarkIcon: '/rajashtan.png',
    labelText: 'Rajasthan se',
  },
  'tn': {
    id: 'tn',
    name: 'Tamil Nadu',
    tagline: 'Temple of South Indian Spices',
    themeColor: '#10B981',
    bgGradient: 'from-green-900 via-emerald-900 to-teal-900',
    famousFor: ['Moringa', 'Curry Leaves', 'Sambar Powder', 'Rasam Spices'],
    products: [allProducts[4]], // Moringa Paneer
    story: 'Tamil Nadu\'s love for moringa (drumstick leaves) meets North Indian paneer in this unique fusion that\'s both healthy and delicious.',
    landmarkIcon: '/tamil-nadu.png',
    labelText: 'Tamil Nadu se',
  },
  'br': {
    id: 'br',
    name: 'Bihar',
    tagline: 'Authentic Flavors of the Gangetic Plains',
    themeColor: '#F97316',
    bgGradient: 'from-orange-900 via-red-900 to-amber-900',
    famousFor: ['Litti Chokha', 'Sattu', 'Chana Masala', 'Thekua Spices'],
    products: [allProducts[5]], // Bihari Litti Premix
    story: 'Bihar\'s iconic Litti Chokha is now just a premix away! Experience the authentic taste of roasted gram flour stuffed delicacy with our special spice blend.',
    landmarkIcon: '/bihar.png',
    labelText: 'Bihar se',
  },
  'gj': {
    id: 'gj',
    name: 'Gujarat',
    tagline: 'Sweet & Spicy Gujarati Magic',
    themeColor: '#84CC16',
    bgGradient: 'from-lime-900 via-green-900 to-emerald-900',
    famousFor: ['Karela Preparations', 'Dhokla Masala', 'Undhiyu Spices', 'Jain Masalas'],
    products: [allProducts[6]], // Bitter Melon Preserve
    story: 'Gujarat transforms the humble karela into a delicacy! Our Bitter Melon Preserve balances sweet, bitter, and spicy notes in perfect Gujarati style.',
    landmarkIcon: '/gujrat.png',
    labelText: 'Gujarat se',
  },
  'mp': {
    id: 'mp',
    name: 'Madhya Pradesh',
    tagline: 'The Spice Heart of India',
    themeColor: '#A855F7',
    bgGradient: 'from-purple-900 via-violet-900 to-indigo-900',
    famousFor: ['Kadhi', 'Bhutte Ka Kees', 'Poha Masala', 'Chakki Atta Spices'],
    products: [allProducts[7]], // Navratna Kadhi Premix
    story: 'Madhya Pradesh\'s comfort food - Kadhi - gets a royal upgrade with nine aromatic spices. Our Navratna Kadhi Premix brings warmth to every bowl.',
    landmarkIcon: '/delhi.png',
    labelText: 'Madhya Pradesh se',
  },
  'wb': {
    id: 'wb',
    name: 'West Bengal',
    tagline: 'The Land of Sweetness & Spice',
    themeColor: '#E11D48',
    bgGradient: 'from-rose-900 via-red-900 to-amber-900',
    famousFor: ['Fish Curry', 'Mustard Oil', 'Panch Phoron', 'Mishti Doi'],
    products: [allProducts[8]], // Bengali Fish Curry Masala
    story: 'West Bengal\'s culinary soul lives in its mustard-laced fish curries and aromatic spice blends. Experience the authentic taste of Bengali kitchens.',
    landmarkIcon: '/west-bengal.png',
    labelText: 'West Bengal se',
  },
  'or': {
    id: 'or',
    name: 'Odisha',
    tagline: 'Temple Cuisine of the East',
    themeColor: '#0891B2',
    bgGradient: 'from-cyan-900 via-teal-900 to-blue-900',
    famousFor: ['Dalma', 'Chhena Poda', 'Pakhala', 'Machha Besara'],
    products: [allProducts[9]], // Odia Dalma Premix
    story: 'Odisha\'s temple cuisine is known for its subtle yet soulful flavors. Our Dalma Premix captures the essence of the Jagannath Puri temple kitchen.',
    landmarkIcon: '/odisha.png',
    labelText: 'Odisha se',
  },
  'ga': {
    id: 'ga',
    name: 'Goa',
    tagline: 'Spices Meet the Sea',
    themeColor: '#F43F5E',
    bgGradient: 'from-rose-900 via-pink-900 to-red-900',
    famousFor: ['Vindaloo', 'Xacuti', 'Recheado', 'Balchão'],
    products: [allProducts[10]], // Goan Vindaloo Paste
    story: 'Goa\'s unique blend of Indian and Portuguese flavors creates one of India\'s most distinctive cuisines. Our Vindaloo Paste brings the Goan beach vibes to your kitchen.',
    landmarkIcon: '/goa.png',
    labelText: 'Goa se',
  },
  'kl': {
    id: 'kl',
    name: 'Kerala',
    tagline: 'God\'s Own Spice Garden',
    themeColor: '#059669',
    bgGradient: 'from-emerald-900 via-green-900 to-teal-900',
    famousFor: ['Coconut Curry', 'Black Pepper', 'Cardamom', 'Appam Stew'],
    products: [allProducts[11]], // Kerala Coconut Curry Mix
    story: 'Kerala, the spice capital of India, brings you the rich aroma of coconut and curry leaves. Our Coconut Curry Mix is inspired by the legendary Malabar coast.',
    landmarkIcon: '/kerala.png',
    labelText: 'Kerala se',
  },
  'dl': {
    id: 'dl',
    name: 'Delhi',
    tagline: 'Capital of Street Food & Mughlai',
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-rose-900 to-orange-900',
    famousFor: ['Butter Chicken', 'Chole Bhature', 'Chaat', 'Biryani'],
    products: [allProducts[12]], // Delhi Butter Chicken Premix
    story: 'Delhi\'s food scene is a melting pot of Mughlai grandeur and street food magic. Our Butter Chicken Premix recreates the iconic Old Delhi taste.',
    landmarkIcon: '/delhi.png',
    labelText: 'Delhi se',
  },
  'jh': {
    id: 'jh',
    name: 'Jharkhand',
    tagline: 'Tribal Flavors of the Forest',
    themeColor: '#65A30D',
    bgGradient: 'from-lime-900 via-green-900 to-amber-900',
    famousFor: ['Rugra', 'Dhuska', 'Handia', 'Bamboo Shoot Pickle'],
    products: [allProducts[13]], // Jharkhand Rugra Masala
    story: 'Jharkhand\'s tribal cuisine celebrates the flavors of the forest — wild mushrooms, bamboo shoots, and earthy spices create a taste unlike any other.',
    landmarkIcon: '/jharkhand.png',
    labelText: 'Jharkhand se',
  },
  'ka': {
    id: 'ka',
    name: 'Karnataka',
    tagline: 'From Udupi to Coorg',
    themeColor: '#7C3AED',
    bgGradient: 'from-violet-900 via-purple-900 to-indigo-900',
    famousFor: ['Bisi Bele Bath', 'Mysore Pak', 'Filter Coffee', 'Ragi Mudde'],
    products: [allProducts[14]], // Karnataka Bisi Bele Bath Powder
    story: 'Karnataka\'s cuisine ranges from the coastal flavors of Mangalore to the royal kitchens of Mysore. Our Bisi Bele Bath Powder captures this rich heritage.',
    landmarkIcon: '/karnataka.png',
    labelText: 'Karnataka se',
  },
  'ap': {
    id: 'ap',
    name: 'Andhra Pradesh',
    tagline: 'The Spiciest State of India',
    themeColor: '#E63946',
    bgGradient: 'from-red-900 via-orange-900 to-yellow-900',
    famousFor: ['Gongura', 'Guntur Chilli', 'Pesarattu', 'Pulihora'],
    products: [allProducts[15]], // Andhra Gongura Pickle
    story: 'Andhra Pradesh is renowned for its fiery cuisine. Our Gongura Pickle brings the iconic sour and spicy tang of sorrel leaves that defines Andhra flavors.',
    landmarkIcon: '/andhra-pradesh.png',
    labelText: 'Andhra Pradesh se',
  },
  'tg': {
    id: 'tg',
    name: 'Telangana',
    tagline: 'Nizami Spices & Rustic Flavors',
    themeColor: '#D97706',
    bgGradient: 'from-amber-900 via-orange-900 to-red-900',
    famousFor: ['Sarva Pindi', 'Hyderabadi Biryani', 'Jonna Rotte', 'Pachi Pulusu'],
    products: [allProducts[16]], // Telangana Sarva Pindi Premix
    story: 'Telangana\'s cuisine blends Nizami royalty with rustic village flavors. Our Sarva Pindi Premix captures the crispy, spicy essence of this beloved street food.',
    landmarkIcon: '/telangana.png',
    labelText: 'Telangana se',
  },
  'ct': {
    id: 'ct',
    name: 'Chhattisgarh',
    tagline: 'Rice Bowl of India',
    themeColor: '#16A34A',
    bgGradient: 'from-green-900 via-emerald-900 to-lime-900',
    famousFor: ['Chila', 'Fara', 'Bafauri', 'Bore Baasi'],
    products: [allProducts[17]], // Chhattisgarhi Chila Premix
    story: 'Chhattisgarh\'s tribal cuisine is rooted in simplicity and natural ingredients. Our Chila Premix brings the earthy, wholesome taste of traditional rice pancakes.',
    landmarkIcon: '/chhattisgarh.png',
    labelText: 'Chhattisgarh se',
  },
  'jk': {
    id: 'jk',
    name: 'Jammu & Kashmir',
    tagline: 'Paradise of Aromatic Spices',
    themeColor: '#1D4ED8',
    bgGradient: 'from-blue-900 via-indigo-900 to-sky-900',
    famousFor: ['Rogan Josh', 'Kahwa', 'Kashmiri Chilli', 'Saffron'],
    products: [allProducts[18]], // Kashmiri Rogan Josh Masala
    story: 'Kashmir\'s cuisine is a symphony of aromatic spices — saffron, fennel, and dry ginger come together in our Rogan Josh Masala to recreate the warmth of a Kashmiri wazwan.',
    landmarkIcon: '/jammu-kashmir.png',
    labelText: 'Kashmir se',
  },
};

// Get all states that have products
export const statesWithProducts = Object.keys(stateProductsMap);

// Check if a state has products
export const hasProducts = (stateId: string): boolean => {
  return stateId in stateProductsMap;
};

// Get state data by ID
export const getStateData = (stateId: string): StateData | null => {
  return stateProductsMap[stateId] || null;
};
