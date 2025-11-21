"use client";
export default function WhatsAppButton({ number = "525564392520"}: { number?: string }) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent("Hola Artur Tatoo, quiero información sobre un tatuaje")}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed right-6 bottom-6 z-50 whatsapp-float w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(180deg,#25D366,#128C7E)" }}>
      <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8"/>
    </a>
  );
}
