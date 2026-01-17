import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fabrics } from '../data/fabrics';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fabric = fabrics.find((f) => f.id === id);

  if (!fabric) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-taupe-900 mb-4">
            Fabric Not Found
          </h2>
          <Link
            to="/fabrics"
            className="text-taupe-600 hover:text-taupe-900 underline"
          >
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-sm text-taupe-600"
        >
          <Link to="/" className="hover:text-taupe-900">Home</Link>
          {' / '}
          <Link to="/fabrics" className="hover:text-taupe-900">Collections</Link>
          {' / '}
          <span className="text-taupe-900">{fabric.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-white">
              <img
                src={fabric.image}
                alt={fabric.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-taupe-900 mb-4">
              {fabric.name}
            </h1>
            <p className="text-xl text-taupe-700 mb-6 leading-relaxed">
              {fabric.longDescription || fabric.description}
            </p>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-taupe-900 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-taupe-600">Type</span>
                  <p className="font-medium text-taupe-900 capitalize">
                    {fabric.type}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-taupe-600">Opacity</span>
                  <p className="font-medium text-taupe-900 capitalize">
                    {fabric.opacity}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-taupe-600">Texture</span>
                  <p className="font-medium text-taupe-900 capitalize">
                    {fabric.textureFeel}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-taupe-600">Color Tone</span>
                  <p className="font-medium text-taupe-900 capitalize">
                    {fabric.colorTone}
                  </p>
                </div>
              </div>
            </div>

            {/* Room Types */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-taupe-900 mb-3">
                Ideal For
              </h3>
              <div className="flex flex-wrap gap-2">
                {fabric.roomTypes.map((room) => (
                  <span
                    key={room}
                    className="px-4 py-2 bg-cream-100 text-taupe-700 rounded-full text-sm capitalize"
                  >
                    {room}
                  </span>
                ))}
              </div>
            </div>

            {/* Styling Suggestions */}
            {fabric.stylingSuggestions && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-taupe-900 mb-3">
                  Styling Suggestions
                </h3>
                <ul className="space-y-2">
                  {fabric.stylingSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="flex items-start text-taupe-700"
                    >
                      <span className="text-taupe-400 mr-2">•</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 px-8 py-4 bg-taupe-900 text-cream-50 font-medium rounded-sm hover:bg-taupe-800 transition-all duration-300 text-center"
              >
                Request Consultation
              </Link>
              <button
                onClick={() => navigate(-1)}
                className="px-8 py-4 bg-transparent border-2 border-taupe-900 text-taupe-900 font-medium rounded-sm hover:bg-taupe-900 hover:text-cream-50 transition-all duration-300"
              >
                Back to Collections
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Fabrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold text-taupe-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fabrics
              .filter((f) => f.id !== fabric.id)
              .slice(0, 4)
              .map((relatedFabric) => (
                <Link
                  key={relatedFabric.id}
                  to={`/fabrics/${relatedFabric.id}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={relatedFabric.image}
                      alt={relatedFabric.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif font-semibold text-taupe-900 group-hover:text-taupe-700 transition-colors">
                    {relatedFabric.name}
                  </h3>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
