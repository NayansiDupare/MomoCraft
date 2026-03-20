import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/60 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-extrabold text-white tracking-wide flex items-center gap-2">
          🥟 Momo<span className="text-primary">Craft</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => `font-semibold text-lg transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-muted'}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/order" className="relative group">
            <ShoppingCart className="text-white hover:text-primary transition-colors duration-300" size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg animate-fade-in">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/order" className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,77,77,0.4)]">
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/order" className="relative">
            <ShoppingCart className="text-white" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-navy/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-6 gap-6 shadow-2xl animate-slide-up">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `font-semibold text-xl transition-colors ${isActive ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/order" 
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,77,77,0.4)]"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
