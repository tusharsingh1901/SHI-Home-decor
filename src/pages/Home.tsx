import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fabrics } from '../data/fabrics';

const Home = () => {
  const featuredFabrics = fabrics.filter((f) => f.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cream-100/50 to-cream-50" />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80')] bg-cover bg-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-taupe-900 mb-6 text-balance">
              Where Elegance Meets
              <br />
              <span className="text-taupe-600">Comfort</span>
            </h1>
            <p className="text-xl md:text-2xl text-taupe-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of premium fabrics, each piece
              crafted to transform your space into a sanctuary of style and
              sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fabrics"
                className="px-8 py-4 bg-taupe-900 text-cream-50 font-medium rounded-sm hover:bg-taupe-800 transition-all duration-300 transform hover:scale-105"
              >
                Explore Collections
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-taupe-900 text-taupe-900 font-medium rounded-sm hover:bg-taupe-900 hover:text-cream-50 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-taupe-900 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-taupe-900 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe-900 mb-6">
                Crafted with Passion,
                <br />
                Designed for Life
              </h2>
              <p className="text-lg text-taupe-700 mb-4 leading-relaxed">
                At Elegant Curtains, we believe that your home should be a
                reflection of your unique style and a sanctuary of comfort. Our
                carefully curated collection of premium fabrics represents years
                of expertise in selecting only the finest materials.
              </p>
              <p className="text-lg text-taupe-700 mb-6 leading-relaxed">
                Each piece in our collection is chosen for its exceptional
                quality, beautiful texture, and timeless elegance. We work with
                artisans and manufacturers who share our commitment to
                craftsmanship and attention to detail.
              </p>
              <Link
                to="/about"
                className="inline-block text-taupe-900 font-medium border-b-2 border-taupe-900 hover:border-taupe-700 transition-colors"
              >
                Learn More About Us →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Elegant fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Fabrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-taupe-600 max-w-2xl mx-auto">
              Discover our most beloved fabrics, each selected for its unique
              beauty and exceptional quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredFabrics.map((fabric, index) => (
              <motion.div
                key={fabric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/fabrics/${fabric.id}`}>
                  <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={fabric.image}
                      alt={fabric.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-taupe-900 mb-2">
                    {fabric.name}
                  </h3>
                  <p className="text-taupe-600 text-sm leading-relaxed">
                    {fabric.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/fabrics"
              className="inline-block px-8 py-4 bg-taupe-900 text-cream-50 font-medium rounded-sm hover:bg-taupe-800 transition-all duration-300"
            >
              View All Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-taupe-900 text-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              Let us help you find the perfect fabrics to create the home of
              your dreams. Schedule a consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-cream-50 text-taupe-900 font-medium rounded-sm hover:bg-cream-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
