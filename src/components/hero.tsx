"use client"
import React from 'react';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import Navbar from '@/components/navbar';
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

// Quote section removed; will live elsewhere
  

const HeroSection = () => {
  return (
    <div id="hero-section" className="min-h-screen p-8" style={{ backgroundColor: '#CCF1F5' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-16 items-start max-w-7xl mx-auto pt-24"> {/* Added pt-24 for padding top */}
        {/* Text Content (left) */}
        <div className="w-full md:w-7/12">
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
              <Link href="/archive" className="underline hover:text-blue-600 mx-1">archive</Link> 
              section. If you&apos;re interested in speaking with me, feel free to reach out via Email, LinkedIn, GitHub, or Twitter/X.
            </p>

            {/* Removed chatbot reference */}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="mailto:aa779@cornell.edu">
              <NeumorphicButton icon={Mail}>Email</NeumorphicButton>
            </Link>
            <Link href="https://www.linkedin.com/in/arnavagrawal03/">
              <NeumorphicButton icon={Linkedin}>LinkedIn</NeumorphicButton>
            </Link>
            <Link href="https://github.com/arnavagrawal03">
              <NeumorphicButton icon={Github}>GitHub</NeumorphicButton>
            </Link>
            <Link href="https://x.com/ArnavAgrawal03">
              <NeumorphicButton icon={Twitter}>Twitter/X</NeumorphicButton>
            </Link>
          </div>
        </div>

        {/* Image (right) */}
        <div className="w-full md:w-5/12">
          <div className="relative w-full max-w-xs aspect-square bg-black rounded-xl overflow-hidden md:ml-auto">
            <Image
              src="/media-gallery/arnav-cropped.jpg"
              alt="Arnav Headshot"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
