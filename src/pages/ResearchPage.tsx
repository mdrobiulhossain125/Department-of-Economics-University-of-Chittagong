import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicationsData, researchCenters, ResearchPaper } from '../data/researchData';
import { 
  BookOpen, 
  Search, 
  Download, 
  ExternalLink, 
  FileText, 
  Filter, 
  Building2, 
  CheckCircle,
  Share2,
  Calendar,
  UserCheck
} from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activePaper, setActivePaper] = useState<ResearchPaper | null>(null);
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  const filteredPapers = publicationsData.filter((paper) => {
    const matchesType = selectedType === 'all' || paper.type === selectedType;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      paper.titleEn.toLowerCase().includes(query) ||
      paper.titleBn.toLowerCase().includes(query) ||
      paper.authorsEn.some(a => a.toLowerCase().includes(query)) ||
      paper.keywordsEn.some(k => k.toLowerCase().includes(query));
    return matchesType && matchesSearch;
  });

  const handleDownloadPaper = (paper: ResearchPaper) => {
    const content = `CHITTAGONG UNIVERSITY JOURNAL OF ECONOMICS
DEPARTMENT OF ECONOMICS, FACULTY OF SOCIAL SCIENCES, UNIVERSITY OF CHITTAGONG
================================================================================
Title: ${paper.titleEn}
Authors: ${paper.authorsEn.join(', ')}
Publication: ${paper.journalEn} (${paper.year})
DOI: ${paper.doi || 'N/A'}
Type: ${paper.type.toUpperCase()}
================================================================================

ABSTRACT:
${paper.abstractEn}

KEYWORDS:
${paper.keywordsEn.join(', ')}

--------------------------------------------------------------------------------
Published by University of Chittagong. All rights reserved.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${paper.id}_research_paper.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadMsg(paper.id);
    setTimeout(() => setDownloadMsg(null), 3000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-14 border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-800 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Empirical Scholarship' : 'গবেষণা ও প্রকাশনা'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'en' ? 'Research & Working Papers' : 'গবেষণা ও জার্নাল প্রকাশনা'}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              {lang === 'en'
                ? 'Exploring pioneering research on macroeconomic policy, climate economics in the Bay of Bengal, and the legacy of microcredit.'
                : 'সামষ্টিক অর্থনীতি, আন্তর্জাতিক বাণিজ্য, উপকূলীয় পরিবেশ ও দারিদ্র্য বিমোচনে আমাদের গবেষণাপত্রসমূহ।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Journal Highlight: CUJE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded">
              <span>{lang === 'en' ? 'Flagship Departmental Journal' : 'বিভাগের প্রধান গবেষণা জার্নাল'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'en' 
                ? 'Chittagong University Journal of Economics (CUJE)'
                : 'চট্টগ্রাম বিশ্ববিদ্যালয় জার্নাল অব ইকোনমিক্স (CUJE)'
              }
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'A peer-reviewed biannual open-access academic journal published since 1980, indexing high-impact original contributions in theoretical, empirical, and econometric analysis.'
                : '১৯৮০ সাল থেকে নিয়মিত প্রকাশিত বিভাগীয় পিয়ার-রিভিউড একাডেমিক জার্নাল। এতে তাত্ত্বিক, ফলিত ও নীতি অর্থনীতির মৌলিক গবেষণাপত্র প্রকাশিত হয়।'
              }
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 font-mono">
              <span>ISSN: 1997-2857</span>
              <span>·</span>
              <span>Biannual (June & December)</span>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">{lang === 'en' ? 'Open Access' : 'মুক্ত প্রবেশাধিকার'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="#submissions"
              className="px-4 py-2 text-center text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              {lang === 'en' ? 'Call for Papers 2026' : 'প্রবন্ধ আহ্বানের নির্দেশিকা'}
            </a>
          </div>
        </div>
      </section>

      {/* Research Centers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
            {lang === 'en' ? 'Specialized Institutes' : 'বিশেষায়িত গবেষণা কেন্দ্র'}
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            {lang === 'en' ? 'Affiliated Research Centers' : 'বিভাগীয় গবেষণা কেন্দ্রসমূহ'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {lang === 'en' ? center.nameEn : center.nameBn}
                </h4>
                <div className="text-xs text-blue-800 font-semibold flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" />
                  <span>{lang === 'en' ? `Director: ${center.directorEn}` : `পরিচালক: ${center.directorBn}`}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'en' ? center.descriptionEn : center.descriptionBn}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(lang === 'en' ? center.focusAreasEn : center.focusAreasBn).map((area, idx) => (
                    <span key={idx} className="text-2xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papers Repository */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {[
                { id: 'all', labelEn: 'All Papers', labelBn: 'সকল প্রকাশনা' },
                { id: 'journal', labelEn: 'Journal Articles', labelBn: 'জার্নাল আর্টিকেল' },
                { id: 'working_paper', labelEn: 'Working Papers', labelBn: 'ওয়ার্কিং পেপার' },
                { id: 'policy_brief', labelEn: 'Policy Briefs', labelBn: 'পলিসি ব্রিফ' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedType(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedType === tab.id
                      ? 'bg-blue-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'en' ? tab.labelEn : tab.labelBn}
                </button>
              ))}
            </div>

            {/* Search query */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search title, author, keyword...' : 'শিরোনাম বা লেখক অনুসন্ধান...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Papers List */}
          <div className="space-y-4">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-2xs hover:border-blue-300 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-2xs font-semibold uppercase bg-blue-100 text-blue-900">
                      {paper.type.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {paper.year}
                    </span>
                  </div>
                  {paper.doi && (
                    <span className="text-2xs text-slate-400 font-mono">
                      DOI: {paper.doi}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {lang === 'en' ? paper.titleEn : paper.titleBn}
                </h3>

                <p className="text-xs text-blue-900 font-medium">
                  {lang === 'en' ? paper.authorsEn.join(', ') : paper.authorsBn.join(', ')}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'en' ? paper.abstractEn : paper.abstractBn}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {(lang === 'en' ? paper.keywordsEn : paper.keywordsBn).map((kw, idx) => (
                      <span key={idx} className="text-2xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDownloadPaper(paper)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>
                        {downloadMsg === paper.id
                          ? (lang === 'en' ? 'Downloaded' : 'সংরক্ষিত')
                          : (lang === 'en' ? 'Download Paper (.txt)' : 'ডাউনলোড করুন')
                        }
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
              {lang === 'en' ? 'No research paper matched your search.' : 'কোনো গবেষণাপত্র পাওয়া যায়নি।'}
            </div>
          )}
        </div>
      </section>

      {/* SUBMISSION CALLOUT SECTION */}
      <section id="submissions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold">
              {lang === 'en' ? 'Submit Your Manuscript to CUJE' : 'আপনার গবেষণাপত্র জমা দিন'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'We invite high quality original research papers in applied economics, public finance, and development studies. Submissions undergo double-blind peer review.'
                : 'ফলিত অর্থনীতি, জনকল্যাণ এবং জলবায়ু অর্থায়নের ওপর মৌলিক গবেষণাপত্র আহ্বান করা যাচ্ছে। জমা দেওয়া পাণ্ডুলিপি ডাবল-ব্লাইন্ড পিয়ার রিভিউ করা হয়।'
              }
            </p>
          </div>
          <a
            href="mailto:cuje.editor@cu.ac.bd?subject=Manuscript%20Submission%20CUJE"
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shrink-0 shadow-md"
          >
            cuje.editor@cu.ac.bd
          </a>
        </div>
      </section>
    </div>
  );
};
