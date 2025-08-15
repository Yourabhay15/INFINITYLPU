
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Gamepad } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const events = [
  {
    title: 'Game-Verse 2.0',
    date: '25 - 27 SEPTEMBER',
    description: 'The ultimate showdown for BGMI & Free Fire MAX players. Squads Only tournament with ₹69 entry fee per person. Compete for exciting prizes!',
    image: '/Icons and backgrounds/image.png',
    aiHint: 'esports tournament poster',
    link: '/register',
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto fade-in-up">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold uppercase">
              <span className="block text-foreground mb-2">Welcome To</span>
              <span className="text-accent">INFINITY</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              The ultimate gaming experience awaits you
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.3)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/contact">Join INFINITY</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <Link href="#events" aria-label="Scroll to events">
                <ChevronDown className="h-8 w-8 text-foreground/70 hover:text-accent transition-colors"/>
            </Link>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our upcoming tournaments and gaming events to showcase your skills and win exciting prizes!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up justify-center" style={{ animationDelay: '0.2s' }}>
            {events.map((event, index) => (
              <Card key={index} className="bg-secondary/20 border-primary/20 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 max-w-sm mx-auto">
                <CardHeader className="p-0">
                  <div className="relative h-52">
                    <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint={event.aiHint} />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold py-1 px-3 rounded-full mb-4 uppercase">{event.date}</span>
                  <CardTitle className="font-headline text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="text-accent p-0 font-semibold group/link">
                    <Link href={event.link}>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
