import React, { useState } from 'react';
import { Camera, Eye, Plus, Sparkles } from 'lucide-react';
import { defaultGalleryPhotos } from '../data/portfolioData';
import { GalleryPhoto } from '../types';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'All' | 'Moments' | 'Memories' | 'Travel' | 'Style' | 'Life';

export const GallerySection: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(() => {
    const saved = localStorage.getItem('priya_custom_gallery');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultGalleryPhotos;
      }
    }
    return defaultGalleryPhotos;
  });

  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState<GalleryPhoto['category']>('Moments');
  const [newPhotoTag, setNewPhotoTag] = useState('');
  const [newPhotoCaption, setNewPhotoCaption] = useState('');
  const [newPhotoImageData, setNewPhotoImageData] = useState<string>('');

  const filterTabs: CategoryFilter[] = ['All', 'Moments', 'Memories', 'Travel', 'Style', 'Life'];

  const filteredPhotos =
    activeFilter === 'All' ? photos : photos.filter((p) => p.category === activeFilter);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setNewPhotoImageData(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoImageData) return;

    const newPhoto: GalleryPhoto = {
      id: `photo-custom-${Date.now()}`,
      title: newPhotoTitle.trim() || 'Personal Moment',
      category: newPhotoCategory,
      imageUrl: newPhotoImageData,
      caption: newPhotoCaption.trim() || 'A cherished memory on my journey toward MBBS.',
      tag: newPhotoTag.trim() || 'New Moment',
      aspect: 'portrait',
    };

    const updated = [newPhoto, ...photos];
    setPhotos(updated);
    localStorage.setItem('priya_custom_gallery', JSON.stringify(updated));

    // Reset form
    setNewPhotoTitle('');
    setNewPhotoTag('');
    setNewPhotoCaption('');
    setNewPhotoImageData('');
    setShowUploadModal(false);
  };

  const handleResetGallery = () => {
    localStorage.removeItem('priya_custom_gallery');
    setPhotos(defaultGalleryPhotos);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 relative bg-[#FFF9F5] overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 -right-16 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-16 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#E96B8A] bg-pink-50 border border-pink-200/70 mb-4">
            <Camera className="w-4 h-4 text-[#E96B8A]" />
            <span>Visual Journal</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            Moments, Memories & Journey
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            A curated gallery celebrating study milestones, cultural grace, and authentic everyday memories.
          </p>

          {/* Filter Pills + Custom Upload Action */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-[#5B3A82] to-[#E96B8A] text-white shadow-md'
                    : 'bg-white text-[#292238]/70 hover:text-[#5B3A82] border border-purple-100'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#5B3A82] bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
              title="Add original photos"
            >
              <Plus className="w-3.5 h-3.5 text-[#E96B8A]" />
              <span>Add Photos</span>
            </button>
          </div>
        </div>

        {/* Pinterest / Bento Style Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="break-inside-avoid group relative rounded-3xl bg-white p-3 shadow-[0_6px_25px_rgba(91,58,130,0.06)] hover:shadow-[0_16px_40px_rgba(91,58,130,0.16)] border border-purple-100/60 cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Polaroid-Inspired Container */}
              <div className="relative rounded-2xl overflow-hidden bg-purple-50">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Overlay with Floating Details on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292238]/80 via-[#292238]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#55B7AD]">
                    {photo.tag}
                  </span>
                  <h4 className="font-display font-bold text-lg leading-tight mt-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {photo.caption}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-[#E96B8A] font-semibold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view full photo</span>
                  </div>
                </div>

                {/* Category Pill Tag Always Visible */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#5B3A82] shadow-xs">
                  {photo.category}
                </div>
              </div>

              {/* Polaroid Card Caption Footer */}
              <div className="pt-3 px-2 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#292238] truncate max-w-[200px]">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-[#292238]/60 mt-0.5">
                    {photo.tag}
                  </p>
                </div>
                <span className="text-[#E96B8A] text-xs">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for selected photo */}
        <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

        {/* Custom Upload Photo Dialog */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-[#292238]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-purple-100 relative">
              <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#292238]">Add / Import Photos</h3>
                  <p className="text-xs text-[#292238]/70 mt-1">Upload high-resolution images to Priya&apos;s gallery</p>
                </div>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-1.5 rounded-full text-[#292238]/60 hover:text-[#292238] hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#292238] uppercase tracking-wider mb-1.5">
                    Choose Photo File
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleFileUpload}
                    className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-100 file:text-[#5B3A82] hover:file:bg-purple-200 cursor-pointer"
                  />
                </div>

                {newPhotoImageData && (
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-purple-200 mx-auto my-2">
                    <img src={newPhotoImageData} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#292238] uppercase tracking-wider mb-1.5">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. In The Laboratory"
                    value={newPhotoTitle}
                    onChange={(e) => setNewPhotoTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#292238] uppercase tracking-wider mb-1.5">
                      Category
                    </label>
                    <select
                      value={newPhotoCategory}
                      onChange={(e) => setNewPhotoCategory(e.target.value as GalleryPhoto['category'])}
                      className="w-full px-3 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A]"
                    >
                      <option value="Moments">Moments</option>
                      <option value="Memories">Memories</option>
                      <option value="Travel">Travel</option>
                      <option value="Style">Style</option>
                      <option value="Life">Life</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#292238] uppercase tracking-wider mb-1.5">
                      Badge Tag
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Science Fair"
                      value={newPhotoTag}
                      onChange={(e) => setNewPhotoTag(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-purple-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#292238] uppercase tracking-wider mb-1.5">
                    Caption
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share a short note about this memory..."
                    value={newPhotoCaption}
                    onChange={(e) => setNewPhotoCaption(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A]"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleResetGallery}
                    className="text-xs text-gray-500 hover:text-red-500 underline"
                  >
                    Reset to Default
                  </button>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowUploadModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newPhotoImageData}
                      className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#5B3A82] to-[#E96B8A] shadow-md disabled:opacity-50"
                    >
                      Add Photo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
