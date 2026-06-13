// State to Products mapping
// Source of truth: "ATPATA Bharat Bhojan Collection" document (public/products/)
// Product images live in public/products/ and are referenced by absolute path.
// Using state IDs from @svg-maps/india library.

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  price: string;
  slug: string;
  story?: string;
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

const PRICE = '₹ 299';

// All real products from the ATPATA Bharat Bhojan Collection.
// `image` points at the matching file inside public/products/.
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Achari Aloo Dum',
    description: 'Bold, tangy achari potatoes in just one easy step.',
    image: '/products/Achari Aloo Dum.png',
    color: 'from-amber-500 to-red-500',
    price: PRICE,
    slug: 'achari-aloo-dum',
  },
  {
    id: 2,
    name: 'Jhalmuri Masala',
    description: 'The zesty Kolkata street style puffed rice seasoning.',
    image: '/products/Jhalmuri Masala.png',
    color: 'from-yellow-500 to-orange-600',
    price: PRICE,
    slug: 'jhalmuri-masala',
  },
  {
    id: 3,
    name: 'Rajma Premix',
    description: 'Slow cooked Punjabi style rajma flavour, ready in minutes.',
    image: '/products/Rajma Premix.png',
    color: 'from-red-600 to-rose-800',
    price: PRICE,
    slug: 'rajma-premix',
  },
  {
    id: 4,
    name: 'Chole Premix',
    description: 'Robust, spicy chole masala for restaurant style chickpeas.',
    image: '/products/Chole Premix.png',
    color: 'from-amber-600 to-red-700',
    price: PRICE,
    slug: 'chole-premix',
  },
  {
    id: 5,
    name: 'High Protein Buttermilk Masala',
    description: 'Protein packed chaas masala for a refreshing, healthy glass.',
    image: '/products/High Protein Buttermilk Masala.png',
    color: 'from-lime-500 to-emerald-600',
    price: PRICE,
    slug: 'high-protein-buttermilk-masala',
  },
  {
    id: 6,
    name: 'Madra Curry Premix',
    description: 'Himachali yoghurt based chickpea curry, festive and aromatic.',
    image: '/products/Madra Curry Premix.png',
    color: 'from-emerald-600 to-teal-500',
    price: PRICE,
    slug: 'madra-curry-premix',
  },
  {
    id: 7,
    name: 'Paneer Chaman Premix',
    description: 'Kashmiri style paneer in a delicate, aromatic gravy.',
    image: '/products/Paneer Chaman Premix.png',
    color: 'from-blue-600 to-indigo-700',
    price: PRICE,
    slug: 'paneer-chaman-premix',
  },
  {
    id: 8,
    name: 'Sarson Da Saag Premix',
    description: 'Winter special Punjabi sarson da saag, effortlessly made.',
    image: '/products/Sarso Da Saag Premix.png',
    color: 'from-green-600 to-lime-700',
    price: PRICE,
    slug: 'sarson-da-saag-premix',
  },
  {
    id: 9,
    name: 'Dal Makhani Premix',
    description: 'Creamy, buttery dal makhani, the dhaba classic at home.',
    image: '/products/Dal Makhani Premix.png',
    color: 'from-amber-700 to-red-800',
    price: PRICE,
    slug: 'dal-makhani-premix',
  },
  {
    id: 10,
    name: 'Chainsoo Premix',
    description: 'Earthy Garhwali black gram dal with smoky mountain flavour.',
    image: '/products/Chainsoo Premix.png',
    color: 'from-green-700 to-emerald-800',
    price: PRICE,
    slug: 'chainsoo-premix',
  },
  {
    id: 11,
    name: 'Banarasi Tamatar Chaat Base',
    description: 'Tangy, spicy Banaras style tamatar chaat in seconds.',
    image: '/products/Banarasi Tamatar Chaat Base.png',
    color: 'from-red-500 to-orange-600',
    price: PRICE,
    slug: 'banarasi-tamatar-chaat-base',
  },
  {
    id: 12,
    name: 'Chhattisgarhi Chila Mix',
    description: 'Wholesome rice batter chila with earthy spices.',
    image: '/products/Chattisgarhi Chila Mix.png',
    color: 'from-green-600 to-amber-600',
    price: PRICE,
    slug: 'chhattisgarhi-chila-mix',
  },
  {
    id: 13,
    name: 'Undhiyu Premix',
    description: 'Surti winter vegetable medley, rich and festive.',
    image: '/products/Undhiyu Premix.png',
    color: 'from-amber-500 to-green-600',
    price: PRICE,
    slug: 'undhiyu-premix',
  },
  {
    id: 14,
    name: 'Sev Tamatar Premix',
    description: 'Tangy tomato curry topped with crunchy sev.',
    image: '/products/Sev Tamatar Premix.png',
    color: 'from-orange-500 to-red-600',
    price: PRICE,
    slug: 'sev-tamatar-premix',
  },
  {
    id: 15,
    name: 'Khaman Dhokla Premix',
    description: 'Soft, fluffy, melt in mouth Gujarati khaman dhokla.',
    image: '/products/Khaman Dhokla Premix.png',
    color: 'from-yellow-400 to-amber-500',
    price: PRICE,
    slug: 'khaman-dhokla-premix',
  },
  {
    id: 16,
    name: 'Poha Seasoning Mix',
    description: 'Light, lemony Indori poha seasoning for the perfect breakfast.',
    image: '/products/Poha Seasoning Mix.png',
    color: 'from-yellow-500 to-orange-500',
    price: PRICE,
    slug: 'poha-seasoning-mix',
  },
  {
    id: 17,
    name: 'Thecha Premix',
    description: 'Fiery Maharashtrian green chilli thecha kick.',
    image: '/products/Thecha Premix.png',
    color: 'from-green-600 to-emerald-700',
    price: PRICE,
    slug: 'thecha-premix',
  },
  {
    id: 18,
    name: 'Lasooni Chutney Powder',
    description: 'Bold garlic chutney powder for a punch of flavour.',
    image: '/products/Lasooni Chutney Powder.png',
    color: 'from-red-600 to-amber-600',
    price: PRICE,
    slug: 'lasooni-chutney-powder',
  },
  {
    id: 19,
    name: 'Saucy Papad Premix',
    description: "Your papad's spicy, tangy upgrade, ready in seconds.",
    image: '/products/Saucy Papad Premix.png',
    color: 'from-amber-400 to-yellow-600',
    price: PRICE,
    slug: 'saucy-papad-premix',
  },
  {
    id: 20,
    name: 'Makhana',
    description: 'Roasted fox nuts, the guilt free, crunchy Bihari snack.',
    image: '/products/Makhana.png',
    color: 'from-amber-300 to-yellow-500',
    price: PRICE,
    slug: 'makhana',
  },
  {
    id: 21,
    name: 'Ghugni Masala',
    description: 'Spiced yellow pea ghugni, the Jharkhand street favourite.',
    image: '/products/Ghugni Masala.png',
    color: 'from-amber-600 to-green-700',
    price: PRICE,
    slug: 'ghugni-masala',
  },
  {
    id: 22,
    name: 'Dalma Premix',
    description: "Odisha's wholesome lentil and veg dalma, temple style.",
    image: '/products/Dalma Premix.png',
    color: 'from-orange-500 to-amber-600',
    price: PRICE,
    slug: 'dalma-premix',
  },
  {
    id: 23,
    name: 'Pulihora Premix',
    description: 'Tangy Andhra tamarind rice mix, perfectly balanced.',
    image: '/products/Pulihora Premix.png',
    color: 'from-yellow-500 to-red-500',
    price: PRICE,
    slug: 'pulihora-premix',
  },
  {
    id: 24,
    name: 'Cafe Express Instant Coffee',
    description: 'Rich, aromatic South Indian style instant coffee.',
    image: '/products/Cafe Express Instant Coffee.png',
    color: 'from-amber-800 to-yellow-900',
    price: PRICE,
    slug: 'cafe-express-instant-coffee',
  },
  {
    id: 25,
    name: 'Avial Premix',
    description: 'Coconut laced Kerala mixed vegetable avial in minutes.',
    image: '/products/Avial Premix.png',
    color: 'from-green-600 to-emerald-700',
    price: PRICE,
    slug: 'avial-premix',
  },
  {
    id: 26,
    name: 'Gunpowder Podi',
    description: 'Fiery Tamil idli dosa gunpowder podi.',
    image: '/products/Gunpowder Podi.png',
    color: 'from-red-700 to-orange-600',
    price: PRICE,
    slug: 'gunpowder-podi',
  },
  {
    id: 27,
    name: 'Goa Kokum Mojito Masala',
    description: 'Cooling kokum mojito mix with a coastal twist.',
    image: '/products/Goa Kokum Mojito Masala.png',
    color: 'from-rose-500 to-pink-600',
    price: PRICE,
    slug: 'goa-kokum-mojito-masala',
  },
  {
    id: 28,
    name: 'Bamboo Shoot Pickle',
    description: 'Tangy Arunachali bamboo shoot pickle with Raja Mircha.',
    image: '/products/Bamboo Shoot Pickle.png',
    color: 'from-green-600 to-yellow-500',
    price: PRICE,
    slug: 'bamboo-shoot-pickle',
  },
  {
    id: 29,
    name: 'Gulab Chai Instant Tea Premix',
    description: 'Fragrant rose kissed instant chai, ready in a cup.',
    image: '/products/Gulab Chai Instant Tea Premix.png',
    color: 'from-rose-500 to-red-600',
    price: PRICE,
    slug: 'gulab-chai-instant-tea-premix',
  },
  {
    id: 30,
    name: 'Eromba Premix',
    description: 'Smoky Manipuri mashed veg eromba with fermented notes.',
    image: '/products/Eromba Premix.png',
    color: 'from-orange-600 to-red-500',
    price: PRICE,
    slug: 'eromba-premix',
  },
  {
    id: 31,
    name: 'Tungrymbai Premix',
    description: "Meghalaya's bold fermented soybean chutney mix.",
    image: '/products/Tungrymbai Premix.png',
    color: 'from-indigo-600 to-blue-700',
    price: PRICE,
    slug: 'tungrymbai-premix',
  },
  {
    id: 32,
    name: 'Mizoram Bai Masala',
    description: 'Herbal Mizo stew blend with mustard leaf and herbs.',
    image: '/products/Mizoram Bai Masala.png',
    color: 'from-teal-600 to-green-500',
    price: PRICE,
    slug: 'mizoram-bai-masala',
  },
  {
    id: 33,
    name: 'King Chilli Chutney',
    description: "Fiery Naga Bhut Jolokia chutney, not for the faint hearted.",
    image: '/products/King Chilli Chutney.png',
    color: 'from-red-700 to-orange-500',
    price: PRICE,
    slug: 'king-chilli-chutney',
  },
  {
    id: 34,
    name: 'Momo Chutney Mix',
    description: 'Fiery Sikkimese momo chutney for the perfect dip.',
    image: '/products/Momo Chutney Mix.png',
    color: 'from-red-600 to-rose-700',
    price: PRICE,
    slug: 'momo-chutney-mix',
  },
  {
    id: 35,
    name: 'Berma Chutney Mix',
    description: 'Pungent, umami rich Tripuri fermented fish chutney.',
    image: '/products/Berma Chutney Mix.png',
    color: 'from-amber-500 to-orange-600',
    price: PRICE,
    slug: 'berma-chutney-mix',
  },
  {
    id: 36,
    name: 'Paneer Lababdar Mix',
    description: 'Rich, creamy paneer lababdar in a luscious tomato gravy.',
    image: '/products/Paneer Lababdar Mix.png',
    color: 'from-red-600 to-orange-500',
    price: PRICE,
    slug: 'paneer-lababdar-mix',
  },
  {
    id: 37,
    name: 'Jackfruit Coconut Curry Mix',
    description: 'Tropical jackfruit and coconut curry, island style.',
    image: '/products/Jackfruit Coconut Curry Mix.png',
    color: 'from-cyan-600 to-teal-500',
    price: PRICE,
    slug: 'jackfruit-coconut-curry-mix',
  },
  {
    id: 38,
    name: 'Tomato Rice Mix',
    description: 'Tangy South Indian tomato rice, French coast inspired.',
    image: '/products/Tomato Rice Mix.png',
    color: 'from-red-500 to-amber-500',
    price: PRICE,
    slug: 'tomato-rice-mix',
  },
  {
    id: 39,
    name: 'Banana Flower Curry Premix',
    description: 'Nutritious banana flower curry with island spices.',
    image: '/products/Banana Flower Curry Premix.png',
    color: 'from-lime-600 to-green-700',
    price: PRICE,
    slug: 'banana-flower-curry-premix',
  },
  {
    id: 40,
    name: 'Karela Ka Achaar',
    description: "Bittersweet, spicy bitter gourd pickle that's addictive.",
    image: '/products/Karela Ka Achaar.png',
    color: 'from-green-700 to-lime-600',
    price: PRICE,
    slug: 'karela-ka-achaar',
  },
  {
    id: 41,
    name: 'Baigan Ka Achaar',
    description: 'Smoky, tangy brinjal pickle to lift any meal.',
    image: '/products/Baigan Ka Achaar.png',
    color: 'from-purple-700 to-indigo-800',
    price: PRICE,
    slug: 'baigan-ka-achaar',
  },
  {
    id: 42,
    name: 'Bihari Litti Premix',
    description: 'Earthy roasted sattu litti, the soul of Bihari kitchens.',
    image: '/products/Bihari Litti Premix.png',
    color: 'from-amber-600 to-orange-700',
    price: PRICE,
    slug: 'bihari-litti-premix',
  },
];

