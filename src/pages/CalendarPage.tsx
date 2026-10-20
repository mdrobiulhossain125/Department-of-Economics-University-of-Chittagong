import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academicEvents, eventsCategories, AcademicEvent } from '../data/eventsData';
import { EventModal } from '../components/EventModal';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  CalendarCheck,
  CalendarDays,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const CalendarPage: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'month'>('list');
  const [selectedEvent, setSelectedEvent] = useState<AcademicEvent | null>(null);

  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // November

  const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNamesBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

  const filteredEvents = academicEvents.filter((evt) => {
    return selectedCategory === 'all' || evt.category === selectedCategory;
  });

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
              <CalendarIcon className="w-3.5 h-3.5 text-blue-200" />
              <span>{lang === 'en' ? 'Departmental Schedule' : 'ইভেন্ট ও একাডেমিক সূচি'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {lang === 'en' ? 'Events & Academic Calendar' : 'ইভেন্ট ও একাডেমিক ক্যালেন্ডার'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? 'Stay informed on upcoming international colloquiums, semester final exams, EconFest, and admission deadlines.'
                : 'সেমিস্টার ফাইনাল পরীক্ষা, আন্তর্জাতিক সেমিনার, ইকনফেস্ট ও ভর্তি আবেদনের সময়সূচি।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Controls Bar: Categories & View Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          {/* Category Pill Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {eventsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B2545] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelBn}
              </button>
            ))}
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full shrink-0">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'List View' : 'তালিকা'}</span>
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'month'
                  ? 'bg-white text-[#0B2545] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Month Grid' : 'ক্যালেন্ডার'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Events Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-xl border border-slate-200 hover:border-[#0B2545] p-6 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-5">
                  {/* Clean Date Block */}
                  <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 text-[#0B2545] flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-500">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold font-mono leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xs font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {event.category}
                      </span>
                      {event.registrationOpen && (
                        <span className="text-2xs font-semibold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {lang === 'en' ? 'Registration Open' : 'নিবন্ধন চলছে'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-serif-academic font-bold text-slate-900 leading-snug">
                      {lang === 'en' ? event.titleEn : event.titleBn}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{lang === 'en' ? event.timeEn : event.timeBn}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{lang === 'en' ? event.venueEn : event.venueBn}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <button className="btn-stanford-outline text-xs py-1.5 px-4 shrink-0">
                  <span>{lang === 'en' ? 'View Details' : 'বিস্তারিত'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
            <div className="p-4 bg-[#0B2545] text-white flex items-center justify-between">
              <h3 className="font-serif-academic font-bold text-lg">
                {lang === 'en' ? `${monthNamesEn[currentMonth]} ${currentYear}` : `${monthNamesBn[currentMonth]} ${currentYear}`}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevMonth}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200 text-center py-2 text-xs font-bold text-slate-700 uppercase">
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>

            <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 min-h-[360px]">
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} className="bg-slate-50/50 p-2 min-h-[70px]"></div>
              ))}

              {daysArray.map((day) => {
                const dayString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const eventsOnThisDay = academicEvents.filter(e => e.date === dayString);

                return (
                  <div key={day} className="p-2 min-h-[75px] hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-mono font-bold text-slate-700 block mb-1">
                      {day}
                    </span>
                    <div className="space-y-1">
                      {eventsOnThisDay.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => setSelectedEvent(e)}
                          className="w-full text-left p-1 rounded text-2xs font-semibold bg-[#0B2545] text-white truncate block cursor-pointer"
                        >
                          {lang === 'en' ? e.titleEn : e.titleBn}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Event Details & RSVP Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};
