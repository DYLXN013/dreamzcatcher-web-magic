
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Calendar, MapPin, Palette, Sparkles, Users, Clock, Camera, Award, CheckCircle } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "From intimate ceremonies to grand celebrations, we create magical moments that tell your unique love story.",
      features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"],
      image: "https://images.unsplash.com/photo-1519167758481-83f29c853cb9?auto=format&fit=crop&q=80"
    },
    {
      icon: Star,
      title: "Special Celebrations",
      description: "Milestone birthdays, anniversaries, and life celebrations designed to honor your most precious moments.",
      features: ["Custom Themes", "Entertainment Booking", "Catering Coordination", "Memorable Experiences"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Sophisticated gatherings that bring people together in style, from intimate dinners to large celebrations.",
      features: ["Guest Management", "Menu Planning", "Atmosphere Design", "Photography Coordination"],
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
    }
  ];

  const features = [
    {
      icon: Palette,
      title: "Moodboard Generator",
      description: "Visualize your dream event with our interactive design tool",
      link: "/moodboard"
    },
    {
      icon: Calendar,
      title: "Timeline Planning",
      description: "Detailed scheduling to ensure every moment flows perfectly"
    },
    {
      icon: MapPin,
      title: "Venue Sourcing",
      description: "Find the perfect location that matches your vision"
    },
    {
      icon: Camera,
      title: "Vendor Network",
      description: "Access to premier photographers, caterers, and specialists"
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Recognized excellence in event design and execution"
    },
    {
      icon: CheckCircle,
      title: "Full-Service Support",
      description: "From concept to cleanup, we handle every detail"
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Dream Wedding",
      rating: 5,
      text: "DreamzCatchers turned our wedding dreams into the most magical reality. Every detail was perfect, and the moodboard tool helped us visualize everything beautifully.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80"
    },
    {
      name: "Jennifer Martinez",
      event: "50th Birthday Celebration",
      rating: 5,
      text: "The attention to detail and creativity exceeded all expectations. Our celebration was absolutely stunning and exactly what we envisioned.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
    },
    {
      name: "David & Emma",
      event: "Anniversary Party",
      rating: 5,
      text: "Professional, creative, and incredibly organized. They made our 25th anniversary unforgettable with their beautiful design and flawless execution.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { number: "500+", label: "Events Created", icon: Calendar },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "50+", label: "Vendor Partners", icon: Users },
    { number: "5", label: "Years Excellence", icon: Award }
  ];

  return (
    <main>
      <HeroSection 
        title="Create Unforgettable Moments"
        subtitle="Where dreams meet reality. From intimate gatherings to grand celebrations, we design experiences that capture hearts and create lasting memories."
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f29c853cb9?auto=format&fit=crop&q=80"
      />

      {/* Stats Section */}
      <section className="section-container bg-charcoal-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-rosegold-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-playfair font-bold rosegold-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-ivory/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moodboard CTA Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-rosegold-gradient text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="h-6 w-6" />
                    <Badge className="bg-white/20 text-white">New Feature</Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                    Visualize Your Dream Event
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    Our interactive moodboard generator helps you explore colors, themes, and styles to create the perfect vision for your special day.
                  </p>
                  <Link to="/moodboard">
                    <Button className="bg-white text-rosegold hover:bg-white/90 font-semibold px-8 py-3">
                      Try Moodboard Generator
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
                    alt="Event Design" 
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="rosegold-text">Signature Services</span>
            </h2>
            <p className="section-subtitle">
              From intimate moments to grand celebrations, we craft experiences that reflect your unique story
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-highlight group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-rosegold-gradient rounded-full p-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-ivory mb-3 flex items-center gap-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-ivory/80 mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-ivory/70">
                          <CheckCircle className="h-4 w-4 text-rosegold" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-container bg-charcoal-dark/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why Choose <span className="rosegold-text">DreamzCatchers</span>
            </h2>
            <p className="section-subtitle">
              Experience the difference of working with passionate event designers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-highlight text-center group">
                  <CardContent className="p-6">
                    <div className="bg-rosegold-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-ivory mb-3">
                      {feature.link ? (
                        <Link to={feature.link} className="rosegold-underline">
                          {feature.title}
                        </Link>
                      ) : (
                        feature.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-ivory/80">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Love Stories & <span className="rosegold-text">Celebrations</span>
            </h2>
            <p className="section-subtitle">
              Hear from the hearts we've touched and the memories we've created
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-highlight">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-rosegold text-rosegold" />
                    ))}
                  </div>
                  <blockquote className="text-ivory/90 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-rosegold/30"
                    />
                    <div>
                      <div className="font-semibold text-ivory">{testimonial.name}</div>
                      <div className="text-sm text-ivory/70">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-rosegold-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's transform your vision into an unforgettable reality. Every detail, every moment, perfectly crafted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-rosegold hover:bg-white/90 font-semibold px-8 py-3 text-lg">
                Start Planning Today
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/moodboard">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg">
                Try Moodboard Tool
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
