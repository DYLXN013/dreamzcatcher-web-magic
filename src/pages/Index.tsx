
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Calendar, Heart, MapPin, Check } from 'lucide-react';

const Index = () => {
  return (
    <main>
      <HeroSection 
        title="Where Your Dreams Become Reality"
        subtitle="Crafting unforgettable events with luxury, elegance, and meticulous attention to every detail."
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
      />

      {/* About Us Teaser */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              About <span className="rosegold-text">Dreamcatcherz</span>
            </h2>
            <p className="text-ivory/80 mb-6">
              Dreamcatcherz is a luxury event planning company dedicated to creating extraordinary experiences. We believe that every event tells a story, and we're here to ensure yours is told with elegance, style, and unparalleled attention to detail.
            </p>
            <p className="text-ivory/80 mb-8">
              Our team of passionate event planners brings creativity, expertise, and a touch of magic to every occasion, transforming your vision into an unforgettable reality.
            </p>
            <Link to="/about" className="btn-secondary inline-flex items-center gap-2">
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
                  alt="Event planning" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"  
                  alt="Luxury event" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 -mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                  alt="Event decoration" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" 
                  alt="Elegant setup" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="bg-charcoal">
        <div className="section-container">
          <h2 className="section-title">
            Our <span className="rosegold-text">Services</span>
          </h2>
          <p className="section-subtitle">
            From intimate gatherings to grand celebrations, we offer a range of services designed to make your event extraordinary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
            
            <div className="card-highlight animate-fade-in" style={{animationDelay: '300ms'}}>
              <MapPin className="text-rosegold mb-4 h-10 w-10" />
              <h3 className="font-playfair text-xl font-semibold mb-3">Destination Events</h3>
              <p className="text-ivory/70 mb-6">
                Unforgettable experiences in breathtaking locations, expertly planned and executed.
              </p>
              <Link to="/services" className="rosegold-text inline-flex items-center text-sm hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-block">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <h2 className="section-title">
          What Our <span className="rosegold-text">Clients Say</span>
        </h2>
        <p className="section-subtitle">
          We pride ourselves on exceeding our clients' expectations and creating truly memorable experiences.
        </p>

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

      {/* Why Choose Us */}
      <section className="bg-charcoal relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url(/lovable-uploads/f0fa0de0-b8f2-4022-af79-e10580b1bb2b.png)`,
            backgroundSize: '60%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        <div className="section-container relative z-10">
          <h2 className="section-title">
            Why Choose <span className="rosegold-text">Dreamcatcherz</span>
          </h2>
          <p className="section-subtitle">
            We're committed to making your event perfect in every way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex gap-4 items-start">
              <div className="bg-rosegold-gradient p-3 rounded-full flex-shrink-0">
                <Check className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium mb-2">Personalized Approach</h3>
                <p className="text-ivory/70">
                  We take the time to understand your vision, preferences, and dreams to create an event that truly reflects who you are.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-rosegold-gradient p-3 rounded-full flex-shrink-0">
                <Check className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium mb-2">Attention to Detail</h3>
                <p className="text-ivory/70">
                  From grand design concepts to the smallest details, we ensure everything is perfect and cohesive.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-rosegold-gradient p-3 rounded-full flex-shrink-0">
                <Check className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium mb-2">Industry Expertise</h3>
                <p className="text-ivory/70">
                  Our team brings years of experience and established relationships with the best vendors in the industry.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-rosegold-gradient p-3 rounded-full flex-shrink-0">
                <Check className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-medium mb-2">Seamless Execution</h3>
                <p className="text-ivory/70">
                  We handle all the logistics, coordination, and potential challenges so you can simply enjoy your special day.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary inline-block">
              Let's Make Magic Together
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
