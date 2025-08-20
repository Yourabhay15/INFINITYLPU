
"use client";

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append('form-name', 'contact');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
                <form name="contact" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <p>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name <Input name="name" type="text" placeholder="Enter your full name" required /></label>
                    </p>
                    <p>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address <Input name="email" type="email" placeholder="Enter your email address" required /></label>
                    </p>
                    <p>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Phone Number <Input name="phone" type="tel" placeholder="Enter your phone number" /></label>
                    </p>
                    <p>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Registration Number <Input name="registration-number" type="text" placeholder="Enter your registration number" /></label>
                    </p>
                    <p>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Message <Textarea name="message" placeholder="Enter your message" rows={5} required /></label>
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
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
