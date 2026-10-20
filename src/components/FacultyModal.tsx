import React from 'react';
import { FacultyMember } from '../data/facultyData';
import { useLanguage } from '../context/LanguageContext';
import { X, Mail, MapPin, Award, GraduationCap, BookOpen, Clock } from 'lucide-react';

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose }) => {
  const { lang } = useLanguage();
  if (!faculty) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden max-h-[90vh] flex flex-col font-satoshi"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold border border-white/15 shrink-0 shadow-xs">
              <GraduationCap className="w-7 h-7 text-blue-200" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-blue-800 text-blue-100 uppercase tracking-wider">
                  {lang === 'en' ? faculty.designationEn : faculty.designationBn}
                </span>
                {faculty.onStudyLeave && (
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {lang === 'en' ? 'On Study Leave' : 'শিক্ষা ছুটিতে'}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {lang === 'en' ? faculty.nameEn : faculty.nameBn}
              </h3>
              {faculty.degreesEn && (
                <p className="text-xs text-slate-300 mt-1">
                  {lang === 'en' ? faculty.degreesEn : faculty.degreesBn}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Contact Strip */}
          <div className="grid grid-cols-1 gap-2 p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <Mail className="w-4 h-4 text-blue-800 shrink-0" />
              <a href={`mailto:${faculty.email}`} className="text-blue-900 font-medium hover:underline">
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-blue-800 shrink-0" />
              <span>{faculty.office}</span>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-800" />
              <span>{lang === 'en' ? 'Research Interests' : 'গবেষণার প্রধান ক্ষেত্রসমূহ'}</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(lang === 'en' ? faculty.specializationEn : faculty.specializationBn).map((area, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-blue-50/60 text-blue-950 border border-blue-200/60 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Bio if available */}
          {faculty.bioEn && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-800" />
                <span>{lang === 'en' ? 'Profile Overview' : 'পরিচিতি'}</span>
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {lang === 'en' ? faculty.bioEn : faculty.bioBn}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
