
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <main>
      <HeroSection 
        title="About Us"
        subtitle="Learn about our passion for creating extraordinary experiences."
        backgroundImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80"
        showButton={false}
      />

      {/* Our Story */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" 
                alt="Event planning team" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-rosegold-gradient p-6 rounded-lg shadow-lg">
                <p className="font-playfair text-white text-xl italic">"We don't just plan events, we create experiences."</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              Our <span className="rosegold-text">Story</span>
            </h2>
            <p className="text-ivory/80 mb-4">
              Dreamcatcherz Event Planning was born from a passion for creating memorable moments and a belief that every celebration should be as unique as the people it honors.
            </p>
            <p className="text-ivory/80 mb-4">
              Founded in 2015, our journey began with a simple yet powerful vision: to transform ordinary events into extraordinary experiences that captivate, inspire, and leave lasting impressions.
            </p>
            <p className="text-ivory/80">
              Over the years, we've had the privilege of bringing hundreds of dreams to life, from intimate gatherings to grand celebrations, each with its own story and significance. Our team's dedication to excellence, creativity, and personalized service has established Dreamcatcherz as a trusted name in luxury event planning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-charcoal">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="card-highlight text-center p-10">
              <div className="bg-rosegold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-ivory/80">
                We strive to create meaningful experiences that transcend ordinary events, turning your dreams into reality through impeccable planning, creative design, and flawless execution. Our mission is to alleviate the stress of event planning while preserving the joy and excitement that every celebration deserves.
              </p>
            </div>
            
            <div className="card-highlight text-center p-10">
              <div className="bg-rosegold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-6">Our Vision</h3>
              <p className="text-ivory/80">
                To be recognized as the premier luxury event planning service that consistently exceeds expectations, sets new standards for creativity and elegance, and turns moments into cherished memories. We envision a world where every important milestone is celebrated with the attention and artistry it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-container">
        <h2 className="section-title">
          Our <span className="rosegold-text">Values</span>
        </h2>
        <p className="section-subtitle">
          The principles that guide us in everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Excellence</h3>
            <p className="text-ivory/80">
              We are committed to delivering the highest quality in every aspect of our service, from the initial consultation to the final farewell at your event.
            </p>
          </div>
          
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Creativity</h3>
            <p className="text-ivory/80">
              We approach each event with fresh eyes and innovative ideas, tailoring every element to reflect your personality and vision.
            </p>
          </div>
          
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Integrity</h3>
            <p className="text-ivory/80">
              We operate with transparency, honesty, and a commitment to ethical practices in all our business relationships.
            </p>
          </div>
          
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Attention to Detail</h3>
            <p className="text-ivory/80">
              We believe that perfection lies in the details, and we leave no element overlooked in the planning and execution of your event.
            </p>
          </div>
          
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Personalization</h3>
            <p className="text-ivory/80">
              We recognize that each client and event is unique, and we tailor our services to reflect your individual style and preferences.
            </p>
          </div>
          
          <div className="card-highlight">
            <h3 className="font-playfair text-xl font-semibold mb-3 rosegold-text">Reliability</h3>
            <p className="text-ivory/80">
              We are dependable partners in your event journey, providing peace of mind through consistent communication and follow-through.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default About;
