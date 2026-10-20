import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { syllabusData, ProgramCurriculum } from '../data/syllabusData';
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
  Info,
  ArrowRight
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
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
                <BookOpen className="w-3.5 h-3.5 text-blue-200" />
                <span>{lang === 'en' ? 'Curriculum Architecture' : 'পাঠ্যক্রম ও সিলেবাস'}</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
                {lang === 'en' ? 'Academic Programs & Syllabus' : 'একাডেমিক প্রোগ্রাম ও পূর্ণাঙ্গ সিলেবাস'}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Explore our comprehensive course matrices, semester-by-semester credit breakdowns, and download official syllabus documents.'
                  : 'বিএসএস (অনার্স), মাস্টার্স এবং পিএইচডি প্রোগ্রামের সেমিস্টারভিত্তিক কোর্স তালিকা, ক্রেডিট এবং পূর্ণাঙ্গ সিলেবাস।'
                }
              </p>
            </div>

            <button
              onClick={handleDownloadSyllabus}
              className="btn-stanford-white text-xs sm:text-sm py-2.5 px-6 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloadSuccess 
                  ? (lang === 'en' ? 'Downloaded!' : 'ডাউনলোড সম্পন্ন!')
                  : (lang === 'en' ? 'Download Syllabus (.txt)' : 'সিলেবাস ডাউনলোড')
                }
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Program Selector Tabs - Smart Stanford Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => { setActiveProgramKey('bss'); setSelectedSemesterIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeProgramKey === 'bss'
                ? 'bg-[#0B2545] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>BSS (Honours) Economics</span>
          </button>
          <button
            onClick={() => { setActiveProgramKey('mss'); setSelectedSemesterIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeProgramKey === 'mss'
                ? 'bg-[#0B2545] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>MSS in Economics</span>
          </button>
          <button
            onClick={() => { setActiveProgramKey('mphil'); setSelectedSemesterIndex(0); }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              activeProgramKey === 'mphil'
                ? 'bg-[#0B2545] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>M.Phil & Ph.D. Research</span>
          </button>
        </div>
      </section>

      {/* Program Metadata Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 bg-slate-50/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-[#0B2545]">
                {lang === 'en' ? activeProgram.degreeAwardedEn : activeProgram.degreeAwardedBn}
              </span>
              <h2 className="text-2xl font-serif-academic font-bold text-slate-900 mt-2">
                {lang === 'en' ? activeProgram.titleEn : activeProgram.titleBn}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0B2545]" />
                <span>{lang === 'en' ? activeProgram.durationEn : activeProgram.durationBn}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#0B2545]" />
                <span>{activeProgram.totalCredits} {lang === 'en' ? 'Credits' : 'ক্রেডিট'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'Learning Objectives' : 'ডিগ্রির প্রধান শিখনফল'}</span>
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? activeProgram.objectivesEn : activeProgram.objectivesBn).map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0B2545] font-bold">•</span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#0B2545]" />
                <span>{lang === 'en' ? 'Admission Criteria' : 'ভর্তির যোগ্যতা'}</span>
              </h4>
              <ul className="space-y-2">
                {(lang === 'en' ? activeProgram.admissionRequirementsEn : activeProgram.admissionRequirementsBn).map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0B2545] font-bold">•</span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            {/* Semester Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {activeProgram.semesters.map((sem, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSemesterIndex(idx);
                    setSearchQuery('');
                  }}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    !isSearching && selectedSemesterIndex === idx
                      ? 'bg-[#0B2545] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {lang === 'en' ? sem.nameEn : sem.nameBn}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search course code or title...' : 'কোর্স কোড বা শিরোনাম...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full border border-slate-300 bg-white focus:outline-hidden focus:border-[#0B2545]"
                />
              </div>

              <select
                value={courseTypeFilter}
                onChange={(e) => setCourseTypeFilter(e.target.value)}
                className="py-1.5 px-3 text-xs rounded-full border border-slate-300 bg-white text-slate-700 focus:outline-hidden cursor-pointer"
              >
                <option value="All">{lang === 'en' ? 'All Types' : 'সকল ধরন'}</option>
                <option value="Core">{lang === 'en' ? 'Core Courses' : 'মূল কোর্স'}</option>
                <option value="Quantitative">{lang === 'en' ? 'Quantitative' : 'পরিমাণগত'}</option>
                <option value="Elective">{lang === 'en' ? 'Electives' : 'ঐচ্ছিক'}</option>
              </select>
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {displayedCourses.map((c, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#0B2545] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#0B2545] text-white font-mono font-bold text-xs tracking-wider">
                      {c.code}
                    </span>
                    <span className="text-2xs font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {c.type}
                    </span>
                  </div>

                  <h3 className="font-serif-academic font-bold text-slate-900 text-base leading-snug">
                    {lang === 'en' ? c.titleEn : c.titleBn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {lang === 'en' ? c.descriptionEn : c.descriptionBn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{c.credits} Credits</span>
                  {'semesterNameEn' in c && (
                    <span className="text-2xs text-[#0B2545] font-sans font-semibold">
                      {lang === 'en' ? (c as any).semesterNameEn : (c as any).semesterNameBn}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GRADING SYSTEM & ACADEMIC EVALUATION TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 rounded-xl p-6 sm:p-8 bg-white">
          <h3 className="text-lg font-serif-academic font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#0B2545]" />
            <span>{lang === 'en' ? 'Grading Scale & Performance Evaluation' : 'গ্রেডিং পদ্ধতি ও মূল্যায়ন নীতিমালা'}</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-900 font-semibold uppercase">
                  <th className="py-2.5 px-3">Numerical Marks</th>
                  <th className="py-2.5 px-3">Letter Grade</th>
                  <th className="py-2.5 px-3">Grade Point</th>
                  <th className="py-2.5 px-3">Performance Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                <tr><td className="py-2 px-3">80% and above</td><td className="py-2 px-3 font-bold text-emerald-700">A+</td><td className="py-2 px-3 font-bold">4.00</td><td className="py-2 px-3 font-sans">Outstanding</td></tr>
                <tr><td className="py-2 px-3">75% to &lt;80%</td><td className="py-2 px-3 font-bold text-emerald-700">A</td><td className="py-2 px-3 font-bold">3.75</td><td className="py-2 px-3 font-sans">Excellent</td></tr>
                <tr><td className="py-2 px-3">70% to &lt;75%</td><td className="py-2 px-3 font-bold text-blue-900">A-</td><td className="py-2 px-3 font-bold">3.50</td><td className="py-2 px-3 font-sans">Very Good</td></tr>
                <tr><td className="py-2 px-3">65% to &lt;70%</td><td className="py-2 px-3 font-bold text-blue-900">B+</td><td className="py-2 px-3 font-bold">3.25</td><td className="py-2 px-3 font-sans">Good</td></tr>
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
