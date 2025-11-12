"use client";
import React from 'react';
import { Inria_Serif } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const Navbar = () => {
  const pathname = usePathname();
  const onHome = pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-8 ${inriaSerif.className} text-gray-800 bg-[#CCF1F5] z-50 border-b border-[#787878] border-b-[0.5px] w-screen`}>
      {/* Logo */}
      <span className="text-4xl font-bold">A</span>

      {/* Navigation links */}
      <div className="flex gap-12 items-center text-xl absolute left-1/2 transform -translate-x-1/2">
        {onHome ? (
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={500}
            className="hover:text-gray-600 cursor-pointer"
          >
            Home
          </ScrollLink>
        ) : (
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
        )}

        <Link href="/archive" className="hover:text-gray-600">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

