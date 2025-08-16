'use client';

import { cn } from '@/lib/utils';
import { Mode } from '@/lib/types';
import { ShieldCheck } from 'lucide-react';

export const TournamentDetails = ({ mode, activeMode }: { mode: Mode, activeMode: string }) => (
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