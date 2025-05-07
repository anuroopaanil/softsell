// Shows three steps with emoji icons.
// Explanation:

// Uses a grid (grid-cols-1 md:grid-cols-3) for responsive layout.
// Emoji icons are simple placeholders.


function HowItWorks() {
    const steps = [
      { title: 'Upload License', description: 'Submit your license details securely.', icon: '📤' },
      { title: 'Get Valuation', description: 'Receive a fair market valuation within 24 hours.', icon: '💸' },
      { title: 'Get Paid', description: 'Get paid quickly via your preferred method.', icon: '💰' },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default HowItWorks;