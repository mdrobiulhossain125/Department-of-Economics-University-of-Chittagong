export interface NoticeItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'academic' | 'exam' | 'admission' | 'scholarship' | 'general';
  date: string;
  isUrgent?: boolean;
  contentEn: string;
  contentBn: string;
  attachmentName?: string;
}

export const noticesData: NoticeItem[] = [
  {
    id: 'notice-1',
    titleEn: 'Schedule of BSS (Honours) 4th Year Final Examination 2026',
    titleBn: 'বিএসএস (অনার্স) ৪র্থ বর্ষ চূড়ান্ত পরীক্ষা ২০২৬-এর সংশোধিত রুটিন',
    category: 'exam',
    date: '2026-10-18',
    isUrgent: true,
    contentEn: 'The revised examination schedule for BSS 4th Year 8th Semester has been published. All examinees must collect their admit cards from Room 302 by October 30.',
    contentBn: 'বিএসএস ৪র্থ বর্ষ ৮ম সেমিস্টার চূড়ান্ত পরীক্ষার সংশোধিত রুটিন প্রকাশিত হয়েছে। সকল পরীক্ষার্থীকে ৩০ অক্টোবরের মধ্যে বিভাগীয় অফিস থেকে প্রবেশপত্র সংগ্রহের নির্দেশ দেওয়া হচ্ছে।',
    attachmentName: 'BSS_4th_Year_Exam_Routine_2026.pdf'
  },
  {
    id: 'notice-2',
    titleEn: 'Call for Papers: Chittagong University Journal of Economics (CUJE) Vol. 29',
    titleBn: 'চট্টগ্রাম বিশ্ববিদ্যালয় জার্নাল অব ইকোনমিক্স (CUJE)-এর জন্য প্রবন্ধ আহ্বান',
    category: 'academic',
    date: '2026-10-14',
    contentEn: 'Manuscripts on empirical, theoretical, and policy economics are invited for publication in the upcoming peer-reviewed issue of CUJE. Submission deadline: December 31, 2026.',
    contentBn: 'চবি জার্নাল অব ইকোনমিক্সের ২৯তম ভলিউমের জন্য তাত্ত্বিক ও প্রায়োগিক অর্থনীতির মৌলিক গবেষণাপত্র আহ্বান করা যাচ্ছে। জমা দেওয়ার শেষ তারিখ: ৩১ ডিসেম্বর ২০২৬।',
    attachmentName: 'CUJE_Call_For_Papers_Guidelines.pdf'
  },
  {
    id: 'notice-3',
    titleEn: 'Applications Open: Dr. Muhammad Yunus Merit Scholarship 2026-27',
    titleBn: 'ড. মুহাম্মদ ইউনূস মেধা বৃত্তি ২০২৬-২৭-এর জন্য আবেদন আহ্বান',
    category: 'scholarship',
    date: '2026-10-10',
    contentEn: 'Merit-based scholarships will be awarded to top-ranking 2nd and 3rd year undergraduate economics scholars with high CGPA and research involvement.',
    contentBn: 'অর্থনীতি বিভাগের ২য় ও ৩য় বর্ষের সর্বোচ্চ ফলাফলধারী ও গবেষণায় সক্রিয় শিক্ষার্থীদের জন্য মেধা বৃত্তির আবেদন গ্রহণ চলছে।',
    attachmentName: 'Yunus_Merit_Scholarship_Form.pdf'
  },
  {
    id: 'notice-4',
    titleEn: 'Winter Semester Registration & Course Advising Protocol',
    titleBn: 'উইন্টার সেমিস্টার ২০২৭ কোর্স রেজিস্ট্রেশন ও অ্যাডভাইজিং নির্দেশনা',
    category: 'academic',
    date: '2026-10-05',
    contentEn: 'Students are advised to meet their designated batch academic advisers at Dr. Muhammad Yunus Bhaban to finalize course selections.',
    contentBn: 'সকল বর্ষের শিক্ষার্থীদের স্ব স্ব ব্যাচ অ্যাডভাইজারের সাথে পরামর্শক্রমে কোর্স রেজিস্ট্রেশন সম্পন্ন করার জন্য অনুরোধ করা হলো।',
    attachmentName: 'Course_Advising_Schedule.pdf'
  }
];
