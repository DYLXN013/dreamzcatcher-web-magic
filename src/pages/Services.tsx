
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Check } from 'lucide-react';

const Services = () => {
  return (
    <main>
      <HeroSection 
        title="Our Services"
        subtitle="Exceptional event planning tailored to your unique vision."
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
        showButton={false}
      />

      {/* Services Overview */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ivory/80 text-lg">
            At Dreamcatcherz, we offer a comprehensive range of event planning services designed to turn your vision into an extraordinary reality. Our team of experienced planners will guide you through every step of the process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-16">
          {/* Wedding Coordination */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="p-1 border border-rosegold/30 rounded-lg bg-charcoal-dark">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" 
                  alt="Wedding Planning" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-rosegold h-8 w-8" />
                <h2 className="font-playfair text-3xl font-semibold">Wedding Coordination</h2>
              </div>
              <p className="text-ivory/80 mb-6">
                Your wedding day is one of the most important moments of your life. As your Event Coordinator, I will be responsible for planning, organizing, and executing your wedding from conception through to completion, ensuring all aspects are delivered seamlessly, on time, and within budget while meeting your needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Full-service wedding planning from engagement to honeymoon</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Month-of coordination for couples who've planned but need execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Vendor selection and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Budget planning and tracking</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Luxury Party Planning */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-rosegold h-8 w-8" />
                <h2 className="font-playfair text-3xl font-semibold">Luxury Party Planning</h2>
              </div>
              <p className="text-ivory/80 mb-6">
                Whether you're celebrating a milestone birthday, a baby shower, an anniversary, or any special occasion, I will collaborate with you to understand your event objectives, theme, audience, and requirements. I will understand your vision by developing detailed event proposals, timelines, and budgets.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Custom theme development and design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Venue selection and decoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Entertainment booking and coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-rosegold h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-ivory/80">Catering and bar service management</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="p-1 border border-rosegold/30 rounded-lg bg-charcoal-dark">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80" 
                  alt="Luxury Party" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="bg-charcoal">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-4">
              <span className="rosegold-text">YOUR VISION</span>
              <br />
              <span className="text-ivory">WE DELIVER</span>
            </h2>
            <p className="text-ivory/80 text-lg max-w-3xl mx-auto">
              We differ from other event coordinators. You are in control. We are here to make life easy for you. You tell us what you want and Dreamcatcherz will deliver your dream.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card-highlight">
              <h3 className="font-playfair text-xl font-semibold mb-4 rosegold-text">Outstanding Contractors</h3>
              <p className="text-ivory/80">
                I have many outstanding contractors that will fulfil your needs and deliver your dream. I will source vendors that meet your needs and negotiate and manage relationships with vendors and service providers to secure contracts and maintain quality.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="font-playfair text-xl font-semibold mb-4 rosegold-text">Budget-Conscious Excellence</h3>
              <p className="text-ivory/80">
                I will ensure I get vendors who deliver an outstanding service that suits your budget. We can achieve this together, creating the perfect balance of quality and affordability for your special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Services */}
      <section className="bg-charcoal-dark">
        <div className="section-container">
          <h2 className="section-title">
            Additional <span className="rosegold-text">Support</span>
          </h2>
          <p className="section-subtitle">
            In addition to finding the perfect vendors for your event, we also offer extra support to make your planning experience even smoother.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-highlight">
              <h3 className="font-playfair text-xl font-semibold mb-3">Vendor Coordination</h3>
              <p className="text-ivory/80">
                We act as the point of contact for your chosen vendors, ensuring everyone is aligned and nothing is missed.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="font-playfair text-xl font-semibold mb-3">Event Timeline Creation</h3>
              <p className="text-ivory/80">
                A clear, detailed schedule so your day flows effortlessly from start to finish.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="font-playfair text-xl font-semibold mb-3">Master of Ceremonies Support</h3>
              <p className="text-ivory/80">
                We can help organise or recommend the right MC to keep your event engaging and on track.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-ivory/80 text-lg">
              These services are designed to give you added peace of mind, so you can enjoy the celebration while we take care of the details.
            </p>
          </div>
        </div>
      </section>

      {/* Moodboard Tool CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-charcoal-dark to-charcoal rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-10 md:p-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
                <span className="rosegold-text">Moodboard Generator</span>
              </h2>
              <p className="text-ivory/90 mb-8">
                Visualize your event before it happens. Our interactive moodboard tool helps you explore color schemes, themes, and styling elements to create the perfect atmosphere for your special occasion.
              </p>
              <Link to="/moodboard" className="btn-primary inline-flex items-center">
                Create Your Moodboard
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                alt="Event Moodboard" 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-rosegold-gradient p-10 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-charcoal-dark/20 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-white">
              Ready to Start Planning Your Dream Event?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Contact us today for a free consultation. Let's create something extraordinary together.
            </p>
            <Link to="/contact" className="bg-white text-rosegold font-montserrat font-medium px-8 py-3 rounded-md hover:bg-ivory transition-all duration-300 inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
