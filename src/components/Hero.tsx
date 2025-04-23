import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white min-h-[85vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white opacity-10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              New Collection 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Your Perfect Style
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Explore our curated collection of premium products designed for the modern lifestyle. Quality meets style in every item.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
              >
                Explore Products
                <ChevronRight className="h-5 w-5" />
              </motion.button>
              <button className="bg-transparent border-2 border-white/70 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Featured product showcase" 
                  className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white px-5 py-3 rounded-lg shadow-lg">
                <span className="block text-sm font-medium">Up to</span>
                <span className="block text-2xl font-bold">40% OFF</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;