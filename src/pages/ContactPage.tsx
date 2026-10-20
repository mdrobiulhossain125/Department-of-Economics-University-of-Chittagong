import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Train, 
  Send, 
  CheckCircle, 
  Building, 
  Compass, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface StoredMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
  date: string;
}

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Admission Query');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<StoredMessage | null>(null);
  const [recentMessages, setRecentMessages] = useState<StoredMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cuecon_inquiries');
    if (saved) {
      try {
        setRecentMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMsg: StoredMessage = {
        id: `MSG-${Date.now().toString().slice(-6)}`,
        name,
        email,
        phone,
        category,
        subject: subject.trim() || 'General Inquiry',
        message,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      const updated = [newMsg, ...recentMessages].slice(0, 5);
      setRecentMessages(updated);
      localStorage.setItem('cuecon_inquiries', JSON.stringify(updated));

      setSubmittedMessage(newMsg);
      setIsSubmitting(false);

      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
              <Mail className="w-3.5 h-3.5 text-blue-200" />
              <span>{lang === 'en' ? 'Get In Touch' : 'যোগাযোগ ও সহায়তা'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {lang === 'en' ? 'Contact Department of Economics' : 'অর্থনীতি বিভাগের সাথে যোগাযোগ'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? 'We welcome academic inquiries, research collaborations, transcript verifications, and student admissions questions.'
                : 'ভর্তি তথ্য, সনদ যাচাই, একাডেমিক ও গবেষণা সহযোগিতার যেকোনো প্রয়োজনে আমাদের বার্তা পাঠান।'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
            <div className="mb-6 space-y-1">
              <h2 className="text-xl sm:text-2xl font-serif-academic font-bold text-slate-900">
                {lang === 'en' ? 'Official Inquiry Form' : 'বিভাগীয় তথ্য ও যোগাযোগ ফরম'}
              </h2>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Fill out the form below. Inquiries are routed to the relevant departmental officer.'
                  : 'নিচের ফরমটি পূরণ করুন। সংশ্লিষ্ট বিভাগীয় কর্মকর্তা দ্রুত আপনার সাথে যোগাযোগ করবেন।'
                }
              </p>
            </div>

            {submittedMessage ? (
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif-academic font-bold text-slate-900 text-lg">
                  {lang === 'en' ? 'Inquiry Submitted' : 'বার্তা সফলভাবে পাঠানো হয়েছে!'}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {lang === 'en'
                    ? `Thank you, ${submittedMessage.name}. Your inquiry [Ticket: ${submittedMessage.id}] has been forwarded to Department Office.`
                    : `ধন্যবাদ, ${submittedMessage.name}। আপনার বার্তাটি [আইডি: ${submittedMessage.id}] বিভাগীয় ডেস্কে সংরক্ষিত হয়েছে।`
                  }
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmittedMessage(null)}
                    className="btn-stanford-outline text-xs py-2 px-5"
                  >
                    {lang === 'en' ? 'Send Another Inquiry' : 'আরেকটি বার্তা পাঠান'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'Prof. / Dr. / Mr. / Ms.' : 'পূর্ণ নাম লিখুন'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Email Address *' : 'ইমেইল ঠিকানা *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Phone / Mobile' : 'ফোন / মোবাইল'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 1..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Inquiry Category *' : 'ক্যাটাগরি *'}
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545] bg-white cursor-pointer"
                    >
                      <option value="Admission Query">Admission & Eligibility (BSS / MSS / PhD)</option>
                      <option value="Academic Verification">Academic Transcript & Degree Verification</option>
                      <option value="Research Collaboration">Research Collaboration & Journal (CUJE)</option>
                      <option value="Alumni Services">Alumni Services & Mentorship</option>
                      <option value="General Query">General Administration Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Subject / Topic' : 'বিষয়'}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'en' ? 'Brief summary of your inquiry' : 'বার্তার সংক্ষিপ্ত বিষয়'}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Message *' : 'আপনার বিস্তারিত বার্তা *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={lang === 'en' ? 'Write your message or inquiry here...' : 'আপনার প্রশ্ন বা মন্তব্য এখানে বিস্তারিত লিখুন...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0B2545] leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-stanford-primary text-xs py-2.5 px-6"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (lang === 'en' ? 'Submitting...' : 'পাঠানো হচ্ছে...') : (lang === 'en' ? 'Submit Official Message' : 'বার্তা পাঠান')}</span>
                </button>
              </form>
            )}

            {/* Display locally submitted messages if any */}
            {recentMessages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 block">
                  {lang === 'en' ? 'Your Recent Dispatched Inquiries' : 'আপনার সাম্প্রতিক বার্তা'}
                </span>
                <div className="space-y-1.5">
                  {recentMessages.map((m) => (
                    <div key={m.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                      <div className="truncate max-w-sm">
                        <span className="font-semibold text-slate-900">{m.subject}</span>
                        <span className="text-2xs text-slate-500 block truncate">{m.category} · {m.date}</span>
                      </div>
                      <span className="text-2xs font-mono px-2 py-0.5 rounded bg-blue-100 text-[#0B2545] font-bold shrink-0">
                        {m.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Details & Logistics (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-serif-academic font-bold text-slate-900 text-lg flex items-center gap-2">
                <Building className="w-5 h-5 text-[#0B2545]" />
                <span>{lang === 'en' ? 'Department Office' : 'বিভাগীয় কার্যালয়'}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">{t.buildingName}</span>
                    <span>3rd Floor, University of Chittagong</span>
                    <span className="block">Hathazari, Chattogram 4331, Bangladesh</span>
                    <span className="text-2xs text-slate-400 font-mono block mt-0.5">GPS: 22.4716° N, 91.7877° E</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">General Inquiries:</span>
                    <a href="mailto:economics@cu.ac.bd" className="text-[#0B2545] font-semibold hover:underline">
                      economics@cu.ac.bd
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Phone className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Department Exchange:</span>
                    <span>+880 31 726311 (Ext. 4321 / 4322)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">Working Hours:</span>
                    <span>Sunday – Thursday: 8:30 AM – 3:30 PM BST</span>
                    <span className="block text-2xs text-slate-400">Closed on Fridays, Saturdays & University Holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shuttle Train Schedule Card */}
            <div className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-amber-300" />
                <h3 className="font-serif-academic font-bold text-lg text-white">
                  {lang === 'en' ? 'CU Shuttle Train Schedule' : 'চবি শাটল ট্রেনের সময়সূচি'}
                </h3>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Connecting Battali Railway Station (Chittagong City Center) to Chittagong University Campus daily.'
                  : 'চট্টগ্রাম শহর (বটতলী রেলওয়ে স্টেশন) থেকে চবি ক্যাম্পাসে যাতায়াতের নিয়মিত ট্রেনের সময়সূচি।'
                }
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs bg-black/20 p-3.5 rounded-xl border border-white/10 font-mono">
                <div>
                  <span className="text-amber-300 font-bold block mb-1 font-sans text-2xs uppercase tracking-wider">
                    City ➔ Campus
                  </span>
                  <ul className="space-y-0.5 text-slate-300 text-2xs">
                    <li>07:30 AM</li>
                    <li>09:45 AM</li>
                    <li>01:30 PM</li>
                    <li>03:00 PM</li>
                    <li>08:30 PM</li>
                  </ul>
                </div>
                <div>
                  <span className="text-blue-300 font-bold block mb-1 font-sans text-2xs uppercase tracking-wider">
                    Campus ➔ City
                  </span>
                  <ul className="space-y-0.5 text-slate-300 text-2xs">
                    <li>08:45 AM</li>
                    <li>11:30 AM</li>
                    <li>02:30 PM</li>
                    <li>05:00 PM</li>
                    <li>09:30 PM</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Campus Map Directions Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 rounded-xl p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif-academic font-bold text-slate-900 text-base mb-1">
              {lang === 'en' ? 'Directions to Dr. Muhammad Yunus Bhaban' : 'ক্যাম্পাসে ইউনূস ভবনে পৌঁছানোর নির্দেশনা'}
            </h3>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'Arrive at CU Railway Station or 1 No. Gate. Walk past Zero Point toward the Central Shaheed Minar.'
                : 'চবি রেলস্টেশন বা ১ নং গেইট থেকে জিরো পয়েন্ট হয়ে কেন্দ্রীয় শহীদ মিনারের ডানদিকে সমাজ বিজ্ঞান অনুষদের ড. মুহাম্মদ ইউনূস ভবনে অর্থনীতি বিভাগ অবস্থিত।'
              }
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Faculty+of+Social+Sciences+University+of+Chittagong"
            target="_blank"
            rel="noreferrer"
            className="btn-stanford-primary text-xs py-2 px-5 shrink-0"
          >
            <span>{lang === 'en' ? 'Google Maps' : 'গুগল ম্যাপ'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
};
