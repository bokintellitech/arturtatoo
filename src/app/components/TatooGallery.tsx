'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import Image from 'next/image';

// Tipos TypeScript
interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface GalleryProps {
  imagesPath?: string;
  imagePrefix?: string;
  imageExtension?: string;
  maxImages?: number;
  imagesPerPage?: number;
  showHeader?: boolean;
}

const TattooGallery: React.FC<GalleryProps> = ({
  imagesPath = '/images',
  imagePrefix = 'img',
  imageExtension = 'jpeg',
  maxImages = 60,
  imagesPerPage = 12,
  showHeader = true
}) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Generar array de imágenes disponibles
  useEffect(() => {
    const imageArray: ImageData[] = [];
    // Asegurar que no haya doble barra en la ruta
    const cleanPath = imagesPath.endsWith('/') ? imagesPath.slice(0, -1) : imagesPath;
    
    for (let i = 1; i <= maxImages; i++) {
      imageArray.push({
        id: i,
        src: `${cleanPath}/${imagePrefix}-${i}-800.${imageExtension}`,
        alt: `Tatuaje ${i}`
      });
    }
    setImages(imageArray);
  }, [imagesPath, imagePrefix, imageExtension, maxImages]);

  // Calcular imágenes a mostrar
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Navegación del modal
  const openModal = (index: number) => {
    setSelectedImage(indexOfFirstImage + index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  }, [selectedImage, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Manejar carga de imágenes
  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  // Manejar errores de imágenes
  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id));
    console.error(`Error loading image: ${images.find(img => img.id === id)?.src}`);
  };

  // Cargar más imágenes
  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Volver al inicio
  const resetGallery = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Masonry Grid - Centrado */}
        <div className="max-w-[1800px] mx-auto">
          <div className="max-w-[1800px] columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 space-y-4">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer mb-4"
              onClick={() => openModal(index)}
            >
              <div className="relative bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 p-[2px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-sm">
                <div className="bg-white p-2 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all duration-300">
                  {/* Skeleton loader */}
                  {!loadedImages.has(image.id) && !imageErrors.has(image.id) && (
                    <div className="absolute inset-2 bg-gray-800 animate-pulse rounded" />
                  )}
                  
                  {/* Imagen */}
                  <div className="relative overflow-hidden bg-gray-900 h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width = {300}
                      height = {400}
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                      style={{ display: imageErrors.has(image.id) ? 'none' : 'block' }}
                    />
                   
                    {/* Error message */}
                    {imageErrors.has(image.id) && (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                        Imagen no disponible
                      </div>
                    )}
                    
                    {/* Overlay en hover */}
                    <div className="absolute inset-0  bg-black-20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver más
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                      ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          {/* Load More Button */}
          {currentPage < totalPages && (
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-yellow-600 chicano-subtitle to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
            >
              Cargar más ({images.length - indexOfLastImage} restantes)
            </button>
          )}

          {/* Reset Button */}
          {currentPage > 1 && (
            <button
              onClick={resetGallery}
              className="flex items-center gap-2 bg-gray-800 chicano-subtitle text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
              <RotateCcw size={20} />
              Volver al inicio
            </button>
          )}
        </div>

        {/* Contador de páginas */}
        <div className="text-center chicano-subtitle mt-8 text-gray-400">
          Página {currentPage} de {totalPages} • Mostrando {Math.min(indexOfLastImage, images.length)} de {images.length} imágenes
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white chicano-title hover:text-yellow-500 transition-colors z-50"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          {/* Botón anterior */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-yellow-500 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Anterior"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Botón siguiente */}
          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-yellow-500 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Contenedor de imagen */}
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 p-[3px] shadow-2xl shadow-yellow-500/30">
              <div className="bg-white p-2">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  width={300}
                  height={400}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                />
                {/* Caption */}
                <div className="mt-4 text-center text-black font-semibold chicano-subtitle">
                  {images[selectedImage].alt} ({selectedImage + 1} / {images.length})
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de navegación */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm chicano-subtitle bg-black bg-opacity-70 px-4 py-1 rounded-full border border-yellow-500/30">
            Use ← → para navegar | ESC para cerrar
          </div>
        </div>
      )}
    </div>
  );
};

export default TattooGallery;