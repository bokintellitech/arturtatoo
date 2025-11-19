// src/components/Contacto.tsx
export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-4xl font-chicano mb-6">Contacto</h3>

        <p className="text-white/80 leading-relaxed mb-6">
          Calle Pánfilo Natera Mz6 Lt151<br />
          Col. San Felipe de Jesús, Gustavo A. Madero, CDMX
        </p>

        <a
          href="https://wa.me/5210000000000?text=Hola%20Artur%20Tatoo"
          className="button-primary inline-block mb-6"
        >
          Contactar por WhatsApp
        </a>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/josearturo.mercadoperez/"
            target="_blank"
            className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition"
          >
            Instagram
          </a>
          <a
            href="#reservas"
            className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/10 transition"
          >
            Reservar cita
          </a>
        </div>
      </div>
    </section>
  );
}
