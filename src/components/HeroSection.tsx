
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
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-24 text-center">
        <img 
          src="/lovable-uploads/f0fa0de0-b8f2-4022-af79-e10580b1bb2b.png" 
          alt="Dreamcatcherz Logo" 
          className="h-28 md:h-32 w-auto mx-auto mb-6 animate-float"
        />
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="font-montserrat text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-ivory/90 animate-fade-in" style={{animationDelay: '200ms'}}>
          {subtitle}
        </p>
        {showButton && (
          <Link 
            to={buttonLink} 
            className="btn-primary text-lg px-8 py-4 inline-block animate-fade-in"
            style={{animationDelay: '400ms'}}
          >
            {buttonText}
          </Link>
        )}
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
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
    </section>
  );
};

export default HeroSection;
