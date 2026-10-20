export interface Course {
  code: string;
  titleEn: string;
  titleBn: string;
  credits: number;
  type: 'Core' | 'Elective' | 'Quantitative' | 'General';
  descriptionEn: string;
  descriptionBn: string;
  prerequisites?: string;
}

export interface SemesterData {
  semesterNumber: number;
  nameEn: string;
  nameBn: string;
  totalCredits: number;
  courses: Course[];
}

export interface ProgramCurriculum {
  id: string;
  titleEn: string;
  titleBn: string;
  durationEn: string;
  durationBn: string;
  totalCredits: number;
  degreeAwardedEn: string;
  degreeAwardedBn: string;
  semesters: SemesterData[];
  objectivesEn: string[];
  objectivesBn: string[];
  admissionRequirementsEn: string[];
  admissionRequirementsBn: string[];
}

export const syllabusData: {
  bss: ProgramCurriculum;
  mss: ProgramCurriculum;
  mphil: ProgramCurriculum;
} = {
  bss: {
    id: 'bss-econ',
    titleEn: 'Bachelor of Social Sciences (BSS Honours) in Economics',
    titleBn: 'ব্যাচেলর অব সোশ্যাল সায়েন্সেস (বিএসএস অনার্স) অর্থনীতি',
    durationEn: '4 Academic Years (8 Semesters)',
    durationBn: '৪ শিক্ষাবর্ষ (৮ সেমিস্টার)',
    totalCredits: 128,
    degreeAwardedEn: 'BSS (Honours) in Economics',
    degreeAwardedBn: 'বিএসএস (অনার্স) অর্থনীতি',
    objectivesEn: [
      'Equip students with deep theoretical understanding of microeconomic choices and macroeconomic equilibrium.',
      'Develop robust empirical econometric and statistical competencies using modern data software (STATA, R, Python).',
      'Foster analytical capacity to design, evaluate, and critically review national and international economic policies.',
      'Prepare graduates for competitive careers in central banking, development agencies, academia, and business strategy.'
    ],
    objectivesBn: [
      'শিক্ষার্থীদের ব্যষ্টিক সিদ্ধান্ত গ্রহণ এবং সামষ্টিক অর্থনৈতিক ভারসাম্যের তাত্ত্বিক ভিত্তি প্রদান করা।',
      'আধুনিক সফটওয়্যার (STATA, R, Python) ব্যবহার করে প্রায়োগিক ইকোনোমেট্রিক্স ও পরিসংখ্যানিক বিশ্লেষণ দক্ষতা তৈরি।',
      'জাতীয় ও আন্তর্জাতিক অর্থনৈতিক নীতি প্রণয়ন ও মূল্যায়নের গভীর বিশ্লেষণী সক্ষমতা অর্জন।',
      'কেন্দ্রীয় ব্যাংক, বহুজাতিক সংস্থা, গবেষণা ও একাডেমিয়ায় প্রতিযোগিতামূলক ক্যারিয়ারের জন্য প্রস্তুত করা।'
    ],
    admissionRequirementsEn: [
      'HSC / A-Level or equivalent qualification from recognized education boards.',
      'Admission through University of Chittagong Central Admission Test (Unit B / D).',
      'Minimum GPA 3.50 in SSC and HSC with solid foundation in Mathematics or Economics.'
    ],
    admissionRequirementsBn: [
      'অনুমোদিত শিক্ষা বোর্ড থেকে এইচএসসি / এ-লেভেল বা সমমানের পরীক্ষায় উত্তীর্ণ।',
      'চট্টগ্রাম বিশ্ববিদ্যালয়ের কেন্দ্রীয় ভর্তি পরীক্ষা (ইউনিট বি / ডি)-এর মাধ্যমে মেধাভিত্তিক নির্বাচন।',
      'এসএসসি ও এইচএসসিতে ন্যূনতম জিপিএ ৩.৫০ এবং গণিত বা অর্থনীতিতে ভালো ফলাফল।'
    ],
    semesters: [
      {
        semesterNumber: 1,
        nameEn: '1st Year, 1st Semester',
        nameBn: '১ম বর্ষ, ১ম সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 101',
            titleEn: 'Principles of Microeconomics',
            titleBn: 'ব্যষ্টিক অর্থনীতির মূলনীতি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Scarcity, choice, consumer behavior, demand and supply elasticities, production costs, and market structures.',
            descriptionBn: 'স্বল্পতা, পছন্দ, ভোক্তা আচরণ, চাহিদা ও যোগান স্থিতিস্থাপকতা, উৎপাদন ব্যয় এবং বাজারের ধরন।'
          },
          {
            code: 'ECON 102',
            titleEn: 'Basic Mathematics for Economics I',
            titleBn: 'অর্থনীতির জন্য মৌলিক গণিত - ১',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Set theory, matrix algebra, functions, limits, differential calculus and single-variable optimization.',
            descriptionBn: 'সেট তত্ত্ব, ম্যাট্রিক্স বীজগণিত, ফাংশন, সীমা, অন্তরীকরণ ও অপটিমাইজেশন।'
          },
          {
            code: 'ECON 103',
            titleEn: 'Economic History of South Asia',
            titleBn: 'দক্ষিণ এশিয়ার অর্থনৈতিক ইতিহাস',
            credits: 4,
            type: 'General',
            descriptionEn: 'Agrarian evolution, colonial economic impact, de-industrialization, and post-partition economic divergence.',
            descriptionBn: 'কৃষি অর্থনীতি, ঔপনিবেশিক প্রভাব, অব-শিল্পায়ন এবং দেশভাগ-পরবর্তী অর্থনৈতিক প্রেক্ষাপট।'
          },
          {
            code: 'ECON 104',
            titleEn: 'English Language & Professional Communication',
            titleBn: 'ইংরেজি ভাষা ও পেশাগত যোগাযোগ',
            credits: 4,
            type: 'General',
            descriptionEn: 'Academic writing, formal economic reports, analytical presentation, and seminar speaking skills.',
            descriptionBn: 'একাডেমিক লিখন, অর্থনৈতিক প্রতিবেদন তৈরি, বিশ্লেষণী প্রেজেন্টেশন এবং সেমিনার দক্ষতা।'
          }
        ]
      },
      {
        semesterNumber: 2,
        nameEn: '1st Year, 2nd Semester',
        nameBn: '১ম বর্ষ, ২য় সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 105',
            titleEn: 'Principles of Macroeconomics',
            titleBn: 'সামষ্টিক অর্থনীতির মূলনীতি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'National income accounting, circular flow, aggregate demand-supply, inflation, unemployment, and IS-LM framework.',
            descriptionBn: 'জাতীয় আয় পরিমাপ, চক্রাকার প্রবাহ, সামগ্রিক চাহিদা ও যোগান, মুদ্রাস্ফীতি, বেকারত্ব ও IS-LM ফ্রেমওয়ার্ক।'
          },
          {
            code: 'ECON 106',
            titleEn: 'Basic Mathematics for Economics II',
            titleBn: 'অর্থনীতির জন্য মৌলিক গণিত - ২',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Multivariable calculus, unconstrained and constrained optimization (Lagrangian multipliers), integration.',
            descriptionBn: 'বহুচলক ক্যালকুলাস, সীমাবদ্ধ ও অসীম অপটিমাইজেশন (ল্যাগ্রাঞ্জ গুণক), সমাকলন।'
          },
          {
            code: 'ECON 107',
            titleEn: 'Introduction to Economic Statistics',
            titleBn: 'অর্থনৈতিক পরিসংখ্যান পরিচিতি',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Measures of central tendency, dispersion, probability distributions, sampling techniques, index numbers.',
            descriptionBn: 'কেন্দ্রীয় প্রবণতার পরিমাপ, বিস্তার, সম্ভাব্যতা বিন্যাস, নমুনায়ন কৌশল ও সূচক সংখ্যা।'
          },
          {
            code: 'ECON 108',
            titleEn: 'Computer Applications & Data Analysis Lab',
            titleBn: 'কম্পিউটার অ্যাপ্লিকেশন ও ডেটা অ্যানালিসিস ল্যাব',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Hands-on practical training in MS Excel, statistical packages, data visualization and report generation.',
            descriptionBn: 'এমএস এক্সেল, পরিসংখ্যান প্যাকেজ, ডেটা ভিজ্যুয়ালাইজেশন ও প্র্যাকটিক্যাল ল্যাব ট্রেনিং।'
          }
        ]
      },
      {
        semesterNumber: 3,
        nameEn: '2nd Year, 1st Semester',
        nameBn: '২য় বর্ষ, ১ম সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 201',
            titleEn: 'Intermediate Microeconomics I',
            titleBn: 'মধ্যবর্তী ব্যষ্টিক অর্থনীতি - ১',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Consumer preference axioms, utility maximization, Slutsky equation, intertemporal choice, risk and uncertainty.',
            descriptionBn: 'ভোক্তা পছন্দ, উপযোগ বৃদ্ধিকরণ, স্লটস্কি সমীকরণ, আন্তঃকালীন পছন্দ, ঝুঁকি ও অনিশ্চয়তা।'
          },
          {
            code: 'ECON 202',
            titleEn: 'Intermediate Macroeconomics I',
            titleBn: 'মধ্যবর্তী সামষ্টিক অর্থনীতি - ১',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Classical vs Keynesian systems, aggregate expenditure, Mundell-Fleming model, open economy macroeconomics.',
            descriptionBn: 'ক্লাসিক্যাল ও কেইনসীয় তত্ত্ব, সামগ্রিক ব্যয়, মান্ডেল-ফ্লেমিং মডেল, উন্মুক্ত অর্থনীতি।'
          },
          {
            code: 'ECON 203',
            titleEn: 'Statistical Inference & Probability Theory',
            titleBn: 'পরিসংখ্যানিক অনুমান ও সম্ভাব্যতা তত্ত্ব',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Point and interval estimation, hypothesis testing, t-test, F-test, chi-square, analysis of variance (ANOVA).',
            descriptionBn: 'বিন্দু ও ব্যবধি প্রাক্কলন, প্রকল্প পরীক্ষা, টি-টেস্ট, এফ-টেস্ট, কাই-স্কয়ার ও অ্যানোভা।'
          },
          {
            code: 'ECON 204',
            titleEn: 'Agricultural Economics & Food Security',
            titleBn: 'কৃষি অর্থনীতি ও খাদ্য নিরাপত্তা',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Farm management, agricultural credit, green revolution, tenancy contracts, food security dynamics in Bangladesh.',
            descriptionBn: 'খামার ব্যবস্থাপনা, কৃষি ঋণ, সবুজ বিপ্লব, বর্গাচাষ চুক্তি এবং বাংলাদেশের খাদ্য নিরাপত্তা।'
          }
        ]
      },
      {
        semesterNumber: 4,
        nameEn: '2nd Year, 2nd Semester',
        nameBn: '২য় বর্ষ, ২য় সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 205',
            titleEn: 'Intermediate Microeconomics II',
            titleBn: 'মধ্যবর্তী ব্যষ্টিক অর্থনীতি - ২',
            credits: 4,
            type: 'Core',
            descriptionEn: 'General equilibrium, Edgeworth box, welfare theorems, externality, public goods, asymmetric information.',
            descriptionBn: 'সাধারণ ভারসাম্য, এজওয়ার্থ বক্স, কল্যাণ অর্থনীতি, বাহ্যিকতা, সরকারি পণ্য ও তথ্যের অপ্রতিসমতা।'
          },
          {
            code: 'ECON 206',
            titleEn: 'Intermediate Macroeconomics II',
            titleBn: 'মধ্যবর্তী সামষ্টিক অর্থনীতি - ২',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Neoclassical Solow-Swan growth model, consumption theories, investment models, rational expectations.',
            descriptionBn: 'সোলো-সোয়ান প্রবৃদ্ধি মডেল, ভোগ তত্ত্বসমূহ, বিনিয়োগ মডেল ও যৌক্তিক প্রত্যাশা।'
          },
          {
            code: 'ECON 207',
            titleEn: 'Introduction to Econometrics',
            titleBn: 'ইকোনোমেট্রিক্স পরিচিতি',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Classical linear regression model (CLRM), OLS assumptions, Gauss-Markov theorem, multiple regression analysis.',
            descriptionBn: 'সরল রৈখিক রিগ্রেশন মডেল, ওএলএস অনুমান, গাউস-মার্কভ উপপাদ্য এবং বহুচলক রিগ্রেশন।'
          },
          {
            code: 'ECON 208',
            titleEn: 'Environmental & Natural Resource Economics',
            titleBn: 'পরিবেশ ও প্রাকৃতিক সম্পদ অর্থনীতি',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Pollution control mechanisms, carbon pricing, renewable vs exhaustible resources, climate adaptation in coastal zones.',
            descriptionBn: 'দূষণ নিয়ন্ত্রণ ব্যবস্থা, কার্বন কর, নবায়নযোগ্য ও অনবায়নযোগ্য সম্পদ, উপকূলীয় জলবায়ু অভিযোজন।'
          }
        ]
      },
      {
        semesterNumber: 5,
        nameEn: '3rd Year, 1st Semester',
        nameBn: '৩য় বর্ষ, ১ম সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 301',
            titleEn: 'Applied Econometrics & Diagnostic Checking',
            titleBn: 'ফলিত ইকোনোমেট্রিক্স ও ডায়াগনস্টিক টেস্টিং',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Heteroscedasticity, autocorrelation, multicollinearity, dummy variables, model specification tests using STATA.',
            descriptionBn: 'বিষমভেদাঙ্কতা, স্ব-সহসম্পর্ক, বহুসহসম্পর্কতা, ডামি চলক এবং স্টাটা (STATA) সফটওয়্যার প্রয়োগ।'
          },
          {
            code: 'ECON 302',
            titleEn: 'International Trade Theory & Policy',
            titleBn: 'আন্তর্জাতিক বাণিজ্য তত্ত্ব ও নীতি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Ricardian comparative advantage, Heckscher-Ohlin model, tariffs, quotas, trade balance, WTO regulations.',
            descriptionBn: 'তুলনামূলক সুবিধা তত্ত্ব, হেক্সার-ওলিন মডেল, শুল্ক, কোটা, বাণিজ্য ভারসাম্য ও বিশ্ব বাণিজ্য সংস্থা।'
          },
          {
            code: 'ECON 303',
            titleEn: 'Public Finance & Fiscal Policy',
            titleBn: 'সরকারি অর্থব্যবস্থা ও রাজস্ব নীতি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Tax incidence and efficiency, public expenditure evaluation, national debt, budget formulation in Bangladesh.',
            descriptionBn: 'কর আপতন ও দক্ষতা, সরকারি ব্যয় মূল্যায়ন, জাতীয় ঋণ এবং বাংলাদেশের জাতীয় বাজেট কাঠামো।'
          },
          {
            code: 'ECON 304',
            titleEn: 'Development Economics: Theories & Paradigms',
            titleBn: 'উন্নয়ন অর্থনীতি: তত্ত্ব ও মতবাদ',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Structural change models, Lewis dual economy, Harrod-Domar, Rostow stages, human development indicators (HDI).',
            descriptionBn: 'লুইস দ্বৈত অর্থনীতি মডেল, হ্যারড-ডোমার, রোস্টো পর্যায় এবং মানব উন্নয়ন সূচক (HDI)।'
          }
        ]
      },
      {
        semesterNumber: 6,
        nameEn: '3rd Year, 2nd Semester',
        nameBn: '৩য় বর্ষ, ২য় সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 305',
            titleEn: 'International Finance & Macroeconomic Policy',
            titleBn: 'আন্তর্জাতিক অর্থায়ন ও সামষ্টিক অর্থনৈতিক নীতি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Balance of payments, exchange rate determination, purchasing power parity, capital flows, foreign reserves.',
            descriptionBn: 'লেনদেন ভারসাম্য, বিনিময় হার নির্ধারণ, ক্রয়ক্ষমতার সমতা এবং বৈদেশিক মুদ্রার রিজার্ভ।'
          },
          {
            code: 'ECON 306',
            titleEn: 'Money, Banking & Financial Institutions',
            titleBn: 'মুদ্রা, ব্যাংকিং ও আর্থিক প্রতিষ্ঠান',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Central banking, monetary policy transmission, money multiplier, commercial banking system, capital markets.',
            descriptionBn: 'কেন্দ্রীয় ব্যাংকিং, মুদ্রানীতি সঞ্চালন, মুদ্রা গুণক, বাণিজ্যিক ব্যাংক ব্যবস্থা ও পুঁজিবাজার।'
          },
          {
            code: 'ECON 307',
            titleEn: 'Labor Economics & Human Capital',
            titleBn: 'শ্রম অর্থনীতি ও মানবসম্পদ',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Labor supply & demand, wage differentials, human capital investment, migration, unemployment dynamics.',
            descriptionBn: 'শ্রমের চাহিদা ও যোগান, মজুরি বৈষম্য, মানব মূলধন বিনিয়োগ, অভিবাসন ও বেকারত্ব সমস্যা।'
          },
          {
            code: 'ECON 308',
            titleEn: 'Economic Research Methodology',
            titleBn: 'অর্থনৈতিক গবেষণা পদ্ধতি',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Formulation of research questions, literature review, survey questionnaire design, data collection ethics.',
            descriptionBn: 'গবেষণা সমস্যা চিহ্নিতকরণ, সাহিত্য পর্যালোচনা, প্রশ্নমালা প্রণয়ন এবং তথ্য সংগ্রহের নীতিশাস্ত্র।'
          }
        ]
      },
      {
        semesterNumber: 7,
        nameEn: '4th Year, 1st Semester',
        nameBn: '৪র্থ বর্ষ, ১ম সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 401',
            titleEn: 'Advanced Microeconomics & Game Theory',
            titleBn: 'উন্নত ব্যষ্টিক অর্থনীতি ও গেম থিওরি',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Nash equilibrium, extensive and normal forms, subgame perfection, repeated games, auctions and mechanism design.',
            descriptionBn: 'ন্যাশ ভারসাম্য, এক্সটেনসিভ ও নরমাল ফর্ম, সাবগেম পারফেকশন, নিলাম ও মেকানিজম ডিজাইন।'
          },
          {
            code: 'ECON 402',
            titleEn: 'Time Series Econometrics & Forecasting',
            titleBn: 'টাইম সিরিজ ইকোনোমেট্রিক্স ও ফোরকাস্টিং',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Stationarity, unit root tests, ARMA/ARIMA modeling, cointegration, error correction models (ECM), VAR analysis.',
            descriptionBn: 'স্টেশনারিটি, ইউনিট রুট টেস্ট, অরিমা (ARIMA) মডেলিং, কো-ইন্টিগ্রেশন, এরর কারেকশন মডেল ও ভার (VAR)।'
          },
          {
            code: 'ECON 403',
            titleEn: 'Microfinance, Rural Finance & Social Business',
            titleBn: 'ক্ষুদ্রঋণ, গ্রামীণ অর্থায়ন ও সামাজিক ব্যবসা',
            credits: 4,
            type: 'Core',
            descriptionEn: 'The Jobra experiment, Grameen model, joint-liability group lending, financial inclusion, Prof. Yunus’ social business framework.',
            descriptionBn: 'জোবরা গ্রামের পরীক্ষা, গ্রামীণ মডেল, যৌথ দায়বদ্ধতা ঋণ, আর্থিক অন্তর্ভুক্তি ও অধ্যাপক ইউনূসের সোশ্যাল বিজনেস।'
          },
          {
            code: 'ECON 404',
            titleEn: 'Industrial Organization & Regulation Policy',
            titleBn: 'শিল্প সংগঠন ও সরকারি নিয়ন্ত্রণ নীতি',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Market power, collusion, antitrust laws, product differentiation, entry barriers, price discrimination.',
            descriptionBn: 'বাজার নিয়ন্ত্রণ ক্ষমতা, প্রতিযোগিতা আইন, পণ্য বৈচিত্র্যকরণ, মূল্য বৈষম্য ও সরকারি বিধিমালা।'
          }
        ]
      },
      {
        semesterNumber: 8,
        nameEn: '4th Year, 2nd Semester',
        nameBn: '৪র্থ বর্ষ, ২য় সেমিস্টার',
        totalCredits: 16,
        courses: [
          {
            code: 'ECON 405',
            titleEn: 'Economy of Bangladesh: Issues, Challenges & Horizons',
            titleBn: 'বাংলাদেশের অর্থনীতি: সমস্যা, সম্ভাবনা ও ভবিষ্যৎ',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Macroeconomic stability, export diversification, RMG sector, mega-infrastructure, LDC graduation challenges.',
            descriptionBn: 'সামষ্টিক অর্থনৈতিক স্থিতিশীলতা, তৈরি পোশাক খাত, মেগা প্রকল্পসমূহ এবং এলডিসি উত্তরণের চ্যালেঞ্জ।'
          },
          {
            code: 'ECON 406',
            titleEn: 'Behavioral & Experimental Economics',
            titleBn: 'আচরণগত ও পরীক্ষামূলক অর্থনীতি',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Heuristics and biases, prospect theory, nudge interventions, laboratory and field experiments in developing nations.',
            descriptionBn: 'হিউরিস্টিকস ও বায়াস, প্রসপেক্ট থিওরি, নাজ থিওরি এবং পরীক্ষামূলক অর্থনৈতিক মডেল।'
          },
          {
            code: 'ECON 407',
            titleEn: 'Health Economics & Policy Evaluation',
            titleBn: 'স্বাস্থ্য অর্থনীতি ও নীতি মূল্যায়ন',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Demand for health, health insurance, cost-effectiveness analysis (QALYs), Universal Health Coverage (UHC).',
            descriptionBn: 'স্বাস্থ্যের চাহিদা, স্বাস্থ্যবীমা, ব্যয়-কার্যকারিতা বিশ্লেষণ এবং সার্বজনীন স্বাস্থ্য সুরক্ষা।'
          },
          {
            code: 'ECON 408',
            titleEn: 'Undergraduate Research Monograph / Internship & Comprehensive Viva',
            titleBn: 'স্নাতক গবেষণা মনোগ্রাফ / ইন্টার্নশিপ ও সার্বিক ভাইভা',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Individual research monograph supervised by faculty member, oral presentation, and comprehensive viva-voce.',
            descriptionBn: 'শিক্ষকের তত্ত্বাবধানে স্বতন্ত্র গবেষণা মনোগ্রাফ প্রস্তুতকরণ, ডিফেন্স ও সার্বিক ভাইভা-ভোর।'
          }
        ]
      }
    ]
  },
  mss: {
    id: 'mss-econ',
    titleEn: 'Master of Social Sciences (MSS) in Economics',
    titleBn: 'মাস্টার অব সোশ্যাল সায়েন্সেস (এমএসএস) অর্থনীতি',
    durationEn: '1 Year (2 Semesters)',
    durationBn: '১ বছর (২ সেমিস্টার)',
    totalCredits: 36,
    degreeAwardedEn: 'MSS in Economics',
    degreeAwardedBn: 'এমএসএস অর্থনীতি',
    objectivesEn: [
      'Advanced analytical mastery of dynamic macroeconomic modeling (DSGE) and microeconomic foundations.',
      'Specialized econometric competencies in panel data, non-linear time series, and causal inference methods.',
      'Independent thesis research addressing contemporary fiscal, monetary, trade, or climate challenges.'
    ],
    objectivesBn: [
      'ডায়নামিক ম্যাক্রোইকোনমিক মডেলিং ও মাইক্রোইকোনমিক্সে উচ্চতর তাত্ত্বিক দক্ষতা অর্জন।',
      'প্যানেল ডেটা, নন-লিনিয়ার টাইম সিরিজ এবং কজল ইনফারেঞ্চ ইকোনোমেট্রিক্সের প্রায়োগিক জ্ঞান।',
      'জাতীয় ও বৈশ্বিক অর্থনৈতিক সমস্যা নিয়ে উচ্চতর গবেষণামূলক থিসিস সম্পন্ন করার সুযোগ।'
    ],
    admissionRequirementsEn: [
      'BSS (Honours) in Economics from CU or recognized public universities with minimum CGPA 2.75.',
      'Merit-based selection through departmental evaluation.'
    ],
    admissionRequirementsBn: [
      'চট্টগ্রাম বিশ্ববিদ্যালয় বা যেকোনো স্বীকৃত পাবলিক বিশ্ববিদ্যালয় থেকে অর্থনীতিতে ন্যূনতম সিজিপিএ ২.৭৫ সহ বিএসএস (অনার্স)।'
    ],
    semesters: [
      {
        semesterNumber: 1,
        nameEn: 'Semester 1: Advanced Core',
        nameBn: '১ম সেমিস্টার: উন্নত মূল কোর্স',
        totalCredits: 18,
        courses: [
          {
            code: 'ECON 501',
            titleEn: 'Advanced Microeconomic Theory',
            titleBn: 'উন্নত ব্যষ্টিক অর্থনীতি তত্ত্ব',
            credits: 4,
            type: 'Core',
            descriptionEn: 'General equilibrium theory, social choice, mechanism design, contract theory and moral hazard.',
            descriptionBn: 'সাধারণ ভারসাম্য তত্ত্ব, সামাজিক পছন্দ, মেকানিজম ডিজাইন এবং কন্ট্রাক্ট থিওরি।'
          },
          {
            code: 'ECON 502',
            titleEn: 'Advanced Macroeconomics & Dynamic Optimization',
            titleBn: 'উন্নত সামষ্টিক অর্থনীতি ও ডায়নামিক অপটিমাইজেশন',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Ramsey-Cass-Koopmans model, endogenous growth theory, real business cycle (RBC), New Keynesian DSGE models.',
            descriptionBn: 'র‌্যামসে মডেল, এন্ডোজেনাস প্রবৃদ্ধি তত্ত্ব, আরপিসি মডেল ও নিউ কেইনসীয় ডিএসজিই মডেলিং।'
          },
          {
            code: 'ECON 503',
            titleEn: 'Panel Data & Microeconometrics',
            titleBn: 'প্যানেল ডেটা ও মাইক্রোইকোনোমেট্রিক্স',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Fixed effects, random effects, difference-in-differences (DiD), instrumental variables, GMM estimation.',
            descriptionBn: 'ফিক্সড ইফেক্টস, র‍্যান্ডম ইফেক্টস, ডিআইডি (DiD), ইন্সট্রুমেন্টাল চলক এবং জিএমএম মেথড।'
          },
          {
            code: 'ECON 504',
            titleEn: 'Advanced Development Policy & Institutions',
            titleBn: 'উন্নত উন্নয়ন নীতি ও প্রতিষ্ঠান',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Institutions and long-run growth (Acemoglu framework), state capacity, corruption, political economy.',
            descriptionBn: 'প্রতিষ্ঠান ও দীর্ঘমেয়াদি অর্থনৈতিক প্রবৃদ্ধি, রাষ্ট্রের সক্ষমতা এবং রাজনৈতিক অর্থনীতি।'
          },
          {
            code: 'ECON 505',
            titleEn: 'Graduate Research Seminar I',
            titleBn: 'স্নাতকোত্তর গবেষণা সেমিনার - ১',
            credits: 2,
            type: 'Quantitative',
            descriptionEn: 'Proposal defense, academic citation protocols, research proposal presentation.',
            descriptionBn: 'গবেষণা প্রস্তাবনা উপস্থাপনা, রেফারেন্সিং ও একাডেমিক মেথডোলজি।'
          }
        ]
      },
      {
        semesterNumber: 2,
        nameEn: 'Semester 2: Specialization & Thesis',
        nameBn: '২য় সেমিস্টার: বিশেষায়ন ও থিসিস',
        totalCredits: 18,
        courses: [
          {
            code: 'ECON 506',
            titleEn: 'Climate Change Economics & Carbon Finance',
            titleBn: 'জলবায়ু অর্থনীতি ও কার্বন ফাইন্যান্স',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Integrated assessment models (DICE), loss and damage finance, carbon credit markets, green GDP accounting.',
            descriptionBn: 'জলবায়ু মডেলিং (DICE), ক্ষতি ও ধ্বংস তহবিল, কার্বন ট্রেডিং বাজার ও গ্রিন জিডিপি হিসাব।'
          },
          {
            code: 'ECON 507',
            titleEn: 'Empirical Financial Economics & Big Data',
            titleBn: 'ব্যবহারিক আর্থিক অর্থনীতি ও বিগ ডেটা',
            credits: 4,
            type: 'Elective',
            descriptionEn: 'Asset pricing models, CAPM, ARCH/GARCH volatility modeling, algorithmic trading analysis.',
            descriptionBn: 'সম্পদ মূল্য নির্ধারণ মডেল, সিএপিএম, এআরসিএইচ ও গার্চ ভোলাটিলিটি মডেলিং।'
          },
          {
            code: 'ECON 508',
            titleEn: 'Master’s Research Thesis / Advanced Monograph',
            titleBn: 'মাস্টার্স গবেষণা থিসিস / অ্যাডভান্সড মনোগ্রাফ',
            credits: 8,
            type: 'Core',
            descriptionEn: 'Independent research conducted under supervisor guidance resulting in a publishable thesis defense.',
            descriptionBn: 'বিভাগীয় অধ্যাপকের অধীনে মৌলিক গবেষণা পরিচালনা, থিসিস জমা ও আনুষ্ঠানিক ডিফেন্স।'
          },
          {
            code: 'ECON 509',
            titleEn: 'Comprehensive Oral Examination (Viva-Voce)',
            titleBn: 'সার্বিক মৌখিক পরীক্ষা (ভাইভা)',
            credits: 2,
            type: 'Core',
            descriptionEn: 'Comprehensive board examination assessing all branches of theoretical and applied economics.',
            descriptionBn: 'উচ্চতর অর্থনীতি ও প্রায়োগিক জ্ঞানের ওপর কেন্দ্রীয় বোর্ড কর্তৃক সার্বিক মৌখিক মূল্যায়ন।'
          }
        ]
      }
    ]
  },
  mphil: {
    id: 'mphil-phd-econ',
    titleEn: 'M.Phil & Ph.D. Research Programs in Economics',
    titleBn: 'এম.ফিল ও পিএইচ.ডি উচ্চতর গবেষণা প্রোগ্রাম',
    durationEn: '2 Years (M.Phil) / 3-5 Years (Ph.D.)',
    durationBn: '২ বছর (এম.ফিল) / ৩-৫ বছর (পিএইচ.ডি)',
    totalCredits: 60,
    degreeAwardedEn: 'Doctor of Philosophy (Ph.D.) / Master of Philosophy (M.Phil)',
    degreeAwardedBn: 'ডক্টর অব ফিলোসফি (পিএইচ.ডি) / মাস্টার অব ফিলোসফি (এম.ফিল)',
    objectivesEn: [
      'Cultivate original scholarly contributions in theoretical, empirical, or policy economics.',
      'Produce doctoral dissertations capable of peer-reviewed publication in high-impact Scopus/WoS indexed journals.',
      'Train leading researchers for national planning commissions, universities, and international organizations.'
    ],
    objectivesBn: [
      'তাত্ত্বিক, প্রায়োগিক বা নীতি অর্থনীতিতে মৌলিক জ্ঞান সৃষ্টি ও গবেষণা পরিচালনা করা।',
      'আন্তর্জাতিক মানের গবেষণাপত্র প্রকাশে সক্ষম ডক্টরেট থিসিস সম্পন্ন করা।',
      'জাতীয় পরিকল্পনা কমিশন, বিশ্ববিদ্যালয় এবং আন্তর্জাতিক উন্নয়ন সংস্থার জন্য গবেষক প্রস্তুতকরণ।'
    ],
    admissionRequirementsEn: [
      'MSS / Master’s degree in Economics with high academic standing.',
      'Submission of a comprehensive research proposal approved by the Academic Committee.',
      'Successful oral interview and recommendation by potential doctoral supervisors.'
    ],
    admissionRequirementsBn: [
      'অর্থনীতিতে চমৎকার ফলাফলসহ এমএসএস / মাস্টার্স ডিগ্রি।',
      'একাডেমিক কমিটি কর্তৃক অনুমোদিত পূর্ণাঙ্গ গবেষণা প্রস্তাবনা জমাদান।',
      'বিভাগীয় ইন্টারভিউ এবং সুপারভাইজারের সুপারিশ।'
    ],
    semesters: [
      {
        semesterNumber: 1,
        nameEn: 'Year 1: Doctoral Coursework',
        nameBn: '১ম বর্ষ: ডক্টরাল কোর্সওয়ার্ক',
        totalCredits: 12,
        courses: [
          {
            code: 'ECON 701',
            titleEn: 'Advanced Quantitative Methods & Econometric Frontiers',
            titleBn: 'উচ্চতর পরিমাণগত পদ্ধতি ও আধুনিক ইকোনোমেট্রিক্স',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Spatial econometrics, machine learning for causal inference, regression discontinuity design (RDD).',
            descriptionBn: 'স্পেশিয়াল ইকোনোমেট্রিক্স, কজল ইনফারেঞ্চের জন্য মেশিন লার্নিং ও রিগ্রেশন ডিসকন্টিনিউটি ডিজাইন।'
          },
          {
            code: 'ECON 702',
            titleEn: 'Seminal Literature & Economic Philosophy',
            titleBn: 'মৌলিক অর্থনৈতিক সাহিত্য ও দর্শন',
            credits: 4,
            type: 'Core',
            descriptionEn: 'Epistemology of economics, methodology of scientific research programmes, institutionalism.',
            descriptionBn: 'অর্থনীতির জ্ঞানতত্ত্ব, বৈজ্ঞানিক গবেষণা পদ্ধতির দর্শন ও প্রাতিষ্ঠানিক অর্থনীতি।'
          },
          {
            code: 'ECON 703',
            titleEn: 'Advanced Field Research & Survey Design',
            titleBn: 'উন্নত ফিল্ড রিসার্চ ও জরিপ ডিজাইন',
            credits: 4,
            type: 'Quantitative',
            descriptionEn: 'Randomized controlled trials (RCTs), sampling power calculation, IRB ethical compliance.',
            descriptionBn: 'র‌্যান্ডমাইজড কন্ট্রোল্ড ট্রায়াল (RCT), পাওয়ার ক্যালকুলেশন ও রিসার্চ এথিক্স।'
          }
        ]
      },
      {
        semesterNumber: 2,
        nameEn: 'Years 2-4: Doctoral Dissertation',
        nameBn: '২য়-৪র্থ বর্ষ: ডক্টরাল থিসিস গবেষণা',
        totalCredits: 48,
        courses: [
          {
            code: 'ECON 704',
            titleEn: 'Colloquium & Annual Progress Presentations',
            titleBn: 'বার্ষিক গবেষণা অগ্রগতি উপস্থাপনা',
            credits: 6,
            type: 'Core',
            descriptionEn: 'Annual departmental presentation on thesis findings, methodology critique, and publication readiness.',
            descriptionBn: 'থিসিসের অগ্রগতির ওপর বার্ষিক বিভাগীয় সেমিনার ও মূল্যায়ন।'
          },
          {
            code: 'ECON 705',
            titleEn: 'Ph.D. Dissertation & External Defense',
            titleBn: 'পিএইচ.ডি অভিসন্দর্ভ ও উন্মুক্ত ডিফেন্স',
            credits: 42,
            type: 'Core',
            descriptionEn: 'Submission of complete doctoral thesis evaluated by foreign and national examiners followed by public defense.',
            descriptionBn: 'আন্তর্জাতিক ও জাতীয় পরীক্ষক দ্বারা মূল্যায়নকৃত পূর্ণাঙ্গ থিসিস জমা ও প্রকাশ্য ডিফেন্স।'
          }
        ]
      }
    ]
  }
};
