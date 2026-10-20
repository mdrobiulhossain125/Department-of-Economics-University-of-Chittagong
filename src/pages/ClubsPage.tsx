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
  ArrowRight
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
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Stanford-style Header Banner */}
      <section className="bg-[#0B2545] text-white py-14 border-b border-[#081B33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-2xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-200 uppercase tracking-widest inline-flex items-center gap-1.5 border border-white/10">
              <Users className="w-3.5 h-3.5 text-blue-200" />
              <span>{lang === 'en' ? 'Student & Alumni Organizations' : 'শিক্ষার্থী ক্লাব ও অ্যালামনাই'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold tracking-tight text-white">
              {lang === 'en' ? 'Department Clubs & Alumni Network' : 'বিভাগীয় ক্লাব ও অ্যালামনাই নেটওয়ার্ক'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
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
        <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8 bg-white hover:border-[#0B2545] transition-all">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-[#0B2545]">
                {lang === 'en' ? "Official Student Club of CU Economics" : "চবি অর্থনীতি বিভাগের অফিশিয়াল শিক্ষার্থী ক্লাব"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-slate-900">
                {lang === 'en' ? yesClub.nameEn : yesClub.nameBn}
              </h2>
              <p className="text-sm text-slate-500 italic font-normal">
                "{lang === 'en' ? yesClub.mottoEn : yesClub.mottoBn}"
              </p>
            </div>

            <button
              onClick={() => setJoinModalClub(yesClub)}
              className="btn-stanford-primary text-xs py-2.5 px-6 shrink-0"
            >
              <span>{lang === 'en' ? 'Apply for YES Membership' : 'ইয়েস-এ সদস্য হতে আবেদন'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Description & Activities */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {lang === 'en' ? yesClub.descriptionEn : yesClub.descriptionBn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {lang === 'en' ? 'Core Initiatives & Activities' : 'প্রধান কার্যক্রম ও কর্মসূচি'}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {(lang === 'en' ? yesClub.keyEventsEn : yesClub.keyEventsBn).map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Contact & Socials */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {lang === 'en' ? 'Official Channels' : 'যোগাযোগ ও সামাজিক মাধ্যম'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? yesClub.locationEn : yesClub.locationBn}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <a href={`mailto:${yesClub.email}`} className="text-[#0B2545] font-semibold hover:underline">
                    {yesClub.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {yesClub.facebook && (
                  <a
                    href={yesClub.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-stanford-primary text-xs py-1.5 px-4"
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
                    className="btn-stanford-outline text-xs py-1.5 px-4"
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
        <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8 bg-white hover:border-[#0B2545] transition-all">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-800">
                {lang === 'en' ? 'Alumni Organization' : 'প্রাক্তন শিক্ষার্থীদের সংগঠন'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-slate-900">
                {lang === 'en' ? cueesa.nameEn : cueesa.nameBn}
              </h2>
              <p className="text-sm text-slate-500 italic font-normal">
                "{lang === 'en' ? cueesa.mottoEn : cueesa.mottoBn}"
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {cueesa.website && (
                <a
                  href={cueesa.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-stanford-outline text-xs py-2 px-4.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>cueesa.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {lang === 'en' ? cueesa.descriptionEn : cueesa.descriptionBn}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {lang === 'en' ? 'Key Engagements' : 'অ্যালামনাই কার্যক্রম'}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {(lang === 'en' ? cueesa.keyEventsEn : cueesa.keyEventsBn).map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {lang === 'en' ? 'Liaison Office & Stats' : 'স্থায়ী কার্যালয় ও তথ্য'}
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5" />
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

              <div className="pt-2 flex flex-wrap gap-2">
                {cueesa.facebook && (
                  <a
                    href={cueesa.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-stanford-primary text-xs py-1.5 px-4"
                  >
                    <span>CUEESA Facebook</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-in fade-in duration-200"
          onClick={() => setJoinModalClub(null)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0B2545] text-white p-5 relative border-b border-[#081B33]">
              <button
                onClick={() => setJoinModalClub(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-2xs uppercase tracking-wider font-semibold bg-white text-[#0B2545] px-2 py-0.5 rounded-full mb-1 inline-block">
                {joinModalClub.acronym}
              </span>
              <h3 className="text-base font-serif-academic font-bold text-white">
                {lang === 'en' ? `Membership Application: ${joinModalClub.nameEn}` : `সদস্যপদ আবেদন: ${joinModalClub.nameBn}`}
              </h3>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base font-serif-academic">
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
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#0B2545]"
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
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#0B2545] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        {lang === 'en' ? 'Phone' : 'মোবাইল'}
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#0B2545] font-mono"
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
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#0B2545]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setJoinModalClub(null)}
                      className="btn-stanford-outline text-xs py-2 px-4"
                    >
                      {lang === 'en' ? 'Cancel' : 'বাতিল'}
                    </button>
                    <button
                      type="submit"
                      className="btn-stanford-primary text-xs py-2 px-5"
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
