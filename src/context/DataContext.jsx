import React, { createContext, useState, useContext, useEffect } from 'react';
import { momos as initialMomos } from '../data/momos';

const defaultGalleryImages = [
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

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [momosList, setMomosList] = useState(() => {
    try {
      const stored = localStorage.getItem('momo_data');
      return stored ? JSON.parse(stored) : initialMomos;
    } catch {
      return initialMomos;
    }
  });

  const [galleryImages, setGalleryImages] = useState(() => {
    try {
      const stored = localStorage.getItem('momo_gallery');
      return stored ? JSON.parse(stored) : defaultGalleryImages;
    } catch {
      return defaultGalleryImages;
    }
  });

  useEffect(() => {
    localStorage.setItem('momo_data', JSON.stringify(momosList));
  }, [momosList]);

  useEffect(() => {
    localStorage.setItem('momo_gallery', JSON.stringify(galleryImages));
  }, [galleryImages]);

  // Momo CRUD
  const addMomo = (newMomo) => {
    setMomosList(prev => [...prev, { ...newMomo, id: Date.now() }]);
  };

  const updateMomo = (id, updatedMomo) => {
    setMomosList(prev => prev.map(momo => momo.id === id ? { ...momo, ...updatedMomo } : momo));
  };

  const deleteMomo = (id) => {
    setMomosList(prev => prev.filter(momo => momo.id !== id));
  };

  // Gallery CRUD
  const addGalleryImage = (url) => {
    setGalleryImages(prev => [url, ...prev]);
  };

  const deleteGalleryImage = (urlToDelete) => {
    setGalleryImages(prev => prev.filter(url => url !== urlToDelete));
  };

  return (
    <DataContext.Provider value={{
      momosList, addMomo, updateMomo, deleteMomo,
      galleryImages, addGalleryImage, deleteGalleryImage
    }}>
      {children}
    </DataContext.Provider>
  );
};
