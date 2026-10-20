export interface ResearchPaper {
  id: string;
  titleEn: string;
  titleBn: string;
  authorsEn: string[];
  authorsBn: string[];
  journalEn: string;
  year: number;
  type: 'journal' | 'working_paper' | 'book' | 'policy_brief';
  abstractEn: string;
  abstractBn: string;
  doi?: string;
  downloadUrl?: string;
  keywordsEn: string[];
  keywordsBn: string[];
}

export interface ResearchCenter {
  id: string;
  nameEn: string;
  nameBn: string;
  directorEn: string;
  directorBn: string;
  descriptionEn: string;
  descriptionBn: string;
  focusAreasEn: string[];
  focusAreasBn: string[];
}

export const researchCenters: ResearchCenter[] = [
  {
    id: 'center-env-econ',
    nameEn: 'Center for Environmental & Natural Resource Economics (CENRE)',
    nameBn: 'পরিবেশ ও প্রাকৃতিক সম্পদ অর্থনীতি গবেষণা কেন্দ্র',
    directorEn: 'Prof. Dr. Nargis Sultana',
    directorBn: 'অধ্যাপক ড. নারগিস সুলতানা',
    descriptionEn: 'Dedicated to studying the socio-economic impacts of climate vulnerability, coastal salinity, carbon forestry in Chittagong Hill Tracts, and coastal resource management.',
    descriptionBn: 'উপকূলীয় লবণাক্ততা, চট্টগ্রাম পার্বত্য অঞ্চলের বন ব্যবস্থাপনা এবং জলবায়ু পরিবর্তনের আর্থ-সামাজিক প্রভাব নিরূপণে গবেষণারত বিশেষায়িত কেন্দ্র।',
    focusAreasEn: ['Climate Change Economics', 'Coastal Resource Valuation', 'Ecosystem Services', 'Disaster Resilience'],
    focusAreasBn: ['জলবায়ু অর্থনীতি', 'উপকূলীয় সম্পদ মূল্যায়ন', 'বাস্তুতন্ত্র সেবা', 'দুর্যোগ সহনশীলতা']
  },
  {
    id: 'center-dev-policy',
    nameEn: 'Bureau of Economic Research & Policy Modeling (BERPM)',
    nameBn: 'অর্থনৈতিক গবেষণা ও নীতি মডেলিং ব্যুরো',
    directorEn: 'Prof. Dr. Mohammad Saiful Islam',
    directorBn: 'অধ্যাপক ড. মোহাম্মদ সাইফুল ইসলাম',
    descriptionEn: 'Provides empirical evidence, computable general equilibrium (CGE) modeling, and macro-forecasting for national policy institutions including Planning Commission.',
    descriptionBn: 'জাতীয় পরিকল্পনা কমিশন ও অর্থ মন্ত্রণালয়ের জন্য প্রায়োগিক অর্থনীতি ও সিজিই (CGE) মডেলভিত্তিক নীতিনির্ধারণী গবেষণা পরিচালনা করে।',
    focusAreasEn: ['Macroeconomic Forecasting', 'Tax & Fiscal Architecture', 'Trade & LDC Graduation', 'Labor Markets'],
    focusAreasBn: ['সামষ্টিক অর্থনৈতিক পূর্বাভাস', 'রাজস্ব কাঠামো', 'বাণিজ্য নীতি', 'শ্রমবাজার']
  }
];

