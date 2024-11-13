"use client";
import React, { useState } from 'react';
import { Mail, Linkedin, Calendar, Send, Mic } from 'lucide-react';
import { Inria_Serif, Inconsolata } from 'next/font/google';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
});

const ContactButton = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <button className={`flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#CCF1F5] ${inconsolata.className} text-gray-800 text-lg
    border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)]
    hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]
    transition-all duration-150`}>
    {Icon && <Icon size={20} className="stroke-2" />}
    <span>{children}</span>
  </button>
);

const ChatInterface = () => {
  interface Message {
    text: string;
    sender: 'user' | 'bot';
  }
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // Add user message and echo response
    setMessages([
      ...messages,
      { text: inputText, sender: 'user' },
      { text: inputText, sender: 'bot' }
    ]);
    setInputText('');
  };

  return (
    <div className="rounded-3xl border-2 border-black overflow-hidden bg-[#CCF1F5] shadow-[8px_8px_0_rgba(0,0,0,1)]">
      {/* Chat Window */}
      <div className="h-[400px] p-6 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`p-4 rounded-2xl max-w-[80%] ${
              message.sender === 'user' 
                ? 'ml-auto bg-black text-white' 
                : 'bg-[#CCF1F5] text-black border-2 border-black'
            }`}
          >
            <p className={`${inconsolata.className}`}>{message.text}</p>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t-2 border-black p-4 bg-black flex gap-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Please enter your text here ..."
          className={`flex-1 bg-[#CCF1F5] rounded-full px-6 py-3 ${inconsolata.className} text-black placeholder-gray-600`}
        />
        <button type="submit" className="p-3 hover:bg-gray-800 rounded-full transition-colors">
          <Send className="w-6 h-6 text-white" />
        </button>
        <button type="button" className="p-3 hover:bg-gray-800 rounded-full transition-colors">
          <Mic className="w-6 h-6 text-white" />
        </button>
      </form>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section 
      id="contact-section" 
      className="py-20 px-8" 
      style={{ backgroundColor: '#CCF1F5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-center">
          <div className="w-1/3">
            <h2 className={`${inriaSerif.className} text-4xl font-bold flex items-center gap-3 text-gray-900`}>
              Contact <span role="img" aria-label="phone">☎️</span>
            </h2>
          </div>
          <div className={`${inconsolata.className} w-2/3 space-y-4 text-lg text-gray-900`}>
            <p>
              You can reach me through email ✉️, connect with me on LinkedIn 🦅, or book a
              time to meet virtually on my calendar 📅
            </p>
            <p>
              Alternatively, you can chat with the AI below to learn more about me - my
              interests, skills, availability, and more! <span className="underline">Feedback</span> on this would be greatly
              appreciated! 🙏
            </p>
                    {/* Contact Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <ContactButton icon={Mail}>Email</ContactButton>
          <ContactButton icon={Linkedin}>LinkedIn</ContactButton>
          <ContactButton icon={Calendar}>Book a time</ContactButton>
        </div>
          </div>
        </div>



        {/* Chat Interface */}
        <ChatInterface />
      </div>
    </section>
  );
};

export default ContactSection;