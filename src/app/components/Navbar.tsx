"use client";
import { useEffect, useState } from "react";
import { Home, Image, Phone, Calendar } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero", icon: <Home size={18} />, label: "Inicio" },
    { href: "#galeria", icon: <Image size={18} />, label: "Galería" },
    { href: "#contacto", icon: <Phone size={18} />, label: "Contacto" },
    { href: "#reservas", icon: <Calendar size={18} />, label: "Reservas" },
  ];

  return (
    <nav className={clsx(
      "fixed left-1/2 transform -translate-x-1/2 top-4 z-50 px-6 py-2 rounded-full shadow-xl border border-white/10 transition-all",
      scrolled ? "backdrop-blur-lg bg-black/60" : "bg-black/30"
    )} aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {links.map((l, i) => (
          <li key={i} className="flex flex-col items-center">
            <a href={l.href} className="flex flex-col items-center text-white group">
              <div className="p-2 rounded-md group-hover:scale-110 transition">
                <span className="text-[var(--gold)]">{l.icon}</span>
              </div>
              <span className="text-xs mt-1 group-hover:text-[var(--gold)]">{l.label}</span>
              <div className="h-[2px] bg-[var(--gold)] w-0 group-hover:w-full rounded-full mt-1 transition-all"></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
