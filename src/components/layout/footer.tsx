
import Link from 'next/link';
import { Instagram, MapPin, Mail, Phone, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white" data-ai-hint="gaming pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="footer-about">
            <h3 className="font-headline text-3xl font-bold text-accent mb-5">INFINITY</h3>
            <p className="text-muted-foreground mb-5">
              Join the ultimate gaming community and participate in thrilling tournaments and events.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/infinity.lpu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-primary/50 text-foreground rounded-full transition-all duration-300 hover:bg-accent hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground text-sm">Lovely Professional University, Jalandhar - Delhi G.T. Road, Phagwara, Punjab(India) - 144411</p>
              </li>
              <li className="flex items-start">
                <Mail className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <a href="mailto:infinity.lpu@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">infinity.lpu@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground text-sm">+91 7482881168 / +91 9341479167</p>
              </li>
              <li className="flex items-start">
                 <Code className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                 <p className="text-muted-foreground text-sm">discord.gg/infinity.lpu</p>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-muted-foreground/50 text-sm">&copy; {new Date().getFullYear()} Infinity Gaming Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
