'use client';

import { cn } from '@/lib/utils';
import { Mode } from '@/lib/types';

export const ModeCard = ({ mode, activeMode, setActiveMode }: { mode: Mode, activeMode: string, setActiveMode: (mode: string) => void }) => (
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