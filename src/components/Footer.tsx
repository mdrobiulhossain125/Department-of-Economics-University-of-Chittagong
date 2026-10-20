import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { GraduationCap, MapPin, Mail, Phone, ExternalLink, Train, Clock, BookOpen } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Department Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">{t.deptName}</h3>
                <p className="text-xs text-blue-300">{t.universityName}</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.description}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-amber-300">
                <span>{t.estd}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'en' ? 'Nobel Heritage' : 'নোবেল ঐতিহ্য'}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('academics')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.academics}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('faculty')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.faculty}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('research')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.research}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('clubs')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.clubs}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {t.nav.gallery}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Campus & Shuttle Train Logistics */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <Train className="w-4 h-4 text-blue-400" />
              <span>{lang === 'en' ? 'Campus & Transit' : 'ক্যাম্পাস ও যাতায়াত'}</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {t.buildingName}, {lang === 'en' ? '3rd Floor, Hathazari, Chattogram 4331, Bangladesh' : '৩য় তলা, হাটহাজারী, চট্টগ্রাম ৪৩৩১'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en' 
                    ? 'Office Hours: Sunday - Thursday, 8:30 AM - 3:30 PM BST'
                    : 'অফিস সময়: রবিবার - বৃহস্পতিবার, সকাল ৮:৩০ - দুপুর ৩:৩০'
                  }
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Train className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'CU Shuttle Train: Departs Battali Station daily at 7:30 AM, 9:45 AM, 1:30 PM & 3:00 PM'
                    : 'চবি শাটল ট্রেন: বটতলী স্টেশন থেকে প্রতিদিন সকাল ৭:৩০, ৯:৪৫, দুপুর ১:৩০ ও ৩:০০ টায় ছাড়ে'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:economics@cu.ac.bd" className="hover:text-white transition-colors">
                  economics@cu.ac.bd
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+880 31 726311 (PABX 4321)</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Seminar Library: Room 316</span>
              </div>
              
              <div className="pt-3">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2 px-3 text-center text-xs font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Send Official Query' : 'বিভাগীয় যোগাযোগ ফরম'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {t.deptName}, {t.universityName}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>{t.footer.hostedOn}</span>
            <span aria-hidden="true">·</span>
            <a 
              href="https://cu.ac.bd" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>cu.ac.bd</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
