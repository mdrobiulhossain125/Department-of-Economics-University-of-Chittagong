import React, { useEffect } from 'react';
import { GalleryItem } from '../data/galleryData';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onIndexChange,
}) => {
  const { lang } = useLanguage();
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onIndexChange]);

  if (!currentItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-slate-950 rounded-xl overflow-hidden border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with title and close */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-white z-10">
          <div className="flex items-center gap-2 truncate">
            <span className="text-xs px-2 py-0.5 rounded bg-blue-800 text-blue-200 uppercase font-medium">
              {currentItem.category}
            </span>
            <span className="text-sm font-semibold truncate">
              {lang === 'en' ? currentItem.titleEn : currentItem.titleBn}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Photo View Area */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] flex items-center justify-center bg-black overflow-hidden group">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.titleEn}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          <button
            onClick={() => onIndexChange((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-blue-600 text-white transition-colors cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onIndexChange((currentIndex + 1) % items.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-blue-600 text-white transition-colors cursor-pointer shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Metadata Bar */}
        <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 text-slate-300 text-xs sm:text-sm">
          <p className="leading-relaxed">
            {lang === 'en' ? currentItem.captionEn : currentItem.captionBn}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentItem.date}</span>
            </span>
            <span>·</span>
            <span>Department of Economics, University of Chittagong</span>
          </div>
        </div>
      </div>
    </div>
  );
};
