SoftSell Marketing Website
A responsive, single-page marketing website for a fictional software resale startup, built for the Credex Web Development Internship Assignment.
Features Implemented

Hero Section: Bold headline, subheading, and "Get a Quote" CTA with Framer Motion animation.
How It Works: Three-step process (Upload License, Get Valuation, Get Paid) with emoji icons and responsive grid.
Why Choose Us: Four tiles with icons and descriptions, styled with Tailwind CSS.
Customer Testimonials: Two dummy reviews with name, role, and company.
Contact Form: Form with Name, Email, Company, License Type (dropdown), and Message, with frontend validation.
AI-Powered Chat Widget: Floating chat modal with mock AI responses for predefined questions.
Bonus Features:
Favicon and custom SoftSell logo.
SEO meta tags and page title.
Framer Motion animations for Hero and Chat Widget.


Tech Stack: React, Vite, Tailwind CSS, Framer Motion.
Responsive Design: Mobile-first layout with Tailwind’s responsive utilities.

Design Choices

Color Palette: Blue (#2563EB) for trust, yellow (#FBBF24) for CTAs, neutral grays for backgrounds.
Font: System fonts (font-sans) for performance.
Animations: Subtle entrance effects for a modern feel.
Chat Widget: Mocked AI to avoid API costs, with intuitive UX.
Layout: Clean, single-column mobile layout transitioning to grids on larger screens.

Time Spent

Total: ~14 hours
Setup and Tailwind configuration: 3 hours
Component development and styling: 7 hours
Chat widget and animations: 2 hours
Testing and documentation: 2 hours



Setup Instructions

Clone the repository:git clone <your-repo-url>
cd softsell


Install dependencies:npm install


Run the development server:npm run dev


Build for production:npm run build



Deployment

Deployed on Vercel: Live URL[(https://softsell-chi.vercel.app/).]
Push to GitHub and connect to Vercel for automatic builds.

Notes

The chat widget uses mock responses. For production, integrate with OpenAI or Langchain.
Ensure favicon.ico and softsell-icon.png are in public and src/assets.
Tested on Chrome, Firefox, and mobile devices.

