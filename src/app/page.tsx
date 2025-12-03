
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Gamepad } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const events = [
  {
    title: 'Project Udaan',
    date: '24–27 JANUARY 2026',
    description:
      "Industrial Visit to Mundra, Gujarat. A 4-day industrial exposure tour to explore India's major industries and real-time operations. Only 50 slots available - First Come, First Served!",
    image: '/Icons and backgrounds/project-udaan.png',
    aiHint: 'rustic wooden sign with Project Udaan text and wing design',
    link: '/udaan-register',
    status: 'open',
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
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScTBrdg4xO5iU1Iv6617k31nkIo9RKp8JBBX70QA1OSDitHhQ/viewform?usp=dialog">Join INFINITY</Link>
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
      <section id="events" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our upcoming events and experiences to learn, grow, and excel!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up justify-center" style={{ animationDelay: '0.2s' }}>
            {events.map((event, index) => (
              <Card key={index} className={`bg-secondary/20 border-primary/20 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 max-w-sm mx-auto ${event.title === 'Project Udaan' ? 'relative border-2 border-accent/30 shadow-lg shadow-accent/10' : ''}`}>
                {event.title === 'Project Udaan' && (
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl z-0"></div>
                )}
                <CardHeader className="p-0 relative">
                  <div className="relative h-52 overflow-hidden">
                    {event.status === 'soon' ? (
                      <div className="flex items-center justify-center h-full bg-black">
                        <h3 className="text-white font-headline text-4xl">{event.title}</h3>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 z-10"></div>
                        <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint={event.aiHint} />
                        {event.title === 'Project Udaan' && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                        )}
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6 relative z-10">
                  <span className={`inline-block text-xs font-bold py-1 px-3 rounded-full mb-4 uppercase ${event.title === 'Project Udaan' ? 'bg-accent text-accent-foreground shadow-md shadow-accent/30' : 'bg-accent text-accent-foreground'}`}>{event.date}</span>
                  <CardTitle className={`font-headline text-xl mb-2 ${event.title === 'Project Udaan' ? 'text-accent' : ''}`}>{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0 relative z-10">
                  <Button asChild variant="link" className="text-accent p-0 font-semibold group/link">
                    <Link href={event.link} className={event.status === 'soon' ? 'pointer-events-none' : ''}>
                      {event.status === 'soon' ? 'Coming Soon' : 'Register Now'}
                      {event.status !== 'soon' && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />}
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