// Regional, story-driven copy for each product, shown on the product detail page.
const productStories: Record<string, string> = {
  'achari-aloo-dum':
    `In the by lanes of the east, no winter spread is complete without a fiery bowl of achari aloo dum, baby potatoes bathed in the tangy, mustard kissed punch of pickle spices. It's the flavour of bustling markets and slow Sunday family feasts.\n\nAtpata's Achari Aloo Dum bottles that bold, tangy magic so you can bring the soul of a home cooked dum to your table in a single, effortless step.`,
  'jhalmuri-masala':
    `Picture a Kolkata evening, a paper cone of puffed rice tossed with mustard oil, raw onion, green chilli and that unmistakable masala, handed to you by a street corner jhalmuri wala. It's Bengal's favourite anytime snack: crunchy, spicy and impossibly moreish.\n\nOur Jhalmuri Masala captures that exact street side zing, so every handful tastes like a stroll down Park Street.`,
  'rajma-premix':
    `Sunday in a North Indian home means one thing, rajma chawal, simmered slow until the kidney beans melt into a thick, soulful gravy. It's comfort food that tastes like family and lazy afternoons.\n\nAtpata's Rajma Premix carries that slow cooked depth, giving you rich, dhaba style rajma without the hours of stirring.`,
  'chole-premix':
    `From the kulcha carts of Old Delhi to wedding buffets across the north, robust, spice laden chole is the undisputed king of chickpea curries, dark, tangy and gloriously bold.\n\nOur Chole Premix delivers that punchy, street style flavour in minutes, ready to pair with bhature, kulche or steaming rice.`,
  'high-protein-buttermilk-masala':
    `In the dairy heartland of Haryana, a tall glass of chaas is the answer to every scorching afternoon, cooling, salty, spiced and endlessly refreshing.\n\nOur High Protein Buttermilk Masala gives that rustic glass a wholesome, protein rich upgrade, turning everyday buttermilk into a nourishing treat.`,
  'madra-curry-premix':
    `High in the hills of Himachal, the festive Dham feast is unthinkable without madra, chickpeas slow simmered in yoghurt and warm, aromatic spices, served on leaf plates at celebrations.\n\nOur Madra Curry Premix brings that creamy, festive mountain flavour straight to your kitchen.`,
  'paneer-chaman-premix':
    `In the saffron scented kitchens of the Kashmir Valley, Paneer Chaman is a cherished delicacy, where soft cubes of paneer are gently simmered in a fragrant gravy infused with fennel and traditional Kashmiri spices.\n\nOur Paneer Chaman Premix brings the comforting warmth and timeless flavours of Kashmir to your everyday cooking.`,
  'sarson-da-saag-premix':
    `Amid the dramatic mountains of Ladakh, where long winters and crisp air make wholesome food a necessity, hearty greens have always been valued for their warmth and nourishment. Rich, earthy and deeply satisfying, sarso da saag is the kind of meal that brings comfort after a day in the cold.\n\nOur Sarso Da Saag Premix delivers that slow cooked, homestyle goodness in minutes, bringing a bowl of warmth and mountain comfort straight to your table.`,
  'dal-makhani-premix':
    `On every Punjabi highway the dhaba ritual is sacred, black lentils and rajma simmered overnight over coal, then finished with butter and cream until impossibly rich. Dal makhani is indulgence in a bowl.\n\nAtpata's Dal Makhani Premix recreates that velvety, slow cooked dhaba classic with all the richness and none of the wait.`,
  'chainsoo-premix':
    `Deep in the Garhwal hills, chainsoo is mountain soul food, black gram roasted and ground, then slow cooked into a smoky, protein rich dal that warms you against the Himalayan cold.\n\nOur Chainsoo Premix carries that rustic, earthy flavour of pahadi kitchens to wherever you call home.`,
  'banarasi-tamatar-chaat-base':
    `On the ghats of Banaras, the tamatar chaat is legendary, tomatoes mashed and spiced in a heavy iron kadhai, piled high with crunch and a tangy, fiery kick that's pure Kashi.\n\nOur Banarasi Tamatar Chaat Base bottles that iconic ghat side flavour, ready to recreate the magic of the galis at home.`,
  'chhattisgarhi-chila-mix':
    `In the rice bowl of India, the humble chila, a savoury rice batter pancake, starts countless mornings: simple, wholesome and rooted in tribal kitchens.\n\nOur Chhattisgarhi Chila Mix brings that earthy, comforting taste of central India to your breakfast table in minutes.`,
  'undhiyu-premix':
    `Come winter, Surat and its surrounds come alive with undhiyu, a glorious medley of seasonal vegetables and muthia, slow cooked with green spices and traditionally steamed in earthen pots buried upside down underground.\n\nOur Undhiyu Premix captures that festive Gujarati feast in all its rich, herby splendour.`,
  'sev-tamatar-premix':
    `A Kathiawadi classic, sev tamatar nu shaak is the quick, tangy tomato curry crowned with crunchy sev that graces lunchboxes and roadside dhabas across Gujarat.\n\nOur Sev Tamatar Premix gives you that sweet spicy tangy comfort in a flash, just add tomatoes and a handful of sev.`,
  'khaman-dhokla-premix':
    `Soft, golden and jiggly, khaman is Gujarat's pride, steamed to a melt in the mouth sponge, tempered with mustard seeds and finished with a squeeze of lime. The perfect anytime snack.\n\nOur Khaman Dhokla Premix makes that fluffy, fermented delight foolproof, every single time.`,
  'poha-seasoning-mix':
    `Mornings in Indore begin with poha, light, lemony flattened rice topped with crunchy sev, jeeravan and a scatter of pomegranate. It's a whole city's beloved breakfast ritual.\n\nOur Poha Seasoning Mix delivers that signature Indori flavour, turning a simple bowl into a taste of Malwa.`,
  'thecha-premix':
    `In the Maharashtrian countryside, thecha is the fiery soul of every meal, green chillies and garlic pounded coarse in a stone mortar: rough, rustic and gloriously hot.\n\nOur Thecha Premix bottles that village style heat, ready to fire up your bhakri, rice or any plate that needs a kick.`,
  'lasooni-chutney-powder':
    `From the kitchens of the Deccan comes lasooni chutney, a bold, garlicky dry chutney with coconut and chilli, sprinkled over vada pav and stirred into the humblest of meals.\n\nOur Lasooni Chutney Powder packs that punchy, pungent flavour into a jar you'll reach for again and again.`,
  'saucy-papad-premix':
    `In the desert kitchens of Rajasthan, where fresh vegetables were once scarce, the papad became a canvas for flavour, turned into tangy, spicy curries that are pure ingenuity.\n\nOur Saucy Papad Premix gives your papad a bold, saucy upgrade in seconds, a taste of royal Rajasthani resourcefulness.`,
  'makhana':
    `From the still ponds of Mithila, where farmers harvest fox nuts by hand, comes makhana, light, crunchy and quietly nourishing. For generations it has been Bihar's favourite guilt free snack and fasting food.\n\nOur Makhana brings that wholesome, roasted crunch to your day, a healthy handful of heritage.`,
  'ghugni-masala':
    `On the streets of Jharkhand and across the east, ghugni is the everyday hero, yellow peas simmered with onions and spices, ladled hot into bowls and topped with raw onion and chilli.\n\nOur Ghugni Masala recreates that hearty, soul warming street snack with effortless ease.`,
  'dalma-premix':
    `In the temple town of Puri, dalma is sacred, lentils and vegetables cooked together without onion or garlic, blessed as bhog in the Jagannath kitchen and loved in every Odia home.\n\nOur Dalma Premix carries that subtle, soulful temple flavour to your table.`,
  'pulihora-premix':
    `Tangy, golden and gloriously aromatic, pulihora is Andhra's festival rice, tamarind, mustard, curry leaf and peanut tossed through every grain, served at temples and celebrations alike.\n\nOur Pulihora Premix nails that perfect sweet sour spicy balance in a single easy step.`,
  'cafe-express-instant-coffee':
    `In Karnataka, coffee is a way of life, from the misty estates of Coorg to the steel tumblers of Bengaluru's old cafés, where frothy, aromatic filter coffee fuels every conversation.\n\nOur Cafe Express brings that rich, South Indian coffee house aroma to your cup, instantly.`,
  'avial-premix':
    `At the heart of the Kerala sadya sits avial, a medley of vegetables bound in coconut and curd, finished with coconut oil and curry leaf. It's harmony on a banana leaf.\n\nOur Avial Premix captures that creamy, coconutty Malabar magic in minutes.`,
  'gunpowder-podi':
    `No Tamil breakfast is complete without milagai podi, the fiery 'gunpowder' of roasted lentils and red chilli, mixed with a drizzle of gingelly oil and scooped up with soft idlis.\n\nOur Gunpowder Podi delivers that addictive, spicy crunch straight from the South Indian tiffin table.`,
  'goa-kokum-mojito-masala':
    `Under the swaying palms of Goa, kokum is the coast's cooling secret, tangy, ruby red and endlessly refreshing in sol kadhi and lazy summer coolers.\n\nOur Goa Kokum Mojito Masala gives that beachside tang a zesty mojito twist, sunshine and sea breeze in every sip.`,
  'bamboo-shoot-pickle':
    `In the misty hills of Arunachal, fermented bamboo shoot is a cherished staple, tangy, pungent and fired up with the fearsome Raja Mircha, a flavour as wild as the land itself.\n\nOur Bamboo Shoot Pickle brings that bold, earthy taste of the eastern Himalayas to your plate.`,
  'gulab-chai-instant-tea-premix':
    `Across Assam's emerald tea gardens, chai is more than a drink, it's a daily ritual of warmth and welcome. Touched with rose, it becomes something fragrant and a little romantic.\n\nOur Gulab Chai Instant Tea Premix brews that garden fresh, rose kissed comfort in a single cup.`,
  'eromba-premix':
    `In Manipuri homes, eromba is everyday comfort, boiled vegetables mashed with fiery u morok chilli and traditional seasonings, creating a smoky, pungent flavour that is deeply loved.\n\nOur Eromba Premix brings that bold Meitei kitchen flavour to life, no fuss required.`,
  'tungrymbai-premix':
    `In the cloud wrapped Khasi hills, tungrymbai is a prized delicacy, fermented soybean cooked with black sesame and local spices into a dish of deep, earthy umami.\n\nOur Tungrymbai Premix captures that distinctive Meghalayan flavour, bold and unforgettable.`,
  'mizoram-bai-masala':
    `In Mizo homes, bai is the heart of every meal, a gentle stew of seasonal greens, bamboo shoot and herbs: simple, nourishing and quietly soulful.\n\nOur Mizoram Bai Masala brings that soothing, herbal warmth of the hills to your kitchen.`,
  'king-chilli-chutney':
    `From the hills of Nagaland comes the legendary king chilli, the Raja Mircha, or Bhut Jolokia, one of the world's hottest, pounded into a chutney that is pure, fearless fire.\n\nOur King Chilli Chutney bottles that Naga heat for the brave, a little goes a very long way.`,
  'momo-chutney-mix':
    `In the mountain towns of Sikkim, a plate of steaming momos is only as good as its chutney, fiery red, tangy and tomato rich, the dip that makes the dumpling.\n\nOur Momo Chutney Mix recreates that perfect Himalayan dipping sauce in seconds.`,
  'berma-chutney-mix':
    `In Tripura's tribal kitchens, bold, pungent chutneys are cherished for their deep umami character and earthy flavours, reflecting the region's rich culinary traditions.\n\nOur Berma Chutney Mix carries that deep, distinctive Tripuri flavour to the adventurous table.`,
  'paneer-lababdar-mix':
    `In the spirited city of Chandigarh, dinner often means paneer lababdar, soft cottage cheese in a luscious, creamy tomato gravy that's rich, mildly sweet and restaurant grand.\n\nOur Paneer Lababdar Mix brings that indulgent, dhaba meets fine dining flavour home.`,
  'jackfruit-coconut-curry-mix':
    `On the coral islands of Lakshadweep, where coconut palms meet the sea, tender jackfruit simmered in coconut is everyday island fare, mild, fragrant and quietly tropical.\n\nOur Jackfruit Coconut Curry Mix carries those sun and sea flavours of the lagoon to your plate.`,
  'tomato-rice-mix':
    `In Puducherry, where French boulevards meet Tamil kitchens, tomato rice is the comforting everyday classic, tangy, spiced and stained a beautiful red, equally at home in a tiffin box or a seaside café.\n\nOur Tomato Rice Mix brings that easy, coastal comfort to your table.`,
  'banana-flower-curry-premix':
    `On the islands of the Andaman, the banana blossom is a quiet treasure, cooked with coconut and island spices into a nourishing, subtly earthy curry passed down through generations.\n\nOur Banana Flower Curry Premix brings that wholesome island flavour to your kitchen with ease.`,
  'karela-ka-achaar':
    `In the coastal kitchens of the western belt, even the humble bitter gourd earns a place of pride, sliced, spiced and pickled into a bittersweet, fiery achaar that wakes up any meal.\n\nOur Karela Ka Achaar turns that beloved bitterness into an addictive, tangy delight.`,
  'baigan-ka-achaar':
    `In Telangana, the table isn't set without a jar of achaar, smoky brinjal cooked down with mustard, chilli and oil into a tangy, spicy pickle that lifts the simplest plate of rice.\n\nOur Baigan Ka Achaar bottles that bold, homestyle Telugu flavour for every meal.`,
  'bihari-litti-premix':
    `Across the plains of Bihar, no feast feels complete without litti, balls of dough stuffed with roasted sattu, ajwain and pickle spices, baked over glowing coal until smoky and crisp, then drowned in ghee and paired with chokha. It is the proud, rustic heart of Bihari cooking.\n\nOur Bihari Litti Premix carries that earthy, sattu rich flavour of the heartland, so you can savour an authentic litti without the hours of grinding and roasting.`,
};

