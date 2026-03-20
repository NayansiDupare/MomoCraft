import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Trash2, Link as LinkIcon, Plus } from 'lucide-react';

const AdminGallery = () => {
  const { galleryImages, addGalleryImage, deleteGalleryImage } = useData();
  const [newUrl, setNewUrl] = useState('');
  const [error, setError] = useState('');

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newUrl) return;
    
    // basic url check
    if (!newUrl.startsWith('http')) {
      setError('Please provide a valid URL starting with http:// or https://');
      return;
    }
    
    addGalleryImage(newUrl);
    setNewUrl('');
    setError('');
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Manage Gallery Photos</h1>
        <p className="text-text-muted">Add new aesthetic imagery or remote existing ones from the Masonry grid.</p>
      </div>

      <div className="bg-card-blue p-6 md:p-8 rounded-3xl border border-white/5 shadow-xl mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Add New Image</h3>
        <form onSubmit={handleAddImage} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
              <LinkIcon size={20} />
            </div>
            <input 
              type="url" 
              required
              className="w-full bg-bg-deep border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white focus:border-primary focus:outline-none shadow-inner"
              placeholder="Paste image URL here (e.g. https://source.unsplash.com/...)"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="bg-primary text-white font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,77,77,0.3)] hover:scale-[1.02] transition-transform flex-shrink-0"
          >
            <Plus size={20} /> Add to Gallery
          </button>
        </form>
        {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
      </div>

      <h3 className="text-xl font-bold text-white mb-6">Current Gallery ({galleryImages.length})</h3>
      
      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {galleryImages.map((imgUrl, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-lg">
              <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => deleteGalleryImage(imgUrl)}
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 hover:scale-110 transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                  title="Remove Image"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card-blue/50 rounded-3xl border border-white/5">
          <p className="text-text-muted text-lg">Your gallery is empty. Add up some delicious imagery above!</p>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
