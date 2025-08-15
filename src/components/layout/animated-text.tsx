'use client';

import { cn } from '@/lib/utils';

type AnimatedTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
};

export function AnimatedText({ text, className, wordClassName }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <h1 className={cn('font-headline text-5xl md:text-7xl lg:text-8xl', className)}>
      {words.map((word, index) => (
        <div key={`${word}-${index}`} className="overflow-hidden inline-block">
          <span
            className={cn('inline-block transform-gpu animate-text-reveal', wordClassName)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {word}&nbsp;
          </span>
        </div>
      ))}
    </h1>
  );
}
