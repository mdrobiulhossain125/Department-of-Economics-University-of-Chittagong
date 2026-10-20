import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publicationsData, researchCenters, ResearchPaper } from '../data/researchData';
import { 
  BookOpen, 
  Search, 
  Download, 
  Building2, 
  UserCheck,
  ArrowRight
} from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
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
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-blue-200" />
              <span>{lang === 'en' ? 'Empirical Scholarship' : 'গবেষণা ও প্রকাশনা'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {lang === 'en' ? 'Research & Working Papers' : 'গবেষণা ও জার্নাল প্রকাশনা'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
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
        <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-white hover:border-[#0B2545] transition-all">
          <div className="space-y-3 max-w-3xl">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-[#0B2545]">
              {lang === 'en' ? 'Flagship Academic Journal' : 'বিভাগের প্রধান গবেষণা জার্নাল'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-slate-900">
              {lang === 'en' 
                ? 'Chittagong University Journal of Economics (CUJE)'
                : 'চট্টগ্রাম বিশ্ববিদ্যালয় জার্নাল অব ইকোনমিক্স (CUJE)'
              }
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="mailto:cuje.editor@cu.ac.bd?subject=Manuscript%20Submission%20CUJE"
              className="btn-stanford-primary text-xs py-2.5 px-6 inline-flex"
            >
              <span>{lang === 'en' ? 'Call for Papers 2026' : 'প্রবন্ধ আহ্বান'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Research Centers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-10 mb-6">
          <span className="text-2xs font-bold uppercase tracking-widest text-slate-500 block">
            {lang === 'en' ? 'Affiliated Institutes' : 'বিশেষায়িত গবেষণা কেন্দ্র'}
          </span>
          <h3 className="text-2xl font-serif-academic font-bold text-[#0B2545] mt-1">
            {lang === 'en' ? 'Departmental Research Centers' : 'বিভাগীয় গবেষণা কেন্দ্রসমূহ'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchCenters.map((center) => (
            <div key={center.id} className="border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:border-[#0B2545] transition-all">
              <div className="space-y-3">
                <span className="text-2xs font-mono font-bold uppercase text-[#0B2545] bg-blue-50 px-2 py-0.5 rounded">
                  {center.id === 'center-env-econ' ? 'CENRE' : 'BERPM'}
                </span>
                <h4 className="text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                  {lang === 'en' ? center.nameEn : center.nameBn}
                </h4>
                <div className="text-xs text-[#0B2545] font-semibold flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'en' ? `Director: ${center.directorEn}` : `পরিচালক: ${center.directorBn}`}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {lang === 'en' ? center.descriptionEn : center.descriptionBn}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {(lang === 'en' ? center.focusAreasEn : center.focusAreasBn).map((area, idx) => (
                    <span key={idx} className="text-2xs px-2 py-0.5 rounded bg-slate-50 text-slate-700 font-medium border border-slate-200">
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
        <div className="border-t border-slate-200 pt-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            {/* Filter pills */}
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
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    selectedType === tab.id
                      ? 'bg-[#0B2545] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {lang === 'en' ? tab.labelEn : tab.labelBn}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search title, author, keyword...' : 'শিরোনাম বা লেখক অনুসন্ধান...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-300 bg-white focus:outline-hidden focus:border-[#0B2545]"
              />
            </div>
          </div>

          {/* Papers List */}
          <div className="space-y-5">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#0B2545] p-6 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-2xs font-semibold uppercase bg-slate-100 text-slate-700">
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

                <h3 className="text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                  {lang === 'en' ? paper.titleEn : paper.titleBn}
                </h3>

                <p className="text-xs text-[#0B2545] font-semibold">
                  {lang === 'en' ? paper.authorsEn.join(', ') : paper.authorsBn.join(', ')}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {lang === 'en' ? paper.abstractEn : paper.abstractBn}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 mt-2">
                  <div className="flex flex-wrap gap-1">
                    {(lang === 'en' ? paper.keywordsEn : paper.keywordsBn).map((kw, idx) => (
                      <span key={idx} className="text-2xs px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleDownloadPaper(paper)}
                    className="btn-stanford-outline text-xs py-1.5 px-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {downloadMsg === paper.id
                        ? (lang === 'en' ? 'Downloaded' : 'ডাউনলোড সম্পন্ন')
                        : (lang === 'en' ? 'Download Paper (.txt)' : 'ডাউনলোড করুন')
                      }
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="p-16 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-xs font-serif-academic">
              {lang === 'en' ? 'No research paper matched your search.' : 'কোনো গবেষণাপত্র পাওয়া যায়নি।'}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
