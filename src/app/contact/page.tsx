
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint="communication lines">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Contact <span className="text-accent">Us</span></h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">Get in touch with our team for any inquiries, support, or collaboration opportunities.</p>
          <div className="mt-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-secondary/20 p-8 rounded-xl border border-primary/20">
                <h3 className="font-headline text-3xl text-accent mb-8 text-center">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary/30 rounded-full mr-6">
                      <MapPin size={32} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Our Location</h4>
                      <p className="text-muted-foreground">Lovely Professional University, Punjab</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary/30 rounded-full mr-6">
                      <Mail size={32} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Email Address</h4>
                      <a href="mailto:infinity.lpu@gmail.com" className="text-muted-foreground hover:text-accent">infinity.lpu@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary/30 rounded-full mr-6">
                      <Phone size={32} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Phone Number</h4>
                      <p className="text-muted-foreground">+91 7482881168 / +91 9341479167</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/20 p-8 rounded-xl border border-primary/20">
                <h3 className="font-headline text-3xl text-accent mb-8 text-center">Send Us a Message</h3>
                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                      <Input id="name" name="name" type="text" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label>
                      <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label htmlFor="registration-number" className="block text-sm font-medium text-muted-foreground mb-2">Registration Number</label>
                      <Input id="registration-number" name="registration-number" type="text" placeholder="Enter your registration number" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                      <Textarea id="message" name="message" placeholder="Enter your message" rows={5} required />
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button type="submit" className="w-full">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
