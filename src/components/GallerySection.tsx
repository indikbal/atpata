import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '../src/img/gallery1.jpg',
    alt: 'Spicy curry dish',
    title: 'Achari Aloo Curry',
  },
  {
    id: 2,
    src: '../src/img/gallery2.jpg',
    alt: 'Paneer dish with greens',
    title: 'Moringa Paneer Delight',
  },
  {
    id: 3,
    src: '../src/img/gallery3.jpg',
    alt: 'Spicy vegetable dish',
    title: 'Bhut Jolokia Vegetables',
  },
  {
    id: 4,
    src: '../src/img/gallery4.jpg',
    alt: 'South Indian curry',
    title: 'Coconut Chettinad Curry',
  },
  {
    id: 5,
    src: '../src/img/gallery5.jpg',
    alt: 'Rich meat curry',
    title: 'Kashmiri Rogan Josh',
  },
  {
    id: 6,
    src: '../src/img/gallery6.jpg',
    alt: 'Fish curry dish',
    title: 'Bengali Mustard Fish',
  },
  {
    id: 7,
    src: '../src/img/gallery7.jpg',
    alt: 'Fish curry dish',
    title: 'Bengali Mustard Fish',
  },
  {
    id: 8,
    src: '../src/img/gallery8.jpg',
    alt: 'Fish curry dish',
    title: 'Bengali Mustard Fish',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-600">Atpata Launch Memories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feast your eyes on the culinary masterpieces created with Atpata masalas. Each dish showcases the vibrant colors and rich textures our spice blends bring to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full h-64">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt} 
                className="w-full h-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
