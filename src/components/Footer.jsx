import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 pt-16 pb-8 border-t border-card-blue">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-heading font-extrabold text-white tracking-wide flex items-center gap-2 mb-4">
            🥟 Momo<span className="text-primary">Craft</span>
          </Link>
          <p className="text-text-muted mt-4 leading-relaxed">
            Crafted With Love, Steamed To Perfection. Experience the most authentic and diverse momos right in the heart of Mumbai.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-card-blue flex flex-center items-center justify-center text-white hover:bg-primary transition-colors text-xl font-bold">Z</a>
            <a href="#" className="w-10 h-10 rounded-full bg-card-blue flex flex-center items-center justify-center text-white hover:bg-primary transition-colors text-xl font-bold">S</a>
            <a href="#" className="w-10 h-10 rounded-full bg-card-blue flex flex-center items-center justify-center text-white hover:bg-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card-blue flex flex-center items-center justify-center text-white hover:bg-primary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-heading text-lg font-bold mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-text-muted font-semibold">
            <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Story</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/order" className="hover:text-primary transition-colors">Order Online</Link></li>
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-white font-heading text-lg font-bold mb-6">Visit Us</h3>
          <ul className="flex flex-col gap-4 text-text-muted">
            <li className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <span>123 Food Street, Flavour Nagar, Mumbai - 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary flex-shrink-0" size={20} />
              <span>hello@momocraft.in</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-heading text-lg font-bold mb-6">Opening Hours</h3>
          <ul className="flex flex-col gap-3 text-text-muted">
            <li className="flex justify-between border-b border-card-blue pb-2">
              <span>Monday - Friday</span>
              <span className="font-bold text-white">11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-card-blue pb-2">
              <span>Saturday - Sunday</span>
              <span className="font-bold text-white">10:00 AM - 11:30 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 text-center border-t border-card-blue pt-8 text-sm text-text-muted">
        © 2025 Momo Craft. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
