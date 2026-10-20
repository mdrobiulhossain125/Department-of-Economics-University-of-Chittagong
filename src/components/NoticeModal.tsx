import React, { useState } from 'react';
import { NoticeItem } from '../data/noticesData';
import { useLanguage } from '../context/LanguageContext';
import { X, Bell, Calendar, Download, FileText, CheckCircle2 } from 'lucide-react';

interface NoticeModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  const { lang } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  if (!notice) return null;

  const handleDownloadAttachment = () => {
    // Generate text document simulating official departmental PDF/Circular
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-2xs font-semibold bg-blue-600 text-white uppercase tracking-wider">
              {notice.category}
            </span>
            {notice.isUrgent && (
              <span className="px-2 py-0.5 rounded text-2xs font-semibold bg-rose-600 text-white uppercase tracking-wider">
                {lang === 'en' ? 'Urgent' : 'জরুরি'}
              </span>
            )}
            <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto mr-8">
              <Calendar className="w-3.5 h-3.5" />
              <span>{notice.date}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold leading-snug">
            {lang === 'en' ? notice.titleEn : notice.titleBn}
          </h3>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {lang === 'en' ? notice.contentEn : notice.contentBn}
          </div>

          {notice.attachmentName && (
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-5 h-5 text-blue-700 shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-semibold text-slate-900 truncate">
                    {notice.attachmentName}
                  </p>
                  <p className="text-2xs text-slate-500">Official PDF Notice (184 KB)</p>
                </div>
              </div>
              <button
                onClick={handleDownloadAttachment}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-800 hover:bg-blue-700 rounded-md transition-colors shrink-0 cursor-pointer"
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
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
