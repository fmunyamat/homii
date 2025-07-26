import React from "react";
import { ArrowRight, Heart, User, MapPin } from "lucide-react";

// Main Page Component for landing-page.tsx
export default function LandingPage() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <TryItOutSection />
        <CommunityStoriesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

// Header Component
const Header = () => (
  <header className="bg-[#2D3748] text-white">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Homii</h1>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="hover:text-gray-300">
          How it works
        </a>
        <a href="#" className="hover:text-gray-300">
          Commands
        </a>
        <a href="#" className="hover:text-gray-300">
          Testimonials
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="hidden md:block hover:text-gray-300">
          Sign In
        </a>
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="bg-[#2D3748] text-white text-center py-20 md:py-32">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Find your people. Wherever you go.
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Community-sourced travel info from people who get you.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition duration-300">
          <span>Start Exploring</span>
          <ArrowRight size={20} />
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          See how it works
        </button>
      </div>
    </div>
  </section>
);

// "Try it out" Section Component
const TryItOutSection = () => {
  const tags = [
    "Queer",
    "Asian",
    "LatinX",
    "BIPOC",
    "Disabled",
    "Solo Female",
    "Mature (50+)",
    "Black",
    "Digital Nomad",
    "Family Travel",
    "Pet-friendly",
    "Backpacker",
    "Expat",
    "More",
    "Chill",
    "Urban",
    "Sober/Sober-curious",
    "Spiritual",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Try it out</h3>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="destination"
              className="block text-left font-semibold text-gray-700 mb-2"
            >
              Where are you going?
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter a city or country"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <p className="block text-left font-semibold text-gray-700 mb-4">
              Filter by identity or travel style
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-200 text-sm font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition duration-300">
              See What Travelers Say
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Community Stories Section Component
const CommunityStoriesSection = () => {
  const stories = [
    {
      name: "Idaysis",
      location: "Lisbon",
      title: "Meeting Up Abroad as a Queer Latina",
      excerpt:
        "Finding a queer community in travel isn't easy, but so worth it. I met people from all the different...",
      imgSrc: "https://placehold.co/400x300/718096/ffffff?text=Story+Image",
    },
    {
      name: "Amara",
      location: "Lisbon",
      title: "Solo Black Woman in Lisbon",
      excerpt:
        "I felt more welcomed, I felt more comfortable, I felt more safe, and the community I found...",
      imgSrc: "https://placehold.co/400x300/718096/ffffff?text=Story+Image",
    },
    {
      name: "Yuki & Sam",
      location: "Tokyo",
      title: "Queer Couple's Tokyo Guide",
      excerpt:
        "The hidden gems, LGBTQ+ friendly spots, and local faves that made our Tokyo experience unforgettable...",
      imgSrc: "https://placehold.co/400x300/718096/ffffff?text=Story+Image",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Real stories from our community
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img
                src={story.imgSrc}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-10 h-10 rounded-full bg-gray-200 p-2 text-gray-600 mr-4" />
                  <div>
                    <p className="font-bold">{story.name}</p>
                    <p className="text-sm text-gray-500">{story.location}</p>
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-2">{story.title}</h4>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <User size={32} />,
      title: "Set Up Your Profile",
      description: "Add identity tags, interests, and places you've visited.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Find Places That Get You",
      description:
        "Filter by identity, travel style, and see personalized experiences.",
    },
    {
      icon: <Heart size={32} />,
      title: "Share Your Own Story",
      description: "Inspire others by telling your travel truths.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-800">
          How Homii Works
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900 transition duration-300">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alana",
      role: "Black + Visited Berlin",
      quote: "I finally found a travel app that gets me.",
    },
    {
      name: "Joaquin",
      role: "LGBTQ+ + Visited Siem Reap",
      quote:
        "I don't want just restaurants - I want to know where my community is.",
    },
    {
      name: "Priya",
      role: "Solo Female + Visited Bali",
      quote: "No more digging through 20 blogs to feel safe.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What our community says
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <User className="w-12 h-12 rounded-full bg-gray-200 p-2 text-gray-600 mr-4" />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-[#2D3748] text-white py-10">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Homii. All rights reserved.</p>
    </div>
  </footer>
);