// Attach each story to its product.
allProducts.forEach((prod) => {
  prod.story = productStories[prod.slug];
});

// Look up a product by slug (throws-safe helper used to build the state map).
const p = (slug: string): Product => {
  const found = allProducts.find((prod) => prod.slug === slug);
  if (!found) {
    throw new Error(`Unknown product slug: ${slug}`);
  }
  return found;
};

// Get a product by slug (public helper for pages/components).
export const getProductBySlug = (slug: string): Product | null => {
  return allProducts.find((prod) => prod.slug === slug) || null;
};

// State data with products assigned per the Bharat Bhojan Collection document.
// State IDs follow @svg-maps/india. Note: 'la' (Ladakh) is not a separate state
// in the map library (it falls under Jammu & Kashmir), so it won't be clickable
// on the map, but its product still appears in the grid and has a detail page.
export const stateProductsMap: Record<string, StateData> = {
  'up': {
    id: 'up',
    name: 'Uttar Pradesh',
    tagline: 'The Heart of Indian Cuisine',
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-orange-900 to-amber-900',
    famousFor: ['Banarasi Chaat', 'Tamatar Chaat', 'Chaat Masala', 'Awadhi Spices'],
    products: [p('banarasi-tamatar-chaat-base')],
    story: 'Uttar Pradesh, the land of Awadhi and Banarasi flavours, brings you the iconic tangy spicy tamatar chaat of the ghats, now a ready base for that authentic street side taste at home.',
    landmarkIcon: '/uttar pradesh.png',
    labelText: 'Uttar Pradesh se',
  },
  'mh': {
    id: 'mh',
    name: 'Maharashtra',
    tagline: 'Flavors of the Western Ghats',
    themeColor: '#F59E0B',
    bgGradient: 'from-amber-900 via-orange-900 to-red-900',
    famousFor: ['Thecha', 'Lasooni Chutney', 'Kolhapuri Masala', 'Goda Masala'],
    products: [p('thecha-premix'), p('lasooni-chutney-powder')],
    story: "Maharashtra's bold, fiery palate shines through its thecha and garlic chutneys. Our premixes capture that rustic Western Ghats heat in a single spoon.",
    landmarkIcon: '/Maharastra.png',
    labelText: 'Maharashtra se',
  },
  'pb': {
    id: 'pb',
    name: 'Punjab',
    tagline: 'Land of Rich & Creamy Delights',
    themeColor: '#EF4444',
    bgGradient: 'from-red-900 via-rose-900 to-pink-900',
    famousFor: ['Dal Makhani', 'Tandoori Spices', 'Makkhani Masala', 'Butter & Cream'],
    products: [p('dal-makhani-premix')],
    story: 'Punjab, the land of butter and cream, gives you the dhaba style dal makhani, slow cooked richness made effortless with our premix.',
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
    products: [p('saucy-papad-premix')],
    story: "Rajasthan's desert cuisine is known for its innovative use of dried ingredients. Our Saucy Papad Premix brings the tangy, spicy flavours of traditional Rajasthani papad masala.",
    landmarkIcon: '/rajashtan.png',
    labelText: 'Rajasthan se',
  },
  'tn': {
    id: 'tn',
    name: 'Tamil Nadu',
    tagline: 'Temple of South Indian Spices',
    themeColor: '#10B981',
    bgGradient: 'from-green-900 via-emerald-900 to-teal-900',
    famousFor: ['Gunpowder Podi', 'Curry Leaves', 'Sambar Powder', 'Rasam Spices'],
    products: [p('gunpowder-podi')],
    story: "Tamil Nadu's beloved milagai podi, the fiery 'gunpowder' that turns every idli and dosa into a feast, is now a pantry staple in our authentic blend.",
    landmarkIcon: '/tamil-nadu.png',
    labelText: 'Tamil Nadu se',
  },
  'br': {
    id: 'br',
    name: 'Bihar',
    tagline: 'Authentic Flavors of the Gangetic Plains',
    themeColor: '#F97316',
    bgGradient: 'from-orange-900 via-red-900 to-amber-900',
    famousFor: ['Makhana', 'Sattu', 'Litti Chokha', 'Thekua'],
    products: [p('makhana'), p('bihari-litti-premix')],
    story: "Bihar's nutrient rich makhana (fox nuts) from the ponds of Mithila are a guilt free, crunchy snack loved across India, wholesome goodness in every handful.",
    landmarkIcon: '/bihar.png',
    labelText: 'Bihar se',
  },
  'gj': {
    id: 'gj',
    name: 'Gujarat',
    tagline: 'Sweet & Spicy Gujarati Magic',
    themeColor: '#84CC16',
    bgGradient: 'from-lime-900 via-green-900 to-emerald-900',
    famousFor: ['Undhiyu', 'Sev Tamatar', 'Khaman Dhokla', 'Jain Masalas'],
    products: [p('undhiyu-premix'), p('sev-tamatar-premix'), p('khaman-dhokla-premix')],
    story: "Gujarat's kitchen is a celebration of sweet, spicy and savoury, from the festive winter undhiyu to fluffy khaman dhokla and tangy sev tamatar. Three Gujarati classics, made simple.",
    landmarkIcon: '/gujrat.png',
    labelText: 'Gujarat se',
  },
  'mp': {
    id: 'mp',
    name: 'Madhya Pradesh',
    tagline: 'The Spice Heart of India',
    themeColor: '#A855F7',
    bgGradient: 'from-purple-900 via-violet-900 to-indigo-900',
    famousFor: ['Indori Poha', 'Bhutte Ka Kees', 'Poha Masala', 'Sev'],
    products: [p('poha-seasoning-mix')],
    story: "Madhya Pradesh's morning ritual, light, lemony Indori poha, gets its signature flavour from our seasoning mix. The taste of Indore's streets in every bowl.",
    landmarkIcon: '/delhi.png',
    labelText: 'Madhya Pradesh se',
  },
  'wb': {
    id: 'wb',
    name: 'West Bengal',
    tagline: 'The Land of Sweetness & Spice',
    themeColor: '#E11D48',
    bgGradient: 'from-rose-900 via-red-900 to-amber-900',
    famousFor: ['Jhalmuri', 'Achari Aloo Dum', 'Panch Phoron', 'Mustard Oil'],
    products: [p('achari-aloo-dum'), p('jhalmuri-masala')],
    story: "West Bengal's streets come alive with tangy aloo dum and zesty jhalmuri. Our premixes bottle that Kolkata street food magic for your kitchen.",
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
    products: [p('dalma-premix')],
    story: "Odisha's temple cuisine is known for its subtle yet soulful flavours. Our Dalma Premix captures the essence of the Jagannath Puri temple kitchen.",
    landmarkIcon: '/odisha.png',
    labelText: 'Odisha se',
  },
  'ga': {
    id: 'ga',
    name: 'Goa',
    tagline: 'Spices Meet the Sea',
    themeColor: '#F43F5E',
    bgGradient: 'from-rose-900 via-pink-900 to-red-900',
    famousFor: ['Kokum', 'Feni', 'Sol Kadhi', 'Coastal Coolers'],
    products: [p('goa-kokum-mojito-masala')],
    story: "Goa's tangy kokum meets a refreshing mojito twist in this coastal cooler masala, sunshine and sea breeze in a glass.",
    landmarkIcon: '/goa.png',
    labelText: 'Goa se',
  },
  'kl': {
    id: 'kl',
    name: 'Kerala',
    tagline: "God's Own Spice Garden",
    themeColor: '#059669',
    bgGradient: 'from-emerald-900 via-green-900 to-teal-900',
    famousFor: ['Avial', 'Coconut', 'Curry Leaves', 'Black Pepper'],
    products: [p('avial-premix')],
    story: "Kerala's iconic avial, a medley of vegetables in coconut and curd, is now a one step delight with our authentic Malabar style premix.",
    landmarkIcon: '/kerala.png',
    labelText: 'Kerala se',
  },
  'dl': {
    id: 'dl',
    name: 'Delhi',
    tagline: 'Capital of Street Food & Mughlai',
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-rose-900 to-orange-900',
    famousFor: ['Rajma', 'Chole', 'Chaat', 'Mughlai'],
    products: [p('rajma-premix'), p('chole-premix')],
    story: "Delhi's comfort food runs on rajma chawal and chole bhature. Our premixes recreate those hearty, robust capital city classics with ease.",
    landmarkIcon: '/delhi.png',
    labelText: 'Delhi se',
  },
  'jh': {
    id: 'jh',
    name: 'Jharkhand',
    tagline: 'Tribal Flavors of the Forest',
    themeColor: '#65A30D',
    bgGradient: 'from-lime-900 via-green-900 to-amber-900',
    famousFor: ['Ghugni', 'Dhuska', 'Rugra', 'Handia'],
    products: [p('ghugni-masala')],
    story: "Jharkhand's favourite street snack, spiced yellow pea ghugni, gets its hearty, earthy flavour from our masala. Comfort food, simplified.",
    landmarkIcon: '/jharkhand.png',
    labelText: 'Jharkhand se',
  },
  'ka': {
    id: 'ka',
    name: 'Karnataka',
    tagline: 'From Udupi to Coorg',
    themeColor: '#7C3AED',
    bgGradient: 'from-violet-900 via-purple-900 to-indigo-900',
    famousFor: ['Filter Coffee', 'Bisi Bele Bath', 'Mysore Pak', 'Ragi'],
    products: [p('cafe-express-instant-coffee')],
    story: "Karnataka's legendary filter coffee culture inspires our Cafe Express, rich, aromatic and ready in an instant. A South Indian café in your cup.",
    landmarkIcon: '/karnataka.png',
    labelText: 'Karnataka se',
  },
  'ap': {
    id: 'ap',
    name: 'Andhra Pradesh',
    tagline: 'The Spiciest State of India',
    themeColor: '#E63946',
    bgGradient: 'from-red-900 via-orange-900 to-yellow-900',
    famousFor: ['Pulihora', 'Gongura', 'Guntur Chilli', 'Pesarattu'],
    products: [p('pulihora-premix')],
    story: "Andhra Pradesh's tangy tamarind rice, pulihora, is a festive favourite. Our premix delivers that perfectly balanced sweet sour spicy taste effortlessly.",
    landmarkIcon: '/andhra-pradesh.png',
    labelText: 'Andhra Pradesh se',
  },
  'tg': {
    id: 'tg',
    name: 'Telangana',
    tagline: 'Nizami Spices & Rustic Flavors',
    themeColor: '#D97706',
    bgGradient: 'from-amber-900 via-orange-900 to-red-900',
    famousFor: ['Baigan Achaar', 'Hyderabadi Biryani', 'Jonna Rotte', 'Pachi Pulusu'],
    products: [p('baigan-ka-achaar')],
    story: "Telangana's smoky, tangy brinjal pickle is a tabletop essential. Our Baigan Ka Achaar adds a burst of flavour to any simple meal.",
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
    products: [p('chhattisgarhi-chila-mix')],
    story: "Chhattisgarh's tribal cuisine is rooted in simplicity. Our Chila Mix brings the earthy, wholesome taste of traditional rice batter pancakes.",
    landmarkIcon: '/chhattisgarh.png',
    labelText: 'Chhattisgarh se',
  },
  'jk': {
    id: 'jk',
    name: 'Jammu & Kashmir',
    tagline: 'Paradise of Aromatic Spices',
    themeColor: '#1D4ED8',
    bgGradient: 'from-blue-900 via-indigo-900 to-sky-900',
    famousFor: ['Paneer Chaman', 'Rogan Josh', 'Kahwa', 'Saffron'],
    products: [p('paneer-chaman-premix')],
    story: "A cherished Kashmiri delicacy, Paneer Chaman combines soft paneer with a fragrant traditional gravy, bringing the authentic taste of the Valley to your table.",
    landmarkIcon: '/jammu-kashmir.png',
    labelText: 'Kashmir se',
  },
  'hr': {
    id: 'hr',
    name: 'Haryana',
    tagline: 'Robust Flavors of the Heartland',
    themeColor: '#CA8A04',
    bgGradient: 'from-amber-900 via-yellow-900 to-orange-900',
    famousFor: ['Buttermilk', 'Churma', 'Bajra Khichdi', 'Ghee'],
    products: [p('high-protein-buttermilk-masala')],
    story: "Haryana, the land of dairy, inspires our High Protein Buttermilk Masala, turning a humble glass of chaas into a refreshing, protein rich treat.",
    landmarkIcon: '/haryana.png',
    labelText: 'Haryana se',
  },
  'hp': {
    id: 'hp',
    name: 'Himachal Pradesh',
    tagline: 'Mountain Feasts & Festive Spices',
    themeColor: '#0D9488',
    bgGradient: 'from-teal-900 via-emerald-900 to-green-900',
    famousFor: ['Madra', 'Siddu', 'Dham', 'Anardana'],
    products: [p('madra-curry-premix')],
    story: "Himachal Pradesh's Dham feast is legendary, slow cooked in yoghurt and aromatic spices, our Madra Curry Premix brings festive hill flavours home.",
    landmarkIcon: '/himachal-pradesh.png',
    labelText: 'Himachal se',
  },
  'ut': {
    id: 'ut',
    name: 'Uttarakhand',
    tagline: 'Wild Herbs of the Himalayas',
    themeColor: '#15803D',
    bgGradient: 'from-green-900 via-emerald-900 to-lime-900',
    famousFor: ['Chainsoo', 'Kafuli', 'Bhatt ki Dal', 'Jhangora'],
    products: [p('chainsoo-premix')],
    story: "Uttarakhand's hearty chainsoo, a roasted black gram dal, carries the smoky, earthy soul of Garhwali kitchens. Our premix makes it effortless.",
    landmarkIcon: '/uttarakhand.png',
    labelText: 'Uttarakhand se',
  },
  'as': {
    id: 'as',
    name: 'Assam',
    tagline: 'Tea Gardens & Tangy Curries',
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-orange-900 to-yellow-900',
    famousFor: ['Tea', 'Masor Tenga', 'Khar', 'Bhut Jolokia'],
    products: [p('gulab-chai-instant-tea-premix')],
    story: "Assam, India's tea capital, inspires our fragrant Gulab Chai, a rose kissed instant tea premix that brings garden fresh comfort to every cup.",
    landmarkIcon: '/assam.png',
    labelText: 'Assam se',
  },
  'mn': {
    id: 'mn',
    name: 'Manipur',
    tagline: 'Fiery Flavors of the Northeast',
    themeColor: '#EA580C',
    bgGradient: 'from-orange-900 via-red-900 to-amber-900',
    famousFor: ['Eromba', 'Singju', 'Kangshoi', 'U-morok Chilli'],
    products: [p('eromba-premix')],
    story: "Manipur's cuisine is a fiery celebration of local herbs and the legendary U morok chilli. Our Eromba Premix brings the smoky, pungent magic of Meitei kitchens.",
    landmarkIcon: '/manipur.png',
    labelText: 'Manipur se',
  },
  'ml': {
    id: 'ml',
    name: 'Meghalaya',
    tagline: 'Abode of Clouds & Bold Spices',
    themeColor: '#4F46E5',
    bgGradient: 'from-indigo-900 via-blue-900 to-violet-900',
    famousFor: ['Tungrymbai', 'Jadoh', 'Doh Khlieh', 'Ki Kpu'],
    products: [p('tungrymbai-premix')],
    story: "Meghalaya's Khasi kitchens bring bold, earthy flavours to the table. Our Tungrymbai inspired fermented soybean chutney mix captures that distinctive umami depth.",
    landmarkIcon: '/meghalaya.png',
    labelText: 'Meghalaya se',
  },
  'mz': {
    id: 'mz',
    name: 'Mizoram',
    tagline: 'Herbal Treasures of the Hills',
    themeColor: '#0891B2',
    bgGradient: 'from-cyan-900 via-teal-900 to-emerald-900',
    famousFor: ['Bai', 'Sawhchiar', 'Bamboo Shoot', 'Bekang'],
    products: [p('mizoram-bai-masala')],
    story: "Mizoram's herbal stews blend mustard leaf, local herbs and gentle spices. Our Bai Masala brings the soothing warmth of Mizo home cooking.",
    landmarkIcon: '/mizoram.png',
    labelText: 'Mizoram se',
  },
  'nl': {
    id: 'nl',
    name: 'Nagaland',
    tagline: 'Land of the Naga King Chilli',
    themeColor: '#B91C1C',
    bgGradient: 'from-red-900 via-orange-900 to-amber-900',
    famousFor: ['King Chilli', 'Smoked Pork', 'Axone', 'Bamboo Shoot'],
    products: [p('king-chilli-chutney')],
    story: "Nagaland is home to the legendary Bhut Jolokia, one of the world's hottest chillies. Our King Chilli Chutney captures the fiery spirit of Naga tribal cuisine.",
    landmarkIcon: '/nagaland.png',
    labelText: 'Nagaland se',
  },
  'sk': {
    id: 'sk',
    name: 'Sikkim',
    tagline: 'Himalayan Organic Flavors',
    themeColor: '#059669',
    bgGradient: 'from-emerald-900 via-green-900 to-teal-900',
    famousFor: ['Momo Chutney', 'Gundruk', 'Phagshapa', 'Dalle Khursani'],
    products: [p('momo-chutney-mix')],
    story: "Sikkim's mountain momos are incomplete without their fiery red chutney. Our Momo Chutney Mix delivers that perfect spicy tangy dip in seconds.",
    landmarkIcon: '/sikkim.png',
    labelText: 'Sikkim se',
  },
  'tr': {
    id: 'tr',
    name: 'Tripura',
    tagline: 'Fermented Delicacies of the East',
    themeColor: '#D97706',
    bgGradient: 'from-amber-900 via-orange-900 to-yellow-900',
    famousFor: ['Berma', 'Muya Awandru', 'Chakhwi', 'Wahan Mosdeng'],
    products: [p('berma-chutney-mix')],
    story: "Tripura's tribal cuisine celebrates fermented ingredients. Our Berma Chutney Mix brings the umami rich, pungent depth of traditional Tripuri condiments.",
    landmarkIcon: '/tripura.png',
    labelText: 'Tripura se',
  },
  'ar': {
    id: 'ar',
    name: 'Arunachal Pradesh',
    tagline: 'Land of the Rising Sun & Wild Spices',
    themeColor: '#16A34A',
    bgGradient: 'from-green-900 via-lime-900 to-emerald-900',
    famousFor: ['Bamboo Shoot', 'Raja Mircha', 'Thukpa', 'Pika Pila'],
    products: [p('bamboo-shoot-pickle')],
    story: "Arunachal Pradesh's cuisine is deeply connected to nature, our tangy bamboo shoot pickle with fiery Raja Mircha captures its bold, earthy flavours.",
    landmarkIcon: '/arunachal-pradesh.png',
    labelText: 'Arunachal se',
  },
  'py': {
    id: 'py',
    name: 'Puducherry',
    tagline: 'French Indian Fusion Flavors',
    themeColor: '#2563EB',
    bgGradient: 'from-blue-900 via-indigo-900 to-cyan-900',
    famousFor: ['Tomato Rice', 'Creole Curry', 'Tamarind Rice', 'Curry Leaf'],
    products: [p('tomato-rice-mix')],
    story: "Puducherry's Franco Tamil kitchen turns the humble tomato rice into something special. Our mix brings that tangy, coastal comfort to your plate.",
    landmarkIcon: '/puducherry.png',
    labelText: 'Puducherry se',
  },
  'ch': {
    id: 'ch',
    name: 'Chandigarh',
    tagline: "The City Beautiful's Bold Bites",
    themeColor: '#DC2626',
    bgGradient: 'from-red-900 via-rose-900 to-orange-900',
    famousFor: ['Paneer Lababdar', 'Chole Bhature', 'Tandoori', 'Lassi'],
    products: [p('paneer-lababdar-mix')],
    story: "Chandigarh's love for rich, creamy gravies shines in paneer lababdar. Our mix delivers that luscious, restaurant style tomato paneer indulgence at home.",
    landmarkIcon: '/chandigarh.png',
    labelText: 'Chandigarh se',
  },
  'an': {
    id: 'an',
    name: 'Andaman and Nicobar Islands',
    tagline: 'Tropical Spices of the Islands',
    themeColor: '#0284C7',
    bgGradient: 'from-sky-900 via-blue-900 to-cyan-900',
    famousFor: ['Banana Flower Curry', 'Fish Tikka', 'Coconut', 'Island Spices'],
    products: [p('banana-flower-curry-premix')],
    story: "The Andaman Islands bring tropical bounty to your plate, our Banana Flower Curry Premix blends nutritious banana blossom with aromatic island spices.",
    landmarkIcon: '/andaman-nicobar.png',
    labelText: 'Andaman se',
  },
  'ld': {
    id: 'ld',
    name: 'Lakshadweep',
    tagline: 'Coral Island Coconut Cuisine',
    themeColor: '#0891B2',
    bgGradient: 'from-cyan-900 via-blue-900 to-teal-900',
    famousFor: ['Jackfruit Curry', 'Coconut Fish', 'Mas Huni', 'Tuna'],
    products: [p('jackfruit-coconut-curry-mix')],
    story: "Lakshadweep's cuisine revolves around coconut palms and the sea. Our Jackfruit Coconut Curry Mix captures the tropical island flavours of India's coral paradise.",
    landmarkIcon: '/lakshadweep.png',
    labelText: 'Lakshadweep se',
  },
  'dn': {
    id: 'dn',
    name: 'Dadra and Nagar Haveli',
    tagline: 'Tribal Flavors of the Forest',
    themeColor: '#65A30D',
    bgGradient: 'from-lime-900 via-green-900 to-emerald-900',
    famousFor: ['Karela Achaar', 'Tribal Curry', 'Forest Herbs', 'Wild Turmeric'],
    products: [p('karela-ka-achaar')],
    story: "Dadra and Nagar Haveli's rustic kitchens love a sharp, spicy pickle. Our Karela Ka Achaar turns the humble bitter gourd into an addictive bittersweet treat.",
    landmarkIcon: '/dadra-nagar-haveli.png',
    labelText: 'Dadra se',
  },
  'dd': {
    id: 'dd',
    name: 'Daman and Diu',
    tagline: 'Portuguese Spice Heritage',
    themeColor: '#E11D48',
    bgGradient: 'from-rose-900 via-red-900 to-orange-900',
    famousFor: ['Karela Achaar', 'Coastal Curry', 'Pickles', 'Seafood Spices'],
    products: [p('karela-ka-achaar')],
    story: "Daman and Diu's coastal pantry always has a jar of tangy pickle on hand. Our Karela Ka Achaar brings that bittersweet, spicy punch to every meal.",
    landmarkIcon: '/daman-diu.png',
    labelText: 'Daman se',
  },
  'la': {
    id: 'la',
    name: 'Ladakh',
    tagline: 'Flavours of the High Himalayas',
    themeColor: '#0EA5E9',
    bgGradient: 'from-sky-900 via-blue-900 to-indigo-900',
    famousFor: ['Sarson da Saag', 'Thukpa', 'Skyu', 'Apricot'],
    products: [p('sarson-da-saag-premix')],
    story: "Ladakh's rugged mountain landscape calls for hearty, nourishing meals. Our Sarso Da Saag Premix brings a warming blend of mustard greens and traditional spices, perfect for comforting moments in the high Himalayas.",
    landmarkIcon: '/ladakh.png',
    labelText: 'Ladakh se',
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
