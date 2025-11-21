
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import TattooGallery from './components/TatooGallery';
import ContactForm from './components/ContactForm';
import FormData from './components/FormData';

export default function Page() {
  return (
    <>
     
      <main className="pt-0">
         <Navbar />
        <Hero />
      <section id="gallery" className="py-10 bg-black justify-center">
        <div className="text-center mb-12">
          <h2 className="chicano-title text-6xl  text-white mb-4">
             Galería
          </h2>
          <p className="text-gray-400 chicano-subtitle">
            Explora nuestros trabajos
          </p>
        </div>
           
        <TattooGallery/>
      </section>
        <ContactForm />
        <FormData/>
      </main>
      <Footer />
      <WhatsAppButton number="525564392520" />
    </>
  );
}
