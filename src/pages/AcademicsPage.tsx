import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { syllabusData, ProgramCurriculum, Course } from '../data/syllabusData';
import { 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Award, 
  Search, 
  Download, 
  FileCheck, 
  CheckCircle, 
  Layers,
  ChevronDown,
  Info
} from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activeProgramKey, setActiveProgramKey] = useState<'bss' | 'mss' | 'mphil'>('bss');
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [courseTypeFilter, setCourseTypeFilter] = useState<string>('All');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const activeProgram: ProgramCurriculum = syllabusData[activeProgramKey];
  const activeSemester = activeProgram.semesters[selectedSemesterIndex] || activeProgram.semesters[0];

  // Filtering courses across the active semester or across the whole program when search is active
  const isSearching = searchQuery.trim().length > 0 || courseTypeFilter !== 'All';

  const allCoursesInProgram = activeProgram.semesters.flatMap(s => 
    s.courses.map(c => ({ ...c, semesterNameEn: s.nameEn, semesterNameBn: s.nameBn }))
  );

  const displayedCourses = isSearching
    ? allCoursesInProgram.filter(c => {
        const matchesSearch = 
          c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = courseTypeFilter === 'All' || c.type === courseTypeFilter;
        return matchesSearch && matchesType;
      })
    : activeSemester.courses;

  const handleDownloadSyllabus = () => {
    let doc = `DEPARTMENT OF ECONOMICS - UNIVERSITY OF CHITTAGONG
OFFICIAL CURRICULUM & SYLLABUS SPECIFICATION
Program: ${activeProgram.titleEn}
Duration: ${activeProgram.durationEn}
Total Credits: ${activeProgram.totalCredits} Credits
Degree Awarded: ${activeProgram.degreeAwardedEn}
========================================================================

PROGRAM OBJECTIVES:
${activeProgram.objectivesEn.map((o, i) => `${i + 1}. ${o}`).join('\n')}

========================================================================
SEMESTER COURSE STRUCTURE & DETAILED MODULES:

`;

    activeProgram.semesters.forEach(s => {
      doc += `\n>>> ${s.nameEn.toUpperCase()} (Total Credits: ${s.totalCredits})\n`;
      s.courses.forEach(c => {
        doc += `  - [${c.code}] ${c.titleEn} (${c.credits} Credits, Type: ${c.type})\n    Description: ${c.descriptionEn}\n`;
      });
    });

    doc += `\n========================================================================
ACADEMIC EVALUATION & GRADING SCALE:
80% and above : 4.00 (A+)    75% to <80% : 3.75 (A)     70% to <75% : 3.50 (A-)
65% to <70%   : 3.25 (B+)    60% to <65% : 3.00 (B)     55% to <60% : 2.75 (B-)
50% to <55%   : 2.50 (C+)    45% to <50% : 2.25 (C)     40% to <45% : 2.00 (D)
Below 40%     : 0.00 (F)

Issued by: Department of Economics, Dr. Muhammad Yunus Bhaban, CU.
`;

    const blob = new Blob([doc], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${activeProgram.id}_full_syllabus.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-14 border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-800 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Curriculum Architecture' : 'পাঠ্যক্রম ও সিলেবাস'}</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {lang === 'en' ? 'Academic Programs & Syllabus' : 'একাডেমিক প্রোগ্রাম ও পূর্ণাঙ্গ সিলেবাস'}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                {lang === 'en'
                  ? 'Explore our comprehensive course matrices, semester-by-semester credit breakdowns, and download official syllabus documents.'
                  : 'বিএসএস (অনার্স), মাস্টার্স এবং পিএইচডি প্রোগ্রামের সেমিস্টারভিত্তিক কোর্স তালিকা, ক্রেডিট এবং পূর্ণাঙ্গ সিলেবাস।'
                }
              </p>
            </div>

            <button
              onClick={handleDownloadSyllabus}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloadSuccess 
                  ? (lang === 'en' ? 'Downloaded!' : 'ডাউনলোড হয়েছে!')
                  : (lang === 'en' ? 'Download Full Syllabus' : 'সম্পূর্ণ সিলেবাস ডাউনলোড')
                }
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-slate-200/80 rounded-xl border border-slate-300">
          <button
            onClick={() => { setActiveProgramKey('bss'); setSelectedSemesterIndex(0); }}
            className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeProgramKey === 'bss'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>BSS (Honours) Economics</span>
          </button>
          <button
            onClick={() => { setActiveProgramKey('mss'); setSelectedSemesterIndex(0); }}
            className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeProgramKey === 'mss'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>MSS in Economics</span>
          </button>
          <button
            onClick={() => { setActiveProgramKey('mphil'); setSelectedSemesterIndex(0); }}
            className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeProgramKey === 'mphil'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>M.Phil & Ph.D. Research</span>
          </button>
        </div>
      </section>

      {/* Program Metadata Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-2xs font-semibold uppercase px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 tracking-wider">
                {lang === 'en' ? activeProgram.degreeAwardedEn : activeProgram.degreeAwardedBn}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                {lang === 'en' ? activeProgram.titleEn : activeProgram.titleBn}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-700" />
                <span>{lang === 'en' ? activeProgram.durationEn : activeProgram.durationBn}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-700" />
                <span>{activeProgram.totalCredits} {lang === 'en' ? 'Credits' : 'ক্রেডিট'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'Learning Objectives' : 'ডিগ্রির প্রধান শিখনফল'}</span>
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? activeProgram.objectivesEn : activeProgram.objectivesBn).map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-700" />
                <span>{lang === 'en' ? 'Admission Criteria' : 'ভর্তির যোগ্যতা'}</span>
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? activeProgram.admissionRequirementsEn : activeProgram.admissionRequirementsBn).map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Course Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Controls: Semester Tabs, Search, and Type Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Semester selector buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {activeProgram.semesters.map((sem, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSemesterIndex(idx);
                    setSearchQuery('');
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    !isSearching && selectedSemesterIndex === idx
                      ? 'bg-blue-900 text-white shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {lang === 'en' ? sem.nameEn : sem.nameBn}
                </button>
              ))}
            </div>

            {/* Search & Type filter */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search course code or title...' : 'কোর্স কোড বা শিরোনাম খুঁজুন...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <select
                value={courseTypeFilter}
                onChange={(e) => setCourseTypeFilter(e.target.value)}
                className="py-1.5 px-3 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-600 cursor-pointer"
              >
                <option value="All">{lang === 'en' ? 'All Types' : 'সকল ধরন'}</option>
                <option value="Core">{lang === 'en' ? 'Core Courses' : 'মূল কোর্স'}</option>
                <option value="Quantitative">{lang === 'en' ? 'Quantitative / Econometrics' : 'পরিমাণগত / ইকোনোমেট্রিক্স'}</option>
                <option value="Elective">{lang === 'en' ? 'Elective Courses' : 'ঐচ্ছিক কোর্স'}</option>
              </select>
            </div>

          </div>

          {/* Active Semester Header (when not in search mode) */}
          {!isSearching && (
            <div className="flex items-center justify-between p-3.5 bg-blue-50 rounded-xl border border-blue-200 text-xs">
              <span className="font-bold text-blue-950">
                {lang === 'en' ? activeSemester.nameEn : activeSemester.nameBn}
              </span>
              <span className="text-blue-900 font-medium">
                {lang === 'en' 
                  ? `Total Credits: ${activeSemester.totalCredits} Hours (${activeSemester.courses.length} Courses)`
                  : `মোট ক্রেডিট: ${activeSemester.totalCredits} ঘণ্টা (${activeSemester.courses.length}টি কোর্স)`
                }
              </span>
            </div>
          )}

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedCourses.map((c, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-900 text-white font-mono font-bold text-xs tracking-wider">
                      {c.code}
                    </span>
                    <span className={`text-2xs font-semibold uppercase px-2 py-0.5 rounded ${
                      c.type === 'Quantitative' 
                        ? 'bg-amber-100 text-amber-900' 
                        : c.type === 'Elective'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {c.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {lang === 'en' ? c.titleEn : c.titleBn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'en' ? c.descriptionEn : c.descriptionBn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-semibold text-slate-700">
                    {c.credits} {lang === 'en' ? 'Credit Units' : 'ক্রেডিট ইউনিট'}
                  </span>
                  {'semesterNameEn' in c && (
                    <span className="text-2xs text-blue-800 font-medium">
                      {lang === 'en' ? (c as any).semesterNameEn : (c as any).semesterNameBn}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {displayedCourses.length === 0 && (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
              {lang === 'en' 
                ? 'No courses matched your query. Try a different course code or keyword.'
                : 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো কোর্স পাওয়া যায়নি।'
              }
            </div>
          )}

        </div>
      </section>

      {/* GRADING SYSTEM & ACADEMIC EVALUATION TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-800" />
            <span>{lang === 'en' ? 'Grading Scale & Performance Evaluation' : 'গ্রেডিং পদ্ধতি ও মূল্যায়ন নীতিমালা'}</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Numerical Marks</th>
                  <th className="py-2.5 px-3">Letter Grade</th>
                  <th className="py-2.5 px-3">Grade Point (GP)</th>
                  <th className="py-2.5 px-3">Performance Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr><td className="py-2 px-3">80% and above</td><td className="py-2 px-3 font-bold text-emerald-700">A+</td><td className="py-2 px-3 font-bold">4.00</td><td className="py-2 px-3 font-sans">Outstanding</td></tr>
                <tr><td className="py-2 px-3">75% to &lt;80%</td><td className="py-2 px-3 font-bold text-emerald-700">A</td><td className="py-2 px-3 font-bold">3.75</td><td className="py-2 px-3 font-sans">Excellent</td></tr>
                <tr><td className="py-2 px-3">70% to &lt;75%</td><td className="py-2 px-3 font-bold text-blue-700">A-</td><td className="py-2 px-3 font-bold">3.50</td><td className="py-2 px-3 font-sans">Very Good</td></tr>
                <tr><td className="py-2 px-3">65% to &lt;70%</td><td className="py-2 px-3 font-bold text-blue-700">B+</td><td className="py-2 px-3 font-bold">3.25</td><td className="py-2 px-3 font-sans">Good</td></tr>
                <tr><td className="py-2 px-3">60% to &lt;65%</td><td className="py-2 px-3 font-bold text-slate-800">B</td><td className="py-2 px-3 font-bold">3.00</td><td className="py-2 px-3 font-sans">Satisfactory</td></tr>
                <tr><td className="py-2 px-3">55% to &lt;60%</td><td className="py-2 px-3 font-bold text-slate-800">B-</td><td className="py-2 px-3 font-bold">2.75</td><td className="py-2 px-3 font-sans">Above Average</td></tr>
                <tr><td className="py-2 px-3">50% to &lt;55%</td><td className="py-2 px-3 font-bold text-amber-700">C+</td><td className="py-2 px-3 font-bold">2.50</td><td className="py-2 px-3 font-sans">Average</td></tr>
                <tr><td className="py-2 px-3">40% to &lt;45%</td><td className="py-2 px-3 font-bold text-orange-700">D</td><td className="py-2 px-3 font-bold">2.00</td><td className="py-2 px-3 font-sans">Pass</td></tr>
                <tr><td className="py-2 px-3">Below 40%</td><td className="py-2 px-3 font-bold text-rose-700">F</td><td className="py-2 px-3 font-bold">0.00</td><td className="py-2 px-3 font-sans">Fail</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
