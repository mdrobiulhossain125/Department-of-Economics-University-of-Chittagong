import React, { useState } from 'react';
import { AcademicEvent } from '../data/eventsData';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Clock, MapPin, User, Download, CheckCircle, Share2 } from 'lucide-react';

interface EventModalProps {
  event: AcademicEvent | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const { lang } = useLanguage();
  const [registered, setRegistered] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  // Generate .ics calendar file
  const downloadIcs = () => {
    const cleanDate = event.date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//University of Chittagong//Economics Department//EN',
      'BEGIN:VEVENT',
      `UID:${event.id}@econ-cu.netlify.app`,
      `DTSTAMP:${cleanDate}T090000Z`,
      `DTSTART:${cleanDate}T093000Z`,
      `DTEND:${cleanDate}T170000Z`,
      `SUMMARY:${event.titleEn}`,
      `DESCRIPTION:${event.descriptionEn.replace(/\n/g, ' ')}`,
      `LOCATION:${event.venueEn}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <div className="bg-blue-900 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-400 text-blue-950 uppercase tracking-wider mb-2">
            {event.category.toUpperCase()}
          </span>
          <h3 className="text-lg sm:text-xl font-bold leading-snug">
            {lang === 'en' ? event.titleEn : event.titleBn}
          </h3>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto text-sm text-slate-700">
          <div className="space-y-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-4 h-4 text-blue-800 shrink-0" />
              <span className="font-semibold">{event.date}</span>
              {event.endDate && <span>- {event.endDate}</span>}
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Clock className="w-4 h-4 text-blue-800 shrink-0" />
              <span>{lang === 'en' ? event.timeEn : event.timeBn}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-800">
              <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
              <span>{lang === 'en' ? event.venueEn : event.venueBn}</span>
            </div>
            {event.speakerEn && (
              <div className="flex items-start gap-2 text-slate-800 pt-1 border-t border-slate-200">
                <User className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-900">
                  {lang === 'en' ? event.speakerEn : event.speakerBn}
                </span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Event Description' : 'ইভেন্টের বিবরণ'}
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {lang === 'en' ? event.descriptionEn : event.descriptionBn}
            </p>
          </div>

          {/* Registration / RSVP State */}
          {event.registrationOpen && (
            <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200">
              {registered ? (
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'You are registered! A seat confirmation has been logged.'
                      : 'রেজিস্ট্রেশন সফল হয়েছে! আপনার আসন সংরক্ষিত রয়েছে।'
                    }
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-blue-950">
                      {lang === 'en' ? 'Free Delegate Registration Open' : 'বিনামূল্যে প্রতিনিধি নিবন্ধন চলমান'}
                    </p>
                    <p className="text-xs text-blue-800">
                      {lang === 'en' ? 'Open to all CU students, faculty & researchers' : 'চবির সকল শিক্ষার্থী ও গবেষকদের জন্য উন্মুক্ত'}
                    </p>
                  </div>
                  <button
                    onClick={() => setRegistered(true)}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors cursor-pointer shrink-0"
                  >
                    {lang === 'en' ? 'RSVP Now' : 'নিবন্ধন করুন'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={downloadIcs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Download iCal .ics event file"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'en' ? 'Add to Calendar (.ics)' : 'ক্যালেন্ডারে যুক্ত করুন'}</span>
            </button>
            <button
              onClick={copyShare}
              className="p-1.5 text-slate-500 hover:text-slate-800 bg-white border border-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Share event link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copied && <span className="text-xs text-emerald-600 font-medium">{lang === 'en' ? 'Copied!' : 'কপি হয়েছে!'}</span>}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
