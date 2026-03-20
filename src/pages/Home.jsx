import React from 'react';
import { Link } from 'react-router-dom';
import MomoCard from '../components/MomoCard';
import { momos } from '../data/momos';
import { ChefHat, Leaf, Zap, Award, Star, Quote } from 'lucide-react';

const Home = () => {
  const popularMomos = momos.slice(0, 3); // Grab first 3 for Fan Favourites

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Subtle background particles / glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col gap-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight">
              Crafted With Love, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Steamed To Perfection 🥟</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted max-w-lg">
              Explore 20+ varieties of handcrafted momos made fresh every day in the heart of the city.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/menu" className="bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,77,77,0.5)]">
                Explore Menu
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/10 transition-colors">
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg aspect-square lg:aspect-[4/3]">
              <img 
                src="https://source.unsplash.com/600x500/?dumplings,momos" 
                alt="Delicious Momos" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700"
              />
              <div className="absolute -top-6 -left-6 bg-card-blue/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-white leading-tight">4.9 Rating</p>
                  <p className="text-xs text-text-muted">10k+ Reviews</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-orange-500 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <span className="text-2xl">🔥</span>
                <p className="font-bold text-white">Bestseller!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Strip */}
      <section className="py-12 bg-black/40 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Award className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,77,77,1)] transition-all" size={32} />, title: "20+ Varieties", desc: "For every craving" },
            { icon: <Leaf className="text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,1)] transition-all" size={32} />, title: "Fresh Ingredients", desc: "Sourced locally" },
            { icon: <Zap className="text-secondary group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,1)] transition-all" size={32} />, title: "Fast Delivery", desc: "Hot & fresh" },
            { icon: <ChefHat className="text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,1)] transition-all" size={32} />, title: "Expert Chefs", desc: "Masterful craft" },
          ].map((feat, idx) => (
            <div key={idx} className="bg-card-blue p-6 rounded-2xl flex items-center gap-4 group hover:bg-card-blue/80 transition-colors border border-transparent hover:border-primary/30">
              {feat.icon}
              <div>
                <h4 className="font-bold text-white">{feat.title}</h4>
                <p className="text-sm text-text-muted">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Popular Momos */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Fan Favourites 🔥</h2>
            <p className="text-text-muted text-lg">Our most loved creations that keep people coming back.</p>
          </div>
          <Link to="/menu" className="hidden md:inline-block text-primary font-bold hover:underline">View All Menu &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularMomos.map(momo => (
            <MomoCard key={momo.id} momo={momo} />
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/menu" className="inline-block text-primary font-bold hover:underline">View All Menu &rarr;</Link>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-card-blue/30 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Why Momo Craft?</h2>
            <p className="text-text-muted text-lg">We don't just make momos, we craft experiences. Here's what makes us different.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Handmade Daily", icon: "🥟", text: "Every single momo is intricately folded by hand every morning for that perfect bite." },
              { title: "Secret Spice Blend", icon: "🌶️", text: "Our signature Himalayan spice mixes have been passed down through generations." },
              { title: "20+ Flavours", icon: "🌈", text: "From classic steamed veg to adventurous tandoori kurkure, we have it all." },
            ].map((col, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-card-blue rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,77,77,0.3)] transition-all duration-300">
                  {col.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{col.title}</h3>
                <p className="text-text-muted">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-heading font-bold text-white mb-16 text-center">What People Say 💬</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Rahul S.", text: "Best momos I've ever had! The Tandoori Chicken Momos are out of this world. Highly recommend Momo Craft.", rating: 5, initials: "RS" },
            { name: "Priya M.", text: "Quality and hygiene are top notch. The vegetarian options are incredibly flavourful. A must-visit place!", rating: 5, initials: "PM" },
            { name: "Amit K.", text: "So authentic. Reminds me of the street food back home but with a premium touch. Will order again.", rating: 4, initials: "AK" },
          ].map((review, idx) => (
            <div key={idx} className="bg-card-blue p-8 rounded-2xl relative mt-4 shadow-xl">
              <div className="absolute -top-6 left-8 bg-gradient-to-br from-primary to-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-bg-deep">
                {review.initials}
              </div>
              <Quote className="absolute top-8 right-6 text-white/5" size={60} />
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className={i < review.rating ? "fill-secondary text-secondary" : "text-white/20"} />
                ))}
              </div>
              <p className="text-text-muted italic mb-6 leading-relaxed">"{review.text}"</p>
              <h4 className="font-bold text-white">— {review.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-red-500 to-orange-500 opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x400/?spices,food')] bg-cover bg-center brightness-50 z-[-1]"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 drop-shadow-md">Hungry? Order Fresh Momos Now!</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow">Join thousands of happy customers and treat yourself to the best momos in town.</p>
          <Link to="/order" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
            <span>Order Online</span>
            <span className="text-2xl">🛵</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
