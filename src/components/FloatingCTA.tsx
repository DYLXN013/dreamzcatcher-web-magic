
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <Link 
        to="/contact" 
        className="bg-rosegold-gradient text-white font-medium px-5 py-3 rounded-full shadow-rosegold flex items-center justify-center hover:shadow-lg transition-all duration-300"
      >
        Book a Consultation
      </Link>
    </div>
  );
};

export default FloatingCTA;
