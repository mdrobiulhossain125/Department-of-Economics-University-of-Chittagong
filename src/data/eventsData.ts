export interface AcademicEvent {
  id: string;
  titleEn: string;
  titleBn: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  timeEn: string;
  timeBn: string;
  venueEn: string;
  venueBn: string;
  category: 'seminar' | 'exam' | 'admission' | 'fest' | 'holiday';
  descriptionEn: string;
  descriptionBn: string;
  speakerEn?: string;
  speakerBn?: string;
  registrationOpen?: boolean;
}

export const eventsCategories = [
  { id: 'all', labelEn: 'All Events', labelBn: 'সকল ইভেন্ট' },
  { id: 'seminar', labelEn: 'Seminars & Conferences', labelBn: 'সেমিনার ও সম্মেলন' },
  { id: 'exam', labelEn: 'Exams & Academic Schedules', labelBn: 'পরীক্ষা ও সূচি' },
  { id: 'fest', labelEn: 'Club & Cultural Fests', labelBn: 'ক্লাব ও উৎসব' },
  { id: 'admission', labelEn: 'Admissions & Deadlines', labelBn: 'ভর্তি ও আবেদন' },
  { id: 'holiday', labelEn: 'Campus Holidays', labelBn: 'ছুটি' }
];

export const academicEvents: AcademicEvent[] = [
  {
    id: 'conf-2026',
    titleEn: 'International Colloquium on Macroeconomic Stability & Inflation Targeting',
    titleBn: 'সামষ্টিক অর্থনৈতিক স্থিতিশীলতা ও মুদ্রাস্ফীতি নিয়ন্ত্রণ শীর্ষক আন্তর্জাতিক সিম্পোজিয়াম',
    date: '2026-11-15',
    endDate: '2026-11-16',
    timeEn: '09:30 AM - 05:00 PM BST',
    timeBn: 'সকাল ০৯:৩০ - বিকাল ০৫:০০',
    venueEn: 'Auditorium, Dr. Muhammad Yunus Bhaban, CU',
    venueBn: 'অডিটোরিয়াম, ড. মুহাম্মদ ইউনূস ভবন, চবি',
    category: 'seminar',
    speakerEn: 'Keynote by Prof. Dr. Atiur Rahman (Former Governor, Bangladesh Bank) & International Guests',
    speakerBn: 'মূল প্রবন্ধ: অধ্যাপক ড. আতিউর রহমান (সাবেক গভর্নর, বাংলাদেশ ব্যাংক) ও বিদেশি গবেষকবৃন্দ',
    descriptionEn: 'Two-day international conference examining policy responses to global supply chain shocks, monetary policy transmission in developing countries, and foreign reserve stability.',
    descriptionBn: 'বৈশ্বিক অর্থনৈতিক অভিঘাত, উন্নয়নশীল দেশগুলোতে মুদ্রানীতির কার্যকারিতা এবং বৈদেশিক মুদ্রার রিজার্ভ ব্যবস্থাপনার ওপর দুই দিনব্যাপী বিশেষ আন্তর্জাতিক কনফারেন্স।',
    registrationOpen: true
  },
  {
    id: 'econfest-2026',
    titleEn: '15th Annual EconFest & National Economics Olympiad 2026',
    titleBn: '১৫তম বার্ষিক ইকনফেস্ট ও জাতীয় অর্থনীতি অলিম্পিয়াড ২০২৬',
    date: '2026-11-28',
    endDate: '2026-11-30',
    timeEn: '10:00 AM - 08:00 PM BST',
    timeBn: 'সকাল ১০:০০ - রাত ০৮:০০',
    venueEn: 'Social Science Complex & CU Central Field',
    venueBn: 'সমাজ বিজ্ঞান কমপ্লেক্স ও চবি কেন্দ্রীয় মাঠ',
    category: 'fest',
    speakerEn: 'Organized by Chittagong University Economics Club (CUEC)',
    speakerBn: 'আয়োজনে: চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি ক্লাব (CUEC)',
    descriptionEn: 'Flagship nationwide economics event featuring Policy Case Solving, National Economics Olympiad round, Budget Simulation, and Grand Musical Evening.',
    descriptionBn: 'দেশব্যাপী অর্থনীতি শিক্ষার্থীদের জন্য পলিসি কেস সমাধান, জাতীয় অলিম্পিয়াড, বাজেট বিতর্ক ও জমকালো সাংস্কৃতিক উৎসব।',
    registrationOpen: true
  },
  {
    id: 'midterm-bss-8th',
    titleEn: 'Midterm Examination: BSS (Honours) 4th Year, 8th Semester',
    titleBn: 'মিডটার্ম পরীক্ষা: বিএসএস (অনার্স) ৪র্থ বর্ষ, ৮ম সেমিস্টার',
    date: '2026-11-05',
    endDate: '2026-11-12',
    timeEn: '11:00 AM - 01:00 PM BST',
    timeBn: 'সকাল ১১:০০ - দুপুর ০১:০০',
    venueEn: 'Examination Halls 302, 304, Yunus Bhaban',
    venueBn: 'পরীক্ষা হল ৩০২ ও ৩০৪, ইউনূস ভবন',
    category: 'exam',
    descriptionEn: 'Mid-semester written assessments for courses ECON 405 (Economy of Bangladesh), ECON 406 (Behavioral Economics), and ECON 407 (Health Economics).',
    descriptionBn: 'ইকোনমি অব বাংলাদেশ, আচরণগত অর্থনীতি ও স্বাস্থ্য অর্থনীতি কোর্সের সেমিস্টার মধ্যবর্তী লিখিত মূল্যায়ন পরীক্ষা।'
  },
  {
    id: 'workshop-stata-python',
    titleEn: 'Hands-on Quantitative Boot Camp: Econometrics with R & Python',
    titleBn: 'ব্যবহারিক কর্মশালা: আর (R) ও পাইথন দিয়ে আধুনিক ইকোনোমেট্রিক্স মডেলিং',
    date: '2026-12-08',
    timeEn: '02:00 PM - 05:30 PM BST',
    timeBn: 'দুপুর ০২:০০ - বিকাল ০৫:৩০',
    venueEn: 'Departmental Computer & Data Lab (Room 318)',
    venueBn: 'কম্পিউটার ও ডেটা সায়েন্স ল্যাব (কক্ষ ৩১৮)',
    category: 'seminar',
    speakerEn: 'Conducted by Md. Tanvir Hossain (Assistant Professor)',
    speakerBn: 'পরিচালনায়: মো. তানভীর হোসেন (সহকারী অধ্যাপক)',
    descriptionEn: 'Practical computer lab session on web-scraping economic indicators, cleaning micro-data surveys, and running instrumental variable regressions.',
    descriptionBn: 'অর্থনৈতিক ডেটা স্ক্র্যাপিং, মাইক্রো-ডেটা সার্ভে প্রসেসিং এবং ইন্সট্রুমেন্টাল ভেরিয়েবল রিগ্রেশনের সরাসরি ল্যাব প্র্যাকটিস।',
    registrationOpen: true
  },
  {
    id: 'admission-mss-2026',
    titleEn: 'MSS in Economics (Evening & Executive) Application Deadline',
    titleBn: 'এমএসএস (ইভনিং ও প্রফেশনাল) প্রোগ্রামে ভর্তির আবেদনের শেষ তারিখ',
    date: '2026-12-20',
    timeEn: 'Until 11:59 PM BST',
    timeBn: 'রাত ১১:৫৯ পর্যন্ত',
    venueEn: 'Online Application Portal / Department Office',
    venueBn: 'অনলাইন পোর্টাল ও বিভাগীয় অফিস',
    category: 'admission',
    descriptionEn: 'Last date for submitting online application forms for the Spring 2027 intake of Evening Master of Social Sciences in Economics.',
    descriptionBn: 'স্প্রিং ২০২৭ সেশনের জন্য প্রফেশনাল মাস্টার্স প্রোগ্রামে অনলাইনে আবেদনপত্র জমা দেওয়ার চূড়ান্ত সময়সীমা।'
  },
  {
    id: 'victory-day-holiday',
    titleEn: 'National Victory Day (Bijoy Dibos) - University Observance',
    titleBn: 'মহান বিজয় দিবস উপলক্ষে বিশ্ববিদ্যালয়ের বিশেষ আলোচনা ও শ্রদ্ধা নিবেদন',
    date: '2026-12-16',
    timeEn: '08:00 AM - 12:00 PM BST',
    timeBn: 'সকাল ০৮:০০ - দুপুর ১২:০০',
    venueEn: 'CU Central Shaheed Minar & Department Premises',
    venueBn: 'চবি কেন্দ্রীয় শহীদ মিনার ও অর্থনীতি বিভাগ',
    category: 'holiday',
    descriptionEn: 'Wreath-laying ceremony at CU Central Shaheed Minar followed by a memorial lecture on the economic reconstruction of post-liberation Bangladesh.',
    descriptionBn: 'শহীদ মিনারে পুষ্পস্তবক অর্পণ ও স্বাধীনতা-উত্তর যুদ্ধবিধ্বস্ত বাংলাদেশের অর্থনৈতিক পুনর্গঠন বিষয়ক বিশেষ স্মৃতিচারণ।'
  }
];
