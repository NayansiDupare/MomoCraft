import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API call
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 lg:px-12">
      <div className="text-center mb-16 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Contact Us 📞</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Got a question? Want to book a bulk order? Or just want to say hi? Drop us a message and we'll get back to you faster than a steamed momo cools down!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
        {/* Left Side: Info & Map */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card-blue p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg group">
              <MapPin className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)]" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-text-muted">123 Food Street, Flavour Nagar,<br/>Mumbai - 400001</p>
            </div>
            
            <div className="bg-card-blue p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg group">
              <Phone className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)]" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-text-muted">+91 98765 43210</p>
            </div>
            
            <div className="bg-card-blue p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg group">
              <Mail className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)]" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-text-muted">hello@momocraft.in</p>
            </div>
            
            <div className="bg-card-blue p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg group">
              <Clock className="text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(255,77,77,0.8)]" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-text-muted">Mon–Sun:<br/>11:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 w-full bg-bg-deep rounded-3xl overflow-hidden relative border border-white/5 group shadow-inner">
            <div className="absolute inset-0 bg-[url('https://source.unsplash.com/800x400/?map,mumbai')] bg-cover bg-center brightness-50 opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors">
              <div className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <MapPin size={20} /> Find Us Here
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card-blue p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative">
            <h2 className="text-3xl font-heading font-bold text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-muted mb-2 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-text-muted mb-2 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-text-muted mb-2 font-semibold">Message</label>
                <textarea 
                  required
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full bg-bg-deep border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none custom-scrollbar"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(255,77,77,0.3)] hover:shadow-[0_0_25px_rgba(255,77,77,0.6)] hover:scale-[1.02] transition-all flex justify-center items-center gap-3"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up z-[200]">
          <CheckCircle size={24} />
          <span className="font-bold">Message sent! We'll get back to you soon 🥟</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
