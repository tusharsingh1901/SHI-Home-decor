import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Craftsmanship',
      description:
        'We partner with skilled artisans who share our passion for quality and attention to detail.',
      icon: '✨',
    },
    {
      title: 'Quality',
      description:
        'Every fabric in our collection is carefully selected for its exceptional quality and durability.',
      icon: '🏆',
    },
    {
      title: 'Elegance',
      description:
        'We believe in timeless design that transcends trends, creating spaces of lasting beauty.',
      icon: '💎',
    },
    {
      title: 'Comfort',
      description:
        'Your home should be a sanctuary. Our fabrics are chosen to enhance both beauty and comfort.',
      icon: '🏡',
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-taupe-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-taupe-700 leading-relaxed">
            At SHI Home Decor, we believe that your home is more than just a
            place—it's a reflection of your unique style, a sanctuary of
            comfort, and a canvas for beautiful living.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-taupe-900 mb-6">
              A Passion for Excellence
            </h2>
            <p className="text-lg text-taupe-700 mb-4 leading-relaxed">
              Founded with a vision to bring luxury and elegance into every
              home, SHI Home Decor has been curating premium fabric
              collections for discerning clients who appreciate the finer
              things in life.
            </p>
            <p className="text-lg text-taupe-700 mb-4 leading-relaxed">
              Our journey began with a simple belief: that everyone deserves to
              live in spaces that inspire, comfort, and reflect their personal
              style. We travel the world to source the finest materials,
              working directly with artisans and manufacturers who share our
              commitment to quality and craftsmanship.
            </p>
            <p className="text-lg text-taupe-700 leading-relaxed">
              Each fabric in our collection tells a story—of traditional
              techniques passed down through generations, of innovative designs
              that push boundaries, and of the careful attention to detail that
              transforms a simple piece of cloth into a work of art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-taupe-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from selecting fabrics to
              serving our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-taupe-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-taupe-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-taupe-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-taupe-600 max-w-2xl mx-auto">
            From selection to installation, we ensure every step meets our
            exacting standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Curated Selection',
              description:
                'We carefully select each fabric, considering quality, texture, and aesthetic appeal.',
            },
            {
              step: '02',
              title: 'Expert Consultation',
              description:
                'Our team helps you choose the perfect fabrics that match your style and needs.',
            },
            {
              step: '03',
              title: 'Custom Solutions',
              description:
                'We offer custom sizing and styling to ensure your curtains are perfectly tailored.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-serif font-bold text-taupe-300 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-serif font-semibold text-taupe-900 mb-3">
                {item.title}
              </h3>
              <p className="text-taupe-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-taupe-900 text-cream-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              Let's work together to create a space that truly reflects your
              style and enhances your daily life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-cream-50 text-taupe-900 font-medium rounded-sm hover:bg-cream-100 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
