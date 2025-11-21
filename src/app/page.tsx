
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import TattooGallery from './components/TatooGallery';
import ContactForm from './components/ContactForm';

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
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton number="5210000000000" />
    </>
  );
}
