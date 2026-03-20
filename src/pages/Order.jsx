import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { momos } from '../data/momos';
import { Minus, Plus, ShoppingBag, MapPin, CreditCard, CheckCircle } from 'lucide-react';

const Order = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [deliveryMode, setDeliveryMode] = useState('delivery'); // 'delivery' or 'pickup'
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });

  // Simplified menu for quick add
  const quickMenu = momos.slice(0, 6);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * 0.05;
  const deliveryFee = deliveryMode === 'delivery' && subtotal > 0 ? 40 : 0;
  const total = subtotal + gst + deliveryFee;

  const handleOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    // Show success modal
    setShowSuccess(true);
    
    // Clear cart after delay
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 lg:px-12">
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-12 text-center animate-slide-up">Order Online 🛵</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Quick Menu Desktop Only / Also mobile friendly layout */}
        <div className="flex-1 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-white border-b border-card-blue pb-4">Quick Add Menu</h2>
          <div className="space-y-4">
            {quickMenu.map(momo => {
              const cartItem = cartItems.find(i => i.id === momo.id);
              return (
                <div key={momo.id} className="bg-card-blue p-4 rounded-2xl flex items-center justify-between border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <img src={momo.image} alt={momo.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-white">{momo.name}</h4>
                      <p className="text-secondary font-bold">₹{momo.price}</p>
                    </div>
                  </div>
                  <div>
                    {cartItem ? (
                      <div className="flex items-center gap-3 bg-bg-deep rounded-full px-3 py-1 border border-white/10">
                        <button onClick={() => updateQuantity(momo.id, -1)} className="text-text-muted hover:text-white transition-colors"><Minus size={16} /></button>
                        <span className="text-white font-bold w-4 text-center">{cartItem.quantity}</span>
                        <button onClick={() => updateQuantity(momo.id, 1)} className="text-text-muted hover:text-white transition-colors"><Plus size={16} /></button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(momo)} className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full font-bold text-sm transition-colors border border-primary/20">
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Cart Summary & Checkout */}
        <div className="w-full lg:w-[450px] animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card-blue rounded-3xl p-6 md:p-8 sticky top-32 shadow-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ShoppingBag className="text-primary" /> Order Summary
            </h2>

            {/* Delivery Toggle */}
            <div className="flex p-1 bg-bg-deep rounded-xl mb-8 border border-white/5">
              <button 
                onClick={() => setDeliveryMode('delivery')} 
                className={`flex-1 py-2 font-bold rounded-lg transition-all ${deliveryMode === 'delivery' ? 'bg-primary text-white shadow-lg' : 'text-text-muted hover:text-white'}`}
              >
                Delivery
              </button>
              <button 
                onClick={() => setDeliveryMode('pickup')} 
                className={`flex-1 py-2 font-bold rounded-lg transition-all ${deliveryMode === 'pickup' ? 'bg-primary text-white shadow-lg' : 'text-text-muted hover:text-white'}`}
              >
                Pickup
              </button>
            </div>

            {/* Cart Items List */}
            {cartItems.length > 0 ? (
              <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex gap-2 text-white">
                      <span className="font-bold text-primary">{item.quantity}x</span>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-bold text-white">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-text-muted border-b border-white/10 mb-8">
                Your cart is empty. Add some delicious momos!
              </div>
            )}

            {/* Pricing Details */}
            {cartItems.length > 0 && (
              <div className="space-y-3 border-t border-white/10 pt-6 mb-8 text-sm">
                <div className="flex justify-between text-text-muted">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>GST (5%)</span>
                  <span>₹{gst.toFixed(2)}</span>
                </div>
                {deliveryMode === 'delivery' && (
                  <div className="flex justify-between text-text-muted">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold text-xl pt-3 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-secondary">₹{total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Checkout Form */}
            <form onSubmit={handleOrder} className="space-y-4">
              <input 
                required 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                required 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
              {deliveryMode === 'delivery' && (
                <textarea 
                  required 
                  placeholder="Delivery Address" 
                  rows="3"
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              )}
              
              <button 
                type="submit" 
                disabled={cartItems.length === 0}
                className="w-full bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,77,77,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
              >
                <CreditCard size={20} />
                Place Order • ₹{total.toFixed(2)}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-fade-in text-center">
          <div className="bg-card-blue rounded-3xl p-10 md:p-16 max-w-lg w-full border border-white/10 animate-slide-up shadow-2xl relative">
            <CheckCircle className="text-green-400 w-24 h-24 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
            <h2 className="text-3xl font-heading font-extrabold text-white mb-4">🎉 Order Placed!</h2>
            <p className="text-text-muted text-lg mb-8">
              Thank you, {formData.name || 'Foodie'}! Your momos are being crafted with love and will {deliveryMode === 'delivery' ? 'arrive at your door shortly.' : 'be ready for pickup soon.'}
            </p>
            <button 
              onClick={() => {
                setShowSuccess(false);
                setFormData({ name: '', phone: '', address: '' });
              }} 
              className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Continue Craving
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Order;
