
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-rosegold/20">
      <div className="container mx-auto px-4 py-12">
        {/* CTA Bar */}
        <div className="mb-16 p-8 rounded-xl bg-rosegold-gradient bg-opacity-10 backdrop-blur-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">Ready to Start Planning?</h3>
              <p className="text-ivory/80 max-w-md">Let us turn your vision into an extraordinary experience.</p>
            </div>
            <Link to="/contact" className="btn-secondary bg-charcoal bg-opacity-30 hover:bg-opacity-50">
              Book Your Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/f0fa0de0-b8f2-4022-af79-e10580b1bb2b.png" 
                alt="Dreamcatcherz Logo" 
                className="h-12 w-auto" 
              />
              <span className="font-playfair text-xl font-semibold">
                Dreamcatcherz
              </span>
            </Link>
            <p className="text-ivory/70 text-sm">
              Where your dreams become reality. Luxury event planning services that transform your vision into extraordinary experiences.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-4 rosegold-text">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ivory/70 hover:text-rosegold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ivory/70 hover:text-rosegold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ivory/70 hover:text-rosegold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/70 hover:text-rosegold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-4 rosegold-text">Services</h4>
            <ul className="space-y-2">
              <li className="text-ivory/70 hover:text-rosegold transition-colors">
                <Link to="/services">Full-Service Planning</Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors">
                <Link to="/services">Wedding Coordination</Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors">
                <Link to="/services">Luxury Party Planning</Link>
              </li>
              <li className="text-ivory/70 hover:text-rosegold transition-colors">
                <Link to="/services">Destination Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-medium mb-4 rosegold-text">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rosegold" />
                <span className="text-ivory/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-rosegold" />
                <span className="text-ivory/70">info@dreamcatcherz.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-rosegold" />
                <span className="text-ivory/70">Luxury Ave, Suite 100, Beverly Hills, CA</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-rosegold" />
                <a href="#" className="text-ivory/70 hover:text-rosegold transition-colors">
                  @dreamcatcherz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rosegold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ivory/50 text-sm">
            © {currentYear} Dreamcatcherz Event Planning. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-ivory/50 hover:text-rosegold text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-ivory/50 hover:text-rosegold text-sm">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
