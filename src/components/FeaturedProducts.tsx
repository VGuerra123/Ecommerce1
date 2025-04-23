import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 249.99,
    rating: 4.8,
    reviews: 124,
    imageSrc: 'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Vintage Leather Backpack',
    price: 89.99,
    rating: 4.5,
    reviews: 86,
    imageSrc: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Smart Fitness Tracker',
    price: 129.99,
    rating: 4.7,
    reviews: 152,
    imageSrc: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Wearables',
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            Featured Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4"
          >
            Our Top Picks For You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-secondary-500 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium products that combine quality, 
            style, and functionality for the modern lifestyle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;