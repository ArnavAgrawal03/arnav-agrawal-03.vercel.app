"use client"
import React, { useState } from 'react';
import { Github, Mail, Linkedin, FileText, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

const NeumorphicButton = ({ icon: Icon, children }) => (
  <button className={`flex items-center gap-2 px-4 py-2 rounded-full bg-#CCF1F5 ${inconsolata.className} text-gray-800 text-lg
    border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]
    hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all duration-150`}>
    {Icon && <Icon size={24} className="stroke-2" />}
    <span>{children}</span>
  </button>
);

const MediaCarousel = () => {
    // Sample media items - replace with your actual media
    const mediaItems = [
      { id: 1, src: "/api/placeholder/800/450", alt: "Project 1" },
      { id: 2, src: "/api/placeholder/800/450", alt: "Project 2" },
      { id: 3, src: "/api/placeholder/800/450", alt: "Project 3" },
      { id: 4, src: "/api/placeholder/800/450", alt: "Project 4" },
      { id: 5, src: "/api/placeholder/800/450", alt: "Project 5" },
    ];
  
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const scrollToPrev = () => {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
    };
  
    const scrollToNext = () => {
      setSelectedIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
    };
  
    return (
      <div className="w-full space-y-4">
        {/* Main Image Display */}
        <div className="relative aspect-video bg-black">
          <img 
            src={mediaItems[selectedIndex].src}
            alt={mediaItems[selectedIndex].alt}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={scrollToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={scrollToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
  
        {/* Thumbnails */}
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 relative ${
                index === selectedIndex ? 'ring-2 ring-black' : 'hover:opacity-80'
              }`}
            >
              <img
                src={item.src}
                alt={`Thumbnail ${index + 1}`}
                className="h-20 w-36 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };
  

const HeroSection = () => {
  return (
    <div id="hero-section" className="min-h-screen p-8" style={{ backgroundColor: '#CCF1F5' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-8 ${inriaSerif.className} text-gray-800 bg-[#CCF1F5] z-50 border-b border-[#787878] border-b-[0.5px] w-screen`}>
        {/* Logo */}
        <span className="text-4xl font-bold">A</span>
        
        {/* Navigation links */}
        <div className="flex gap-12 items-center text-xl absolute left-1/2 transform -translate-x-1/2">
          <ScrollLink 
            to="hero-section" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-600 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink 
            to="playground-section" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-600 cursor-pointer"
          >
            Playground
          </ScrollLink>
          <ScrollLink 
            to="contact-section" 
            smooth={true} 
            duration={500} 
            className="hover:text-gray-600 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-16 items-start max-w-7xl mx-auto pt-24"> {/* Added pt-24 for padding top */}
        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <MediaCarousel />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className={`text-5xl text-gray-900 font-normal mb-8 flex items-center gap-3 ${inriaSerif.className}`}>
            Hi! I'm Arnav
            <span role="img" aria-label="laptop emoji" className="text-4xl">👨‍💻</span>
          </h1>

          <div className={`space-y-6 text-gray-800 ${inconsolata.className}`}>
            <p className="text-lg">
              I'm a student pursuing a B.S. in Computer Science at Cornell University, 
              expected to graduate in May 2025. I'm currently working on a product that 
              allows developer to implement custom evaluation metrics and RLHF for their 
              LLM applications via an API. You can learn more about Kiwi 🥝 
              <a href="#" className="underline hover:text-blue-600 ml-1">here</a>.
            </p>

            <p className="text-lg">
              You can find projects that I've worked on in the 
              <a href="/playground" className="underline hover:text-blue-600 mx-1">playground</a> 
              section. If you're interested in speaking with me, you can book a time or contact me 
              via the <a href="/contact" className="underline hover:text-blue-600">contact</a> section.
            </p>

            <p className="text-lg">
              Alternatively, you could try this ✍️ (experimental!) 
              <a href="#" className="underline hover:text-blue-600 ml-1">chatbot</a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <NeumorphicButton icon={FileText}>Resume</NeumorphicButton>
            <NeumorphicButton icon={Mail}>Email</NeumorphicButton>
            <NeumorphicButton icon={Linkedin}>LinkedIn</NeumorphicButton>
            <NeumorphicButton icon={Calendar}>Book a time</NeumorphicButton>
            <NeumorphicButton icon={Github}>GitHub</NeumorphicButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;