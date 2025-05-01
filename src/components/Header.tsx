'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-black text-white py-2">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href="mailto:hernandezanallely2@gmail.com" className="flex items-center text-sm hover:text-monarch-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hernandezanallely2@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <a href="tel:678-898-1156" className="flex items-center text-sm hover:text-monarch-yellow transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              678-898-1156
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="bg-black border-t border-gray-800 py-2">
        <div className="container-custom flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-monarch-yellow transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-monarch-yellow transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-monarch-yellow transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <div className="bg-white text-black py-4 sticky top-0 shadow-md z-50 w-full">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939117/IMG_1263_xgijg2.jpg"
                alt="Dream of the Monarch Butterfly Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">Dream of the Monarch Butterfly</span>
              <span className="text-sm text-monarch-green">Tree Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-monarch-green transition-colors">
              HOME
            </Link>
            <Link href="/services" className="font-medium hover:text-monarch-green transition-colors">
              SERVICES
            </Link>
            <Link href="/portfolio" className="font-medium hover:text-monarch-green transition-colors">
              PORTFOLIO
            </Link>
            <Link href="/testimonials" className="font-medium hover:text-monarch-green transition-colors">
              TESTIMONIALS
            </Link>
            <Link href="/contact" className="font-medium hover:text-monarch-green transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-monarch-dark"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 fixed w-full z-40">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="font-medium hover:text-monarch-green transition-colors py-2 border-b border-gray-100">
                HOME
              </Link>
              <Link href="/services" className="font-medium hover:text-monarch-green transition-colors py-2 border-b border-gray-100">
                SERVICES
              </Link>
              <Link href="/portfolio" className="font-medium hover:text-monarch-green transition-colors py-2 border-b border-gray-100">
                PORTFOLIO
              </Link>
              <Link href="/testimonials" className="font-medium hover:text-monarch-green transition-colors py-2 border-b border-gray-100">
                TESTIMONIALS
              </Link>
              <Link href="/contact" className="font-medium hover:text-monarch-green transition-colors py-2">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
