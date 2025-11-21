"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src="./hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: .8 }} className="text-6xl md:text-7xl chicano-title text-5xl text-white drop-shadow-lg">
          Artur Tatoo
        </motion.h1>

        <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay:.12, duration:.6 }} className="mt-7 text-xl text-gray-200 chicano-subtitle">
          Fábrica de Chacales — Donde el arte chicano cobra vida.
        </motion.p>

        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay:.3 }} className="mt-8 flex gap-4 justify-center">
          <a href="#gallery" className="px-6 py-3 rounded-full bg-[var(--gold)] text-black chicano-subtitle font-semibold shadow">Ver galería</a>
          <a href="#citas" className="px-6 py-3 rounded-full bg-[var(--gold)] text-black chicano-subtitle font-semibold shadow">Contactar</a>
        </motion.div>
      </div>
    </section>
  );
}
