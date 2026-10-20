import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Menu, X, Globe, GraduationCap, ChevronRight, Bell } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro utility ribbon */}
      <div className="bg-blue-900 text-blue-100 text-xs px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {lang === 'en' ? 'Admission Notice:' : 'ভর্তি বিজ্ঞপ্তি:'}
            </span>
            <span className="truncate max-w-xl text-blue-200">
              {lang === 'en' 
                ? 'MSS in Economics & PhD Research Applications for Academic Session 2026-27 are now open.'
                : 'অর্থনীতি বিভাগে এমএসএস ও পিএইচডি গবেষণায় ভর্তি আবেদন চলছে।'
              }
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-200 shrink-0">
            <span>{lang === 'en' ? 'CU Shuttle: Battali ↔ Campus' : 'চবি শাটল ট্রেন: বটতলী ↔ ক্যাম্পাস'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Social Science Faculty' : 'সমাজ বিজ্ঞান অনুষদ'}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Brand Wordmark Zone */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-blue-800 transition-colors">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-900 transition-colors">
                {t.deptName}
              </div>
              <div className="text-xs text-blue-800 font-medium tracking-wide">
                {t.universityName}
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-blue-900 bg-blue-50 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Language Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Toggle Button */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors font-bengali cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="বাংলা ভাষায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* Quick Contact / Syllabus CTA */}
            <button
              onClick={() => handleNavClick('academics')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <span>{lang === 'en' ? 'Syllabus' : 'সিলেবাস'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="py-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{lang === 'en' ? 'Select Section' : 'পৃষ্ঠা নির্বাচন করুন'}</span>
            <span className="text-blue-800 font-medium">{t.buildingName}</span>
          </div>
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-900' : 'text-slate-400'}`} />
              </button>
            );
          })}
          
          <div className="pt-3 mt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-blue-900 rounded-lg"
            >
              {lang === 'en' ? 'Contact Department' : 'বিভাগে যোগাযোগ'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
