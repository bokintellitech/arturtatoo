import Navbar from '@/app/components/Navbar';
import Hero from '@//app/components/Hero';
import Gallery from '@/app/components/Gallery';
import Reservas from '@/app/components/Reservas';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Gallery />
        <Reservas />
      </main>
      <Footer />
      <WhatsAppButton number="5210000000000" />
    </>
  );
}
