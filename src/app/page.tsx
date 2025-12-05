
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bus, CalendarDays, ChevronDown, Factory, Lightbulb, MapPin } from 'lucide-react';
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
                <Link href="https://forms.gle/3QGzwiAZMSKWwHCH6">Join INFINITY</Link>
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

      {/* Industrial Visit Spotlight */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_45%)]"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md border border-white/10">
              <CalendarDays className="h-4 w-4 text-emerald-300" />
              <span>25 January 2026</span>
              <span className="text-white/50">|</span>
              <MapPin className="h-4 w-4 text-emerald-300" />
              <span>Mundra, Gujarat</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Educational Tour</p>
              <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                Industrial Visit
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                Hands-on exposure to India&apos;s leading port, refinery, and power infrastructure with curated learning tracks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              {[
                { icon: Bus, title: 'Travel', desc: 'Guided campus-to-site travel and logistics' },
                { icon: Factory, title: 'Industry', desc: 'On-ground walkthroughs with experts' },
                { icon: Lightbulb, title: 'Learning', desc: 'Daily reflections & curated resources' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5 flex gap-4 items-start shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="rounded-xl bg-emerald-400/20 p-3 text-emerald-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-headline text-lg">{title}</p>
                    <p className="text-sm text-white/70 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4">
              {[
                { badge: 'img1', title: 'Adani Port, Mundra', desc: "India's largest commercial port - cranes, ships & logistics", src: '/Icons%20and%20backgrounds/img1.jpg' },
                { badge: 'img2', title: 'Adani Wilmar Refinery', desc: 'Pipelines, towers & production units', src: '/Icons%20and%20backgrounds/img2.jpg' },
                { badge: 'img3', title: 'Adani Power Plant', desc: 'Cooling towers, generators & energy infrastructure', src: '/Icons%20and%20backgrounds/img3.jpg' },
              ].map(({ title, desc, src, badge }) => (
                <div
                  key={title}
                  className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 via-white/0 to-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] group"
                >
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_40%)]" />
                  <div className="relative h-64">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-emerald-300/40 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200 backdrop-blur-md">
                      {badge}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left space-y-1">
                    <p className="font-headline text-xl text-white drop-shadow-sm">{title}</p>
                    <p className="text-white/80 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-headline text-base shadow-[0_10px_30px_rgba(16,185,129,0.35)]">
                <Link href="/udaan-register">Register for Industrial Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section commented out per request */}
      {/*
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
      */}
    </div>
  );
}
