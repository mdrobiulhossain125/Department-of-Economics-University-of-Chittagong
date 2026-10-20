export interface FacultyMember {
  id: string;
  nameEn: string;
  nameBn: string;
  designationEn: string;
  designationBn: string;
  rankOrder: number;
  category: 'professor' | 'associate' | 'assistant' | 'lecturer';
  onStudyLeave?: boolean;
  degreesEn?: string;
  degreesBn?: string;
  specializationEn: string[];
  specializationBn: string[];
  email: string;
  office: string;
  bioEn?: string;
  bioBn?: string;
}

export const facultyData: FacultyMember[] = [
  // 1. PROFESSORS
  {
    id: 'dr-amirul-islam',
    nameEn: 'Dr. Amirul Islam',
    nameBn: 'ড. আমিরুল ইসলাম',
    designationEn: 'Chairman & Professor',
    designationBn: 'সভাপতি ও অধ্যাপক',
    rankOrder: 1,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics, MSS in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি), এমএসএস (অর্থনীতি)',
    specializationEn: [
      'International Trade',
      'Regional Integration'
    ],
    specializationBn: [
      'আন্তর্জাতিক বাণিজ্য',
      'আঞ্চলিক অর্থনৈতিক সংহতি'
    ],
    email: 'amirul.econ@cu.ac.bd',
    office: 'Chairman Office (Room 301), 3rd Floor, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Chairman of the Department of Economics, University of Chittagong. Specializes in international trade architecture and South Asian regional integration dynamics.',
    bioBn: 'চট্টগ্রাম বিশ্ববিদ্যালয়ের অর্থনীতি বিভাগের সম্মানিত সভাপতি ও অধ্যাপক। আন্তর্জাতিক বাণিজ্য নীতি ও আঞ্চলিক অর্থনৈতিক সহযোগিতা বিশেষজ্ঞ।'
  },
  {
    id: 'dr-mohammad-abul-hossain',
    nameEn: 'Dr. Mohammad Abul Hossain',
    nameBn: 'ড. মোহাম্মদ আবুল হোসেন',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 2,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Macroeconomics',
      'International Trade',
      'Applied Econometrics',
      'Economic Policy Reforms',
      'Growth, Efficiency, Income Distribution and Poverty',
      'Human Capital, Growth and Productivity',
      'Women and Development'
    ],
    specializationBn: [
      'সামষ্টিক অর্থনীতি',
      'আন্তর্জাতিক বাণিজ্য',
      'ফলিত ইকোনোমেট্রিক্স',
      'অর্থনৈতিক নীতি সংস্কার',
      'প্রবৃদ্ধি, দক্ষতা, আয় বণ্টন ও দারিদ্র্য',
      'মানব মূলধন, প্রবৃদ্ধি ও উৎপাদনশীলতা',
      'নারী ও উন্নয়ন'
    ],
    email: 'abul.hossain@cu.ac.bd',
    office: 'Room 303, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Senior Professor with decades of empirical research in macroeconomic policy reforms, human capital formation, and poverty eradication in South Asia.',
    bioBn: 'সামষ্টিক অর্থনৈতিক সংস্কার, মানবসম্পদ উন্নয়ন ও দারিদ্র্য বিমোচনে দীর্ঘ অভিজ্ঞতাসম্পন্ন প্রবীণ অধ্যাপক ও গবেষক।'
  },
  {
    id: 'dr-mudabber-ahmed',
    nameEn: 'Dr. Mudabber Ahmed',
    nameBn: 'ড. মুদাব্বের আহমেদ',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 3,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Macroeconomics',
      'Monetary Economics',
      'Econometrics'
    ],
    specializationBn: [
      'সামষ্টিক অর্থনীতি',
      'মুদ্রা অর্থনীতি',
      'ইকোনোমেট্রিক্স'
    ],
    email: 'mudabber.ahmed@cu.ac.bd',
    office: 'Room 304, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Expert in monetary economics, central banking transmission channels, and structural macroeconomic modeling.',
    bioBn: 'মুদ্রানীতি, আর্থিক অর্থনীতি ও ইকোনোমেট্রিক মডেলিংয়ের বিশিষ্ট অধ্যাপক।'
  },
  {
    id: 'dr-md-alauddin-majumder',
    nameEn: 'Dr. Md. Alauddin Majumder',
    nameBn: 'ড. মো. আলাউদ্দিন মজুমদার',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 4,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Microeconomics',
      'Mathematical Economics',
      'Econometrics',
      'Labor Economics'
    ],
    specializationBn: [
      'ব্যষ্টিক অর্থনীতি',
      'গাণিতিক অর্থনীতি',
      'ইকোনোমেট্রিক্স',
      'শ্রম অর্থনীতি'
    ],
    email: 'alauddin.majumder@cu.ac.bd',
    office: 'Room 305, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Focuses on mathematical foundations of microeconomic theory, labor market equilibrium, and econometric testing.',
    bioBn: 'গাণিতিক অর্থনীতি, শ্রমবাজার ও ইকোনোমেট্রিক্স বিশেষজ্ঞ অধ্যাপক।'
  },
  {
    id: 'dr-mohammed-saiful-islam',
    nameEn: 'Dr. Mohammed Saiful Islam',
    nameBn: 'ড. মোহাম্মদ সাইফুল ইসলাম',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 5,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Microeconomics and Macroeconomics',
      'Business Mathematics',
      'Managerial Economics',
      'Business Statistics',
      'Econometrics'
    ],
    specializationBn: [
      'ব্যষ্টিক ও সামষ্টিক অর্থনীতি',
      'ব্যবসায় গণিত',
      'ব্যবস্থাপনা অর্থনীতি',
      'ব্যবসায় পরিসংখ্যান',
      'ইকোনোমেট্রিক্স'
    ],
    email: 'saiful.islam@cu.ac.bd',
    office: 'Room 306, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Researches business statistics, managerial decision theory, and empirical micro/macro econometric models.',
    bioBn: 'ব্যবস্থাপনা অর্থনীতি, পরিসংখ্যান ও আধুনিক অর্থনৈতিক মডেলিংয়ের অভিজ্ঞ শিক্ষক।'
  },
  {
    id: 'dr-mohammad-tarequl-hasan-chowdhury',
    nameEn: 'Dr. Mohammad Tarequl Hasan Chowdhury',
    nameBn: 'ড. মোহাম্মদ তরিকুল হাসান চৌধুরী',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 6,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'International Macroeconomics',
      'Development Economics',
      'Poverty, Inequality and Growth',
      'Economic Geography',
      'Microfinance'
    ],
    specializationBn: [
      'আন্তর্জাতিক সামষ্টিক অর্থনীতি',
      'উন্নয়ন অর্থনীতি',
      'দারিদ্র্য, বৈষম্য ও প্রবৃদ্ধি',
      'অর্থনৈতিক ভূগোল',
      'ক্ষুদ্রঅর্থায়ন'
    ],
    email: 'tarequl.hasan@cu.ac.bd',
    office: 'Room 307, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Expert on development economics, spatial inequality, microcredit systems, and international trade dynamics.',
    bioBn: 'উন্নয়ন অর্থনীতি, স্থানিক বৈষম্য ও ক্ষুদ্রঋণ কাঠামোর বিশিষ্ট গবেষক।'
  },
  {
    id: 'mohammad-nur-nobi',
    nameEn: 'Mohammad Nur Nobi',
    nameBn: 'মোহাম্মদ নূর নবী',
    designationEn: 'Professor (On Study Leave)',
    designationBn: 'অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 7,
    category: 'professor',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Environmental Economics',
      'Sustainable Development',
      'Econometrics',
      'International Trade'
    ],
    specializationBn: [
      'পরিবেশ অর্থনীতি',
      'টেকসই উন্নয়ন',
      'ইকোনোমেট্রিক্স',
      'আন্তর্জাতিক বাণিজ্য'
    ],
    email: 'nur.nobi@cu.ac.bd',
    office: 'Room 308, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Currently pursuing advanced doctoral research in environmental economics and sustainable development policy.',
    bioBn: 'বর্তমানে পরিবেশ অর্থনীতি ও টেকসই উন্নয়ন নীতিতে উচ্চতর গবেষণারত।'
  },
  {
    id: 'dr-abul-hasanat-m-salimullah',
    nameEn: 'Dr. Abul Hasanat M. Salimullah',
    nameBn: 'ড. আবুল হাসানাত এম. সলিমুল্লাহ',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 8,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Labor Economics',
      'Financial Economics',
      'Applied Econometrics'
    ],
    specializationBn: [
      'শ্রম অর্থনীতি',
      'আর্থিক অর্থনীতি',
      'ফলিত ইকোনোমেট্রিক্স'
    ],
    email: 'salimullah.econ@cu.ac.bd',
    office: 'Room 309, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Specializes in labor market mobility, corporate financial structures, and applied econometrics.',
    bioBn: 'শ্রমবাজার গতিশীলতা ও আর্থিক অর্থনীতির অধ্যাপক ও গবেষক।'
  },
  {
    id: 'dr-mohammad-taslim-uddin',
    nameEn: 'Dr. Mohammad Taslim Uddin',
    nameBn: 'ড. মোহাম্মদ তাসলিম উদ্দিন',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 9,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Public-Private Partnerships',
      'Population Health'
    ],
    specializationBn: [
      'পাবলিক-প্রাইভেট পার্টনারশিপ (পিপিপি)',
      'জনসংখ্যা ও স্বাস্থ্য অর্থনীতি'
    ],
    email: 'taslim.uddin@cu.ac.bd',
    office: 'Room 310, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Focuses on infrastructure finance through Public-Private Partnerships (PPP) and population health economics.',
    bioBn: 'পাবলিক-প্রাইভেট পার্টনারশিপ এবং জনসংখ্যা স্বাস্থ্য নীতি গবেষক।'
  },
  {
    id: 'dr-naim-uddin-hasan-chy',
    nameEn: 'Dr. Naim Uddin Hasan Chy',
    nameBn: 'ড. নাঈম উদ্দিন হাসান চৌধুরী',
    designationEn: 'Professor',
    designationBn: 'অধ্যাপক',
    rankOrder: 10,
    category: 'professor',
    degreesEn: 'Ph.D. in Economics',
    degreesBn: 'পিএইচডি (অর্থনীতি)',
    specializationEn: [
      'Health Economics',
      'Labor Economics'
    ],
    specializationBn: [
      'স্বাস্থ্য অর্থনীতি',
      'শ্রম অর্থনীতি'
    ],
    email: 'naim.chy@cu.ac.bd',
    office: 'Room 311, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Researches health economics financing, healthcare equity, and employment economics in Bangladesh.',
    bioBn: 'স্বাস্থ্য সুরক্ষা অর্থায়ন ও শ্রম অর্থনীতি বিশেষজ্ঞ।'
  },

  // 2. ASSOCIATE PROFESSORS
  {
    id: 'mohammad-morshedul-hoque',
    nameEn: 'Mohammad Morshedul Hoque',
    nameBn: 'মোহাম্মদ মোরশেদুল হক',
    designationEn: 'Associate Professor',
    designationBn: 'সহযোগী অধ্যাপক',
    rankOrder: 11,
    category: 'associate',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Environmental Economics',
      'Microeconomics',
      'Health Economics',
      'Econometrics',
      'Resource and Environmental Economics',
      'Public Sector Economics and Policy'
    ],
    specializationBn: [
      'পরিবেশ অর্থনীতি',
      'ব্যষ্টিক অর্থনীতি',
      'স্বাস্থ্য অর্থনীতি',
      'ইকোনোমেট্রিক্স',
      'সম্পদ ও পরিবেশ অর্থনীতি',
      'পাবলিক সেক্টর অর্থনীতি ও পলিসি'
    ],
    email: 'morshedul.hoque@cu.ac.bd',
    office: 'Room 312, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Extensive research in environmental policy, public sector economics, resource valuation, and health systems.',
    bioBn: 'পরিবেশ নীতি, পাবলিক সেক্টর অর্থনীতি এবং প্রাকৃতিক সম্পদ ব্যবস্থাপনার গবেষক।'
  },
  {
    id: 'zulan-dhar',
    nameEn: 'Zulan Dhar',
    nameBn: 'ঝুলন ধর',
    designationEn: 'Associate Professor (On Study Leave)',
    designationBn: 'সহযোগী অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 12,
    category: 'associate',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Public Finance',
      'Resource and Environmental Economics',
      'International Economics',
      'Applied Econometrics'
    ],
    specializationBn: [
      'সরকারি অর্থব্যবস্থা',
      'সম্পদ ও পরিবেশ অর্থনীতি',
      'আন্তর্জাতিক অর্থনীতি',
      'ফলিত ইকোনোমেট্রিক্স'
    ],
    email: 'zulan.dhar@cu.ac.bd',
    office: 'Room 313, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Currently pursuing higher doctoral research abroad in public finance and natural resource management.',
    bioBn: 'উচ্চশিক্ষার্থে বর্তমানে শিক্ষা ছুটিতে গবেষণারত।'
  },
  {
    id: 'mallika-roy',
    nameEn: 'Mallika Roy',
    nameBn: 'মল্লিকা রায়',
    designationEn: 'Associate Professor (On Study Leave)',
    designationBn: 'সহযোগী অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 13,
    category: 'associate',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Mathematical Economics',
      'Development Economics',
      'International Economics',
      'Macroeconomics',
      'Green Economy'
    ],
    specializationBn: [
      'গাণিতিক অর্থনীতি',
      'উন্নয়ন অর্থনীতি',
      'আন্তর্জাতিক অর্থনীতি',
      'সামষ্টিক অর্থনীতি',
      'সবুজ অর্থনীতি'
    ],
    email: 'mallika.roy@cu.ac.bd',
    office: 'Room 314, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Researching green economy frameworks and mathematical growth models while on study leave.',
    bioBn: 'সবুজ অর্থনীতি ও গাণিতিক প্রবৃদ্ধি মডেলে উচ্চতর গবেষণারত।'
  },
  {
    id: 'tonmoyee-hasan-ayon',
    nameEn: 'Tonmoyee Hasan AYON',
    nameBn: 'তন্ময়ী হাসান অয়ন',
    designationEn: 'Associate Professor',
    designationBn: 'সহযোগী অধ্যাপক',
    rankOrder: 14,
    category: 'associate',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Macroeconomics',
      'Development Economics',
      'Women Empowerment'
    ],
    specializationBn: [
      'সামষ্টিক অর্থনীতি',
      'উন্নয়ন অর্থনীতি',
      'নারী ক্ষমতায়ন'
    ],
    email: 'tonmoyee.ayon@cu.ac.bd',
    office: 'Room 315, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Specializes in women empowerment indicators, gender budgeting, and inclusive development economics.',
    bioBn: 'নারী ক্ষমতায়ন ও উন্নয়ন অর্থনীতির সহযোগী অধ্যাপক।'
  },

  // 3. ASSISTANT PROFESSORS
  {
    id: 'mohammad-mamun-morshed-bhuyan',
    nameEn: 'Mohammad Mamun Morshed Bhuyan',
    nameBn: 'মোহাম্মদ মামুন মোরশেদ ভূঁইয়া',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 15,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Macroeconomics',
      'Econometrics',
      'Mathematical Economics'
    ],
    specializationBn: [
      'সামষ্টিক অর্থনীতি',
      'ইকোনোমেট্রিক্স',
      'গাণিতিক অর্থনীতি'
    ],
    email: 'mamun.bhuyan@cu.ac.bd',
    office: 'Room 317, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Teaches advanced mathematical economics and econometric quantitative estimation.',
    bioBn: 'গাণিতিক অর্থনীতি ও ইকোনোমেট্রিক্সের সহকারী অধ্যাপক।'
  },
  {
    id: 'mohammad-mohiuddin',
    nameEn: 'Mohammad Mohiuddin',
    nameBn: 'মোহাম্মদ মহিউদ্দিন',
    designationEn: 'Assistant Professor (On Study Leave)',
    designationBn: 'সহকারী অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 16,
    category: 'assistant',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Econometrics',
      'Development Economics',
      'Mathematical Economics',
      'Environmental Economics'
    ],
    specializationBn: [
      'ইকোনোমেট্রিক্স',
      'উন্নয়ন অর্থনীতি',
      'গাণিতিক অর্থনীতি',
      'পরিবেশ অর্থনীতি'
    ],
    email: 'mohiuddin.econ@cu.ac.bd',
    office: 'Room 319, Dr. Muhammad Yunus Bhaban',
    bioEn: 'On study leave pursuing doctoral research in econometric modeling of environmental degradation.',
    bioBn: 'পরিবেশ অর্থনীতি ও ইকোনোমেট্রিক্সে উচ্চতর গবেষণারত।'
  },
  {
    id: 'sanjay-chandra-roy',
    nameEn: 'Sanjay Chandra Roy',
    nameBn: 'সঞ্জয় চন্দ্র রায়',
    designationEn: 'Assistant Professor (On Study Leave)',
    designationBn: 'সহকারী অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 17,
    category: 'assistant',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Economics & Policy'],
    specializationBn: ['অর্থনীতি ও নীতি বিশ্লেষণ'],
    email: 'sanjay.roy@cu.ac.bd',
    office: 'Room 320, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Currently abroad on study leave for advanced academic qualifications.',
    bioBn: 'উচ্চশিক্ষা ও গবেষণার উদ্দেশ্যে বর্তমানে শিক্ষা ছুটিতে আছেন।'
  },
  {
    id: 'md-safiullah-kayes',
    nameEn: 'Md. Safiullah Kayes',
    nameBn: 'মো. সফিউল্লাহ কায়েস',
    designationEn: 'Assistant Professor (Study Leave)',
    designationBn: 'সহকারী অধ্যাপক (শিক্ষা ছুটিতে)',
    rankOrder: 18,
    category: 'assistant',
    onStudyLeave: true,
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Macroeconomics',
      'Banking and Finance',
      'Econometrics',
      'Environmental Economics',
      'Agricultural Economics'
    ],
    specializationBn: [
      'সামষ্টিক অর্থনীতি',
      'ব্যাংকিং ও ফাইন্যান্স',
      'ইকোনোমেট্রিক্স',
      'পরিবেশ অর্থনীতি',
      'কৃষি অর্থনীতি'
    ],
    email: 'safiullah.kayes@cu.ac.bd',
    office: 'Room 321, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Specializes in agricultural finance, banking risk, and empirical macroeconomics.',
    bioBn: 'ব্যাংকিং, কৃষি অর্থনীতি ও ফলিত ইকোনোমেট্রিক্স গবেষক।'
  },
  {
    id: 'md-saifuddin',
    nameEn: 'Md. Saifuddin',
    nameBn: 'মো. সাইফুদ্দিন',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 19,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Econometrics',
      'Development Economics',
      'Environmental Economics'
    ],
    specializationBn: [
      'ইকোনোমেট্রিক্স',
      'উন্নয়ন অর্থনীতি',
      'পরিবেশ অর্থনীতি'
    ],
    email: 'saifuddin.econ@cu.ac.bd',
    office: 'Room 322, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Focuses on empirical econometrics applied to regional economic development and environmental issues.',
    bioBn: 'ইকোনোমেট্রিক্স ও উন্নয়ন অর্থনীতির সহকারী অধ্যাপক।'
  },
  {
    id: 'runa-saha',
    nameEn: 'Runa Saha',
    nameBn: 'রুনা সাহা',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 20,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Applied Economics & Policy'],
    specializationBn: ['ফলিত অর্থনীতি ও নীতি'],
    email: 'runa.saha@cu.ac.bd',
    office: 'Room 323, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Faculty member in Department of Economics, mentoring undergraduate and graduate cohorts.',
    bioBn: 'অর্থনীতি বিভাগের সহকারী অধ্যাপক ও গবেষক।'
  },
  {
    id: 'afm-fazley-rabbi-chowdhury',
    nameEn: 'A.F.M. Fazley Rabbi Chowdhury',
    nameBn: 'এ. এফ. এম. ফজলে রাব্বি চৌধুরী',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 21,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: [
      'Mathematical Economics'
    ],
    specializationBn: [
      'গাণিতিক অর্থনীতি'
    ],
    email: 'fazley.rabbi@cu.ac.bd',
    office: 'Room 324, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Specializes in mathematical economic formulation, optimization modeling, and analytical methodologies.',
    bioBn: 'গাণিতিক অর্থনীতি ও অপটিমাইজেশন মডেলিংয়ের সহকারী অধ্যাপক।'
  },
  {
    id: 'khaleda-begum-maiful',
    nameEn: 'Khaleda Begum Maiful',
    nameBn: 'খালেদা বেগম মাইফুল',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 22,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Economic Studies'],
    specializationBn: ['অর্থনৈতিক গবেষণা'],
    email: 'khaleda.maiful@cu.ac.bd',
    office: 'Room 325, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Engaged in teaching core economic subjects and academic student mentoring.',
    bioBn: 'অর্থনীতি বিভাগের সম্মানিত সহকারী অধ্যাপক।'
  },
  {
    id: 'kazi-mezbah-uddin-ahamad',
    nameEn: 'Kazi Mezbah Uddin Ahamad',
    nameBn: 'কাজী মেজবাহ উদ্দিন আহমেদ',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 23,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Economic Analytics'],
    specializationBn: ['অর্থনৈতিক বিশ্লেষণ'],
    email: 'mezbah.ahamad@cu.ac.bd',
    office: 'Room 326, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Specializes in economic analytics and undergraduate seminar facilitation.',
    bioBn: 'অর্থনীতি বিভাগের সহকারী অধ্যাপক।'
  },
  {
    id: 'noushin-farjana-huda-chowdhury',
    nameEn: 'Noushin Farjana Huda Chowdhury',
    nameBn: 'নওশিন ফারজানা হুদা চৌধুরী',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 24,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Socio-Economic Policy'],
    specializationBn: ['আর্থ-সামাজিক নীতি'],
    email: 'noushin.chowdhury@cu.ac.bd',
    office: 'Room 327, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Active in development and socio-economic policy research and advising.',
    bioBn: 'অর্থনীতি বিভাগের সহকারী অধ্যাপক।'
  },
  {
    id: 'fatema-akhter-hiramoni',
    nameEn: 'Fatema Akhter Hiramoni',
    nameBn: 'ফাতেমা আক্তার হীরামনি',
    designationEn: 'Assistant Professor',
    designationBn: 'সহকারী অধ্যাপক',
    rankOrder: 25,
    category: 'assistant',
    degreesEn: 'MSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি)',
    specializationEn: ['Economic Development'],
    specializationBn: ['অর্থনৈতিক উন্নয়ন'],
    email: 'fatema.hiramoni@cu.ac.bd',
    office: 'Room 328, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Focuses on economic development issues and student academic guidance.',
    bioBn: 'অর্থনীতি বিভাগের সহকারী অধ্যাপক।'
  },

  // 4. LECTURER
  {
    id: 'mohammad-aftab-hossain',
    nameEn: 'Mohammad Aftab Hossain',
    nameBn: 'মোহাম্মদ আফতাব হোসেন',
    designationEn: 'Lecturer',
    designationBn: 'প্রভাষক',
    rankOrder: 26,
    category: 'lecturer',
    degreesEn: 'MSS in Economics, BSS in Economics',
    degreesBn: 'এমএসএস (অর্থনীতি), বিএসএস (অর্থনীতি)',
    specializationEn: ['Principles of Economics'],
    specializationBn: ['মৌলিক অর্থনীতি'],
    email: 'aftab.econ@cu.ac.bd',
    office: 'Room 329, Dr. Muhammad Yunus Bhaban',
    bioEn: 'Lecturer delivering foundational undergraduate courses in economic theory.',
    bioBn: 'অর্থনীতি বিভাগের সম্মানিত প্রভাষক।'
  }
];
