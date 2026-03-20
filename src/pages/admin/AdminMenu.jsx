import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const AdminMenu = () => {
  const { momosList, addMomo, updateMomo, deleteMomo } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const initialForm = { name: '', type: 'Veg', price: 0, spice: 1, category: 'Steamed', image: '' };
  const [formData, setFormData] = useState(initialForm);

  const handleOpenModal = (momo = null) => {
    if (momo) {
      setEditingId(momo.id);
      setFormData(momo);
    } else {
      setEditingId(null);
      setFormData(initialForm);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(initialForm);
    setEditingId(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      updateMomo(editingId, formData);
    } else {
      addMomo(formData);
    }
    handleCloseModal();
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Manage Menu Items</h1>
          <p className="text-text-muted">Create, update, or remove momo varieties.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-primary text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-orange-500 transition-colors shadow-lg"
        >
          <Plus size={20} /> Add New Item
        </button>
      </div>

      <div className="bg-card-blue rounded-2xl border border-white/5 overflow-x-auto shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10 text-white rounded-t-2xl">
            <tr>
              <th className="p-4 font-semibold w-16">Image</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {momosList.map((momo) => (
              <tr key={momo.id} className="border-b border-white/5 hover:bg-white/5 transition-colors text-text-muted">
                <td className="p-4">
                  <img src={momo.image} alt={momo.name} className="w-12 h-12 rounded-lg object-cover border border-white/10" />
                </td>
                <td className="p-4 font-bold text-white">{momo.name}</td>
                <td className="p-4">{momo.category}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${momo.type === 'Veg' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {momo.type}
                  </span>
                </td>
                <td className="p-4 font-bold text-secondary">₹{momo.price}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-3">
                    <button onClick={() => handleOpenModal(momo)} className="text-blue-400 hover:text-blue-300 p-2 bg-blue-500/10 rounded-lg transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => deleteMomo(momo.id)} className="text-red-400 hover:text-red-300 p-2 bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {momosList.length === 0 && (
          <div className="text-center py-12 text-text-muted">No menu items found. Add one to get started!</div>
        )}
      </div>

      {/* Modal / Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-card-blue border border-white/10 rounded-3xl w-full max-w-xl shadow-2xl relative animate-slide-up">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{editingId ? 'Edit Momo' : 'Add New Momo'}</h2>
              <button onClick={handleCloseModal} className="text-text-muted hover:text-white"><X size={24} /></button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-text-muted mb-1 text-sm font-semibold">Item Name</label>
                <input required type="text" className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="e.g. Schezwan Momo" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted mb-1 text-sm font-semibold">Type</label>
                  <select className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-muted mb-1 text-sm font-semibold">Price (₹)</label>
                  <input required type="number" min="0" className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.price} onChange={(e) => setFormData({...formData, price: Number(e.target.value)})} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-muted mb-1 text-sm font-semibold">Category</label>
                  <select className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    <option value="Steamed">Steamed</option>
                    <option value="Fried">Fried</option>
                    <option value="Tandoori">Tandoori</option>
                    <option value="Kurkure">Kurkure</option>
                    <option value="Jhol">Jhol</option>
                    <option value="Soup">Soup</option>
                    <option value="Sweet">Sweet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-text-muted mb-1 text-sm font-semibold">Spice Level (0-3)</label>
                  <input required type="number" min="0" max="3" className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.spice} onChange={(e) => setFormData({...formData, spice: Number(e.target.value)})} />
                </div>
              </div>

              <div>
                <label className="block text-text-muted mb-1 text-sm font-semibold">Image URL (Unsplash or external linking)</label>
                <input required type="url" className="w-full bg-bg-deep border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:outline-none" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} placeholder="https://source.unsplash.com/..." />
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="mt-3 w-full h-32 object-cover rounded-lg border border-white/10" onError={(e) => e.target.style.display = 'none'} />
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button type="button" onClick={handleCloseModal} className="px-6 py-2.5 rounded-lg text-white font-bold hover:bg-white/5 transition-colors border border-white/10">Cancel</button>
                <button type="submit" className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
