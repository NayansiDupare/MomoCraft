import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  if (localStorage.getItem('momo_admin_auth') === 'true') {
    return <Navigate to="/admin/menu" replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('momo_admin_auth', 'true');
      navigate('/admin/menu');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-deep px-6">
      <div className="bg-card-blue p-10 rounded-3xl w-full max-w-md shadow-2xl border border-white/10 animate-slide-up relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-screen pointer-events-none"></div>
        <div className="text-center mb-8 relative z-10">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary relative">
            <Lock size={28} />
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-white">Admin Login</h1>
          <p className="text-text-muted mt-2">Sign in to manage MomoCraft</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm text-center mb-6 animate-fade-in relative z-10">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div>
            <label className="block text-text-muted mb-2 font-semibold">Username</label>
            <input 
              type="text" 
              className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter 'admin'"
            />
          </div>
          <div>
            <label className="block text-text-muted mb-2 font-semibold">Password</label>
            <input 
              type="password" 
              className="w-full bg-bg-deep border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter 'admin123'"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(255,77,77,0.3)] hover:scale-[1.02] transition-transform"
          >
            Authenticate
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-text-muted/50">
          Use admin / admin123 to login
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
