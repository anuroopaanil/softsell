// The Hero section has a headline, subheading, and CTA button with animation.
// Explanation:

// bg-blue-600 sets a blue background.
// motion.div animates the content (fades in, slides up).
// Responsive text sizes (text-4xl md:text-5xl) adjust for screen size.
// The CTA button links to the contact form.

import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-24">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Turn your idle licenses into cash with SoftSell’s fast and secure process.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Get a Quote
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;