import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { noticesData, NoticeItem } from '../data/noticesData';
import { NoticeModal } from '../components/NoticeModal';
import { 
  Landmark, 
  History, 
  Target, 
  Compass, 
  Award, 
  BookOpen, 
  Laptop, 
  Users, 
  Calendar, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [activeNoticeCategory, setActiveNoticeCategory] = useState<string>('all');

  const filteredNotices = activeNoticeCategory === 'all'
    ? noticesData
    : noticesData.filter(n => n.category === activeNoticeCategory);

  const pastChairs = [
    { period: '1966 - 1971', nameEn: 'Prof. Dr. Azizur Rahman Khan', nameBn: 'অধ্যাপক ড. আজিজুর রহমান খান' },
    { period: '1972 - 1976', nameEn: 'Prof. Dr. Muhammad Yunus (Nobel Laureate)', nameBn: 'অধ্যাপক ড. মুহাম্মদ ইউনূস (নোবেল বিজয়ী)' },
    { period: '1976 - 1982', nameEn: 'Prof. Dr. Rafiqul Huda Chaudhury', nameBn: 'অধ্যাপক ড. রফিকুল হুদা চৌধুরী' },
    { period: '1982 - 1990', nameEn: 'Prof. Dr. Abdul Mannan', nameBn: 'অধ্যাপক ড. আবদুল মান্নান' },
    { period: '1990 - 2000', nameEn: 'Prof. Dr. M. Sekandar Khan', nameBn: 'অধ্যাপক ড. এম. সেকান্দার খান' },
    { period: '2000 - 2012', nameEn: 'Prof. Dr. Muinul Islam', nameBn: 'অধ্যাপক ড. মইনুল ইসলাম (একুশে পদকপ্রাপ্ত)' },
    { period: '2020 - 2024', nameEn: 'Prof. Dr. Mohammad Saiful Islam', nameBn: 'অধ্যাপক ড. মোহাম্মদ সাইফুল ইসলাম' },
    { period: 'Present', nameEn: 'Dr. Amirul Islam (Chairman & Professor)', nameBn: 'ড. আমিরুল ইসলাম (সভাপতি ও অধ্যাপক)' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-14 border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-800 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Institutional Profile' : 'বিভাগীয় পরিচিতি'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'en' ? 'About Department of Economics' : 'অর্থনীতি বিভাগ পরিচিতি'}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              {lang === 'en'
                ? 'Discover our storied history since 1966, the pioneering legacy of Prof. Muhammad Yunus, and our enduring dedication to empirical excellence.'
                : '১৯৬৬ সালে প্রতিষ্ঠার পর থেকে আমাদের গৌরবময় পথচলা, নোবেল বিজয়ী অধ্যাপক ইউনূসের অবদান এবং অর্থনৈতিক গবেষণায় উৎকর্ষ।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Yunus Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
              <History className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Founded in 1966' : 'প্রতিষ্ঠা ১৯৬৬'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {lang === 'en' 
                ? 'Six Decades of Championing Economic Policy & Analytical Rigor'
                : 'ছয় দশকের জ্ঞানচর্চা, নীতি গবেষণা ও মানবসম্পদ উন্নয়ন'
              }
            </h2>

            <p>
              {lang === 'en'
                ? 'The Department of Economics was founded alongside the inception of the University of Chittagong in 1966. Over six decades, it has stood as one of the preeminent centers of economic scholarship in South Asia, cultivating leaders for the Bangladesh Civil Service, international multilateral bodies, central banks, and global academia.'
                : '১৯৬৬ সালে চট্টগ্রাম বিশ্ববিদ্যালয় প্রতিষ্ঠার সাথে সাথেই যাত্রা শুরু করে অর্থনীতি বিভাগ। গত ছয় দশক ধরে এটি দক্ষিণ এশিয়ার অন্যতম শীর্ষস্থানীয় অর্থনৈতিক জ্ঞানচর্চাকেন্দ্র হিসেবে প্রতিষ্ঠিত। এখান থেকে পাস করা গ্র্যাজুয়েটরা বাংলাদেশ ব্যাংক, বিসিএস, বিশ্বব্যাংক ও আন্তর্জাতিক শীর্ষ বিশ্ববিদ্যালয়ে মর্যাদার সাথে কাজ করছেন।'
              }
            </p>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-950 text-sm mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{lang === 'en' ? 'The Jobra Experiment & The Birth of Microfinance' : 'জোবরা গ্রামের গবেষণা ও ক্ষুদ্রঋণের উৎপত্তি'}</span>
              </h3>
              <p className="text-xs text-blue-900 leading-relaxed">
                {lang === 'en'
                  ? 'It was at the University of Chittagong Department of Economics that Professor Muhammad Yunus pioneered the modern microcredit concept. In 1976, while serving as Head of this department, he and his students launched an empirical action research project in Jobra village adjacent to the campus. This historic initiative laid the foundation for Grameen Bank and earned the 2006 Nobel Peace Prize.'
                  : 'চবি অর্থনীতি বিভাগের প্রধান হিসেবে দায়িত্ব পালনকালে অধ্যাপক ড. মুহাম্মদ ইউনূস শিক্ষার্থীদের সাথে নিয়ে ক্যাম্পাস সংলগ্ন জোবরা গ্রামে ক্ষুদ্রঋণের পরীক্ষামূলক অ্যাকশন রিসার্চ শুরু করেন। এই যুগান্তকারী ফিল্ডওয়ার্ক থেকেই পরবর্তীতে গ্রামীণ ব্যাংক গড়ে ওঠে এবং ২০০৬ সালে শান্তিতে নোবেল পুরস্কার লাভ করে।'
                }
              </p>
            </div>

            <p>
              {lang === 'en'
                ? 'Today, the department is proudly housed in the five-storey Dr. Muhammad Yunus Bhaban (Faculty of Social Sciences), continuing its commitment to cutting-edge econometric training, empirical field studies, and public policy impact.'
                : 'বর্তমানে বিভাগটি পাঁচতলা বিশিষ্ট আধুনিক ড. মুহাম্মদ ইউনূস ভবনে (সমাজ বিজ্ঞান অনুষদ) অবস্থিত। বিভাগটিতে রয়েছে ডিজিটাল কম্পিউটার ল্যাব, সমৃদ্ধ সেমিনার লাইব্রেরি এবং আন্তর্জাতিক মানের গবেষণার পরিবেশ।'
              }
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/assets/aistudio/image_79340deb.png"
                alt="Dr. Muhammad Yunus Bhaban"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-900 block">{t.buildingName}</span>
                <span className="text-slate-500">{t.locationShort}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION, VISION & CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {lang === 'en' ? 'Our Mission' : 'আমাদের মিশন (লক্ষ্য)'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'en'
                  ? 'To cultivate critically minded, quantitatively skilled economists equipped to formulate evidence-based socio-economic policies that eliminate poverty, mitigate environmental risks, and advance sustainable development.'
                  : 'এমন দক্ষ ও বিশ্লেষণী অর্থনীতিবিদ তৈরি করা যারা প্রায়োগিক প্রমাণের ভিত্তিতে দারিদ্র্য বিমোচন, পরিবেশ বিপর্যয় মোকাবিলা এবং টেকসই অর্থনৈতিক উন্নয়নে কার্যকর ভূমিকা রাখবে।'
                }
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? 'Quantitative Econometric Training' : 'পরিমাণগত ইকোনোমেট্রিক্স প্রশিক্ষণ'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? 'Community Field Action Research' : 'মাঠপর্যায়ের প্রায়োগিক গবেষণা'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? 'Ethical Policy Formulation' : 'নীতিশাস্ত্রভিত্তিক অর্থনৈতিক পরিকল্পনা'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {lang === 'en' ? 'Our Vision' : 'আমাদের ভিশন (দূরদৃষ্টি)'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'en'
                  ? 'To be acknowledged as South Asia’s foremost center of excellence in applied economics, climate finance, and inclusive development by 2030.'
                  : '২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার অন্যতম শীর্ষস্থানীয় ফলিত অর্থনীতি, জলবায়ু অর্থায়ন এবং অন্তর্ভুক্তিমূলক প্রবৃদ্ধির শ্রেষ্ঠ জ্ঞানকেন্দ্র হিসেবে প্রতিষ্ঠা লাভ।'
                }
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{lang === 'en' ? 'Global University Research Partnerships' : 'আন্তর্জাতিক গবেষণা অংশীদারিত্ব'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{lang === 'en' ? 'Digital Big Data & Machine Learning Labs' : 'বিগ ডেটা ও মেশিন লার্নিং ল্যাব সম্প্রসারণ'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{lang === 'en' ? 'Public Policy Advisory to Governance' : 'সরকারের নীতিনির্ধারণে সরাসরি সহায়তা'}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* DEPARTMENT INFRASTRUCTURE & FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
            {lang === 'en' ? 'State of the Art' : 'আধুনিক সুবিধা'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            {lang === 'en' ? 'Department Infrastructure & Research Facilities' : 'বিভাগীয় অবকাঠামো ও গবেষণা সুবিধা'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <BookOpen className="w-8 h-8 text-blue-800 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'en' ? 'Seminar Library' : 'সেমিনার লাইব্রেরি'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Housing over 25,000 reference books, foreign economic journals, JSTOR access, and doctoral thesis archives in Room 316.'
                : 'কক্ষ ৩১৬-এ অবস্থিত লাইব্রেরিতে রয়েছে ২৫,০০০-এর বেশি বই, আন্তর্জাতিক জার্নাল, যেস্টোর (JSTOR) অ্যাক্সেস ও থিসিস সংগ্রহ।'
              }
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Laptop className="w-8 h-8 text-blue-800 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'en' ? 'Econometric Data Lab' : 'ইকোনোমেট্রিক ডেটা ল্যাব'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Equipped with 45 high-performance workstations pre-installed with STATA 18, R Studio, Python, EViews, and SPSS for empirical lab modules.'
                : '৪৫টি আধুনিক কম্পিউটারসমৃদ্ধ ল্যাব যাতে রয়েছে STATA 18, R Studio, Python, EViews এবং ডেটা অ্যানালিটিক্স টুলস।'
              }
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <Users className="w-8 h-8 text-blue-800 mb-3" />
            <h4 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'en' ? 'Air-Conditioned Auditoriums' : 'শীতাতপ নিয়ন্ত্রিত অডিটোরিয়াম'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Dedicated 250-seat conference hall equipped with multimedia projection for international symposiums and guest lectures.'
                : 'আন্তর্জাতিক সেমিনার ও বক্তৃতার জন্য মাল্টিমিডিয়া প্রজেকশন সম্বলিত ২৫০ আসনবিশিষ্ট মিলনায়তন।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* CHAIRPERSONS OVER THE DECADES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <History className="w-5 h-5 text-blue-800" />
            <span>{lang === 'en' ? 'Leadership Through the Decades (Chairpersons)' : 'বিভাগীয় প্রধানদের তালিকা (১৯৬৬ - বর্তমান)'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastChairs.map((c, i) => (
              <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                <span className="font-mono text-blue-800 font-semibold block mb-1">{c.period}</span>
                <span className="font-bold text-slate-900 block">{lang === 'en' ? c.nameEn : c.nameBn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL NOTICE BOARD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                {lang === 'en' ? 'Notice Board' : 'বিজ্ঞপ্তি ফলক'}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {lang === 'en' ? 'Official Department Notices & Circulars' : 'বিভাগীয় নোটিশ ও সার্কুলার'}
              </h3>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs overflow-x-auto max-w-full">
              {['all', 'academic', 'exam', 'admission', 'scholarship'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveNoticeCategory(cat)}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors cursor-pointer capitalize whitespace-nowrap ${
                    activeNoticeCategory === cat
                      ? 'bg-white text-blue-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredNotices.map((n) => (
              <div 
                key={n.id}
                onClick={() => setSelectedNotice(n)}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-50 px-2 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xs font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-800">
                        {n.category}
                      </span>
                      {n.isUrgent && (
                        <span className="text-2xs font-bold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                          {lang === 'en' ? 'Urgent' : 'জরুরি'}
                        </span>
                      )}
                      <span className="text-2xs text-slate-400 font-mono">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                      {lang === 'en' ? n.titleEn : n.titleBn}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-900 font-medium shrink-0 self-end sm:self-center">
                  <span>{lang === 'en' ? 'View Circular' : 'বিজ্ঞপ্তি দেখুন'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Modal */}
      <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
    </div>
  );
};