export const publicationsData: ResearchPaper[] = [
  {
    id: 'pub-1',
    titleEn: 'Evaluating Monetary Transmission Lags and Output Growth in Emerging South Asia',
    titleBn: 'দক্ষিণ এশিয়ার উদীয়মান অর্থনীতিতে মুদ্রানীতি সঞ্চালন বিলম্ব ও প্রবৃদ্ধি মূল্যায়ন',
    authorsEn: ['Prof. Dr. Mohammad Saiful Islam', 'Md. Tanvir Hossain'],
    authorsBn: ['অধ্যাপক ড. মোহাম্মদ সাইফুল ইসলাম', 'মো. তানভীর হোসেন'],
    journalEn: 'Chittagong University Journal of Economics, Vol. 28, Issue 1',
    year: 2024,
    type: 'journal',
    abstractEn: 'This paper examines the transmission channels of policy interest rates to bank lending rates and economic output in Bangladesh and neighboring South Asian nations. Utilizing Structural Vector Autoregression (SVAR) with quarterly data spanning 2000-2023, the findings reveal a 4 to 6 quarter lag in peak output response.',
    abstractBn: 'এই গবেষণাপত্রটি বাংলাদেশ ও দক্ষিণ এশিয়ার দেশগুলোতে নীতিগত সুদের হার থেকে ব্যাংক ঋণ হার এবং অর্থনৈতিক প্রবৃদ্ধির সঞ্চালন প্রক্রিয়া বিশ্লেষণ করেছে। এসভিএআর (SVAR) মডেল ব্যবহার করে দেখা গেছে, পলিসি সুদের হারের প্রভাব দৃশ্যমান হতে ৪ থেকে ৬ ত্রৈমাসিক সময় লাগে।',
    doi: '10.5281/zenodo.cu-econ.2024.01',
    keywordsEn: ['Monetary Policy', 'SVAR Model', 'Interest Rate Pass-through', 'South Asia'],
    keywordsBn: ['মুদ্রানীতি', 'এসভিএআর মডেল', 'সুদের হার সঞ্চালন', 'দক্ষিণ এশিয়া']
  },
  {
    id: 'pub-2',
    titleEn: 'Economic Valuation of Coastal Mangrove Restoration in the Bay of Bengal',
    titleBn: 'বঙ্গোপসাগরের উপকূলীয় ম্যানগ্রোভ বনায়নের অর্থনৈতিক মূল্যায়ন',
    authorsEn: ['Prof. Dr. Nargis Sultana', 'Dr. Farhana Yasmin'],
    authorsBn: ['অধ্যাপক ড. নারগিস সুলতানা', 'ড. ফারহানা ইয়াসমিন'],
    journalEn: 'Ecological Economics & Policy Studies',
    year: 2024,
    type: 'journal',
    abstractEn: 'Using Contingent Valuation Method (CVM) and spatial hedonic pricing, this research estimates the willingness-to-pay (WTP) of coastal fishing communities in Chattogram and Cox’s Bazar for mangrove restoration as a storm-surge protective shield.',
    abstractBn: 'কন্টিনজেন্ট ভ্যালুয়েশন মেথড (CVM) ব্যবহার করে চট্টগ্রাম ও কক্সবাজারের উপকূলীয় জেলেদের ঘূর্ণিঝড় প্রতিরক্ষায় ম্যানগ্রোভ বনায়নের প্রতি অর্থ ব্যয়ের আগ্রহ ও অর্থনৈতিক মূল্য নিরূপণ করা হয়েছে।',
    doi: '10.1016/j.ecolecon.2024.108204',
    keywordsEn: ['Mangrove Ecosystems', 'Contingent Valuation', 'Disaster Defense', 'WTP'],
    keywordsBn: ['ম্যানগ্রোভ বাস্তুতন্ত্র', 'অর্থনৈতিক মূল্যায়ন', 'দুর্যোগ প্রতিরক্ষা']
  },
  {
    id: 'pub-3',
    titleEn: 'Microcredit, Household Income Volatility and the Next-Generation Trajectory: Revisiting Jobra',
    titleBn: 'ক্ষুদ্রঋণ, পরিবারের আয়ের ওঠানামা এবং পরবর্তী প্রজন্মের গতিপথ: জোবরা গ্রামের পুনঃপর্যালোচনা',
    authorsEn: ['Prof. Dr. Kazi Munir Ahmed', 'Sharmin Akter'],
    authorsBn: ['অধ্যাপক ড. কাজী মুনীর আহমেদ', 'শারমিন আক্তার'],
    journalEn: 'Journal of Development Studies',
    year: 2023,
    type: 'working_paper',
    abstractEn: 'Commemorating nearly five decades since Professor Muhammad Yunus began the Jobra microcredit experiment at CU, this longitudinal survey follows third-generation descendants of initial borrower families, evaluating educational mobility and occupational shift away from subsistence farming.',
    abstractBn: 'অধ্যাপক ড. মুহাম্মদ ইউনূস কর্তৃক জোবরা গ্রামে ক্ষুদ্রঋণের পরীক্ষামূলক শুরুর প্রায় পাঁচ দশক পর এই গবেষণাটি ঋণগ্রহীতা পরিবারগুলোর তৃতীয় প্রজন্মের শিক্ষাগত অগ্রগতি ও পেশাগত রূপান্তর তুলে ধরেছে।',
    doi: '10.1080/00220388.2023.2189012',
    keywordsEn: ['Microfinance', 'Jobra Village', 'Intergenerational Mobility', 'Poverty Dynamics'],
    keywordsBn: ['ক্ষুদ্রঋণ', 'জোবরা গ্রাম', 'প্রজন্মগত গতিশীলতা', 'দারিদ্র্য বিমোচন']
  },
  {
    id: 'pub-4',
    titleEn: 'Tariff Rationalization and Readymade Garment Value Addition Post-LDC Graduation',
    titleBn: 'এলডিসি উত্তরণ পরবর্তী শুল্ক যৌক্তিকীকরণ এবং তৈরি পোশাক খাতে মূল্য সংযোজন',
    authorsEn: ['Dr. Tariqul Hasan Chowdhury'],
    authorsBn: ['ড. তরিকুল হাসান চৌধুরী'],
    journalEn: 'World Trade & Investment Review',
    year: 2023,
    type: 'policy_brief',
    abstractEn: 'This policy brief presents computable trade model simulations assessing the potential loss of European Union GSP benefits and proposes bilateral preferential trade agreement strategies for Bangladesh manufacturing exporters.',
    abstractBn: 'এই নীতিসংক্ষেপটি ইউরোপীয় ইউনিয়নের জিএসপি সুবিধা প্রত্যাহারের সম্ভাব্য অভিঘাত এবং বাংলাদেশের রপ্তানিকারকদের জন্য দ্বিপাক্ষিক বাণিজ্য চুক্তির কৌশলগত রূপরেখা তুলে ধরেছে।',
    keywordsEn: ['LDC Graduation', 'EU GSP', 'Tariff Reforms', 'RMG Sector'],
    keywordsBn: ['এলডিসি উত্তরণ', 'বাণিজ্য শুল্ক', 'তৈরি পোশাক']
  }
];
