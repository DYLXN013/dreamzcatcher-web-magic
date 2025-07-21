
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { Button } from "@/components/ui/button";
import { Heart, Palette, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <main>
      <HeroSection 
        title="Create Unforgettable Moments"
        subtitle="Where dreams meet reality. Transform your vision into an extraordinary celebration."
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f29c853cb9?auto=format&fit=crop&q=80"
      />

      {/* Simple Hook Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8">
            Every Detail. <span className="rosegold-text">Every Moment.</span> <br />
            Perfectly Crafted.
          </h2>
          <p className="text-xl md:text-2xl text-ivory/80 mb-12 leading-relaxed">
            From intimate gatherings to grand celebrations, we turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-rosegold-gradient text-white hover:opacity-90 font-semibold px-10 py-4 text-lg">
                Start Your Journey
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/moodboard">
              <Button variant="outline" className="border-rosegold text-rosegold hover:bg-rosegold/10 font-semibold px-10 py-4 text-lg">
                Visualize Your Dream
                <Palette className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
