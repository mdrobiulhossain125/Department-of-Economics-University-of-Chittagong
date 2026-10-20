export interface StudentClub {
  id: string;
  nameEn: string;
  nameBn: string;
  acronym: string;
  founded: string;
  mottoEn: string;
  mottoBn: string;
  isOfficialStudentClub?: boolean;
  descriptionEn: string;
  descriptionBn: string;
  locationEn: string;
  locationBn: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  website?: string;
  followers?: string;
  following?: string;
  keyEventsEn: string[];
  keyEventsBn: string[];
  achievementsEn?: string[];
  achievementsBn?: string[];
}

export const studentClubs: StudentClub[] = [
  {
    id: 'yes-cu',
    nameEn: "Young Economists' Society – YES",
    nameBn: "ইয়াং ইকোনমিস্টস সোসাইটি – ইয়েস",
    acronym: 'YES',
    founded: '2016',
    isOfficialStudentClub: true,
    mottoEn: 'Empowering Aspiring Economists to Grow & Succeed Together',
    mottoBn: 'অর্থনীতি শিক্ষার্থীদের মেধা বিকাশ ও যৌথ সাফল্যের অঙ্গীকার',
    descriptionEn: "YES is the 'Official Student Club' of the Department of Economics, University of Chittagong dedicated to providing a dynamic platform that empowers aspiring economists to grow and succeed together.",
    descriptionBn: "ইয়াং ইকোনমিস্টস সোসাইটি (YES) চট্টগ্রাম বিশ্ববিদ্যালয়ের অর্থনীতি বিভাগের 'অফিসিয়াল স্টুডেন্ট ক্লাব'। এটি শিক্ষার্থীদের অর্থনৈতিক চিন্তা, গবেষণা, পলিসি সংলাপ ও ক্যারিয়ার বিকাশে একটি সক্রিয় প্ল্যাটফর্ম প্রদান করে।",
    locationEn: 'University of Chittagong, Chittagong, Bangladesh, 4331',
    locationBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়, চট্টগ্রাম, বাংলাদেশ, ৪৩৩১',
    email: 'yes.cu.bd@gmail.com',
    linkedin: 'https://www.linkedin.com/company/yes-cu/',
    facebook: 'https://www.facebook.com/yes.eco.cu',
    keyEventsEn: [
      'Economics Skill Development Bootcamps & STATA/R Training',
      'Policy Roundtables & National Budget Analysis Dialogues',
      'Inter-Batch Case Competitions & Academic Mentorship Series',
      'Career Pathways in Banking, Multilaterals & Research'
    ],
    keyEventsBn: [
      'অর্থনৈতিক দক্ষতা উন্নয়ন বুটক্যাম্প এবং স্টাটা/আর সফটওয়্যার প্রশিক্ষণ',
      'পলিসি গোলটেবিল বৈঠক ও জাতীয় বাজেট পর্যালোচনা আলোচনা',
      'আন্তঃব্যাচ কেস কম্পিটিশন ও একাডেমিক মেন্টরশিপ সিরিজ',
      'ব্যাংকিং, বহুজাতিক সংস্থা ও গবেষণায় ক্যারিয়ার কর্মশালা'
    ],
    achievementsEn: [
      'Official recognized student platform of CU Economics',
      'Extensive student participation across all undergraduate & master cohorts'
    ],
    achievementsBn: [
      'চবি অর্থনীতি বিভাগের একমাত্র অফিশিয়াল শিক্ষার্থী ক্লাব',
      'স্নাতক ও স্নাতকোত্তর শিক্ষার্থীদের সক্রিয় অংশগ্রহণ'
    ]
  },
  {
    id: 'cueesa',
    nameEn: 'Chittagong University Ex-Economics Students Association (CUEESA)',
    nameBn: 'চট্টগ্রাম বিশ্ববিদ্যালয় এক্স-ইকোনমিক্স স্টুডেন্টস অ্যাসোসিয়েশন (CUEESA)',
    acronym: 'CUEESA',
    founded: '1985',
    mottoEn: 'Connecting Generations of Economists Worldwide',
    mottoBn: 'বিশ্বজুড়ে অর্থনীতি গ্র্যাজুয়েটদের মেলবন্ধন ও ভ্রাতৃত্ব',
    descriptionEn: 'A community and organization for former students of the Department of Economics, University of Chittagong. Connecting alumni across governance, banking, diplomatic missions, and global academia.',
    descriptionBn: 'চট্টগ্রাম বিশ্ববিদ্যালয় অর্থনীতি বিভাগের প্রাক্তন শিক্ষার্থীদের সুদৃঢ় প্ল্যাটফর্ম ও ঐতিহ্যবাহী সংগঠন। দেশ-বিদেশের ব্যাংক, প্রশাসন ও গবেষণায় নিয়োজিত অ্যালামনাইদের ঐক্যসূত্র।',
    locationEn: 'Akram Tower (12th Floor), 15/5 Syed Nazrul Islam Sarak, Bijoynagar, Dhaka-1000',
    locationBn: 'আকরাম টাওয়ার (১২তম তলা), ১৫/৫ সৈয়দ নজরুল ইসলাম সড়ক, বিজয়নগর, ঢাকা-১০০০',
    website: 'https://cueesa.org',
    facebook: 'https://www.facebook.com/cueesa',
    followers: '2K',
    following: '49',
    keyEventsEn: [
      'Grand Biennial Alumni Reunion & Networking Gala',
      'Alumni Career Mentorship & Professional Placement Support',
      'Merit & Need-based Scholarships for Current CU Economics Students'
    ],
    keyEventsBn: [
      'গ্র্যান্ড দ্বিবার্ষিক অ্যালামনাই পুনর্মিলনী ও নেটওয়ার্কিং সম্মেলন',
      'বর্তমান শিক্ষার্থীদের জন্য ক্যারিয়ার মেন্টরশিপ ও চাকরির পরামর্শ',
      'অর্থনীতি বিভাগের সুবিধাবঞ্চিত মেধাবী শিক্ষার্থীদের বৃত্তি প্রদান'
    ],
    achievementsEn: [
      'Network of thousands of prominent economists, bankers & civil servants',
      'Established permanent liaison office in Bijoynagar, Dhaka'
    ],
    achievementsBn: [
      'হাজারো অর্থনীতিবিদ, ব্যাংকার ও পদস্থ কর্মকর্তাদের সক্রিয় নেটওয়ার্ক',
      'ঢাকার বিজয়নগরে নিজস্ব স্থায়ী যোগাযোগ কেন্দ্র'
    ]
  }
];
