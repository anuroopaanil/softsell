// Explanation:

// Two-column grid on desktop, single-column on mobile.
// Italicized quotes for a testimonial feel.



function Testimonials() {
    const reviews = [
      {
        name: 'Jane Doe',
        role: 'IT Manager',
        company: 'TechCorp',
        text: 'SoftSell made selling our unused licenses a breeze. Fast and reliable!',
      },
      {
        name: 'John Smith',
        role: 'CFO',
        company: 'GrowEasy',
        text: 'Great valuations and quick payments. Highly recommend SoftSell!',
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base">"{review.text}"</p>
                <p className="font-semibold text-base sm:text-lg">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.role}, {review.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;