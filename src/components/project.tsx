"use client"
import React, { useState } from 'react';
import { Inria_Serif, Inconsolata } from 'next/font/google';
import Image from 'next/image';
import PlayTheManContent from './play-the-man';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

// Add external link icon SVG component
const ExternalLinkIcon = () => (
  <svg 
    className="inline-block w-5 h-5 ml-2" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
    />
  </svg>
);

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

const ProjectCard = ({ title, description, imageUrl, onClick }: ProjectCardProps) => (
  <div 
    className="group relative rounded-3xl overflow-hidden bg-[#CCF1F5] border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-[16/9] w-full overflow-hidden relative h-[60%]">
      <Image 
        src={imageUrl} 
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-[#CCF1F5] p-4 h-[40%] flex flex-col justify-center">
      <h3 className={`${inriaSerif.className} text-xl font-medium mb-1 text-gray-900`}>
        {title}
      </h3>
      <p className={`${inconsolata.className} text-sm text-gray-700`}>
        {description}
      </p>
    </div>
  </div>
);

const ProveMLContent = () => (
  <div className="relative pt-8 pb-8">
    <div className="flex justify-center gap-8">
      {/* Column 1: Knowledge Base and Query */}
      <div className="flex flex-col gap-8">
        {/* Knowledge Base */}
        <div className="border-2 border-black rounded-xl p-6 inline-block">
          <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900 mb-4`}>
            Knowledge Base
          </h4>
          <div className={`${inconsolata.className} space-y-2 text-gray-900`}>
            <p>If it rains, the ground gets wet</p>
            <p>If the ground is wet, it&apos;s slippery</p>
            <p>It is raining</p>
          </div>
        </div>

        {/* User Query */}
        <div className="border-2 border-black rounded-xl p-6 inline-block">
          <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900 mb-4`}>
            User Query
          </h4>
          <div className={`${inconsolata.className} text-gray-900`}>
            <p>Is the ground slippery?</p>
          </div>
        </div>
      </div>

      {/* Column 2: Parser */}
      <div className="border-2 border-black rounded-xl p-6 inline-block self-center">
        <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900`}>Natural Language Parser</h4>
      </div>

      {/* Column 3: Logical Statements and Query Translation */}
      <div className="flex flex-col gap-8">
        {/* Knowledge Base Logic */}
        <div className="border-2 border-black rounded-xl p-6 inline-block">
          <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900 mb-4`}>
            Logical Statements
          </h4>
          <div className={`${inconsolata.className} space-y-2 text-gray-900`}>
            <p>R → W</p>
            <p>W → S</p>
            <p>R</p>
          </div>
        </div>

        {/* Query Logic */}
        <div className="border-2 border-black rounded-xl p-6 inline-block">
          <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900 mb-4`}>
            Query Translation
          </h4>
          <div className={`${inconsolata.className} text-gray-900`}>
            <p>Prove S</p>
          </div>
        </div>
      </div>

      {/* Column 4: Automated Prover */}
      <div className="border-2 border-black rounded-xl p-6 inline-block self-center">
        <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900`}>Automated Prover</h4>
      </div>

      {/* Column 5: Proof */}
      <div className="border-2 border-black rounded-xl p-6 inline-block self-center">
        <h4 className={`${inriaSerif.className} text-lg font-bold text-gray-900 mb-4`}>
          Proof
        </h4>
        <div className={`${inconsolata.className} space-y-2 text-gray-900`}>
          <p>1. R → W (given)</p>
          <p>2. W → S (given)</p>
          <p>3. R (given)</p>
          <p>4. W (from 1,3)</p>
          <p>5. S (from 2,4)</p>
          <p className="pt-2 font-bold border-t border-gray-300 mt-4">∴ Ground is slippery</p>
        </div>
      </div>
    </div>
  </div>
);

