
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { PaletteIcon, Palette, Image, Download, RefreshCcw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Color palette options
const colorSchemes = [
  {
    name: "Classic Elegance",
    colors: ["#000000", "#B76E79", "#F8F5F0", "#F7E8D0", "#F8E9E6"],
    description: "Our signature palette with rose gold and ivory"
  },
  {
    name: "Romantic Blush",
    colors: ["#F8E9E6", "#E4B1AB", "#C38B85", "#966461", "#222222"],
    description: "Soft pinks and roses with muted accents"
  },
  {
    name: "Modern Minimalist",
    colors: ["#121212", "#3A3A3A", "#F0F0F0", "#D4AF37", "#FFFFFF"],
    description: "Clean lines with gold accent"
  },
  {
    name: "Garden Fantasy",
    colors: ["#274E13", "#7D9D81", "#F0F7EE", "#E6A57E", "#C9A689"],
    description: "Natural greens with earthy tones"
  },
  {
    name: "Coastal Dream",
    colors: ["#0C306B", "#6593B7", "#D9E4EC", "#F1DDBF", "#525564"],
    description: "Ocean blues with sand accents"
  },
  {
    name: "Midnight Glamour",
    colors: ["#0B0C10", "#541B31", "#900C3F", "#C70039", "#D4AF37"],
    description: "Deep burgundy with gold accents"
  }
];

// Theme imagery options
const themeImages = [
  {
    name: "Rustic Chic",
    url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    description: "Natural elements with elegant touches"
  },
  {
    name: "Modern Minimalist",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    description: "Clean lines and simple elegance"
  },
  {
    name: "Bohemian Luxury",
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    description: "Free-spirited with luxurious details"
  },
  {
    name: "Glamorous Affair",
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    description: "Opulent and sophisticated design"
  },
  {
    name: "Garden Romance",
    url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    description: "Floral-focused with natural beauty"
  }
];

const Moodboard = () => {
  const [selectedColorScheme, setSelectedColorScheme] = useState(colorSchemes[0]);
  const [selectedImages, setSelectedImages] = useState<string[]>([themeImages[0].url]);
  const [formalityLevel, setFormalityLevel] = useState(50);
  const { toast } = useToast();

  const handleColorSchemeSelect = (scheme: typeof colorSchemes[0]) => {
    setSelectedColorScheme(scheme);
  };

  const handleImageToggle = (imageUrl: string) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(url => url !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const handleFormalityChange = (value: number[]) => {
    setFormalityLevel(value[0]);
  };

  const handleGenerateMoodboard = () => {
    toast({
      title: "Moodboard Generated",
      description: "Your custom event moodboard has been created.",
      variant: "default"
    });
    // In a real app, this would generate a downloadable moodboard
  };

  const handleSaveMoodboard = () => {
    toast({
      title: "Moodboard Saved",
      description: "Your moodboard has been saved to your account.",
      variant: "default"
    });
    // In a real app, this would save the moodboard to the user's account
  };

  return (
    <main>
      <HeroSection 
        title="Moodboard Generator"
        subtitle="Visualize your dream event with our interactive moodboard creator."
        backgroundImage="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
        showButton={false}
      />

      <section className="section-container">
        <div className="max-w-4xl mx-auto bg-charcoal rounded-xl p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-center">Create Your <span className="rosegold-text">Event Vision</span></h2>
          
          <Tabs defaultValue="colors" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="colors" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Color Palette</span>
              </TabsTrigger>
              <TabsTrigger value="themes" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                <span>Theme Elements</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="colors">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {colorSchemes.map((scheme) => (
                    <div 
                      key={scheme.name}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedColorScheme.name === scheme.name 
                          ? 'border-rosegold shadow-md' 
                          : 'border-charcoal-dark hover:border-rosegold/50'
                      }`}
                      onClick={() => handleColorSchemeSelect(scheme)}
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {scheme.colors.map((color) => (
                          <div 
                            key={color} 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <h3 className="font-playfair text-lg mb-1">{scheme.name}</h3>
                      <p className="text-ivory/70 text-sm">{scheme.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-charcoal-dark p-4 rounded-lg">
                  <h3 className="font-playfair text-lg mb-4">Selected Palette: {selectedColorScheme.name}</h3>
                  <div className="flex gap-4 mb-2">
                    {selectedColorScheme.colors.map((color) => (
                      <div key={color} className="flex flex-col items-center">
                        <div 
                          className="w-12 h-12 rounded-lg mb-1" 
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="text-xs text-ivory/60">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="themes">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {themeImages.map((theme) => (
                    <div 
                      key={theme.name}
                      className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                        selectedImages.includes(theme.url) ? 'ring-2 ring-rosegold' : ''
                      }`}
                      onClick={() => handleImageToggle(theme.url)}
                    >
                      <img 
                        src={theme.url} 
                        alt={theme.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h3 className="font-playfair text-lg">{theme.name}</h3>
                        <p className="text-ivory/80 text-sm">{theme.description}</p>
                      </div>
                      {selectedImages.includes(theme.url) && (
                        <div className="absolute top-2 right-2 bg-rosegold rounded-full p-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="bg-charcoal-dark p-6 rounded-lg">
                  <h3 className="font-playfair text-lg mb-2">Formality Level</h3>
                  <div className="flex items-center mb-6">
                    <span className="text-sm mr-4">Casual</span>
                    <div className="flex-grow">
                      <Slider
                        defaultValue={[formalityLevel]}
                        max={100}
                        step={1}
                        onValueChange={handleFormalityChange}
                        className="bg-charcoal"
                      />
                    </div>
                    <span className="text-sm ml-4">Formal</span>
                  </div>
                  <p className="text-ivory/80 text-sm mb-2">
                    Current selection: {formalityLevel < 33 ? 'Casual' : formalityLevel < 66 ? 'Semi-Formal' : 'Formal'}
                  </p>
                  <div className="h-2 w-full bg-charcoal rounded-full mt-2">
                    <div 
                      className="h-full rounded-full bg-rosegold-gradient" 
                      style={{ width: `${formalityLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Button 
              onClick={handleGenerateMoodboard}
              className="bg-rosegold-gradient text-white flex items-center gap-2 px-6"
            >
              <RefreshCcw className="h-4 w-4" />
              Generate Moodboard
            </Button>
            <Button 
              onClick={handleSaveMoodboard}
              className="bg-charcoal border border-rosegold text-rosegold hover:bg-rosegold hover:text-white flex items-center gap-2 px-6"
            >
              <Download className="h-4 w-4" />
              Save Moodboard
            </Button>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            How to Use Your <span className="rosegold-text">Moodboard</span>
          </h2>
          <p className="section-subtitle">
            Turn your vision into reality with these simple steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-highlight">
              <div className="bg-rosegold-gradient text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Share with Vendors</h3>
              <p className="text-ivory/80">
                Download your moodboard and share it with your chosen vendors to ensure everyone understands your vision.
              </p>
            </div>
            
            <div className="card-highlight">
              <div className="bg-rosegold-gradient text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Consult with Our Team</h3>
              <p className="text-ivory/80">
                Schedule a consultation with our design experts to refine your ideas and develop a comprehensive plan.
              </p>
            </div>
            
            <div className="card-highlight">
              <div className="bg-rosegold-gradient text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Bring It to Life</h3>
              <p className="text-ivory/80">
                Watch as our team transforms your digital moodboard into a breathtaking reality for your special day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Moodboard;
