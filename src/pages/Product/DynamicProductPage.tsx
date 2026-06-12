import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import { getProductBySlug } from '../../data/stateProducts';

// Generic 3-step "how to use" shown for every product.
const defaultSteps = [
  {
    title: 'Open & Prep',
    description: 'Prep your main ingredient and open your Atpata premix — no extra masalas needed.',
  },
  {
    title: 'Cook the Mix',
    description: 'Add the premix as per the simple instructions on the pack and cook for a few minutes.',
  },
  {
    title: 'Serve Hot',
    description: 'Garnish, serve hot, and enjoy authentic regional flavour made effortlessly.',
  },
];

const DynamicProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  useEffect(() => {
    if (!product) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#ffffff';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="text-gray-400">We couldn't find the product you were looking for.</p>
        <Link
          to="/products"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-red-600 font-medium"
        >
          Back to all products
        </Link>
      </div>
    );
  }

  // Build a richer description for the detail page from the short card blurb.
  const detailDescription =
    `${product.description}\n\n` +
    `Atpata's ${product.name} is a ready-to-use premix that brings authentic regional flavour ` +
    `to your kitchen in just one step — no need to add extra haldi, jeera or masalas. ` +
    `Crafted for simplicity and made for indulgence, it turns everyday cooking into a home-cooked feast.\n\n` +
    `Cooking made simple. Flavour made unforgettable.`;

  return (
    <ProductPage
      product={{
        id: product.id,
        name: product.name,
        description: detailDescription,
        image: product.image,
        color: product.color,
      }}
      steps={defaultSteps}
    />
  );
};

export default DynamicProductPage;
