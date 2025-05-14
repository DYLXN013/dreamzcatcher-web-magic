
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
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 0.8)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <img 
          src="/lovable-uploads/f46cf8fd-9770-4e3d-87af-986c847cbd5d.png" 
          alt="Dreamcatcherz Logo" 
          className="h-32 md:h-40 w-auto mx-auto mb-8 animate-float drop-shadow-[0_0_15px_rgba(224,160,128,0.3)]"
        />
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in tracking-wide">
          {title}
        </h1>
        <p className="font-montserrat text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-ivory/90 animate-fade-in" style={{animationDelay: '200ms'}}>
          {subtitle}
        </p>
        {showButton && (
          <Link 
            to={buttonLink} 
            className="btn-primary text-lg px-8 py-4 inline-block animate-fade-in shadow-xl hover:shadow-rosegold/30"
            style={{animationDelay: '400ms'}}
          >
            {buttonText}
          </Link>
        )}
        
        {/* Elegant decorative element */}
        <div className="max-w-xl mx-auto mt-16">
          <div className="flex items-center">
            <div className="flex-grow h-px bg-rosegold-gradient opacity-30"></div>
            <div className="mx-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22L7 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H17L12 22Z" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="12.5" x2="22" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e0a080"/>
                    <stop offset="1" stopColor="#b76e79"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex-grow h-px bg-rosegold-gradient opacity-30"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium mb-2 text-ivory/80">Explore</span>
          <svg 
            className="w-6 h-6 text-rosegold" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
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
      
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/10 to-charcoal-dark/50 opacity-50"></div>
    </section>
  );
};

export default HeroSection;
