import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { MapPin, Mail, Phone, ExternalLink, Train, Clock, BookOpen, ArrowRight } from 'lucide-react';

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
    <footer className="bg-[#0B2545] text-slate-300 border-t border-[#07172B]">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Department Overview */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif-academic font-bold text-xl text-white tracking-tight">{t.deptName}</h3>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">{t.universityName}</p>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {t.footer.description}
            </p>

            <div className="pt-2">
              <span className="inline-block text-2xs uppercase tracking-widest text-amber-300 font-semibold border-b border-amber-300/40 pb-0.5">
                {t.estd} · {lang === 'en' ? 'Nobel Heritage' : 'নোবেল ঐতিহ্য'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
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
                  {lang === 'en' ? "YES Student Club & CUEESA" : "ইয়েস ক্লাব ও CUEESA"}
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
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
              <Train className="w-4 h-4 text-blue-300" />
              <span>{lang === 'en' ? 'Campus & Transit' : 'ক্যাম্পাস ও যাতায়াত'}</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  {t.buildingName}, {lang === 'en' ? '3rd Floor, Hathazari, Chattogram 4331' : '৩য় তলা, হাটহাজারী, চট্টগ্রাম ৪৩৩১'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en' 
                    ? 'Hours: Sunday - Thursday, 8:30 AM - 3:30 PM BST'
                    : 'অফিস সময়: রবিবার - বৃহস্পতিবার, সকাল ৮:৩০ - দুপুর ৩:৩০'
                  }
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Train className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>
                  {lang === 'en'
                    ? 'CU Shuttle Train: Departs Battali Station daily at 7:30 AM, 9:45 AM, 1:30 PM & 3:00 PM'
                    : 'চবি শাটল ট্রেন: বটতলী স্টেশন থেকে সকাল ৭:৩০, ৯:৪৫, দুপুর ১:৩০ ও ৩:০০ টায় ছাড়ে'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <a href="mailto:economics@cu.ac.bd" className="hover:text-white transition-colors">
                  economics@cu.ac.bd
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300 shrink-0" />
                <span>+880 31 726311 (Ext. 4321)</span>
              </div>
              
              <div className="pt-3">
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-stanford-white text-xs py-2 px-5 text-[#0B2545]"
                >
                  <span>{lang === 'en' ? 'Send Official Query' : 'যোগাযোগ ফরম'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#07172B] bg-[#07172B] px-4 py-5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {t.deptName}, {t.universityName}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-3 text-slate-300">
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
