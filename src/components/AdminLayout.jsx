import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Image as ImageIcon, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('momo_admin_auth');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-bg-deep flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card-blue border-r border-white/10 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-heading font-extrabold text-white flex items-center gap-2">
              🥟 Momo<span className="text-primary">Admin</span>
            </h2>
          </div>
          <nav className="p-4 space-y-2">
            <NavLink 
              to="/admin/menu" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-text-muted hover:text-white hover:bg-white/5'}`}
            >
              <FileText size={20} /> Menu Items
            </NavLink>
            <NavLink 
              to="/admin/gallery" 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'text-text-muted hover:text-white hover:bg-white/5'}`}
            >
              <ImageIcon size={20} /> Gallery Photos
            </NavLink>
            <NavLink 
              to="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-text-muted hover:text-white hover:bg-white/5 transition-colors mt-8"
              target="_blank"
            >
              <LayoutDashboard size={20} /> View Live Site
            </NavLink>
          </nav>
        </div>
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-bold text-red-400 hover:text-white hover:bg-red-500/20 transition-colors"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden bg-card-blue p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-heading font-bold text-white">Momo<span className="text-primary">Admin</span></h2>
          <button onClick={handleLogout} className="text-red-400 p-2"><LogOut size={22} /></button>
        </div>
        <div className="p-6 md:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
