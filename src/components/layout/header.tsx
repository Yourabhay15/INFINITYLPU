
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [pathname]);


  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
      isScrolled || isMenuOpen ? "bg-background/90 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-headline font-bold text-accent tracking-widest">
            INFINITY
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-semibold transition-colors hover:text-accent relative after:content-[""] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-accent after:transition-all after:duration-300',
                   pathname === link.href ? 'text-accent after:w-full' : 'text-foreground',
                   'hover:after:w-full'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
             <a href="https://www.instagram.com/infinity.lpu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-accent transition-colors">
                <Instagram />
              </a>
          </div>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 mt-4">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-accent w-full text-center py-2',
                  pathname === link.href ? 'text-accent' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
             <a href="https://www.instagram.com/infinity.lpu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-accent transition-colors pt-4">
                <Instagram size={28} />
              </a>
          </nav>
        </div>
      )}
    </header>
  );
}
