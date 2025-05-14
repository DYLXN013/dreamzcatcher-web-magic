
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-rosegold/20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* CTA Bar */}
        <div className="mb-16 p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-rosegold-gradient opacity-10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-charcoal/30"></div>
          <div className="absolute inset-0 border border-rosegold/20 rounded-xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2 tracking-wide">Ready to Start Planning?</h3>
              <p className="text-ivory/80 max-w-md">Let us transform your vision into an extraordinary experience</p>
            </div>
            <Link to="/contact" className="btn-secondary bg-charcoal bg-opacity-30 hover:bg-opacity-50 shadow-lg hover:shadow-rosegold/10 transition-all duration-300">
              Book Your Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/f46cf8fd-9770-4e3d-87af-986c847cbd5d.png" 
                alt="Dreamcatcherz Logo" 
                className="h-12 w-auto" 
              />
              <span className="font-playfair text-xl font-semibold tracking-wide">
                Dreamcatcherz
              </span>
            </Link>
            <p className="text-ivory/70 text-sm mt-4">
              Where your dreams become reality. Luxury event planning services that transform your vision into extraordinary experiences.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-5 rosegold-text">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-ivory/70 hover:text-rosegold transition-colors duration-300 flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/70 hover:text-rosegold transition-colors duration-300 flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ivory/70 hover:text-rosegold transition-colors duration-300 flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/moodboard" className="text-ivory/70 hover:text-rosegold transition-colors duration-300 flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Moodboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/70 hover:text-rosegold transition-colors duration-300 flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-5 rosegold-text">Services</h4>
            <ul className="space-y-3">
              <li className="text-ivory/70 hover:text-rosegold transition-colors duration-300">
                <Link to="/services" className="flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Full-Service Planning
                </Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors duration-300">
                <Link to="/services" className="flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Wedding Coordination
                </Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors duration-300">
                <Link to="/services" className="flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Luxury Party Planning
                </Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors duration-300">
                <Link to="/services" className="flex items-center">
                  <span className="h-px w-4 bg-rosegold-gradient opacity-50 mr-2"></span>
                  Custom Event Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-5 rosegold-text">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-rosegold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-ivory/70 group-hover:text-ivory transition-colors duration-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-rosegold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-ivory/70 group-hover:text-ivory transition-colors duration-300">info@dreamcatcherz.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-rosegold group-hover:scale-110 transition-transform duration-300 mt-1" />
                <span className="text-ivory/70 group-hover:text-ivory transition-colors duration-300">Luxury Ave, Suite 100<br />Beverly Hills, CA</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Instagram size={18} className="text-rosegold group-hover:scale-110 transition-transform duration-300" />
                <a href="#" className="text-ivory/70 hover:text-rosegold transition-colors duration-300">
                  @dreamcatcherz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rosegold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ivory/50 text-sm">
            © {currentYear} Dreamcatcherz Event Planning. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-ivory/50 hover:text-rosegold text-sm transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-ivory/50 hover:text-rosegold text-sm transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
