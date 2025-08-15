
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, User, MessageSquare, MapPin, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} className="w-full font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.3)] hover:-translate-y-1 transition-all duration-300 h-12">
      {pending ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Oops!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);
  
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-secondary/20 p-8 rounded-xl border border-primary/20 mb-8">
                <h3 className="font-headline text-2xl text-accent mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary/30 rounded-full mr-4">
                          <MapPin className="text-accent" />
                      </div>
                      <div>
                          <h4 className="font-semibold">Our Location</h4>
                          <p className="text-muted-foreground text-sm">Lovely Professional University, Punjab</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary/30 rounded-full mr-4">
                          <Mail className="text-accent" />
                      </div>
                      <div>
                          <h4 className="font-semibold">Email Address</h4>
                          <a href="mailto:infinity.lpu@gmail.com" className="text-muted-foreground text-sm hover:text-accent">infinity.lpu@gmail.com</a>
                      </div>
                  </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary/30 rounded-full mr-4">
                          <Phone className="text-accent" />
                      </div>
                      <div>
                          <h4 className="font-semibold">Phone Number</h4>
                          <p className="text-muted-foreground text-sm">+91 7482881168</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-secondary/20 border-primary/20">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-accent">Send a Message</CardTitle>
                <CardDescription>Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <Label htmlFor="name" className="absolute top-3 -z-10 origin-0 transform text-base duration-300">
                        <User className="inline-block mr-2 h-4 w-4" />Name
                      </Label>
                      <Input id="name" name="name" type="text" placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-primary/30 bg-transparent px-0 py-2.5 text-base focus:border-accent focus:outline-none focus:ring-0"/>
                    </div>
                    <div className="relative">
                       <Label htmlFor="email" className="absolute top-3 -z-10 origin-0 transform text-base duration-300">
                        <Mail className="inline-block mr-2 h-4 w-4" />Email
                      </Label>
                      <Input id="email" name="email" type="email" placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-primary/30 bg-transparent px-0 py-2.5 text-base focus:border-accent focus:outline-none focus:ring-0"/>
                    </div>
                  </div>
                   <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <Label htmlFor="phone" className="absolute top-3 -z-10 origin-0 transform text-base duration-300">
                          <Phone className="inline-block mr-2 h-4 w-4" />Phone Number
                        </Label>
                        <Input id="phone" name="phone" type="tel" placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-primary/30 bg-transparent px-0 py-2.5 text-base focus:border-accent focus:outline-none focus:ring-0"/>
                      </div>
                       <div className="relative">
                        <Label htmlFor="subject" className="absolute top-3 -z-10 origin-0 transform text-base duration-300">
                          <FileText className="inline-block mr-2 h-4 w-4" />Subject
                        </Label>
                        <Input id="subject" name="subject" type="text" placeholder=" " className="peer block w-full appearance-none border-0 border-b-2 border-primary/30 bg-transparent px-0 py-2.5 text-base focus:border-accent focus:outline-none focus:ring-0"/>
                      </div>
                  </div>
                  <div className="relative">
                    <Label htmlFor="message" className="absolute top-3 -z-10 origin-0 transform text-base duration-300">
                      <MessageSquare className="inline-block mr-2 h-4 w-4" />Message
                    </Label>
                    <Textarea id="message" name="message" placeholder=" " className="peer block min-h-[120px] w-full appearance-none border-0 border-b-2 border-primary/30 bg-transparent px-0 py-2.5 text-base focus:border-accent focus:outline-none focus:ring-0"/>
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
