import React, { useState } from 'react';
import { NoticeItem } from '../data/noticesData';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Download, FileText, CheckCircle2 } from 'lucide-react';

interface NoticeModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  const { lang } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  if (!notice) return null;

  const handleDownloadAttachment = () => {
    const content = `DEPARTMENT OF ECONOMICS, UNIVERSITY OF CHITTAGONG
DR. MUHAMMAD YUNUS BHABAN, FACULTY OF SOCIAL SCIENCES
============================================================
OFFICIAL CIRCULAR / NOTICE
Date: ${notice.date}
Category: ${notice.category.toUpperCase()}

Subject: ${notice.titleEn}

${notice.contentEn}

------------------------------------------------------------
By Order of Chairman
Department of Economics, University of Chittagong
Hathazari, Chattogram 4331, Bangladesh.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', notice.attachmentName || `CU_Econ_Notice_${notice.id}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-6 relative border-b border-[#081B33]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-2xs font-semibold bg-white text-[#0B2545] uppercase tracking-wider">
              {notice.category}
            </span>
            {notice.isUrgent && (
              <span className="px-2 py-0.5 rounded text-2xs font-semibold bg-rose-600 text-white uppercase tracking-wider">
                {lang === 'en' ? 'Urgent' : 'জরুরি'}
              </span>
            )}
            <span className="text-2xs text-slate-300 flex items-center gap-1 font-mono ml-auto mr-8">
              <Calendar className="w-3.5 h-3.5" />
              <span>{notice.date}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-serif-academic font-bold leading-snug">
            {lang === 'en' ? notice.titleEn : notice.titleBn}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
            {lang === 'en' ? notice.contentEn : notice.contentBn}
          </div>

          {notice.attachmentName && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 truncate">
                <FileText className="w-5 h-5 text-[#0B2545] shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-semibold text-slate-900 truncate">
                    {notice.attachmentName}
                  </p>
                  <p className="text-2xs text-slate-500 font-mono">Official Document (184 KB)</p>
                </div>
              </div>
              <button
                onClick={handleDownloadAttachment}
                className="btn-stanford-primary text-xs py-1.5 px-3.5 shrink-0"
              >
                {downloaded ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                <span>{downloaded ? (lang === 'en' ? 'Saved' : 'সংরক্ষিত') : (lang === 'en' ? 'Download' : 'ডাউনলোড')}</span>
              </button>
            </div>
          )}

          <div className="text-2xs text-slate-500 text-right italic pt-2">
            {lang === 'en' 
              ? 'Department of Economics · University of Chittagong' 
              : 'অর্থনীতি বিভাগ · চট্টগ্রাম বিশ্ববিদ্যালয়'
            }
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="btn-stanford-outline text-xs py-1.5 px-4"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
