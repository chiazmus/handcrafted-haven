"use client"
import { useState } from 'react';
import HavenLogo from '@/app/ui/haven-logo';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="w-full bg-[var(--color-background)] border-b-4 border-[var(--color-darkcontrast)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo and branding stuff */}
          <HavenLogo/>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-bold text-[var(--color-darkcontrast)] hover:text-[var(--color-primary)] transition-colors">Shop</a>
            <a href="#" className="font-bold text-[var(--color-darkcontrast)] hover:text-[var(--color-primary)] transition-colors">Artisans</a>
            <a href="#" className="font-bold text-[var(--color-darkcontrast)] hover:text-[var(--color-primary)] transition-colors">Our Story</a>
            
            {/* Join button */}
            <a 
              href="#" 
              className="bg-[var(--color-primary)] text-[var(--color-darkcontrast)] font-black uppercase px-4 py-2 border-2 border-[var(--color-darkcontrast)] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all"
            >
              Start Selling
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 border-2 border-[var(--color-darkcontrast)] bg-[var(--color-accent)] text-[var(--color-darkcontrast)] font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t-2 border-[var(--color-darkcontrast)] bg-[var(--color-background)]`} id="mobile-menu">
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 text-base font-bold text-[var(--color-darkcontrast)] hover:bg-[var(--color-secondary)]">Shop</a>
          <a href="#" className="block px-3 py-2 text-base font-bold text-[var(--color-darkcontrast)] hover:bg-[var(--color-secondary)]">Artisans</a>
          <a href="#" className="block px-3 py-2 text-base font-bold text-[var(--color-darkcontrast)] hover:bg-[var(--color-secondary)]">Our Story</a>
          <div className="pt-2 px-3">
            <a 
              href="#" 
              className="block text-center bg-[var(--color-primary)] text-[var(--color-darkcontrast)] font-black uppercase py-2 border-2 border-[var(--color-darkcontrast)] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
            >
              Start Selling
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
