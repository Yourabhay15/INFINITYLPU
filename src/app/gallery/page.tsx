
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/gallery/img 1.jpg', alt: 'Gaming tournament setup with professional equipment', aiHint: 'gaming tournament setup' },
  { src: '/gallery/img 2.jpg', alt: 'Esports event with competitive atmosphere', aiHint: 'esports competitive event' },
  { src: '/gallery/img 3.jpg', alt: 'Gamers in action during tournament', aiHint: 'gamers tournament action' },
  { src: '/gallery/img 4.jpg', alt: 'Gaming community gathering and celebration', aiHint: 'gaming community celebration' },
  { src: '/gallery/img 5.jpg', alt: 'Professional gaming setup with monitors', aiHint: 'professional gaming setup' },
  { src: '/gallery/img 6.jpg', alt: 'Esports tournament with audience', aiHint: 'esports tournament audience' },
  { src: '/gallery/img 7.jpg', alt: 'Gaming event with team competition', aiHint: 'team gaming competition' },
];

export default function GalleryPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-black text-center" data-ai-hint="photo collection">
        <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Event <span className="text-accent">Gallery</span></h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">A glimpse into the action, excitement, and community of our past events.</p>
            <div className="mt-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span className="mx-2">/</span>
                <span>Gallery</span>
            </div>
        </div>
      </header>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-6">
              Event <span className="text-accent">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Relive the excitement and energy of our past tournaments through these amazing moments captured during the events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 border border-white/5">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={image.aiHint}
                  priority={index < 4}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm leading-tight">{image.alt}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-accent/80 text-xs font-medium">Tournament Event</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-xl px-6 py-4">
              <span className="text-2xl">📸</span>
              <div>
                <p className="text-accent font-semibold">More Photos Coming Soon!</p>
                <p className="text-muted-foreground text-sm">Stay tuned for updates from upcoming tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
