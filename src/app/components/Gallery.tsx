"use client";
import { useState } from "react";
import Modal from "./Modal";
import { imagesArray } from "@/app/lib/images"; // or use imagesArray helper


const IMAGES = imagesArray(51, "/img-"); // generate /images/img1-800.jpeg ...

const PER_PAGE = 12;

export default function Gallery() {
  const [page, setPage] = useState(1);
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);
    //Debuging..
    console.log("Gallery render, page:", IMAGES.length);
  const totalPages = Math.ceil(IMAGES.length / PER_PAGE);
  const pageImages = IMAGES.slice((page-1)*PER_PAGE, page*PER_PAGE);

  return (
    <section id="galeria" className="py-16">
      <div className="container mx-auto gallery-frame">
        <h2 className="text-3xl md:text-4xl font-chicano text-center mb-8">Galería</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {pageImages.map((src, i) => (
            <div key={src} className="w-[240px] h-[320px] rounded-lg overflow-hidden border border-white/6 shadow-md group cursor-pointer" onClick={() => { setOpenSrc(src); setIsVideo(false); }}>
              <img src={src} alt={`Tattoo ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" loading="lazy" />
            </div>
          ))}

          {/* Card to open documentary as video */}
          <div className="w-[240px] h-[320px] rounded-lg overflow-hidden border border-white/6 shadow-md flex items-center justify-center cursor-pointer" onClick={() => { setOpenSrc("/video/VID-20251112-WA0003.mp4"); setIsVideo(true); }}>
            <div className="text-center text-white/80">
              <div className="text-sm">Documental</div>
              <div className="mt-2 text-xs">Ver video</div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button disabled={page===1} onClick={() => setPage(p => Math.max(1,p-1))} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-40">Anterior</button>
          <div className="text-white/80">Página {page} / {totalPages}</div>
          <button disabled={page===totalPages} onClick={() => setPage(p => Math.min(totalPages,p+1))} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-40">Siguiente</button>
        </div>

        <Modal open={!!openSrc} onClose={() => { setOpenSrc(null); setIsVideo(false); }}>
          {openSrc && !isVideo && <img src={openSrc} alt="Ampliada" className="modal-media" />}
          {openSrc && isVideo && <video controls src={openSrc} className="modal-media" />}
        </Modal>
      </div>
    </section>
  );
}
