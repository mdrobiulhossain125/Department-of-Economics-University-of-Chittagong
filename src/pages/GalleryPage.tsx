import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryData, galleryCategories, GalleryItem } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { Image, Maximize2, Calendar } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
              <Image className="w-3.5 h-3.5 text-blue-200" />
              <span>{lang === 'en' ? 'Visual Archives' : 'আলোকচিত্র সংগ্রহশালা'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {lang === 'en' ? 'Department Photo Gallery' : 'বিভাগীয় ছবি ও মুহূর্তসমূহ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? 'Glimpses of academic conferences, Dr. Muhammad Yunus Bhaban, convocation celebrations, and EconFest.'
                : 'ঐতিহাসিক ড. মুহাম্মদ ইউনূস ভবন, সমাবর্তন, জাতীয় সেমিনার ও প্রাণবন্ত ক্যাম্পাস জীবনের খণ্ডচিত্র।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Category Pill Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#0B2545] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity flex items-end p-4">
                  <div className="text-white w-full">
                    <span className="text-2xs font-semibold uppercase px-2 py-0.5 rounded bg-[#0B2545] text-white mb-1.5 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-serif-academic font-bold leading-snug line-clamp-1">
                      {lang === 'en' ? item.titleEn : item.titleBn}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-2">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {lang === 'en' ? item.captionEn : item.captionBn}
                </p>
                <div className="flex items-center justify-between text-2xs text-slate-400 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-[#0B2545] font-semibold group-hover:underline">
                    {lang === 'en' ? 'Expand' : 'বড় করে দেখুন'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={(idx) => setLightboxIndex(idx)}
        />
      )}
    </div>
  );
};
