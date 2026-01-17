import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-taupe-900 text-cream-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Elegant Curtains
            </h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              Crafting beautiful spaces with premium fabrics and timeless
              elegance. Your home deserves the finest.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/fabrics"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Fabric Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>Email: info@elegantcurtains.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Sat, 9AM-6PM</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-taupe-700 mt-8 pt-8 text-center text-sm text-cream-300">
          <p>&copy; {currentYear} Elegant Curtains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
