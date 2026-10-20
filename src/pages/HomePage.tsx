import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { facultyData } from '../data/facultyData';
import { noticesData, NoticeItem } from '../data/noticesData';
import { academicEvents, AcademicEvent } from '../data/eventsData';
import { studentClubs } from '../data/clubsData';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  Bell, 
  ChevronRight, 
  MapPin, 
  Building,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { NoticeModal } from '../components/NoticeModal';
import { EventModal } from '../components/EventModal';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onSelectFaculty?: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<AcademicEvent | null>(null);

  // Chairman is Dr. Amirul Islam
  const chairman = facultyData.find(f => f.id === 'dr-amirul-islam') || facultyData[0];
  const yesClub = studentClubs.find(c => c.id === 'yes-cu') || studentClubs[0];
  const cueesa = studentClubs.find(c => c.id === 'cueesa') || studentClubs[1];

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 bg-white text-slate-900">
      
      {/* 1. CINEMATIC HERO (Stanford Style) */}
      <section className="relative bg-[#0B2545] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative min-h-[500px] lg:min-h-[580px] flex items-end">
            
            {/* Background Landmark Image with Eye-Smoothing Clean Gradient (No Blur) */}
            <div className="absolute inset-0">
              <img
                src="/assets/aistudio/image_79340deb.png"
                alt="Dr. Muhammad Yunus Bhaban - Faculty of Social Sciences, University of Chittagong"
                className="w-full h-full object-cover object-center brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs text-white backdrop-blur-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="font-medium tracking-wide uppercase text-2xs">
                  {lang === 'en' ? 'Faculty of Social Sciences · Estd 1966' : 'সমাজ বিজ্ঞান অনুষদ · প্রতিষ্ঠিত ১৯৬৬'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-academic font-bold tracking-tight text-white leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('academics')}
                  className="btn-stanford-white text-xs sm:text-sm py-2.5 px-6"
                >
                  <span>{t.hero.explorePrograms}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('faculty')}
                  className="btn-stanford-outline text-xs sm:text-sm py-2.5 px-6 border-white/30 text-white bg-black/30 hover:bg-white hover:text-[#0B2545] hover:border-white"
                >
                  <span>{t.hero.viewFaculty}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ADVANCING THE FRONTIER — CENTER EDITORIAL LEAD (Stanford Motif) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 pt-4">
        <h2 className="text-2xl sm:text-4xl font-serif-academic font-bold text-[#0B2545]">
          {lang === 'en' ? 'Advancing the Frontier' : 'অগ্রযাত্রার সীমানা পেরিয়ে'}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {lang === 'en'
            ? 'At Chittagong University Department of Economics, a spirit of rigorous empirical discovery and analytical reasoning has shaped national policy, financial architecture, and global poverty alleviation since 1966.'
            : 'চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি বিভাগ ১৯৬৬ সাল থেকে নিরলস জ্ঞানচর্চা, পরিমাণগত বিশ্লেষণ ও নীতিনির্ধারণী গবেষণার মাধ্যমে দেশের অর্থনীতিকে এগিয়ে নিয়ে যাচ্ছে।'
          }
        </p>
        <div className="pt-2">
          <button
            onClick={() => setActiveTab('about')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B2545] hover:text-[#133E7C] group border-b border-[#0B2545] pb-0.5"
          >
            <span>{lang === 'en' ? 'More about the Department of Economics' : 'বিভাগ সম্পর্কে বিস্তারিত জানুন'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 3. HIGH-IMPACT STAT BAND (Stanford Metric Style) */}
      <section className="bg-[#0B2545] text-white py-12 border-y border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-white tracking-tight">1966</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">{t.estd}</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-white tracking-tight">{facultyData.length}</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">{lang === 'en' ? 'Faculty Members' : 'অনুষদ সদস্য'}</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-white tracking-tight">1,200+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">{lang === 'en' ? 'Scholars Enrolled' : 'অধ্যয়নরত শিক্ষার্থী'}</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-amber-300 tracking-tight">Nobel</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1">{lang === 'en' ? 'Peace Prize Legacy' : 'নোবেল শান্তি ঐতিহ্য'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENT NEWS & ANNOUNCEMENTS (Stanford Multi-Column News Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-[#0B2545]">
              {lang === 'en' ? 'Department Announcements' : 'বিভাগীয় নোটিশ ও সংবাদ'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('about')}
            className="text-xs sm:text-sm font-semibold text-[#0B2545] hover:text-[#133E7C] inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{t.notices.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Notice Card (Left 5 Cols) */}
          <div className="lg:col-span-5">
            {noticesData[0] && (
              <div 
                onClick={() => setSelectedNotice(noticesData[0])}
                className="group cursor-pointer border border-slate-200 rounded-xl overflow-hidden hover:border-slate-400 transition-all p-6 bg-slate-50/50 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#0B2545]">
                    {noticesData[0].category}
                  </span>
                  <span className="text-2xs text-slate-500 font-mono">
                    {noticesData[0].date}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif-academic font-bold text-slate-900 group-hover:text-[#0B2545] transition-colors leading-snug">
                  {lang === 'en' ? noticesData[0].titleEn : noticesData[0].titleBn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {lang === 'en' ? noticesData[0].contentEn : noticesData[0].contentBn}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2545] group-hover:underline">
                    <span>{lang === 'en' ? 'Read full notice' : 'সম্পূর্ণ নোটিশ পড়ুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* List of Secondary Notices (Right 7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-slate-100">
            {noticesData.slice(1, 4).map((notice) => (
              <div 
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="py-4 first:pt-0 last:pb-0 group cursor-pointer hover:bg-slate-50/70 p-3 rounded-lg transition-colors flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xs uppercase tracking-wider font-semibold text-slate-500">
                      {notice.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-2xs text-slate-400 font-mono">
                      {notice.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-[#0B2545] transition-colors leading-snug">
                    {lang === 'en' ? notice.titleEn : notice.titleBn}
                  </h4>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B2545] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CHAIRMAN'S WELCOME & THE NOBEL LEGACY (Stanford Split Editorial) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Chairman's Message */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-2xs font-bold uppercase tracking-widest text-slate-500 block">
                {t.chairman.kicker}
              </span>
              <blockquote className="text-base sm:text-lg font-serif-academic italic text-slate-800 leading-relaxed">
                "{t.chairman.quote}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t.chairman.fullMessage}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
              <div>
                <h4 className="font-serif-academic font-bold text-slate-900 text-base">
                  {lang === 'en' ? chairman.nameEn : chairman.nameBn}
                </h4>
                <p className="text-xs text-[#0B2545] font-semibold">
                  {lang === 'en' ? chairman.designationEn : chairman.designationBn}
                </p>
                <p className="text-2xs text-slate-500 mt-0.5">
                  {lang === 'en' ? chairman.degreesEn : chairman.degreesBn}
                </p>
              </div>
              <button
                onClick={() => setActiveTab('faculty')}
                className="btn-stanford-outline text-xs py-2 px-4"
              >
                <span>{lang === 'en' ? 'Faculty Directory' : 'শিক্ষক তালিকা'}</span>
              </button>
            </div>
          </div>

          {/* Yunus Heritage Block */}
          <div className="lg:col-span-5 bg-[#0B2545] text-white rounded-xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block text-2xs font-bold uppercase tracking-widest text-amber-300">
                {lang === 'en' ? 'Historical Landmark' : 'ঐতিহাসিক মাইলফলক'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-academic font-bold text-white leading-snug">
                {t.legacy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {t.legacy.body}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-2xs text-slate-300">
                Jobra Village · Hathazari, Chattogram
              </span>
              <button
                onClick={() => setActiveTab('about')}
                className="btn-stanford-white text-xs py-2 px-4 text-[#0B2545]"
              >
                <span>{lang === 'en' ? 'Read History' : 'ইতিহাস পড়ুন'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ACADEMIC PROGRAM PATHWAYS (Stanford Editorial Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-[#0B2545]">
            {t.programs.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.programs.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BSS Honours */}
          <div className="border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-400 transition-all bg-white">
            <div className="space-y-3">
              <span className="text-2xs font-mono font-bold uppercase text-slate-400 block">
                Undergraduate
              </span>
              <h3 className="text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                {t.programs.bss.title}
              </h3>
              <p className="text-xs text-[#0B2545] font-semibold">
                {t.programs.bss.duration} · {t.programs.bss.credits}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t.programs.bss.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="btn-stanford-outline text-xs py-2 w-full justify-between"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MSS Master of Social Sciences */}
          <div className="border border-[#0B2545] rounded-xl p-6 flex flex-col justify-between shadow-xs bg-white">
            <div className="space-y-3">
              <span className="text-2xs font-mono font-bold uppercase text-[#0B2545] block">
                Postgraduate
              </span>
              <h3 className="text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                {t.programs.mss.title}
              </h3>
              <p className="text-xs text-[#0B2545] font-semibold">
                {t.programs.mss.duration} · {t.programs.mss.credits}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t.programs.mss.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="btn-stanford-primary text-xs py-2 w-full justify-between"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MPhil & PhD Doctoral */}
          <div className="border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-400 transition-all bg-white">
            <div className="space-y-3">
              <span className="text-2xs font-mono font-bold uppercase text-slate-400 block">
                Doctoral & Advanced
              </span>
              <h3 className="text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                {t.programs.mphil.title}
              </h3>
              <p className="text-xs text-[#0B2545] font-semibold">
                {t.programs.mphil.duration} · {t.programs.mphil.credits}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {t.programs.mphil.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="btn-stanford-outline text-xs py-2 w-full justify-between"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDENT CLUBS & ALUMNI — YES & CUEESA (Clean Stanford Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-2xs font-bold uppercase tracking-widest text-slate-500 block">
                {lang === 'en' ? 'Community & Leadership' : 'সম্প্রদায় ও নেতৃত্ব'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-[#0B2545] mt-1">
                {lang === 'en' ? "Young Economists' Society (YES) & CUEESA" : "ইয়াং ইকোনমিস্টস সোসাইটি (YES) ও CUEESA"}
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('clubs')}
              className="btn-stanford-outline text-xs py-2 px-4.5"
            >
              <span>{lang === 'en' ? 'All Club Details' : 'সকল ক্লাব বিবরণ'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* YES Club Card */}
            <div className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 bg-slate-50/40 hover:bg-slate-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-[#0B2545] inline-block uppercase">
                  {lang === 'en' ? 'Official Student Club' : 'অফিশিয়াল শিক্ষার্থী ক্লাব'}
                </span>
                <h3 className="text-xl font-serif-academic font-bold text-slate-900">
                  {yesClub.nameEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {yesClub.descriptionEn}
                </p>
                <div className="text-2xs text-slate-500 space-y-0.5 pt-1">
                  <p>Email: <a href="mailto:yes.cu.bd@gmail.com" className="text-[#0B2545] font-semibold hover:underline">yes.cu.bd@gmail.com</a></p>
                  <p>{yesClub.locationEn}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs">
                  <a href={yesClub.facebook} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 font-semibold">
                    Facebook
                  </a>
                  <span>·</span>
                  <a href={yesClub.linkedin} target="_blank" rel="noreferrer" className="text-[#0B2545] hover:underline font-semibold">
                    LinkedIn
                  </a>
                </div>
                <button
                  onClick={() => setActiveTab('clubs')}
                  className="btn-stanford-primary text-xs py-1.5 px-3.5"
                >
                  <span>{lang === 'en' ? 'Join YES' : 'যোগ দিন'}</span>
                </button>
              </div>
            </div>

            {/* CUEESA Card */}
            <div className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 bg-slate-50/40 hover:bg-slate-50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800 inline-block uppercase">
                  {lang === 'en' ? 'Alumni Association' : 'অ্যালামনাই অ্যাসোসিয়েশন'}
                </span>
                <h3 className="text-xl font-serif-academic font-bold text-slate-900">
                  {cueesa.nameEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cueesa.descriptionEn}
                </p>
                <div className="text-2xs text-slate-500 space-y-0.5 pt-1">
                  <p>Office: {cueesa.locationEn}</p>
                  <p>Website: <a href="https://cueesa.org" target="_blank" rel="noreferrer" className="text-[#0B2545] font-semibold hover:underline">cueesa.org</a></p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <a 
                  href={cueesa.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1"
                >
                  <span>CUEESA Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setActiveTab('clubs')}
                  className="btn-stanford-outline text-xs py-1.5 px-3.5"
                >
                  <span>{lang === 'en' ? 'Alumni Network' : 'অ্যালামনাই তথ্য'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. EDITORIAL PULL QUOTE (Stanford Classical Quote Style) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-6">
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-academic italic text-slate-800 leading-relaxed">
          "The culture of economics at the University of Chittagong is defined by our shared commitment to pursuing empirical truth, challenging assumptions, and embracing inclusive policy."
        </blockquote>
        <div className="text-xs uppercase tracking-widest text-slate-500 mt-4">
          — Dr. Amirul Islam, Chairman & Professor, Department of Economics
        </div>
      </section>

      {/* Modals */}
      <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};
