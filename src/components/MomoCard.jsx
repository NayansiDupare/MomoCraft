import React from 'react';
import { useCart } from './CartContext';
import { ShoppingCart } from 'lucide-react';

const MomoCard = ({ momo }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card-blue rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 relative group border border-blue-900/30">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={momo.image} 
          alt={momo.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-bg-deep/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
          {momo.type === 'Veg' ? (
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          )}
          {momo.type}
        </div>
      </div>
      
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-text-main line-clamp-1">{momo.name}</h3>
          <span className="text-secondary font-bold text-lg whitespace-nowrap">₹{momo.price}</span>
        </div>
        
        <div className="flex items-center gap-1 text-red-400 text-sm">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={i < momo.spice ? 'opacity-100' : 'opacity-20 '}>
              🌶️
            </span>
          ))}
        </div>

        <button 
          onClick={() => addToCart(momo)}
          className="mt-2 w-full py-2.5 rounded-full bg-gradient-to-r from-primary to-orange-500 text-white font-bold hover:scale-[1.02] active:scale-95 transition-transform flex justify-center items-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MomoCard;
