
import Image from 'next/image';
import { Users, Trophy, Lightbulb, Handshake, Milestone } from 'lucide-react';

const values = [
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Community First',
    description: 'We believe in building a supportive, inclusive community where every gamer feels welcome and valued regardless of skill level or background.',
  },
  {
    icon: <Trophy className="h-10 w-10 text-accent" />,
    title: 'Competitive Excellence',
    description: 'We strive to create fair, challenging competitions that bring out the best in players and teams while maintaining the highest standards of sportsmanship.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Innovation',
    description: 'We continuously explore new ways to enhance the gaming experience, from tournament formats to community engagement initiatives.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: 'Integrity',
    description: 'We operate with transparency, fairness, and honesty in all our interactions with players, partners, and the broader gaming community.',
  },
];

const timelineEvents = [
    {
        date: "MAR 2025",
        title: "The Beginning",
        description: "INFINITY Gaming Club was founded by a group of five college friends with a shared passion for competitive gaming.",
    },
    {
        date: "APR 2025",
        title: "Game-Verse 1.0",
        description: "Hosted the massive Game-Verse 2.0 event on April 14-15, featuring tournaments for BGMI & Free Fire with a prize pool of ₹5,000.",
    },
    {
        date: "PRESENT",
        title: "Expanding Horizons",
        description: "Currently expanding our reach with international tournaments and developing programs to support aspiring esports athletes.",
    }
]

export default function AboutPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint="team strategy">
          <div className="container mx-auto px-4">
              <h1 className="font-headline text-4xl md:text-6xl font-bold">About <span className="text-accent">Us</span></h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">Learn more about INFINITY Gaming Club, our mission, values, and journey.</p>
          </div>
      </header>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image 
                src="/Icons and backgrounds/logo.jpg" 
                alt="INFINITY Gaming Club Logo" 
                fill 
                className="object-cover"
                data-ai-hint="esports team"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent mb-4">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                    Founded in 2025, INFINITY Gaming Club is an idea—an ongoing experiment born within the vibrant campus of Lovely Professional University. Our goal was simple: to bring passionate gamers together to connect, compete, and grow in a collaborative environment.
                </p>
                <p>
                    What began as casual gaming sessions among students quickly grew into structured tournaments and community events, drawing attention from across the university. Today, INFINITY Gaming Club is one of LPU's most dynamic student-led communities, actively organizing esports events and nurturing gaming talent.
                </p>
                <p>
                    Our mission is to explore gaming as a legitimate sport and career path, while building an inclusive space where gamers of all skill levels feel welcome. We believe gaming is more than just play—it's a powerful tool for learning, teamwork, and unlocking new opportunities in the growing world of esports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/10">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Our <span className="text-accent">Journey</span></h2>
                <p className="mt-4 text-lg text-muted-foreground">Explore the key milestones in our growth from a small gaming group to a thriving community.</p>
            </div>
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -translate-x-1/2"></div>
                {timelineEvents.map((event, index) => (
                    <div key={index} className="relative mb-12">
                        <div className="absolute left-1/2 -translate-x-1/2 mt-1.5">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground">
                                <Milestone size={16} />
                            </div>
                        </div>
                        <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
                            <div className="bg-secondary/20 border border-primary/20 p-6 rounded-xl">
                                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold py-1 px-3 rounded-full mb-3 uppercase">{event.date}</span>
                                <h3 className="font-headline text-xl mb-2">{event.title}</h3>
                                <p className="text-muted-foreground">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

       <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Our <span className="text-accent">Values</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">The core principles that guide everything we do at INFINITY Gaming Club.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-secondary/20 border border-primary/20 p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center items-center w-20 h-20 bg-primary/30 rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-headline text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
