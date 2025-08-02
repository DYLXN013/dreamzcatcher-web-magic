
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  showButton = true,
  buttonText = "Book Your Free Consultation",
  buttonLink = "/contact"
}) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      ></div>
      
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rosegold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rosegold/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rosegold/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
                 <div className="h-40 md:h-48 w-auto mx-auto mb-8 animate-float drop-shadow-[0_0_20px_rgba(224,160,128,0.4)] shine-effect flex items-center justify-center">
           <div className="text-center">
             <h1 className="font-playfair text-6xl md:text-8xl font-bold text-rosegold mb-2">DC</h1>
             <p className="font-montserrat text-sm md:text-base text-ivory/80 tracking-widest">DREAMCATCHERZ</p>
           </div>
         </div>
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in tracking-wide leading-tight">
          {title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 === 1 ? 'rosegold-text' : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="font-montserrat text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-ivory/95 animate-fade-in leading-relaxed" style={{animationDelay: '200ms'}}>
          {subtitle}
        </p>
        {showButton && (
          <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
            <Link 
              to={buttonLink} 
              className="btn-primary text-lg px-10 py-4 inline-block shadow-2xl hover:shadow-rosegold/40 transform hover:scale-105 transition-all duration-300"
            >
              {buttonText}
            </Link>
          </div>
        )}
        
        {/* Enhanced decorative element */}
        <div className="max-w-2xl mx-auto mt-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="flex items-center">
            <div className="flex-grow h-px bg-rosegold-gradient opacity-40"></div>
            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-rosegold/20 rounded-full blur-lg"></div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg" className="relative z-10">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                      fill="url(#sparkle)" stroke="url(#sparkleStroke)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="sparkle" x1="2" y1="11.5" x2="22" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e0a080"/>
                    <stop offset="1" stopColor="#b76e79"/>
                  </linearGradient>
                  <linearGradient id="sparkleStroke" x1="2" y1="11.5" x2="22" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e0a080" stopOpacity="0.8"/>
                    <stop offset="1" stopColor="#b76e79" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex-grow h-px bg-rosegold-gradient opacity-40"></div>
          </div>
          <p className="text-ivory/60 text-sm mt-4 italic font-playfair">
            Where every celebration becomes a masterpiece
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10 animate-fade-in" style={{animationDelay: '800ms'}}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium mb-2 text-ivory/90 font-montserrat">Discover More</span>
          <div className="relative">
            <div className="absolute inset-0 bg-rosegold/30 rounded-full blur-sm"></div>
            <svg 
              className="w-6 h-6 text-rosegold relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="https://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/20 via-transparent to-charcoal-dark/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
