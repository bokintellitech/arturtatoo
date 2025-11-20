
import Navbar from '@/app/components/Navbar';
import Hero from '@//app/components/Hero';

import Reservas from '@/app/components/Reservas';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';
import TattooGallery from '@/app/components/TatooGallery';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
      <section id="gallery" className="py-20 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestra Galería
          </h2>
          <p className="text-gray-400">
            Explora nuestros trabajos
          </p>
        </div>
        
        <TattooGallery/>
      </section>
        <Reservas />
      </main>
      <Footer />
      <WhatsAppButton number="5210000000000" />
    </>
  );
}
