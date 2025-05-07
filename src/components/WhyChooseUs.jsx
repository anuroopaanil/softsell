// Explanation:

// Responsive grid adjusts columns based on screen size.
// Cards have a shadow for depth.

function WhyChooseUs() {
    const reasons = [
      { title: 'Fast Payments', description: 'Get paid within days, not weeks.', icon: '⚡' },
      { title: 'Secure Process', description: 'Your data is protected with top-tier encryption.', icon: '🔒' },
      { title: 'Fair Valuations', description: 'Market-driven prices for your licenses.', icon: '📊' },
      { title: '24/7 Support', description: 'Our team is here to help anytime.', icon: '📞' },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;