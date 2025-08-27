
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-charcoal-dark/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img 
            src="/dreamcatcherz-logo.png" 
            alt="Dreamcatcherz Logo" 
            className="h-14 w-auto transition-all duration-300 hover:opacity-80" 
          />
          <span className="font-playfair text-xl md:text-2xl font-semibold tracking-wider">
            Dreamcatcherz
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "rosegold-text font-medium" : "rosegold-underline text-ivory hover:text-ivory/80 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              isActive ? "rosegold-text font-medium" : "rosegold-underline text-ivory hover:text-ivory/80 transition-all duration-300"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              isActive ? "rosegold-text font-medium" : "rosegold-underline text-ivory hover:text-ivory/80 transition-all duration-300"
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/moodboard" 
            className={({isActive}) => 
              isActive ? "rosegold-text font-medium" : "rosegold-underline text-ivory hover:text-ivory/80 transition-all duration-300"
            }
          >
            Moodboard
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              isActive ? "text-charcoal-dark font-medium bg-rosegold-gradient px-5 py-2 rounded-md shadow-md hover:shadow-rosegold/20 transition-all" : "btn-primary shadow-md hover:shadow-rosegold/20 transition-all"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ivory hover:text-rosegold transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-charcoal-dark/95 backdrop-blur-md border-t border-rosegold/20 p-4 animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-4 items-center">
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "rosegold-text font-medium w-full text-center py-2" : "text-ivory hover:text-rosegold w-full text-center py-2 transition-all duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "rosegold-text font-medium w-full text-center py-2" : "text-ivory hover:text-rosegold w-full text-center py-2 transition-all duration-300"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "rosegold-text font-medium w-full text-center py-2" : "text-ivory hover:text-rosegold w-full text-center py-2 transition-all duration-300"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/moodboard" 
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "rosegold-text font-medium w-full text-center py-2" : "text-ivory hover:text-rosegold w-full text-center py-2 transition-all duration-300"
              }
            >
              Moodboard
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center shadow-md"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
