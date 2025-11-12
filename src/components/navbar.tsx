"use client";
import React, { useEffect, useState } from 'react';
import { Inria_Serif } from 'next/font/google';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const renderHomeLink = () =>
    onHome ? (
      <ScrollLink
        to="hero-section"
        smooth={true}
        duration={500}
        className="hover:text-gray-600 cursor-pointer"
        onClick={closeMenu}
      >
        Home
      </ScrollLink>
    ) : (
      <Link href="/" className="hover:text-gray-600" onClick={closeMenu}>
        Home
      </Link>
    );

  return (
    <nav className={`fixed top-0 left-0 right-0 ${inriaSerif.className} text-gray-800 bg-[#CCF1F5] z-50 border-b border-[#787878] border-b-[0.5px] w-full`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-3 px-4 sm:px-8">
        <Link href="/" className="text-3xl sm:text-4xl font-bold" onClick={closeMenu}>
          A
        </Link>

        <div className="hidden md:flex gap-10 items-center text-xl">
          {renderHomeLink()}
          <Link href="/archive" className="hover:text-gray-600">
            Archive
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#CCF1F5] shadow-[4px_4px_0_rgba(0,0,0,1)]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#787878] px-4 sm:px-8 pb-6">
          <div className="flex flex-col gap-4 text-lg pt-4">
            {renderHomeLink()}
            <Link href="/archive" className="hover:text-gray-600" onClick={closeMenu}>
              Archive
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
