'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
}

const TattooGallery: React.FC<GalleryProps> = ({
  imagesPath = '/images',
  imagePrefix = 'img',
  imageExtension = 'jpeg',
  maxImages = 100,
  imagesPerPage = 12
}) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Generar array de imágenes disponibles
  useEffect(() => {
    const imageArray: ImageData[] = [];
    for (let i = 1; i <= maxImages; i++) {
      imageArray.push({
        id: i,
        src: `${imagesPath}/${imagePrefix}-${i}-800.${imageExtension}`,
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

  // Cargar más imágenes
  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 space-y-4">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative bg-white p-2 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                {/* Skeleton loader */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-2 bg-gray-800 animate-pulse rounded" />
                )}
                
                {/* Imagen */}
                <div className="relative overflow-hidden bg-gray-900">
                  <img
                    src={image.src}
                    
                    alt={image.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    style={{ aspectRatio: '3/4' }}
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver más
                      <p className="mt-2 text-sm text-white text-center">Gangasrotogati {image.src}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {currentPage < totalPages && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              Cargar más ({images.length - indexOfLastImage} restantes)
            </button>
          </div>
        )}

        {/* Contador de páginas */}
        <div className="text-center mt-8 text-gray-400">
          Mostrando {Math.min(indexOfLastImage, images.length)} de {images.length} imágenes
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
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
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
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
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Siguiente"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Contenedor de imagen */}
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
            
            {/* Caption */}
            <div className="mt-4 text-center text-black font-semibold">
              {images[selectedImage].alt} ({selectedImage + 1} / {images.length})
            </div>
          </div>

          {/* Indicador de navegación */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            Use ← → para navegar | ESC para cerrar
          </div>
        </div>
      )}
    </div>
  );
};

export default TattooGallery;