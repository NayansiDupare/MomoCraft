import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of 12 Unsplash image URLs related to dumplings/momos
  const images = [
    "https://source.unsplash.com/600x600/?dumplings,steamed",
    "https://source.unsplash.com/600x800/?momos,fried",
    "https://source.unsplash.com/800x600/?dimsum,asianfood",
    "https://source.unsplash.com/600x700/?dumplings,spicy",
    "https://source.unsplash.com/600x600/?streetfood,momos",
    "https://source.unsplash.com/700x600/?dumplings,restaurant",
    "https://source.unsplash.com/600x600/?asianfood,steamer",
    "https://source.unsplash.com/800x800/?dumplings,sauce",
    "https://source.unsplash.com/600x500/?dimsum,bamboo",
    "https://source.unsplash.com/500x700/?momos,plate",
    "https://source.unsplash.com/600x600/?dumplings,chopsticks",
    "https://source.unsplash.com/700x800/?streetfood,asia"
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 animate-slide-up">Momo Moments 📸</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Get a glimpse of our expertly crafted momos, vibrant street food culture, and the love we serve on every plate.
        </p>

        {/* CSS Columns based Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-2xl group cursor-pointer inline-block w-full mb-6 break-inside-avoid shadow-xl hover:shadow-[0_0_20px_rgba(255,77,77,0.3)] transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${(idx % 10) * 0.1}s` }}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Momo Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-12 h-12 scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white bg-white/10 rounded-full p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 md:left-12 text-white/50 hover:text-primary transition-colors text-4xl p-4"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          <img 
            src={selectedImage} 
            alt="Momo Focus" 
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()} 
          />

          <button 
            className="absolute right-4 md:right-12 text-white/50 hover:text-primary transition-colors text-4xl p-4"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
