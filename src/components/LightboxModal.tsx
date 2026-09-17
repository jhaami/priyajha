import React, { useEffect } from 'react';
import { Sparkles, Tag, X } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-[#292238]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#292238] shadow-md transition-transform hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="md:w-3/5 bg-[#1F182C] flex items-center justify-center p-2 relative">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Detail Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#5B3A82] bg-purple-50 border border-purple-200">
                {photo.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#E96B8A] bg-pink-50 flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {photo.tag}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#292238] mb-3">
              {photo.title}
            </h3>

            <p className="text-sm text-[#292238]/80 leading-relaxed">
              {photo.caption}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-100 flex items-center justify-between text-xs text-[#5B3A82]">
            <span className="font-medium">Priya Kumari Jha • Portfolio</span>
            <Sparkles className="w-4 h-4 text-[#E96B8A]" />
          </div>
        </div>
      </div>
    </div>
  );
};
