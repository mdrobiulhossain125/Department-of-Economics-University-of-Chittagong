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
  Filter, 
  Download, 
  Sparkles,
  BookOpen,
  CalendarCheck,
  CalendarDays
} from 'lucide-react';

export const CalendarPage: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'month'>('list');
  const [selectedEvent, setSelectedEvent] = useState<AcademicEvent | null>(null);

  // Month navigation state: defaults to November 2026
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // 0-indexed: 10 = November

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

  // Generate calendar days for month view
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sun

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white py-14 border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-800 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Departmental Schedule' : 'ইভেন্ট ও একাডেমিক সূচি'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'en' ? 'Events & Academic Calendar' : 'ইভেন্ট ও একাডেমিক ক্যালেন্ডার'}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {eventsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {lang === 'en' ? cat.labelEn : cat.labelBn}
              </button>
            ))}
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'List View' : 'তালিকা'}</span>
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'month'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Month Grid' : 'ক্যালেন্ডার গ্রিড'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Calendar View Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === 'list' ? (
          /* LIST VIEW */
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  {/* Date Badge */}
                  <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xs font-bold uppercase tracking-wider text-blue-800">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-extrabold font-mono leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xs font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                        {event.category}
                      </span>
                      {event.registrationOpen && (
                        <span className="text-2xs font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {lang === 'en' ? 'Registration Open' : 'নিবন্ধন চলছে'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {lang === 'en' ? event.titleEn : event.titleBn}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-700" />
                        <span>{lang === 'en' ? event.timeEn : event.timeBn}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 truncate max-w-xs">
                        <MapPin className="w-3.5 h-3.5 text-blue-700" />
                        <span className="truncate">{lang === 'en' ? event.venueEn : event.venueBn}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="self-end sm:self-center shrink-0">
                  <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 transition-colors inline-flex items-center gap-1">
                    <span>{lang === 'en' ? 'View Details' : 'বিস্তারিত'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}

            {filteredEvents.length === 0 && (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                {lang === 'en' ? 'No events found in this category.' : 'এই বিভাগে কোনো ইভেন্ট পাওয়া যায়নি।'}
              </div>
            )}
          </div>
        ) : (
          /* MONTH GRID VIEW */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
            {/* Month Header Navigation */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-base sm:text-lg">
                {lang === 'en' ? `${monthNamesEn[currentMonth]} ${currentYear}` : `${monthNamesBn[currentMonth]} ${currentYear}`}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevMonth}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekdays row */}
            <div className="grid grid-cols-7 bg-slate-100 border-b border-slate-200 text-center py-2 text-xs font-bold text-slate-700 uppercase">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 min-h-[360px]">
              {/* Empty leading offset days */}
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} className="bg-slate-50/50 p-2 min-h-[70px]"></div>
              ))}

              {/* Days */}
              {daysArray.map((day) => {
                const dayString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const eventsOnThisDay = academicEvents.filter(e => e.date === dayString);

                return (
                  <div 
                    key={day} 
                    className={`p-2 min-h-[75px] transition-colors ${eventsOnThisDay.length > 0 ? 'bg-blue-50/40 hover:bg-blue-50' : 'hover:bg-slate-50'}`}
                  >
                    <span className="text-xs font-mono font-bold text-slate-700 block mb-1">
                      {day}
                    </span>
                    <div className="space-y-1">
                      {eventsOnThisDay.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => setSelectedEvent(e)}
                          className="w-full text-left p-1 rounded text-2xs font-semibold bg-blue-900 text-white truncate hover:bg-blue-800 transition-colors block cursor-pointer"
                          title={e.titleEn}
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

      {/* KEY ACADEMIC DATES TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-800" />
            <span>{lang === 'en' ? 'Academic Semester Schedule 2026-27' : 'একাডেমিক বর্ষের গুরুত্বপূর্ণ তারিখ'}</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-semibold uppercase text-slate-800">
                  <th className="py-2.5 px-3">Academic Milestone</th>
                  <th className="py-2.5 px-3">Date Range</th>
                  <th className="py-2.5 px-3">Target Cohort</th>
                  <th className="py-2.5 px-3">Office In-Charge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Semester Final Written Examination</td>
                  <td className="py-2.5 px-3 font-mono">Nov 15 - Dec 05, 2026</td>
                  <td className="py-2.5 px-3">BSS 1st to 4th Year</td>
                  <td className="py-2.5 px-3">Exam Committee</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Term Paper & Monograph Defense</td>
                  <td className="py-2.5 px-3 font-mono">Dec 10 - Dec 18, 2026</td>
                  <td className="py-2.5 px-3">BSS 4th Year & MSS</td>
                  <td className="py-2.5 px-3">Department Board</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Winter Recess & Study Tour Break</td>
                  <td className="py-2.5 px-3 font-mono">Dec 20 - Dec 31, 2026</td>
                  <td className="py-2.5 px-3">All Students</td>
                  <td className="py-2.5 px-3">CU Registrar</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-semibold">Spring Semester 2027 Classes Commence</td>
                  <td className="py-2.5 px-3 font-mono">Jan 05, 2027</td>
                  <td className="py-2.5 px-3">All Semesters</td>
                  <td className="py-2.5 px-3">Academic Adviser</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Event Details & RSVP Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};
