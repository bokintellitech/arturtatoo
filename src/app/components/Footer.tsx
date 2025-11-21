'use client'

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-4 py-10 text-center text-gray-400">
      <p className="font-chicano text-3xl chicano-title text-white mb-4">Artur Tatoo</p>
      <p className="chicano-subtitle text-2xl">Arte chicano con identidad</p>
      <p className="mt-4 text-sm chicano-subtitle opacity-60"> © {new Date().getFullYear()} Boktech Todos los derechos reservados - @gangasrotogati</p>
    </footer>
  );
}
