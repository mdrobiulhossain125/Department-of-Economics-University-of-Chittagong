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
          
          <span className="inline-block px-2.5 py-0.5 rounded text-2xs font-semibold bg-white text-[#0B2545] uppercase tracking-wider mb-2">
            {event.category.toUpperCase()}
          </span>
          <h3 className="text-lg sm:text-xl font-serif-academic font-bold leading-snug">
            {lang === 'en' ? event.titleEn : event.titleBn}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto text-sm text-slate-700">
          <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-4 h-4 text-[#0B2545] shrink-0" />
              <span className="font-semibold">{event.date}</span>
              {event.endDate && <span>- {event.endDate}</span>}
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <Clock className="w-4 h-4 text-[#0B2545] shrink-0" />
              <span>{lang === 'en' ? event.timeEn : event.timeBn}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-800">
              <MapPin className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
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
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal">
              {lang === 'en' ? event.descriptionEn : event.descriptionBn}
            </p>
          </div>

          {event.registrationOpen && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              {registered ? (
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'en'
                      ? 'You are registered! Seat confirmation has been logged.'
                      : 'রেজিস্ট্রেশন সফল হয়েছে! আসন সংরক্ষিত হয়েছে।'
                    }
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {lang === 'en' ? 'Free Delegate Registration' : 'প্রতিনিধি নিবন্ধন উন্মুক্ত'}
                    </p>
                    <p className="text-2xs text-slate-500">
                      {lang === 'en' ? 'Open to all CU students & scholars' : 'চবির শিক্ষার্থী ও গবেষকদের জন্য'}
                    </p>
                  </div>
                  <button
                    onClick={() => setRegistered(true)}
                    className="btn-stanford-primary text-xs py-1.5 px-4 shrink-0"
                  >
                    {lang === 'en' ? 'RSVP' : 'নিবন্ধন'}
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
              className="btn-stanford-outline text-xs py-1.5 px-3.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Calendar (.ics)' : 'ক্যালেন্ডার'}</span>
            </button>
            <button
              onClick={copyShare}
              className="p-2 text-slate-500 hover:text-slate-800 bg-white border border-slate-300 rounded-full transition-colors cursor-pointer"
              title="Share event link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            {copied && <span className="text-xs text-emerald-600 font-medium">{lang === 'en' ? 'Copied' : 'কপি হয়েছে'}</span>}
          </div>

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
