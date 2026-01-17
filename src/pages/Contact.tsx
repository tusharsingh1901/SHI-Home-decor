import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: 'consultation',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-taupe-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-taupe-700 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you're looking for a
            consultation, have questions about our fabrics, or need assistance
            with a custom order, we're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-serif font-bold text-taupe-900 mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-2">✓</div>
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-taupe-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-taupe-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-taupe-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-sm font-medium text-taupe-700 mb-2"
                  >
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 bg-white"
                  >
                    <option value="consultation">Consultation</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="fabric-question">Fabric Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-taupe-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-taupe-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-taupe-500 text-taupe-900 resize-none"
                    placeholder="Tell us about your project or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-taupe-900 text-cream-50 font-medium rounded-sm hover:bg-taupe-800 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-taupe-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-taupe-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@elegantcurtains.com"
                    className="text-taupe-600 hover:text-taupe-900 transition-colors"
                  >
                    info@elegantcurtains.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-taupe-900 mb-2">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-taupe-600 hover:text-taupe-900 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-taupe-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-taupe-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-taupe-900 mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4 text-taupe-700">
                <li className="flex items-start">
                  <span className="text-taupe-400 mr-3">•</span>
                  <span>
                    <strong className="text-taupe-900">Quick Response:</strong>{' '}
                    We typically respond within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-taupe-400 mr-3">•</span>
                  <span>
                    <strong className="text-taupe-900">Expert Advice:</strong>{' '}
                    Our team will help you find the perfect solution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-taupe-400 mr-3">•</span>
                  <span>
                    <strong className="text-taupe-900">Custom Solutions:</strong>{' '}
                    We offer personalized consultations and custom orders
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-taupe-400 mr-3">•</span>
                  <span>
                    <strong className="text-taupe-900">No Pressure:</strong>{' '}
                    We're here to help, not to sell
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
