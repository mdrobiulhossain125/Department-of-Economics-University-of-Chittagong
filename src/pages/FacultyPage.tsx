import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { facultyData, FacultyMember } from '../data/facultyData';
import { FacultyModal } from '../components/FacultyModal';
import { 
  Users, 
  Search, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ChevronRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const FacultyPage: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [designationFilter, setDesignationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', labelEn: 'All Faculty', labelBn: 'সকল শিক্ষক', count: facultyData.length },
    { id: 'professor', labelEn: 'Professors', labelBn: 'অধ্যাপকবৃন্দ', count: facultyData.filter(f => f.category === 'professor').length },
    { id: 'associate', labelEn: 'Associate Professors', labelBn: 'সহযোগী অধ্যাপক', count: facultyData.filter(f => f.category === 'associate').length },
    { id: 'assistant', labelEn: 'Assistant Professors', labelBn: 'সহকারী অধ্যাপক', count: facultyData.filter(f => f.category === 'assistant').length },
    { id: 'lecturer', labelEn: 'Lecturer', labelBn: 'প্রভাষক', count: facultyData.filter(f => f.category === 'lecturer').length },
  ];

  const filteredFaculty = facultyData.filter((member) => {
    const matchesFilter = designationFilter === 'all' || member.category === designationFilter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesFilter;

    const matchesSearch = 
      member.nameEn.toLowerCase().includes(query) ||
      member.nameBn.toLowerCase().includes(query) ||
      member.designationEn.toLowerCase().includes(query) ||
      member.specializationEn.some(s => s.toLowerCase().includes(query)) ||
      member.specializationBn.some(s => s.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-20 font-satoshi">
      {/* Header Banner - Minimal clean */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-900/80 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5 border border-blue-700/50">
              <Users className="w-3.5 h-3.5 text-blue-300" />
              <span>{lang === 'en' ? 'Faculty Directory' : 'শিক্ষক পরিচিতি'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'en' ? 'Faculty Members & Research Interests' : 'সম্মানিত শিক্ষকমণ্ডলী ও গবেষণা ক্ষেত্র'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Department of Economics, University of Chittagong — Distinguished professors, associate professors, assistant professors, and lecturers.'
                : 'চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি বিভাগের অধ্যাপক, সহযোগী অধ্যাপক, সহকারী অধ্যাপক ও প্রভাষকবৃন্দের তালিকা ও তাদের গবেষণার ক্ষেত্রসমূহ।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar - Clean Minimal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDesignationFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  designationFilter === tab.id
                    ? 'bg-blue-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <span>{lang === 'en' ? tab.labelEn : tab.labelBn}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-2xs ${
                  designationFilter === tab.id ? 'bg-blue-800 text-blue-100' : 'bg-slate-200/70 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search by name or research topic...' : 'নাম বা গবেষণা ক্ষেত্র দিয়ে অনুসন্ধান...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Faculty Cards Grid - Spacious, Clean Minimal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedFaculty(member)}
              className="group bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold text-base border border-blue-100 shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                        {lang === 'en' ? member.nameEn : member.nameBn}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="text-2xs font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                          {lang === 'en' ? member.designationEn : member.designationBn}
                        </span>
                        {member.onStudyLeave && (
                          <span className="text-2xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                            {lang === 'en' ? 'Study Leave' : 'শিক্ষা ছুটিতে'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email and Office info */}
                <div className="space-y-1 text-2xs text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{member.office}</span>
                  </div>
                </div>

                {/* Research Interests List */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    {lang === 'en' ? 'Research Interests' : 'গবেষণার ক্ষেত্র'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {(lang === 'en' ? member.specializationEn : member.specializationBn).map((item, idx) => (
                      <span 
                        key={idx}
                        className="text-2xs px-2 py-0.8 rounded-md bg-slate-100/80 text-slate-700 font-medium border border-slate-200/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-2xs text-blue-900 font-semibold">
                <span>{lang === 'en' ? 'Department of Economics' : 'অর্থনীতি বিভাগ'}</span>
                <span className="inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  <span>{lang === 'en' ? 'Profile' : 'বিস্তারিত'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
            {lang === 'en'
              ? 'No faculty member found matching your query.'
              : 'কোনো শিক্ষকের তথ্য পাওয়া যায়নি।'
            }
          </div>
        )}
      </section>

      {/* Faculty Modal */}
      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    </div>
  );
};
