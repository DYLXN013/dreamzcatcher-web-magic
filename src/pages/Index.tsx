
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin, Check } from 'lucide-react';

const Index = () => {
  return (
    <main>
      <HeroSection 
        title="Where Your Dreams Become Reality"
        subtitle="Crafting unforgettable events with luxury, elegance, and meticulous attention to every detail."
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
      />

      {/* About Us Teaser */}
      <section className="section-container py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              About <span className="rosegold-text">Dreamcatcherz</span>
            </h2>
            <p className="text-ivory/80 mb-8">
              Dreamcatcherz is a luxury event planning company dedicated to creating extraordinary experiences. We believe that every event tells a story, and we're here to ensure yours is told with elegance, style, and unparalleled attention to detail.
            </p>
            <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
                alt="Event planning" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moodboard Generator Feature */}
      <section className="bg-charcoal-dark bg-opacity-70 backdrop-blur-sm">
        <div className="section-container py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                  alt="Moodboard Generator" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="animate-fade-in">
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
                  New: <span className="rosegold-text">Moodboard Generator</span>
                </h2>
                <p className="text-ivory/80 mb-6">
                  Visualize your dream event before it happens. Our interactive moodboard tool allows you to experiment with color schemes, themes, and styling elements to create the perfect atmosphere for your special occasion.
                </p>
                <p className="text-ivory/80 mb-8">
                  Try our exclusive online tool and bring your vision to life with just a few clicks. Perfect for sharing ideas with vendors and our planning team.
                </p>
                <Link to="/moodboard" className="btn-primary inline-flex items-center gap-2">
                  Create Your Moodboard
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="bg-charcoal">
        <div className="section-container py-16">
          <h2 className="section-title">
            Our <span className="rosegold-text">Services</span>
          </h2>
          <p className="section-subtitle">
            From intimate gatherings to grand celebrations, we offer a range of services designed to make your event extraordinary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card-highlight animate-fade-in" style={{animationDelay: '100ms'}}>
              <Heart className="text-rosegold mb-4 h-10 w-10" />
              <h3 className="font-playfair text-xl font-semibold mb-3">Wedding Coordination</h3>
              <p className="text-ivory/70 mb-6">
                Your dream wedding brought to life with careful planning, elegant design, and seamless coordination.
              </p>
              <Link to="/services" className="rosegold-text inline-flex items-center text-sm hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="card-highlight animate-fade-in" style={{animationDelay: '200ms'}}>
              <Calendar className="text-rosegold mb-4 h-10 w-10" />
              <h3 className="font-playfair text-xl font-semibold mb-3">Luxury Party Planning</h3>
              <p className="text-ivory/70 mb-6">
                Birthdays, anniversaries, and celebrations designed to impress and create lasting memories.
              </p>
              <Link to="/services" className="rosegold-text inline-flex items-center text-sm hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary inline-block">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container py-16">
        <h2 className="section-title">
          What Our <span className="rosegold-text">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="card-highlight">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-rosegold-gradient w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-playfair text-white text-lg">S</span>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-medium">Sarah Johnson</h4>
                <p className="text-rosegold text-sm">Wedding Client</p>
              </div>
            </div>
            <p className="italic text-ivory/80">
              "Dreamcatcherz turned our wedding into an absolute fairy tale. Their attention to detail, creativity, and professionalism made our day completely stress-free and more beautiful than we could have ever imagined."
            </p>
          </div>
          
          <div className="card-highlight">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-rosegold-gradient w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-playfair text-white text-lg">M</span>
              </div>
              <div>
                <h4 className="font-playfair text-lg font-medium">Michael Thompson</h4>
                <p className="text-rosegold text-sm">Corporate Event</p>
              </div>
            </div>
            <p className="italic text-ivory/80">
              "Our company gala was flawlessly executed by the Dreamcatcherz team. They transformed our vision into a sophisticated event that impressed our clients and employees alike. Would definitely recommend their services!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rosegold-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-white">
            Ready to Create Your Dream Event?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Contact us today for a free consultation. Let's make magic together.
          </p>
          <Link to="/contact" className="bg-white text-rosegold font-montserrat font-medium px-8 py-4 rounded-md hover:bg-ivory transition-all duration-300 inline-block">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
