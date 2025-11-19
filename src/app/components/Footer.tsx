// === src/components/Footer.tsx ===
'use client'

export default function Footer() {
  return (
    <footer className="bg-tattooBlack py-10 text-center text-gray-400">
      <p className="font-chicano text-3xl text-white mb-4">Artur Tatoo</p>
      <p>Arte chicano con identidad</p>
      <p className="mt-4 text-sm opacity-60"> © {new Date().getFullYear()} Bokintellitech Todos los derechos reservados - @gangasrotogati</p>
    </footer>
  );
}
