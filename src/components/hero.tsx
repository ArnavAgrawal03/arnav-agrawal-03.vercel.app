"use client"
import React, { useState } from 'react';
import { Github, Mail, Linkedin, FileText, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';


const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

const NeumorphicButton = ({ icon: Icon, children }: { icon?: React.ElementType, children: React.ReactNode }) => (
  <button className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[#CCF1F5] ${inconsolata.className} text-gray-800 text-lg
    border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]
    hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all duration-150`}>
    {Icon && <Icon size={24} className="stroke-2" />}
    <span>{children}</span>
  </button>
);

// Add new Quote component
const Quote = ({ text, language = 'en' }: { text: string, language?: string }) => (
  <div className="mt-4">
    <blockquote className={`text-xl italic text-black ${
      language === 'hi' ? inriaSerif.className : inconsolata.className
    }`}>
      &ldquo;{text}&rdquo;
    </blockquote>
    {language === 'hi' && (
      <p className={`mt-2 text-sm text-gray-600 italic ${inconsolata.className}`}>
        Your will has the power to change your destiny
      </p>
    )}
  </div>
);

const MediaCarousel = () => {
    const mediaItems = [
      { 
        id: 1, 
        src: "/media-gallery/arnav.jpg", 
        alt: "Arnav Headshot",
        quote: {
          text: "Building the future, one line of code at a time",
          language: 'en'
        }
      },
      { 
        id: 2, 
        src: "/media-gallery/databridge-yc-vid.mp4", 
        alt: "DataBridge YC Video",
        quote: {
          text: "हाथों की लकीर को तोड़ता मरोड़ता है हौसला रे।",
          language: 'hi'
        }
      },
      // { id: 3, src: "/media-gallery/databridge-yc-vid.mp4", alt: "DataBridge YC Demo" },
      // { id: 4, src: "/media-gallery/databridge-yc-vid.mp4", alt: "DataBridge YC Demo" },
      // { id: 5, src: "/media-gallery/databridge-yc-vid.mp4", alt: "DataBridge YC Demo" },
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
        {/* Main Media Display */}
        <div className="relative aspect-[16/10] bg-black">
          {mediaItems[selectedIndex].src.endsWith('.mp4') ? (
            <video 
              className="object-cover w-full h-full"
              controls
            >
              <source src={mediaItems[selectedIndex].src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={mediaItems[selectedIndex].src}
              alt={mediaItems[selectedIndex].alt}
              fill
              className="object-cover object-[center_67%]"
            />
          )}
          
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
        
        {/* Add Quote below media */}
        <Quote
          text={mediaItems[selectedIndex].quote?.text || ''}
          language={mediaItems[selectedIndex].quote?.language || 'en'}
        />
        {/* Thumbnails */}
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 relative h-20 w-36 ${
                index === selectedIndex ? 'ring-2 ring-black' : 'hover:opacity-80'
              }`}
            >
              {item.src.endsWith('.mp4') ? (
                <video className="object-cover w-full h-full">
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              )}
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
            Hi! I&apos;m Arnav
            <span role="img" aria-label="laptop emoji" className="text-4xl">👨‍💻</span>
          </h1>

          <div className={`space-y-6 text-gray-800 ${inconsolata.className}`}>
            <p className="text-lg">
              I&apos;m a student pursuing a B.S. in Computer Science at Cornell University, 
              expected to graduate in May 2025. I&apos;m currently working on a product that 
              allows developers to implement RAG on user data for their LLM applications via an API.
              It allows users to track how their data is used and define natural language access control rules.
              You can learn more about DataBridge 🌉
              <a href="#" className="underline hover:text-blue-600 ml-1">here</a>.
            </p>

            <p className="text-lg">
              You can find projects that I&apos;ve worked on in the 
              <a href="#playground-section" className="underline hover:text-blue-600 mx-1">playground</a> 
              section. If you&apos;re interested in speaking with me, you can book a time or contact me 
              via the <a href="#contact-section" className="underline hover:text-blue-600">contact</a> section.
            </p>

            <p className="text-lg">
              Alternatively, you could try this ✍️ (experimental!) 
              <a href="#contact-section" className="underline hover:text-blue-600 ml-1">chatbot</a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/resume.pdf">
              <NeumorphicButton icon={FileText}>Resume</NeumorphicButton>
            </Link>
            <Link href="mailto:aa779@cornell.edu">
              <NeumorphicButton icon={Mail}>Email</NeumorphicButton>
            </Link>
            <Link href="https://www.linkedin.com/in/arnavagrawal03/">
              <NeumorphicButton icon={Linkedin}>LinkedIn</NeumorphicButton>
            </Link>
            <Link href="#contact-section">
              <NeumorphicButton icon={Calendar}>Book a time</NeumorphicButton>
            </Link>
            <Link href="https://github.com/arnavagrawal">
              <NeumorphicButton icon={Github}>GitHub</NeumorphicButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;