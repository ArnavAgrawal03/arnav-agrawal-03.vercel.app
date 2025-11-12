"use client"
import React from 'react';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';


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
  <button
    type="button"
    className={`flex items-center justify-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-[#CCF1F5] ${inconsolata.className} text-gray-800 text-base sm:text-lg
    border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] w-full sm:w-auto
    hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all duration-150 whitespace-nowrap`}>
    {Icon && <Icon size={24} className="stroke-2" />}
    <span>{children}</span>
  </button>
);

type HeroSectionProps = {
  introMarkdown: string;
};

const HeroSection = ({ introMarkdown }: HeroSectionProps) => {
  return (
    <div
      id="hero-section"
      className="min-h-screen px-4 sm:px-6 md:px-8 py-10"
      style={{ backgroundColor: '#CCF1F5' }}
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start max-w-7xl mx-auto pt-28 md:pt-32">
        {/* Text Content (left) */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <ReactMarkdown
            className={`space-y-6 text-gray-800 ${inconsolata.className}`}
            components={{
              h1: ({ ...props }) => (
                <h1
                  className={`text-4xl sm:text-5xl text-gray-900 font-normal mb-8 flex flex-wrap justify-center md:justify-start gap-3 ${inriaSerif.className}`}
                  {...props}
                />
              ),
              p: ({ ...props }) => (
                <p className="text-base sm:text-lg leading-relaxed" {...props} />
              ),
              a: ({ ...props }) => (
                <a className="underline hover:text-blue-600" {...props} />
              )
            }}
          >
            {introMarkdown}
          </ReactMarkdown>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 justify-center md:justify-start">
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
          <div className="relative w-full max-w-[220px] sm:max-w-xs md:max-w-sm aspect-square bg-black rounded-xl overflow-hidden mx-auto md:ml-auto">
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
