
import React, { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaletteIcon, Palette, Image, Download, RefreshCcw, Heart, Star, Users, Calendar, MapPin, Clock, Sparkles, Camera, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Enhanced color palette options with more detailed schemes
const colorSchemes = [
  {
    id: 1,
    name: "Romantic Blush",
    colors: ["#F8E9E6", "#E4B1AB", "#C38B85", "#966461", "#7A4E52"],
    description: "Soft dusty rose with warm undertones",
    mood: "Romantic, Intimate, Dreamy",
    season: "Spring/Summer",
    style: "Classic Romance"
  },
  {
    id: 2,
    name: "Sage Serenity", 
    colors: ["#9CAF88", "#7D8471", "#6B7A67", "#A8B5A0", "#F5F7F3"],
    description: "Earthy sage greens with natural accents",
    mood: "Tranquil, Natural, Sophisticated",
    season: "All Seasons",
    style: "Botanical Modern"
  },
  {
    id: 3,
    name: "Midnight Glamour",
    colors: ["#1A1A2E", "#16213E", "#0F3460", "#E94560", "#F5F5DC"],
    description: "Deep navy with dramatic crimson accents",
    mood: "Luxurious, Dramatic, Bold",
    season: "Fall/Winter", 
    style: "Modern Glamour"
  },
  {
    id: 4,
    name: "Champagne Dreams",
    colors: ["#F7E7CE", "#E8D5B7", "#B08D57", "#8B7355", "#F4F4F2"],
    description: "Warm champagne and gold tones",
    mood: "Elegant, Warm, Timeless",
    season: "All Seasons",
    style: "Timeless Elegance"
  },
  {
    id: 5,
    name: "Lavender Mist",
    colors: ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#9370DB", "#663399"],
    description: "Soft lavender with purple accents",
    mood: "Whimsical, Romantic, Peaceful",
    season: "Spring",
    style: "Garden Romance"
  },
  {
    id: 6,
    name: "Ocean Breeze",
    colors: ["#B0E0E6", "#87CEEB", "#4682B4", "#2F4F4F", "#F0F8FF"],
    description: "Coastal blues with seafoam accents",
    mood: "Fresh, Calming, Coastal",
    season: "Summer",
    style: "Coastal Chic"
  },
  {
    id: 7,
    name: "Autumn Harvest",
    colors: ["#D2691E", "#CD853F", "#A0522D", "#8B4513", "#F5DEB3"],
    description: "Rich autumn oranges and browns",
    mood: "Warm, Cozy, Rustic",
    season: "Fall",
    style: "Rustic Charm"
  },
  {
    id: 8,
    name: "Monochrome Magic",
    colors: ["#000000", "#2F2F2F", "#696969", "#C0C0C0", "#FFFFFF"],
    description: "Classic black and white with grays",
    mood: "Sophisticated, Timeless, Bold",
    season: "All Seasons",
    style: "Modern Minimalist"
  }
];

// Enhanced theme imagery with detailed categorization
const themeCategories = {
  venues: [
    {
      id: 1,
      name: "Garden Paradise",
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
      description: "Lush outdoor garden setting with natural beauty",
      style: "Outdoor Garden",
      formality: "Semi-Formal"
    },
    {
      id: 2,
      name: "Elegant Ballroom",
      url: "https://images.unsplash.com/photo-1519167758481-83f29c853cb9?auto=format&fit=crop&q=80",
      description: "Grand ballroom with crystal chandeliers",
      style: "Indoor Formal",
      formality: "Formal"
    },
    {
      id: 3,
      name: "Rustic Barn",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
      description: "Charming barn venue with rustic appeal",
      style: "Rustic Outdoor",
      formality: "Casual"
    },
    {
      id: 4,
      name: "Beachfront Bliss",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
      description: "Stunning oceanfront ceremony location",
      style: "Beach",
      formality: "Casual"
    }
  ],
  florals: [
    {
      id: 5,
      name: "Rose Bouquet",
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
      description: "Classic rose arrangements in soft tones",
      style: "Classic Romance",
      formality: "Formal"
    },
    {
      id: 6,
      name: "Wildflower Meadow",
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
      description: "Natural wildflower arrangements",
      style: "Bohemian",
      formality: "Casual"
    },
    {
      id: 7,
      name: "Elegant Orchids",
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80",
      description: "Sophisticated orchid centerpieces",
      style: "Modern Luxury",
      formality: "Formal"
    },
    {
      id: 8,
      name: "Greenery & Eucalyptus",
      url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
      description: "Fresh greenery with eucalyptus accents",
      style: "Natural Modern",
      formality: "Semi-Formal"
    }
  ],
  decor: [
    {
      id: 9,
      name: "Candlelit Romance",
      url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
      description: "Warm candlelight and intimate ambiance",
      style: "Romantic",
      formality: "Formal"
    },
    {
      id: 10,
      name: "Modern Minimalist",
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
      description: "Clean lines and contemporary design",
      style: "Modern",
      formality: "Semi-Formal"
    }
  ]
};

const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: Heart },
  { id: 'birthday', name: 'Birthday Party', icon: Star },
  { id: 'corporate', name: 'Corporate Event', icon: Users },
  { id: 'anniversary', name: 'Anniversary', icon: Calendar },
  { id: 'baby-shower', name: 'Baby Shower', icon: Sparkles },
  { id: 'graduation', name: 'Graduation', icon: Star }
];

