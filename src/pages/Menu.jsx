import React, { useState } from 'react';
import MomoCard from '../components/MomoCard';
import { useData } from '../context/DataContext';

const filters = ['All', 'Steamed', 'Fried', 'Tandoori', 'Kurkure', 'Jhol', 'Soup', 'Veg', 'Non-Veg'];

const Menu = () => {
  const { momosList } = useData();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMomos = momosList.filter(momo => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Veg' || activeFilter === 'Non-Veg') {
      return momo.type === activeFilter;
    }
    return momo.category === activeFilter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Our Menu 🥟</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Discover our wide variety of meticulously handcrafted momos. From classic steamed to fiery schezwan, there's a flavor for every palate.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,77,77,0.5)] scale-105'
                  : 'bg-card-blue text-text-muted hover:bg-card-blue/80 hover:text-white border border-transparent hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Momo Grid */}
        {filteredMomos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMomos.map((momo, index) => (
              <div key={momo.id} className="animate-slide-up" style={{ animationDelay: `${(index % 8) * 0.1}s` }}>
                <MomoCard momo={momo} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card-blue/50 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
            <p className="text-text-muted">Try changing your filter to see more delicious options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
