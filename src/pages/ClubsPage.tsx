import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { studentClubs, StudentClub } from '../data/clubsData';
import { 
  Users, 
  Mail, 
  MapPin, 
  ExternalLink, 
  CheckCircle, 
  Send, 
  X, 
  Sparkles,
  Building,
  Globe,
  Share2
} from 'lucide-react';

export const ClubsPage: React.FC = () => {
  const { lang } = useLanguage();
  const [joinModalClub, setJoinModalClub] = useState<StudentClub | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const yesClub = studentClubs.find(c => c.id === 'yes-cu') || studentClubs[0];
  const cueesa = studentClubs.find(c => c.id === 'cueesa') || studentClubs[1];

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setJoinModalClub(null);
      setName('');
      setStudentId('');
      setEmail('');
      setPhone('');
    }, 2500);
  };

  return (
    <div className="space-y-12 pb-20 font-satoshi">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-900/80 text-blue-200 uppercase tracking-wider inline-flex items-center gap-1.5 border border-blue-700/50">
              <Users className="w-3.5 h-3.5 text-blue-300" />
              <span>{lang === 'en' ? 'Student & Alumni Organizations' : 'শিক্ষার্থী ক্লাব ও অ্যালামনাই'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'en' ? 'Department Clubs & Alumni Network' : 'বিভাগীয় ক্লাব ও অ্যালামনাই নেটওয়ার্ক'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'en'
                ? "Connecting current scholars through Young Economists' Society (YES) and lifelong graduates through CUEESA."
                : "অর্থনীতি বিভাগের একমাত্র অফিসিয়াল শিক্ষার্থী ক্লাব 'ইয়াং ইকোনমিস্টস সোসাইটি (YES)' এবং প্রাক্তন শিক্ষার্থীদের সংগঠন 'CUEESA'।"
              }
            </p>
          </div>
        </div>
      </section>

      {/* YES — OFFICIAL STUDENT CLUB SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-blue-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === 'en' ? "Official Student Club of CU Economics" : "চবি অর্থনীতি বিভাগের অফিশিয়াল শিক্ষার্থী ক্লাব"}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'en' ? yesClub.nameEn : yesClub.nameBn}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                "{lang === 'en' ? yesClub.mottoEn : yesClub.mottoBn}"
              </p>
            </div>

            <button
              onClick={() => setJoinModalClub(yesClub)}
              className="px-5 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-xs cursor-pointer shrink-0"
            >
              {lang === 'en' ? 'Join YES Membership' : 'ইয়েস-এ সদস্য হতে আবেদন'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Description & Activities (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === 'en' ? yesClub.descriptionEn : yesClub.descriptionBn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {lang === 'en' ? 'Core Initiatives & Activities' : 'প্রধান কার্যক্রম ও কর্মসূচি'}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {(lang === 'en' ? yesClub.keyEventsEn : yesClub.keyEventsBn).map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Contact & Socials (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {lang === 'en' ? 'Official Contact & Channels' : 'যোগাযোগ ও সামাজিক মাধ্যম'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? yesClub.locationEn : yesClub.locationBn}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-800 shrink-0" />
                  <a href={`mailto:${yesClub.email}`} className="text-blue-900 font-semibold hover:underline">
                    {yesClub.email}
                  </a>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                {yesClub.facebook && (
                  <a
                    href={yesClub.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {yesClub.linkedin && (
                  <a
                    href={yesClub.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white text-xs font-semibold transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CUEESA — ALUMNI ASSOCIATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                <Building className="w-3.5 h-3.5 text-blue-800" />
                <span>{lang === 'en' ? 'Alumni Community & Organization' : 'প্রাক্তন শিক্ষার্থীদের সংগঠন'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {lang === 'en' ? cueesa.nameEn : cueesa.nameBn}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                "{lang === 'en' ? cueesa.mottoEn : cueesa.mottoBn}"
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {cueesa.website && (
                <a
                  href={cueesa.website}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-all inline-flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4 text-blue-800" />
                  <span>cueesa.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Description & Activities (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === 'en' ? cueesa.descriptionEn : cueesa.descriptionBn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {lang === 'en' ? 'Alumni Community Engagement' : 'অ্যালামনাই কার্যক্রম ও সম্মেলন'}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {(lang === 'en' ? cueesa.keyEventsEn : cueesa.keyEventsBn).map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Office Details (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {lang === 'en' ? 'Permanent Liaison Office & Details' : 'স্থায়ী কার্যালয় ও তথ্য'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">{lang === 'en' ? 'Dhaka Office:' : 'ঢাকা কার্যালয়:'}</span>
                    <span>{lang === 'en' ? cueesa.locationEn : cueesa.locationBn}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-1 font-mono text-2xs text-slate-500">
                  <span>Facebook Followers: {cueesa.followers}</span>
                  <span>·</span>
                  <span>Following: {cueesa.following}</span>
                </div>
              </div>

              {/* Social Link */}
              <div className="pt-2 flex flex-wrap gap-2">
                {cueesa.facebook && (
                  <a
                    href={cueesa.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                  >
                    <span>CUEESA Facebook Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {cueesa.website && (
                  <a
                    href={cueesa.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition-colors"
                  >
                    <span>cueesa.org</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MEMBERSHIP MODAL */}
      {joinModalClub && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setJoinModalClub(null)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-5 relative border-b border-slate-800">
              <button
                onClick={() => setJoinModalClub(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-2xs uppercase tracking-wider font-semibold bg-blue-800 text-blue-100 px-2 py-0.5 rounded mb-1 inline-block">
                {joinModalClub.acronym}
              </span>
              <h3 className="text-base font-bold text-white">
                {lang === 'en' ? `Membership Application: ${joinModalClub.nameEn}` : `সদস্যপদ আবেদন: ${joinModalClub.nameBn}`}
              </h3>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {lang === 'en' ? 'Application Received!' : 'আবেদনপত্র জমা হয়েছে!'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'en'
                      ? 'The executive committee of YES will reach out to you via email.'
                      : 'ইয়েস নির্বাহী কমিটি আপনার সাথে ইমেইলে যোগাযোগ করবে।'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Full Name *' : 'পূর্ণ নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'e.g. Tanvir Ahmed' : 'উদা: তানভীর আহমেদ'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        {lang === 'en' ? 'Student ID *' : 'শিক্ষার্থী আইডি *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 21401050"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        {lang === 'en' ? 'Phone / WhatsApp' : 'মোবাইল নম্বর'}
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Email Address *' : 'ইমেইল ঠিকানা *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setJoinModalClub(null)}
                      className="px-4 py-2 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      {lang === 'en' ? 'Cancel' : 'বাতিল'}
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Submit' : 'জমা দিন'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
