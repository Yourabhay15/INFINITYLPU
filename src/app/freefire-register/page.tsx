
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { User, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Head from 'next/head';

const ModeCard = ({ mode, activeMode, setActiveMode }: { mode: any, activeMode: string, setActiveMode: (mode: string) => void }) => (
    <a href={mode.formLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
            className={cn(
                "bg-gradient-to-br from-primary/20 to-secondary/10 border-2 border-transparent rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 w-full max-w-sm relative overflow-hidden",
                { 'border-accent shadow-2xl shadow-accent/20': activeMode === mode.id }
            )}
            onMouseEnter={() => setActiveMode(mode.id)}
        >
            <div className="mb-5 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                {mode.icon}
            </div>
            <h3 className="font-headline text-2xl mb-3 transition-colors duration-300 group-hover:text-accent">{mode.title}</h3>
            <p className="text-muted-foreground">{mode.description}</p>
        </div>
    </a>
);

const TournamentDetails = ({ mode, activeMode }: { mode: any, activeMode: string }) => (
    <div className={cn("transition-opacity duration-500", activeMode === mode.id ? 'block opacity-100' : 'hidden opacity-0')}>
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-8">
            <h3 className="font-headline text-2xl text-accent mb-6">{mode.title} Mode Tournament Details</h3>
            <p className="text-muted-foreground mb-6">{mode.detailsText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mode.info.map((item: any) => (
                    <div key={item.label} className="bg-background/50 p-5 rounded-lg text-center">
                        <h4 className="font-headline text-lg text-accent mb-2">{item.label}</h4>
                        <p className="text-foreground">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="font-headline text-2xl text-accent mb-6">Tournament Rules</h3>
            <ul className="space-y-3 text-muted-foreground">
                {mode.rules.map((rule: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <ShieldCheck className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                        <span>{rule}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


export default function FreefireRegisterPage() {
    const [activeMode, setActiveMode] = useState('solo');
    const detailsRef = useRef<HTMLDivElement>(null);

    const modes = [
        { id: 'solo', title: 'Solo', icon: <User size={36} />, description: 'Every player for themselves. Test your individual skills.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Solo Tournament is designed to test individual skill, strategy, and game sense. Players will compete across multiple rounds to earn points based on placement and eliminations.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Players', value: '48 players' } ], rules: ['Players must be at least 16 years old to participate.', 'All participants must have a valid FreeFire account with a minimum level of 25.', 'Players must join the tournament Discord server for communication and updates.', 'Room ID and password will be shared 15 minutes before each match.', 'Use of any hacks, mods, or unauthorized third-party applications will result in immediate disqualification.'] },
        { id: 'duo', title: 'Duo', icon: <Users size={36} />, description: 'Team up with a friend and dominate the battlefield together.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Duo Tournament is perfect for teams of two players who want to showcase their teamwork and coordination. Teams will compete across multiple rounds to earn points.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Teams', value: '24 teams' } ], rules: ['Teams must consist of exactly 2 players.', 'Substitutes are not allowed once the tournament begins.', 'Team must check in 30 minutes before their scheduled match time.', 'Points System: Placement points (20 for 1st) + 1 point per elimination.'] },
        { id: 'squad', title: 'Squad', icon: <Users size={36} className="w-10 h-10" />, description: 'Form a team of four players and compete for ultimate victory.', formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4CPmnDiv3vM_El89Fogfl8ILv8OHfqLAWdhWHX05m86509A/viewform?usp=dialog', detailsText: 'Our FreeFire Squad Tournament is the ultimate test of teamwork. Form a team of four players and battle against other squads across multiple rounds.', info: [ { label: 'Entry Fee', value: '₹69 per player' }, { label: 'Prize Pool', value: '₹5,000' }, { label: 'Max Teams', value: '12 teams' } ], rules: ['Teams must consist of exactly 4 players.', 'Teams are allowed to register 1 substitute player.', 'Tournament admins have the final say in all disputes and rule interpretations.'] }
    ];

    const activeModeData = modes.find(m => m.id === activeMode) || modes[0];

    useEffect(() => {
        if (detailsRef.current) {
            detailsRef.current.style.minHeight = `${detailsRef.current.scrollHeight}px`;
        }
    }, [activeMode]);

    return (
        <>
            <Head>
                <title>FreeFire MAX Tournament - INFINITY</title>
                <meta name="description" content="Register for the INFINITY FreeFire MAX Tournament. Choose from Solo, Duo, or Squad mode." />
            </Head>
            <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint="futuristic battlefield">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">FreeFire MAX <span className="text-accent">Tournament</span></h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">This is a Squads Only tournament with ₹69 entry fee per person. Choose your preferred mode and compete in our upcoming FreeFire MAX tournaments.</p>
                    <div className="mt-4 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-accent">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/register" className="hover:text-accent">Register</Link>
                        <span className="mx-2">/</span>
                        <span>FreeFire MAX Tournament</span>
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
