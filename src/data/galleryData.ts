export interface GalleryItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'campus' | 'academic' | 'events' | 'convocation' | 'tours';
  imageUrl: string;
  captionEn: string;
  captionBn: string;
  date: string;
}

export const galleryCategories = [
  { id: 'all', labelEn: 'All Photos', labelBn: 'সকল ছবি' },
  { id: 'campus', labelEn: 'Campus & Yunus Bhaban', labelBn: 'ক্যাম্পাস ও ইউনূস ভবন' },
  { id: 'academic', labelEn: 'Seminars & Research', labelBn: 'সেমিনার ও গবেষণা' },
  { id: 'events', labelEn: 'EconFest & Clubs', labelBn: 'ইকনফেস্ট ও ক্লাব' },
  { id: 'convocation', labelEn: 'Convocation & Alumni', labelBn: 'সমাবর্তন ও অ্যালামনাই' },
  { id: 'tours', labelEn: 'Fieldwork & Study Tours', labelBn: 'ফিল্ডওয়ার্ক ও শিক্ষা সফর' },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'yunus-bhaban-main',
    titleEn: 'Dr. Muhammad Yunus Bhaban - Faculty of Social Sciences',
    titleBn: 'ড. মুহাম্মদ ইউনূস ভবন - সমাজ বিজ্ঞান অনুষদ',
    category: 'campus',
    imageUrl: '/assets/aistudio/image_79340deb.png',
    captionEn: 'The landmark Dr. Muhammad Yunus Bhaban at the University of Chittagong, home to the Department of Economics and honoring our former department head and Nobel Laureate.',
    captionBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়ের ঐতিহাসিক ড. মুহাম্মদ ইউনূস ভবন (সমাজ বিজ্ঞান অনুষদ), যেখানে অর্থনীতি বিভাগ অবস্থিত।',
    date: 'March 2026'
  },
  {
    id: 'international-econ-conf',
    titleEn: 'International Conference on Applied Macroeconomics',
    titleBn: 'ফলিত সামষ্টিক অর্থনীতি বিষয়ক আন্তর্জাতিক সম্মেলন',
    category: 'academic',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Keynote session at the Faculty of Social Sciences Auditorium with leading delegates and international economists.',
    captionBn: 'অনুষদ মিলনায়তনে দেশী-বিদেশী গবেষক ও অর্থনীতিবিদদের অংশগ্রহণে অনুষ্ঠিত আন্তর্জাতিক সম্মেলনের মূল অধিবেশন।',
    date: 'January 2026'
  },
  {
    id: 'econfest-grand-gala',
    titleEn: 'Annual EconFest & Policy Olympiad',
    titleBn: 'বার্ষিক ইকনফেস্ট ও পলিসি অলিম্পিয়াড',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Enthusiastic students celebrating at the 14th Annual EconFest organized by the Chittagong University Economics Club.',
    captionBn: 'চবি অর্থনীতি ক্লাব কর্তৃক আয়োজিত ১৪তম বার্ষিক ইকনফেস্টে শিক্ষার্থীদের মিলনমেলা ও সাংস্কৃতিক পরিবেশনা।',
    date: 'December 2025'
  },
  {
    id: 'department-library',
    titleEn: 'Departmental Seminar Library & Research Archive',
    titleBn: 'বিভাগীয় সেমিনার লাইব্রেরি ও গবেষণা আর্কাইভ',
    category: 'academic',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Scholars researching at the Department Seminar Library housing over 25,000 journals, volumes, and research monographs.',
    captionBn: '২৫,০০০-এর বেশি বই ও জার্নালসমৃদ্ধ বিভাগের আধুনিক সেমিনার লাইব্রেরিতে গবেষণারত শিক্ষার্থীবৃন্দ।',
    date: 'November 2025'
  },
  {
    id: 'convocation-graduates',
    titleEn: 'University Convocation & Honors Reception',
    titleBn: 'বিশ্ববিদ্যালয় সমাবর্তন ও গ্র্যাজুয়েশন সংবর্ধনা',
    category: 'convocation',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Economics graduates celebrating their degree completion at the University of Chittagong Convocation.',
    captionBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়ের বর্ণাঢ্য সমাবর্তনে অর্থনীতি বিভাগের গ্র্যাজুয়েটদের আনন্দঘন মুহূর্ত।',
    date: 'February 2025'
  },
  {
    id: 'coastal-field-survey',
    titleEn: 'Empirical Field Survey & Rural Research in Jobra',
    titleBn: 'ঐতিহাসিক জোবরা গ্রামে শিক্ষার্থীদের প্রায়োগিক ফিল্ডওয়ার্ক',
    category: 'tours',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Economics students conducting household surveys on micro-savings and rural financial health.',
    captionBn: 'গ্রামীণ পরিবারের সঞ্চয় ও আর্থিক অন্তর্ভুক্তি পর্যালোচনায় শিক্ষার্থীদের সরেজমিন তথ্য সংগ্রহ কার্যক্রম।',
    date: 'October 2025'
  },
  {
    id: 'cu-shuttle-journey',
    titleEn: 'The Historic Chittagong University Shuttle Train',
    titleBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়ের প্রাণ—ঐতিহাসিক শাটল ট্রেন',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'The iconic CU Shuttle Train which transports thousands of students and faculty between Chittagong city and the green campus daily.',
    captionBn: 'চট্টগ্রাম শহর থেকে ক্যাম্পাসমুখী শিক্ষার্থীদের চিরচেনা বাহন—বিশ্বখ্যাত চবি শাটল ট্রেন।',
    date: 'September 2025'
  },
  {
    id: 'epl-championship',
    titleEn: 'Econ Premier League (EPL) Championship Final',
    titleBn: 'ইকন প্রিমিয়ার লিগ (ইপিএল) ফাইনাল ম্যাচ',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1531415074868-036b1c57e359?auto=format&fit=crop&w=1200&q=80',
    captionEn: 'Inter-batch cricket championship trophy presentation at the central university sports ground.',
    captionBn: 'বিশ্ববিদ্যালয়ের কেন্দ্রীয় খেলার মাঠে অনুষ্ঠিত ব্যাচভিত্তিক ক্রিকেট টুর্নামেন্টের ট্রফি বিতরণী অনুষ্ঠান।',
    date: 'March 2025'
  }
];
