
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Phone, Mail, Calendar, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      toast.success("Thank you for your inquiry! We'll be in touch soon.", {
        description: "A member of our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main>
      <HeroSection 
        title="Contact Us"
        subtitle="Let's talk about your dream event."
        backgroundImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80"
        showButton={false}
      />

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-2/5">
            <h2 className="font-playfair text-3xl font-semibold mb-6">
              Let's <span className="rosegold-text">Connect</span>
            </h2>
            <p className="text-ivory/80 mb-8">
              We're excited to hear about your event! Fill out the form or contact us directly using the information below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-rosegold-gradient p-3 rounded-full">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-medium">Phone</h3>
                  <p className="text-ivory/80">+44 7720 756007</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-rosegold-gradient p-3 rounded-full">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-medium">Email</h3>
                  <p className="text-ivory/80">Dreamzcatchers@outlook.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-rosegold-gradient rounded-lg">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-white">Our Hours</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-white/90 text-sm">
                Appointments outside of business hours available by request.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-3/5">
            <div className="card-highlight p-8">
              <h2 className="font-playfair text-2xl font-semibold mb-6 text-center">
                Tell Us About Your <span className="rosegold-text">Dream Event</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-ivory mb-2">
                      Your Name <span className="text-rosegold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-ivory mb-2">
                      Email Address <span className="text-rosegold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-ivory mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-ivory mb-2">
                      Event Type <span className="text-rosegold">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-ivory mb-2">
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rosegold h-5 w-5" />
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-ivory mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                      <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-ivory mb-2">
                    Your Vision <span className="text-rosegold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your dream event..."
                    className="w-full px-4 py-2 bg-charcoal border border-rosegold/30 rounded-md focus:outline-none focus:border-rosegold text-ivory"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Let's Talk About Your Dream</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
