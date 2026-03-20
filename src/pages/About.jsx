import React, { useEffect, useState } from 'react';

// Counter component for animation
const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span className="text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">{count}{suffix}</span>;
};

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-20 bg-card-blue/20">
        <div className="container mx-auto px-6 lg:px-12 text-center animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Our Story 🥟</h1>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Momo Craft was born from a love of Himalayan street food. What started as a small stall in 2018 has grown into a beloved brand known for quality, variety, and flavor. We set out on a mission to bring authentic taste with a modern twist to our customers, ensuring each bite feels like a warm hug.
          </p>
        </div>
      </section>

      {/* 2. Stats Row */}
      <section className="py-16 border-y border-white/5 bg-black/40">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <Counter end={20} duration={2000} suffix="+" />
            <p className="text-white font-bold mt-2 text-lg">Varieties</p>
          </div>
          <div>
            <Counter end={10} duration={2000} suffix="K+" />
            <p className="text-white font-bold mt-2 text-lg">Happy Customers</p>
          </div>
          <div>
            <Counter end={5} duration={1500} />
            <p className="text-white font-bold mt-2 text-lg">Years of Crafting</p>
          </div>
          <div>
            <span className="text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">4.9⭐</span>
            <p className="text-white font-bold mt-2 text-lg">Rating</p>
          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-heading font-bold text-white mb-16 text-center">Meet The Crafters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { name: "Rahul Sharma", role: "Head Chef", img: "https://source.unsplash.com/400x400/?chef,portrait" },
            { name: "Aarav Gupta", role: "Founder", img: "https://source.unsplash.com/400x400/?businessman,portrait" },
            { name: "Sneha Patel", role: "Delivery Manager", img: "https://source.unsplash.com/400x400/?delivery,portrait" }
          ].map((member, idx) => (
            <div key={idx} className="bg-card-blue rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-white/5">
              <div className="h-64 overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-card-blue/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-white mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-deep p-8 rounded-2xl border border-white/5 shadow-lg text-center hover:border-primary/50 transition-colors">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-white mb-3">Fresh Daily</h3>
              <p className="text-text-muted">We use only the freshest produce sourced directly from local farmers every morning.</p>
            </div>
            <div className="bg-bg-deep p-8 rounded-2xl border border-white/5 shadow-lg text-center hover:border-primary/50 transition-colors">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3">Made with Love</h3>
              <p className="text-text-muted">Every fold, every filling, and every steam is carefully monitored by our seasoned chefs.</p>
            </div>
            <div className="bg-bg-deep p-8 rounded-2xl border border-white/5 shadow-lg text-center hover:border-primary/50 transition-colors">
              <div className="text-5xl mb-4">🍜</div>
              <h3 className="text-xl font-bold text-white mb-3">Always Authentic</h3>
              <p className="text-text-muted">Holding onto roots while exploring modern tastescapes, our recipes remain timeless.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
