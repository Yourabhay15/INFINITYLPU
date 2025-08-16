
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint="game selection screen">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Register for an <span className="text-accent">Event</span></h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">The ultimate challenge awaits. Choose your game to begin the registration process.</p>
           <div className="mt-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span className="mx-2">/</span>
                <span>Register</span>
            </div>
        </div>
      </header>

      {/* Important Notice Section */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/30 rounded-xl px-6 py-4">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-accent font-semibold text-lg">Important Team Formation Notice</p>
                <p className="text-foreground">
                  If you register as a <span className="text-accent font-semibold">Solo, Duo, or Trio</span>, you will be automatically assigned to form a full squad with other registered players who are also looking for teammates. <span className="text-accent font-semibold">Efforts will be made to create balanced teams.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Choose Your <span className="text-accent">Battleground</span></h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Select which tournament you would like to participate in. Each game has its own set of rules and registration forms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-secondary/20 border-primary/20 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="p-0">
                        <div className="relative h-60">
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIjRZ7fv7GeudJbsP7qXwuvi5rL_bDbn7Tw&s" alt="BGMI Tournament" fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="action battle royale" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <CardTitle className="font-headline text-3xl mb-4 text-accent">BGMI</CardTitle>
                        <p className="text-muted-foreground mb-4">Compete in the Battlegrounds Mobile India tournament. This is a Squads Only tournament with ₹69 entry fee per person.</p>
                        <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                            <p className="text-sm text-accent font-semibold">Entry Fee: ₹69 per person</p>
                            <p className="text-xs text-muted-foreground">Squads of 4 players only</p>
                        </div>
                        <Button asChild size="lg" className="font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.3)] hover:-translate-y-1 transition-all duration-300 w-full">
                            <Link href="/bgmi-register">View BGMI Events</Link>
                        </Button>
                    </CardContent>
                </Card>

                 <Card className="bg-secondary/20 border-primary/20 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="p-0">
                        <div className="relative h-60">
                            <Image src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/02/1-1.jpg?fit=1200%2C800&ssl=1" alt="Free Fire Tournament" fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint="mobile game characters" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <CardTitle className="font-headline text-3xl mb-4 text-accent">Free Fire MAX</CardTitle>
                        <p className="text-muted-foreground mb-4">Join the Free Fire MAX tournament and battle for glory. This is a Squads Only tournament with ₹69 entry fee per person.</p>
                        <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                            <p className="text-sm text-accent font-semibold">Entry Fee: ₹69 per person</p>
                            <p className="text-xs text-muted-foreground">Squads of 4 players only</p>
                        </div>
                        <Button asChild size="lg" className="font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.3)] hover:-translate-y-1 transition-all duration-300 w-full">
                            <Link href="/freefire-register">View Free Fire Events</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Tournament Rules Section */}
      <section className="py-20 lg:py-28 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Tournament <span className="text-accent">Rules</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Please review the official tournament rules before registering.
            </p>
            <Button asChild size="lg" className="mt-6 font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.3)] hover:-translate-y-1 transition-all duration-300">
              <Link href="/rules">View Full Rules</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