const Moodboard = () => {
  const [selectedColorScheme, setSelectedColorScheme] = useState(colorSchemes[0]);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);
  const [formalityLevel, setFormalityLevel] = useState(50);
  const [budgetRange, setBudgetRange] = useState(5000);
  const [guestCount, setGuestCount] = useState(100);
  const [eventType, setEventType] = useState('wedding');
  const [eventName, setEventName] = useState("My Dream Event");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventVision, setEventVision] = useState("");
  const [moodboardGenerated, setMoodboardGenerated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('venues');
  const moodboardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleColorSchemeSelect = (scheme: typeof colorSchemes[0]) => {
    setSelectedColorScheme(scheme);
  };

  const handleImageToggle = (image: any) => {
    const isSelected = selectedImages.some(img => img.id === image.id);
    if (isSelected) {
      setSelectedImages(selectedImages.filter(img => img.id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const handleGenerateMoodboard = () => {
    if (selectedImages.length === 0) {
      toast({
        title: "No Images Selected",
        description: "Please select at least one inspiration image.",
        variant: "destructive"
      });
      return;
    }
    
    setMoodboardGenerated(true);
    
    toast({
      title: "Moodboard Generated! ✨",
      description: "Your custom event moodboard has been created with all your preferences.",
      variant: "default"
    });
    
    setTimeout(() => {
      moodboardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSaveMoodboard = () => {
    if (!moodboardGenerated) {
      toast({
        title: "Generate First",
        description: "Please generate your moodboard before saving.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Moodboard Ready! 📱",
      description: "Take a screenshot of your moodboard to save and share with vendors.",
      variant: "default"
    });

    setTimeout(() => {
      window.alert("📸 To save your moodboard:\n\n1. Take a screenshot of the moodboard section below\n2. Share it with your vendors and planning team\n3. Use it as reference during planning meetings");
    }, 500);
  };

  const getFormalityText = () => {
    if (formalityLevel < 25) return "Casual & Relaxed";
    if (formalityLevel < 50) return "Semi-Casual";
    if (formalityLevel < 75) return "Semi-Formal";
    return "Formal & Elegant";
  };

  const getBudgetText = () => {
    if (budgetRange < 2000) return "Budget-Friendly";
    if (budgetRange < 5000) return "Moderate";
    if (budgetRange < 10000) return "Mid-Range";
    return "Luxury";
  };

  const allImages = [
    ...themeCategories.venues,
    ...themeCategories.florals,
    ...themeCategories.decor
  ];

  const currentCategoryImages = themeCategories[selectedCategory as keyof typeof themeCategories] || [];

  return (
    <main>
      <HeroSection 
        title="Moodboard Generator"
        subtitle="Create your perfect event vision with our advanced moodboard tool. Combine colors, themes, and styles to bring your dream event to life."
        backgroundImage="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80"
        showButton={false}
      />

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Design Your <span className="rosegold-text">Perfect Event</span></h2>
            <p className="section-subtitle">Every detail matters. Let's create something extraordinary together.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Configuration Panel */}
            <div className="lg:col-span-2">
              <Card className="bg-charcoal border-rosegold/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-ivory flex items-center gap-2">
                    <Wand2 className="h-5 w-5 text-rosegold" />
                    Event Configuration
                  </CardTitle>
                  <CardDescription className="text-ivory/70">
                    Tell us about your dream event
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Event Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ivory mb-2 text-sm font-medium">Event Name</label>
                      <Input
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className="bg-charcoal-dark border-rosegold/30 text-ivory"
                        placeholder="Sarah & John's Wedding"
                      />
                    </div>
                    <div>
                      <label className="block text-ivory mb-2 text-sm font-medium">Event Type</label>
                      <div className="grid grid-cols-3 gap-2">
                        {eventTypes.slice(0, 6).map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <button
                              key={type.id}
                              onClick={() => setEventType(type.id)}
                              className={`p-2 rounded text-xs flex flex-col items-center gap-1 transition-all ${
                                eventType === type.id 
                                  ? 'bg-rosegold text-white' 
                                  : 'bg-charcoal-dark text-ivory hover:bg-rosegold/20'
                              }`}
                            >
                              <IconComponent className="h-3 w-3" />
                              <span className="leading-tight">{type.name.split(' ')[0]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-ivory mb-2 text-sm font-medium">Event Date</label>
                      <Input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="bg-charcoal-dark border-rosegold/30 text-ivory"
                      />
                    </div>
                    <div>
                      <label className="block text-ivory mb-2 text-sm font-medium">Location</label>
                      <Input
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="bg-charcoal-dark border-rosegold/30 text-ivory"
                        placeholder="Los Angeles, CA"
                      />
                    </div>
                  </div>

                  {/* Event Details Sliders */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-ivory text-sm font-medium">Guest Count</label>
                        <Badge variant="outline" className="border-rosegold text-rosegold">
                          {guestCount} guests
                        </Badge>
                      </div>
                      <Slider
                        value={[guestCount]}
                        onValueChange={(value) => setGuestCount(value[0])}
                        max={500}
                        min={10}
                        step={10}
                        className="bg-charcoal-dark"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-ivory text-sm font-medium">Budget Range</label>
                        <Badge variant="outline" className="border-rosegold text-rosegold">
                          ${budgetRange.toLocaleString()} - {getBudgetText()}
                        </Badge>
                      </div>
                      <Slider
                        value={[budgetRange]}
                        onValueChange={(value) => setBudgetRange(value[0])}
                        max={25000}
                        min={500}
                        step={500}
                        className="bg-charcoal-dark"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-ivory text-sm font-medium">Formality Level</label>
                        <Badge variant="outline" className="border-rosegold text-rosegold">
                          {getFormalityText()}
                        </Badge>
                      </div>
                      <Slider
                        value={[formalityLevel]}
                        onValueChange={(value) => setFormalityLevel(value[0])}
                        max={100}
                        step={1}
                        className="bg-charcoal-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-ivory mb-2 text-sm font-medium">Event Vision</label>
                    <Textarea
                      value={eventVision}
                      onChange={(e) => setEventVision(e.target.value)}
                      className="bg-charcoal-dark border-rosegold/30 text-ivory min-h-[100px]"
                      placeholder="Describe your dream event... What atmosphere do you want to create? Any specific themes or feelings you want to evoke?"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Preview Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-charcoal-dark border-rosegold/20 shadow-xl sticky top-8">
                <CardHeader>
                  <CardTitle className="text-ivory text-lg flex items-center gap-2">
                    <Camera className="h-4 w-4 text-rosegold" />
                    Quick Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-playfair text-xl text-ivory mb-2">{eventName}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-rosegold/20 text-rosegold border-rosegold/30">
                        {eventTypes.find(t => t.id === eventType)?.name}
                      </Badge>
                      <Badge className="bg-rosegold/20 text-rosegold border-rosegold/30">
                        {getFormalityText()}
                      </Badge>
                    </div>
                  </div>
                  
                  {selectedColorScheme && (
                    <div>
                      <h4 className="text-sm font-medium text-ivory mb-2">Color Palette</h4>
                      <div className="flex gap-1 mb-2">
                        {selectedColorScheme.colors.map((color, idx) => (
                          <div 
                            key={idx}
                            className="w-8 h-8 rounded-full border border-rosegold/30" 
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-ivory/70">{selectedColorScheme.name}</p>
                    </div>
                  )}

                  {selectedImages.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-ivory mb-2">
                        Selected Images ({selectedImages.length})
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedImages.slice(0, 4).map((img, idx) => (
                          <img 
                            key={idx}
                            src={img.url} 
                            alt={img.name}
                            className="w-full h-16 object-cover rounded border border-rosegold/30" 
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <Button 
                    onClick={handleGenerateMoodboard}
                    className="w-full bg-rosegold-gradient text-white"
                    disabled={selectedImages.length === 0}
                  >
                    <RefreshCcw className="h-4 w-4 mr-2" />
                    Generate Moodboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design Selection Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="colors" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-charcoal border border-rosegold/20">
                <TabsTrigger value="colors" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Color Palettes
                </TabsTrigger>
                <TabsTrigger value="themes" className="flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  Inspiration Images
                </TabsTrigger>
                <TabsTrigger value="styles" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Style Elements
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="colors">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {colorSchemes.map((scheme) => (
                    <Card 
                      key={scheme.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedColorScheme.id === scheme.id 
                          ? 'border-rosegold shadow-rosegold/20 shadow-lg bg-charcoal' 
                          : 'border-charcoal-dark hover:border-rosegold/50 bg-charcoal-dark'
                      }`}
                      onClick={() => handleColorSchemeSelect(scheme)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-1 mb-3">
                          {scheme.colors.map((color, idx) => (
                            <div 
                              key={idx}
                              className="w-8 h-8 rounded-full border border-ivory/20" 
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <h3 className="font-playfair text-lg text-ivory mb-1">{scheme.name}</h3>
                        <p className="text-ivory/70 text-sm mb-3">{scheme.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs border-rosegold/30 text-rosegold/80">
                              {scheme.mood}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-ivory/60">
                            <span>{scheme.season}</span>
                            <span>•</span>
                            <span>{scheme.style}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="themes">
                <div className="mb-6">
                  <div className="flex gap-4 mb-6">
                    {Object.entries(themeCategories).map(([category, images]) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg transition-all capitalize ${
                          selectedCategory === category
                            ? 'bg-rosegold text-white'
                            : 'bg-charcoal-dark text-ivory hover:bg-rosegold/20'
                        }`}
                      >
                        {category} ({images.length})
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentCategoryImages.map((image) => (
                    <Card 
                      key={image.id}
                      className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                        selectedImages.some(img => img.id === image.id)
                          ? 'ring-2 ring-rosegold shadow-rosegold/20 shadow-lg' 
                          : 'hover:ring-1 hover:ring-rosegold/50'
                      }`}
                      onClick={() => handleImageToggle(image)}
                    >
                      <div className="relative">
                        <img 
                          src={image.url} 
                          alt={image.name} 
                          className="w-full h-48 object-cover"
                        />
                        {selectedImages.some(img => img.id === image.id) && (
                          <div className="absolute top-3 right-3 bg-rosegold rounded-full p-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="font-playfair text-lg text-white mb-1">{image.name}</h3>
                          <p className="text-white/80 text-sm mb-2">{image.description}</p>
                          <div className="flex gap-2">
                            <Badge className="bg-white/20 text-white text-xs">
                              {image.style}
                            </Badge>
                            <Badge className="bg-white/20 text-white text-xs">
                              {image.formality}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="styles">
                <div className="text-center py-12">
                  <Sparkles className="h-16 w-16 text-rosegold mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair text-ivory mb-4">Style Elements Coming Soon</h3>
                  <p className="text-ivory/70 max-w-2xl mx-auto">
                    Advanced styling options including lighting preferences, table settings, 
                    entertainment styles, and custom design elements will be available soon.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Enhanced Generated Moodboard */}
      {moodboardGenerated && (
        <section className="section-container bg-charcoal-dark/30" ref={moodboardRef}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">
                Your <span className="rosegold-text">Event Moodboard</span>
              </h2>
              <p className="text-xl text-ivory/80 font-playfair italic">
                "{eventVision || 'A vision brought to life'}"
              </p>
            </div>

            <Card className="bg-charcoal border-rosegold/20 shadow-2xl overflow-hidden">
              <CardHeader className="bg-rosegold-gradient text-white text-center py-8">
                <CardTitle className="text-3xl font-playfair">{eventName}</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  {eventDate && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(eventDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  )}
                  {eventLocation && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      {eventLocation}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {guestCount} guests
                    </span>
                    <span>•</span>
                    <span>{getFormalityText()}</span>
                    <span>•</span>
                    <span>{getBudgetText()}</span>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Event Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-charcoal-dark p-6 rounded-lg">
                    <h4 className="font-playfair text-lg rosegold-text mb-3">Event Details</h4>
                    <div className="space-y-2 text-ivory/80">
                      <p><strong>Type:</strong> {eventTypes.find(t => t.id === eventType)?.name}</p>
                      <p><strong>Style:</strong> {selectedColorScheme.style}</p>
                      <p><strong>Mood:</strong> {selectedColorScheme.mood}</p>
                      <p><strong>Season:</strong> {selectedColorScheme.season}</p>
                    </div>
                  </div>

                  <div className="bg-charcoal-dark p-6 rounded-lg">
                    <h4 className="font-playfair text-lg rosegold-text mb-3">Color Palette</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedColorScheme.colors.map((color, idx) => (
                        <div key={idx} className="text-center">
                          <div 
                            className="w-12 h-12 rounded-lg mb-1 border border-rosegold/30" 
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-ivory/60 block">{color}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-ivory/70">{selectedColorScheme.description}</p>
                  </div>

                  <div className="bg-charcoal-dark p-6 rounded-lg">
                    <h4 className="font-playfair text-lg rosegold-text mb-3">Recommendations</h4>
                    <div className="space-y-2 text-sm text-ivory/80">
                      <p>• Best season: {selectedColorScheme.season}</p>
                      <p>• Venue style: {selectedImages.length > 0 ? selectedImages[0].style : 'To be determined'}</p>
                      <p>• Time of day: {formalityLevel > 60 ? 'Evening' : formalityLevel > 30 ? 'Afternoon' : 'Day'}</p>
                      <p>• Dress code: {getFormalityText()}</p>
                    </div>
                  </div>
                </div>

                {/* Inspiration Gallery */}
                <div>
                  <h4 className="font-playfair text-2xl rosegold-text mb-6 text-center">Inspiration Gallery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedImages.map((image, idx) => (
                      <div key={idx} className="relative group overflow-hidden rounded-lg">
                        <img 
                          src={image.url} 
                          alt={image.name}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h5 className="text-white font-medium">{image.name}</h5>
                            <p className="text-white/80 text-sm">{image.description}</p>
                            <div className="flex gap-2 mt-2">
                              <Badge className="bg-white/20 text-white text-xs">{image.style}</Badge>
                              <Badge className="bg-white/20 text-white text-xs">{image.formality}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Planning Notes */}
                {eventVision && (
                  <div className="bg-charcoal-dark p-6 rounded-lg">
                    <h4 className="font-playfair text-lg rosegold-text mb-3">Your Vision</h4>
                    <p className="text-ivory/80 italic leading-relaxed">"{eventVision}"</p>
                  </div>
                )}

                {/* Next Steps */}
                <div className="bg-rosegold/10 border border-rosegold/20 p-6 rounded-lg">
                  <h4 className="font-playfair text-lg rosegold-text mb-4">Next Steps</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-ivory/80">
                    <div className="flex items-start gap-2">
                      <div className="bg-rosegold text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <strong className="text-ivory">Save & Share</strong>
                        <p>Download this moodboard and share with your vendors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-rosegold text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <strong className="text-ivory">Book Consultation</strong>
                        <p>Schedule a meeting with our design team</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-rosegold text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <strong className="text-ivory">Bring to Life</strong>
                        <p>Watch your vision become reality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 gap-4">
              <Button 
                onClick={handleSaveMoodboard}
                className="bg-rosegold-gradient text-white flex items-center gap-2 px-8 py-3"
              >
                <Download className="h-5 w-5" />
                Save Moodboard
              </Button>
              <Button 
                variant="outline"
                className="border-rosegold text-rosegold hover:bg-rosegold hover:text-white flex items-center gap-2 px-8 py-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <RefreshCcw className="h-5 w-5" />
                Create New
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Usage Guide */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            How to Use Your <span className="rosegold-text">Moodboard</span>
          </h2>
          <p className="section-subtitle">
            Transform your digital vision into a stunning reality
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="card-highlight text-center">
              <CardContent className="p-6">
                <div className="bg-rosegold-gradient text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-ivory">Share with Vendors</h3>
                <p className="text-ivory/90">
                  Save your moodboard and share it with photographers, florists, caterers, and other vendors to ensure everyone understands your vision perfectly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-highlight text-center">
              <CardContent className="p-6">
                <div className="bg-rosegold-gradient text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-ivory">Expert Consultation</h3>
                <p className="text-ivory/90">
                  Schedule a personalized consultation with our design experts to refine your moodboard and develop a comprehensive event plan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-highlight text-center">
              <CardContent className="p-6">
                <div className="bg-rosegold-gradient text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 text-ivory">Bring It to Life</h3>
                <p className="text-ivory/90">
                  Watch as our experienced team transforms your digital moodboard into a breathtaking reality that exceeds your expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Moodboard;
