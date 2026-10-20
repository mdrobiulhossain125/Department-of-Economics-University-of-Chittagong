import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenNotice?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'academics', label: t.nav.academics },
    { id: 'faculty', label: t.nav.faculty },
    { id: 'research', label: t.nav.research },
    { id: 'clubs', label: t.nav.clubs },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'calendar', label: t.nav.calendar },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Top Stanford-style Utility Ribbon */}
      <div className="bg-[#0B2545] text-white text-xs px-4 py-2 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-100 tracking-wide uppercase text-2xs">
              {lang === 'en' ? 'University of Chittagong' : 'চট্টগ্রাম বিশ্ববিদ্যালয়'}
            </span>
            <span className="text-slate-400 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-slate-300 hidden sm:inline text-2xs">
              {lang === 'en' ? 'Dr. Muhammad Yunus Bhaban · Faculty of Social Sciences' : 'ড. মুহাম্মদ ইউনূস ভবন · সমাজ বিজ্ঞান অনুষদ'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-2xs">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center bg-[#07172B] rounded-full p-0.5 border border-white/10">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#0B2545] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-colors font-bengali cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-white text-[#0B2545] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>

            <a 
              href="https://cu.ac.bd" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>cu.ac.bd</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Stanford-style Brand & Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Brand Wordmark (Clean Stanford Institutional Style) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left focus:outline-hidden group cursor-pointer shrink-0"
          >
            <span className="text-xl sm:text-2xl font-serif-academic font-bold text-[#0B2545] tracking-tight group-hover:text-[#133E7C] transition-colors leading-none">
              {t.deptName}
            </span>
            <span className="text-2xs font-semibold uppercase tracking-widest text-slate-500 mt-1">
              {t.universityName}
            </span>
          </button>

          {/* Nav Links - Stanford Minimal Text Style */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-2 transition-colors relative whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#0B2545] font-bold'
                      : 'text-slate-600 hover:text-[#0B2545]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0B2545] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Smart Pill Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('academics')}
              className="hidden sm:inline-flex btn-stanford-primary text-xs py-2 px-4.5"
            >
              <span>{lang === 'en' ? 'Curriculum & Syllabus' : 'সিলেবাস ও পাঠ্যক্রম'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0B2545] hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="py-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{lang === 'en' ? 'Select Section' : 'পৃষ্ঠা নির্বাচন করুন'}</span>
            <span className="text-[#0B2545] font-semibold">{t.buildingName}</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3.5 py-2.5 text-sm font-medium rounded-lg flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#0B2545] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0B2545]' : 'text-slate-400'}`} />
              </button>
            );
          })}
          
          <div className="pt-3 mt-3 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full btn-stanford-primary text-xs py-2.5"
            >
              {lang === 'en' ? 'Contact Department' : 'বিভাগে যোগাযোগ'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
