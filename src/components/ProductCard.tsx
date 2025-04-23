import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  imageSrc: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img 
          src={product.imageSrc} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors group">
            <Heart className="h-5 w-5 text-secondary-400 group-hover:text-secondary-600" />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-secondary-700">{product.rating}</span>
          <span className="text-xs text-secondary-400">({product.reviews} reviews)</span>
        </div>
        <h3 className="text-lg font-semibold text-secondary-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-secondary-800">${product.price.toFixed(2)}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full font-medium transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;