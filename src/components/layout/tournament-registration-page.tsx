'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { ModeCard } from '@/components/ui/mode-card';
import { TournamentDetails } from '@/components/ui/tournament-details';

import { Mode } from '@/lib/types';

interface TournamentRegistrationPageProps {
  gameName: string;
  modes: Mode[];
  pageTitle: string;
  pageDescription: string;
  breadcrumb: string;
  headerAIDescription: string;
}

export default function TournamentRegistrationPage({ gameName, modes, pageTitle, pageDescription, breadcrumb, headerAIDescription }: TournamentRegistrationPageProps) {
    const [activeMode, setActiveMode] = useState('solo');
    const detailsRef = useRef<HTMLDivElement>(null);

    const activeModeData = modes.find(m => m.id === activeMode) || modes[0];

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.style.minHeight = `${detailsRef.current.scrollHeight}px`;
        }
    }, [activeMode]);

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint={headerAIDescription}>
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">{gameName} <span className="text-accent">Tournament</span></h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">This is a Squads Only tournament with ₹69 entry fee per person. Choose your preferred mode and compete in our upcoming {gameName} tournaments.</p>
                    <div className="mt-4 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-accent">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/register" className="hover:text-accent">Register</Link>
                        <span className="mx-2">/</span>
                        <span>{breadcrumb}</span>
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
                        <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">Select Your <span className="text-accent">Mode</span></h2>
                        <p className="mt-4 text-lg text-muted-foreground">Choose between Solo, Duo, or Squad mode. Click a card to view details and go to the registration form.</p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-8 mb-16">
                        {modes.map(mode => <ModeCard key={mode.id} mode={mode} activeMode={activeMode} setActiveMode={setActiveMode} />)}
                    </div>

                    <div ref={detailsRef} className="max-w-4xl mx-auto transition-all duration-500 ease-in-out">
                       <TournamentDetails mode={activeModeData} activeMode={activeMode} />
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