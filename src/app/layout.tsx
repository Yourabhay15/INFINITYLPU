import type { Metadata } from 'next';
import '@/lib/global-setup';
import './globals.css';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Montserrat, Orbitron } from 'next/font/google';
import { cn } from '@/lib/utils';

const ClientToaster = dynamic(() => import('@/components/ui/client-toaster').then(mod => ({ default: mod.ClientToaster })), {
  loading: () => null,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '600', '800'],
});

export const metadata: Metadata = {
  title: 'INFINITY',
  description: 'The official page for the INFINITY Gaming and Coding Club at LPU.',
  icons: {
    icon: '/Icons and backgrounds/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "font-body antialiased bg-background text-foreground",
        montserrat.variable,
        orbitron.variable
      )}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ClientToaster />
      </body>
    </html>
  );
}