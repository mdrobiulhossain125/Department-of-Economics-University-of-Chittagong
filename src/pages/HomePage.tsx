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
  Sparkles,
  MapPin,
  Landmark,
  Building,
  CheckCircle2,
  ExternalLink
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

  return (
    <div className="space-y-16 lg:space-y-24 pb-20 font-satoshi">
      {/* HERO SECTION - Crisp Clean Minimal */}
      <section className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle, Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/80 border border-blue-700/60 text-xs text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span className="font-medium tracking-wide">{t.hero.kicker}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('academics')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xs cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t.hero.explorePrograms}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('faculty')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>{t.hero.viewFaculty}</span>
                </button>
                <button
                  onClick={() => setActiveTab('clubs')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'en' ? 'YES Student Club' : 'ইয়েস স্টুডেন্ট ক্লাব'}</span>
                </button>
              </div>

              {/* Key Highlights Sub-strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-mono">1966</div>
                  <div className="text-2xs text-slate-400">{t.estd}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono">{facultyData.length}</div>
                  <div className="text-2xs text-slate-400">{lang === 'en' ? 'Faculty Members' : 'অনুষদ সদস্য'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">1,200+</div>
                  <div className="text-2xs text-slate-400">{lang === 'en' ? 'Enrolled Scholars' : 'অধ্যয়নরত শিক্ষার্থী'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-purple-300 font-mono">YES</div>
                  <div className="text-2xs text-slate-400">{lang === 'en' ? 'Official Student Club' : 'অফিশিয়াল ক্লাব'}</div>
                </div>
              </div>
            </div>

            {/* Right Column: User Uploaded Iconic Landmark Image */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
                <img
                  src="/assets/aistudio/image_79340deb.png"
                  alt="Dr. Muhammad Yunus Bhaban - Faculty of Social Sciences, University of Chittagong"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image overlay badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-700/60 text-amber-300 text-2xs font-semibold uppercase tracking-wider mb-2 w-fit backdrop-blur-xs">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Department Headquarters' : 'বিভাগীয় কার্যালয়'}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {t.buildingName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{t.locationShort}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK NOTICE TICKER & BREAKING ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-3 sm:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="p-2 rounded-lg bg-rose-50 text-rose-700 font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
              <Bell className="w-4 h-4 text-rose-600" />
              <span>{lang === 'en' ? 'Latest Notices' : 'জরুরি বিজ্ঞপ্তি'}</span>
            </span>
          </div>

          <div className="flex-1 overflow-hidden w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-xs">
              {noticesData.slice(0, 2).map((notice) => (
                <button
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="text-left hover:text-blue-700 transition-colors py-1 sm:py-0 sm:px-3 first:pl-0 truncate max-w-full flex items-center gap-2 group cursor-pointer"
                >
                  <span className="text-slate-400 shrink-0 font-mono text-2xs">[{notice.date}]</span>
                  <span className="font-semibold text-slate-800 group-hover:text-blue-700 truncate">
                    {lang === 'en' ? notice.titleEn : notice.titleBn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setActiveTab('about')}
            className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 shrink-0 cursor-pointer self-end md:self-center"
          >
            <span>{t.notices.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CHAIRMAN'S MESSAGE & NOBEL HERITAGE ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Chairman's Welcome */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
                  {t.chairman.kicker}
                </span>
                <span className="text-xs text-slate-400 font-mono">{t.estd}</span>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6 font-academic">
                "{t.chairman.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.chairman.fullMessage}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {lang === 'en' ? chairman.nameEn : chairman.nameBn}
                </h4>
                <p className="text-xs text-blue-900 font-medium">
                  {lang === 'en' ? chairman.designationEn : chairman.designationBn}
                </p>
                <p className="text-2xs text-slate-500 mt-0.5">
                  {lang === 'en' ? chairman.degreesEn : chairman.degreesBn}
                </p>
              </div>
              <button
                onClick={() => setActiveTab('faculty')}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Faculty Profile' : 'প্রোফাইল দেখুন'}
              </button>
            </div>
          </div>

          {/* Nobel Peace Prize & Yunus Heritage Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Historic Milestone' : 'ঐতিহাসিক মাইলফলক'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                {t.legacy.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {t.legacy.body}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-amber-200">
                <span className="font-bold">{lang === 'en' ? 'Jobra Village Experiment' : 'জোবরা গ্রামের সূচনা'}</span>
                <span className="block text-2xs text-slate-400">{lang === 'en' ? 'Hathazari, Chattogram' : 'হাটহাজারী, চট্টগ্রাম'}</span>
              </div>
              <button
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span>{lang === 'en' ? 'Read History' : 'ইতিহাস পড়ুন'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ACADEMIC PROGRAMS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
            {lang === 'en' ? 'Degree Pathways' : 'ডিগ্রি প্রোগ্রাম'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            {t.programs.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {t.programs.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BSS Honours */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.programs.bss.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
                <span>{t.programs.bss.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{t.programs.bss.credits}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.programs.bss.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="w-full py-2 px-3 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MSS Master of Social Sciences */}
          <div className="bg-white rounded-xl border border-blue-200 p-6 flex flex-col justify-between shadow-2xs hover:border-blue-400 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-amber-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.programs.mss.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
                <span>{t.programs.mss.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{t.programs.mss.credits}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.programs.mss.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MPhil & PhD Doctoral */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xs transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <Award className="w-5 h-5 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.programs.mphil.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
                <span>{t.programs.mphil.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{t.programs.mphil.credits}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.programs.mphil.desc}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setActiveTab('academics')}
                className="w-full py-2 px-3 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.programs.viewCurriculum}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT CLUBS & ALUMNI SPOTLIGHT - YES & CUEESA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* YES Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                  {lang === 'en' ? "Official Student Club" : "অফিশিয়াল শিক্ষার্থী ক্লাব"}
                </span>
                <span className="text-2xs font-mono text-slate-400">CU Economics</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Young Economists' Society – YES
                </h3>
                <p className="text-xs text-slate-500 italic mt-0.5">
                  "Empowering Aspiring Economists to Grow & Succeed Together"
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? "YES is the 'Official Student Club' of the Department of Economics, University of Chittagong dedicated to providing a dynamic platform that empowers aspiring economists to grow and succeed together."
                  : "ইয়াং ইকোনমিস্টস সোসাইটি (YES) চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি বিভাগের অফিশিয়াল শিক্ষার্থী ক্লাব, যা শিক্ষার্থীদের দক্ষতা বৃদ্ধি ও পারস্পরিক সাফল্যে কাজ করে।"
                }
              </p>

              <div className="p-3 rounded-lg bg-slate-50 text-2xs space-y-1 text-slate-600 border border-slate-100">
                <p>Email: <a href="mailto:yes.cu.bd@gmail.com" className="text-blue-900 font-semibold hover:underline">yes.cu.bd@gmail.com</a></p>
                <p>Campus: University of Chittagong, Chittagong, Bangladesh, 4331</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/yes.eco.cu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-blue-700 hover:text-blue-900 font-semibold"
                >
                  Facebook Page
                </a>
                <span>·</span>
                <a 
                  href="https://www.linkedin.com/company/yes-cu/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-blue-900 hover:text-blue-950 font-semibold"
                >
                  LinkedIn
                </a>
              </div>
              <button
                onClick={() => setActiveTab('clubs')}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Club Details' : 'বিস্তারিত'}
              </button>
            </div>
          </div>

          {/* CUEESA Alumni Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                  {lang === 'en' ? "Alumni Association" : "অ্যালামনাই অ্যাসোসিয়েশন"}
                </span>
                <span className="text-2xs font-mono text-slate-400">2K Followers</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Chittagong University Ex-Economics Students Association (CUEESA)
                </h3>
                <p className="text-xs text-slate-500 italic mt-0.5">
                  "Connecting Generations of Economists Worldwide"
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'A vibrant community and organization for former students of the Department of Economics, University of Chittagong.'
                  : 'চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি বিভাগের প্রাক্তন শিক্ষার্থীদের সুদৃঢ় সম্প্রদায় ও সংগঠন।'
                }
              </p>

              <div className="p-3 rounded-lg bg-slate-50 text-2xs space-y-1 text-slate-600 border border-slate-100">
                <p>Office: Akram Tower (12th Floor), 15/5 Syed Nazrul Islam Sarak, Bijoynagar, Dhaka-1000</p>
                <p>Website: <a href="https://cueesa.org" target="_blank" rel="noreferrer" className="text-blue-900 font-semibold hover:underline">cueesa.org</a></p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <a 
                href="https://www.facebook.com/cueesa" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1"
              >
                <span>CUEESA Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setActiveTab('clubs')}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Alumni Info' : 'অ্যালামনাই তথ্য'}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Modals */}
      <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};