const BrandSyncContent = () => (
  <div className="relative pt-8 pb-8">
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
        src="https://www.youtube.com/embed/Q6twwYsYNKI"
        title="BrandSync Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ 
    title: '', 
    description: '', 
    longDescription: '',
    links: [] as { label: string; url: string }[],
    customContent: null as React.ReactElement | null | undefined
  });

  const projects = [
    {
      title: "Play the Man",
      description: "Learning to play against biased opponents",
      imageUrl: "/project-thumbnails/poker.webp",
      longDescription: "",
      links: [],
      customContent: <PlayTheManContent />
    },
    {
      title: "BrandSync",
      description: "Create, and post graphics and text for Social Media",
      imageUrl: "/project-thumbnails/brandsync.png",
      longDescription: "",
      links: [
        { label: "Visit Website", url: "https://brandsync.ai" }
      ],
      customContent: <BrandSyncContent />
    },
    {
      title: "ProveML",
      description: "A natural-language theorem prover for proposition logic",
      imageUrl: "/project-thumbnails/theorem-prover-quanta.jpg",
      longDescription: "ProveML bridges the gap between natural language and formal logic by translating everyday statements into propositional logic and automatically generating proofs. It uses advanced NLP techniques to parse natural language input and converts it into formal logical statements that can be processed by a theorem prover.",
      links: [
        { label: "View on GitHub", url: "https://github.com/arnavagrawal03/ProveML" }
      ],
      customContent: <ProveMLContent />
    },
    {
      title: "HoopTracker",
      description: "Detailed statistics on pickup basketball games",
      imageUrl: "/project-thumbnails/hooptracker.webp",
      longDescription: "HoopTracker is a comprehensive basketball statistics tracking application designed for pickup games. It provides detailed analytics, performance metrics, and visualization tools to help players understand and improve their game.",
      links: [
        { label: "Visit Website", url: "https://hooptracker.vercel.app" }
      ]
    },
    {
      title: "Data Sun",
      description: "Creating a recommendation system for Cornell&apos;s newspaper",
      imageUrl: "/project-thumbnails/recommendations.webp",
      longDescription: "A sophisticated recommendation system built for Cornell's Daily Sun newspaper. The system analyzes reading patterns, content similarity, and user preferences to suggest relevant articles to readers, enhancing engagement and reader retention.",
      links: [
        { label: "View on GitHub", url: "https://github.com/cornell-sun/sun-recommendations" }
      ]
    }
  ];

  const openModal = (project: typeof projects[0]) => {
    setModalContent({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      links: project.links,
      customContent: project.customContent
    });
    setShowModal(true);
  };

  return (
    <section 
      id="playground-section" 
      className="py-20 px-8" 
      style={{ backgroundColor: '#CCF1F5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex items-center">
          <div className="w-1/3">
            <h2 className={`${inriaSerif.className} text-4xl font-bold flex items-center gap-3 text-gray-900`}>
              <span className="font-[700]">Playground</span>
              <span role="img" aria-label="ladder">🪜</span>
            </h2>
          </div>
          <div className={`${inconsolata.className} w-2/3 space-y-4 text-lg text-gray-900`}>
            <p>
              This section contains most of the projects - mostly code and links to my
              GitHub - that I&apos;ve worked on. A lot of these projects were collaborations
              with other really smart people.
            </p>
            <p>
              Topics include: Algorithmic Game Theory, Theorem Proving, Recommendation
              Systems, Knowledge Retrieval Systems, Computer Vision, Pacman, and Kaggle
              Competitions.
            </p>
            <p className="text-sm">
              📸 Thumbnail credits: Google Images, ChatGPT
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#CCF1F5] rounded-3xl p-8 w-[90vw] h-[85vh] border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col relative">
              {/* Close button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
                aria-label="Close modal"
              >
                <svg 
                  className="w-6 h-6 text-gray-900" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>

              <div className="flex-grow overflow-y-auto pr-4">
                <h3 className={`${inriaSerif.className} text-3xl font-bold mb-6 text-gray-900 pr-12`}>{modalContent.title}</h3>
                <p className={`${inconsolata.className} text-xl mb-4 text-gray-900`}>{modalContent.description}</p>
                <p className={`${inconsolata.className} text-lg mb-8 text-gray-800`}>{modalContent.longDescription}</p>
                {modalContent.customContent}
              </div>

              {modalContent.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 justify-end">
                  {modalContent.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#CCF1F5] px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-gray-900 flex items-center"
                    >
                      {link.label}
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;