// The App.jsx combines all components and adds a header with the logo
// Explanation:

// Imports the logo from src/assets/softsell-icon.png.
// Creates a sticky header with the logo and a "Contact" link.
// Uses min-h-screen for full height and bg-gray-50 for a light background.
// Organizes sections in <main>.


// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
// import ContactForm from './components/ContactForm';
// import ChatWidget from './components/ChatWidget';
// import logo from './assets/softsell-icon.png';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <header className="bg-white shadow">
//         <div className="container mx-auto py-4 px-4 flex justify-between items-center">
//           <img src={logo} alt="SoftSell Logo" className="h-12" />
//           <nav>
//             <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
//           </nav>
//         </div>
//       </header>
//       <main>
//         <Hero />
//         <HowItWorks />
//         <WhyChooseUs />
//         <Testimonials />
//         <ContactForm />
//       </main>
//       <ChatWidget />
//     </div>
//   );
// }

// export default App;


import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import logo from './assets/softsell-icon.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="SoftSell Logo" className="h-12" />
          <nav>
            <a href="#contact" className="text-blue-600 hover:underline text-lg">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;