export type Step = {
  title: string;
  body: string[];
  list?: string[];
  link?: { label: string; href: string };
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  summary: string;
  heroTitle: string;
  intro: string;
  steps: Step[];
};

const ADMISSION_MATERIALS = [
  "Statement of Purpose",
  "Personal Statement",
  "Motivation Letter",
  "Research Statement/Proposal",
  "Letters of Recommendation",
  "Work Experience Letters",
  "Resume/CV",
  "Educational Certificates",
  "Proof of Language Proficiency/Medium of Instruction Certificate",
  "Standardized Test Results (GRE, IELTS, TOEFL)",
  "Degree Attestation",
];

export const services: Service[] = [
  {
    slug: "college-admissions",
    title: "College Admissions (Master's & PhD)",
    navTitle: "College Admissions",
    summary:
      "Our college admissions experts provide personalized guidance to help you choose the right college, write compelling essays, and ace your interviews. We'll help you navigate the complex admissions process and increase your chances of getting accepted to your dream school.",
    heroTitle: "Masters and Post doctorate",
    intro:
      "Applying for a master or post-doctorate program can be a daunting task, but edunki is here to help. With a team of experts who have been through the process themselves, we know the ins and outs of what it takes to get accepted. From reviewing your application materials to providing guidance on essays and interviews, we are dedicated to helping you achieve your academic goals.",
    steps: [
      {
        title: "Program Selection",
        body: [
          "Selecting the right program and institution for pursuing advanced studies, whether it's a Master's degree or a Post-Doctorate position, is a crucial decision that shapes your academic and professional trajectory. These programs vary in duration, spanning from nine months to several years, and offer diverse opportunities for research exploration, career advancement, or specialization in a professional field.",
          "Whether you aim to delve into new areas of research, transition between disciplines, or enhance your expertise for professional practice, the process of program selection demands thorough consideration. Each program and institution has its own set of admission requirements, ranging from general prerequisites to specific criteria tailored to the degree, university, or country of study.",
          "Moreover, the orientations of Master's and Post-Doctorate programs vary widely, from research-intensive to coursework-focused or professional development-oriented tracks. Consequently, aligning your career goals with the program's focus is essential. Edunki recognizes the complexity of this decision-making process and offers guidance to navigate through various factors such as university ranking, the market value of the degree, and the country of study.",
          "Additionally, for individuals contemplating a shift between disciplines, Edunki provides insights into identifying suitable programs that facilitate smooth transitions. Whether you're pursuing a Master's degree or a Post-Doctorate position, our platform assists in selecting programs that align with your aspirations, academic interests, and professional objectives.",
        ],
      },
      {
        title: "Admission Materials",
        body: [
          "Admission materials constitute your application package which is a set of documents you need to provide to the university for securing an admission. Your eligibility to be admitted to the program is evaluated by these materials. It is important for your application package to reflect your achievements and potential in a way that makes you an ideal candidate for the program you are applying to. It is important to ensure that each of these elements are in coherence with each other and overall application is able to provide a holistic overview of who you are and what you are aspiring for. Admission materials may include the following:",
        ],
        list: ADMISSION_MATERIALS,
      },
      {
        title: "Resume/CV",
        body: [
          "Your resume/CV is your first impression with potential employers, but creating one that truly stands out can be challenging. With our Resume/CV Guidance service, you'll receive personalized feedback and advice from our experienced consultants. We'll help you highlight your skills and accomplishments in a way that sets you apart from other applicants. Get in touch with us today to schedule a consultation and take the first step toward landing your dream job.",
        ],
      },
      {
        title: "Visa + Funding",
        body: [
          "After securing admission the next step is to acquire a visa to the country of your institution. This requires proof of funding to obtain admission verification from the university which will be used to make the visa interview appointment. You will also need to fill up visa application and attach all the required documents for this process.",
          "Typically, students going on self-finance undergo a different process for visa acquisition whereas the students not having sufficient self-finance usually apply for fellowships and scholarships and we cater to the needs and requirements of each category of students. Moreover, insufficient knowledge regarding finances and its impact on visa process can be a difficult thing to navigate. Our experts are well experienced to guide you through this process and help you successfully acquire a visa.",
        ],
      },
    ],
  },
  {
    slug: "scholarships",
    title: "Scholarships",
    navTitle: "Scholarships",
    summary:
      "Our career counselors work with you to identify your strengths and interests, and help you make informed decisions about your career path. We provide guidance on job search strategies, resume writing, and interview skills.",
    heroTitle: "Scholarships",
    intro:
      "Don't let the prospect of paying for college overwhelm you. Our Scholarship Guidance service is here to help. We provide personalized advice on all types of scholarships, including those based on academics, sports, and financial need. Our experts have the knowledge and experience to help you secure the funding you need to make your dreams a reality.",
    steps: [
      {
        title: "Fulbright Scholarship",
        body: [
          "The Fulbright Master's and PhD Program funds graduate study in the United States. Funded by the United States Department of State, these grants cover tuition, required textbooks, airfare, a living stipend, and health insurance. USEFP also assists with the visa process. Edunki will help you navigate the application process and draft your statements in order to secure a Master's or a PhD at Fulbright.",
        ],
        link: {
          label: "usefp.org",
          href: "https://usefp.org/scholarships/fulbright-degree.cfm",
        },
      },
      {
        title: "DAAD",
        body: [
          "The DAAD supports Pakistani students and academics through a number of funding programmes in various German universities. Students can apply for Master's and PhD programs through DAAD.",
        ],
        link: {
          label: "daad.pk",
          href: "https://www.daad.pk/en/find-funding/daad-scholarship-programmes-for-pakistan/",
        },
      },
      {
        title: "Erasmus",
        body: [
          "Apply for an Erasmus Mundus Joint Master. Students from all over the world are welcome. You will study at several universities in Europe and beyond. Full scholarships are available for the best students.",
          "Erasmus Mundus Joint Masters are prestigious international masters, jointly designed and delivered by a group of higher education institutions. They involve at least 3 institutions from at least 3 different countries, and multiple associated partners from the academic and non-academic world. Typically, they include periods of study, research, traineeship, thesis preparation and defence.",
        ],
        link: {
          label: "erasmus-plus.ec.europa.eu",
          href: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
        },
      },
      {
        title: "Rhodes",
        body: [
          "There are two Scholarships available each year for Pakistan. The first Rhodes Scholar from Pakistan took up residence in Oxford in 1951, and since that time more than 70 citizens of Pakistan have been awarded this prestigious scholarship. The Rhodes Scholarship is a fully funded, full time, postgraduate award which enables talented young people from around the world to study at the University of Oxford. Rhodes Scholars come to the UK for two or more years and can apply to study most full-time postgraduate courses offered by Oxford University.",
        ],
        link: {
          label: "rhodeshouse.ox.ac.uk",
          href: "https://www.rhodeshouse.ox.ac.uk/scholarships/applications/pakistan/",
        },
      },
      {
        title: "Chevening",
        body: [
          "Chevening is the UK government's international scholarships programme. Funded by the Foreign, Commonwealth and Development Office and partner organisations, they offer awards to study in the UK for one year on a fully funded master's degree course.",
        ],
        link: {
          label: "chevening.org",
          href: "https://www.chevening.org/scholarship/pakistan/",
        },
      },
      {
        title: "Commonwealth",
        body: [
          "Commonwealth Scholarships are aimed at students from across the Commonwealth who would not otherwise be able to afford to study in the UK. By funding postgraduate studies in a range of different study formats, the scheme helps to support future innovators and leaders.",
        ],
        link: {
          label: "hec.gov.pk",
          href: "https://www.hec.gov.pk/english/scholarshipsgrants/lao/cwgs/Pages/default.aspx",
        },
      },
      {
        title: "Oxford Pakistan Programme Graduate Scholarships",
        body: [
          "The OPP Graduate Scholarships programme offers a range of scholarships, including both partial and full scholarships, to deserving students. The selection committee will make the decision on whether a partial or full scholarship is awarded based on the individual merit and circumstances of each applicant.",
          "The scholarships are offered to students applying for a one-year taught master's course at the University of Oxford (excluding MBA courses). You can still apply if you are admitted into a course that is longer than one year (e.g., M.Phil and D.Phil). In such cases, the OPP might be able to offer partial support.",
          "The OPP does not normally cover the cost for air travel from Pakistan. However, under exceptional cases and subject to availability of resources, they might be able to offer some travel support.",
        ],
        link: {
          label: "oxpakprogramme.org",
          href: "https://oxpakprogramme.org/graduate/",
        },
      },
      {
        title: "Oxford Centre for Islamic Studies (OCIS) Scholarships",
        body: [
          "The Oxford Centre for Islamic Studies is an institution for the advanced study of Islam and the Muslim world. The Centre provides a meeting point for the Western and Islamic worlds of learning. At Oxford, it contributes to the multi-disciplinary and cross-disciplinary study of the Islamic world. Beyond Oxford, its role is strengthened by an international network of academic contacts.",
          "The scholarship will cover 100% of course fees and a grant for living costs (at least £18,622). Awards are made for the full duration of your fee liability for the agreed course. Awards may be offered in conjunction with other sources of funding, although this will be taken into account when determining the value of the award.",
        ],
        link: {
          label: "ox.ac.uk",
          href: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/fees-funding-and-scholarship-search/oxford-centre-islamic-studies-ocis-scholarships",
        },
      },
      {
        title: "Türkiye Bursları Scholarship",
        body: [
          "Türkiye Scholarships is a government-funded higher education scholarship program run by the Republic of Türkiye for international students. It provides university and department placements unlike other higher education scholarship programs.",
        ],
        list: [
          "Covers tuition fees.",
          "Allows you to learn the language of the country of study with a 1-year Turkish language course, so resources are diversified in your academic research and daily life becomes more pleasurable.",
          "Provides accommodation for students arriving in a new country.",
          "Supports you on your journey to Türkiye and when you return to your country at the end of your education period, and covers your once-off flight ticket.",
          "Allows you to take full advantage of widespread health services when necessary with health insurance.",
          "Also provides a monthly stipend: 3,500 TL at undergraduate level, 5,000 TL at Master's level and 6,500 TL at PhD level per month.",
        ],
        link: {
          label: "turkiyeburslari.gov.tr",
          href: "https://www.turkiyeburslari.gov.tr/whyturkiyescholarships",
        },
      },
    ],
  },
  {
    slug: "education-counselling",
    title: "Education Counselling",
    navTitle: "Education Counselling",
    summary:
      "Our education counselors offer personalized guidance to help you navigate your academic journey. From program selection to admission processes and financial aid options, we're here to support you in making informed decisions about your education.",
    heroTitle: "Education Counselling",
    intro:
      "Looking to take your education to the next level? Our Education Counselling service provides personalized support and guidance to help you navigate the complex world of admissions, scholarships, and career advancement. With our help, you can achieve your educational goals and open up new opportunities for success.",
    steps: [
      {
        title: "Program specific guidance",
        body: [
          "We specialize in providing personalized assistance to individuals seeking clarity and direction in their academic pursuits. Through in-depth consultations and analysis, we offer tailored recommendations for academic programs that align with each individual's unique interests, goals, and aspirations.",
          "From understanding admission requirements to navigating application processes, our dedicated team provides comprehensive support at every step of the journey. Whether you're considering engineering, business, arts, or sciences, we're here to guide you towards programs that best suit your needs and help you achieve your academic and career ambitions. Let us be your trusted partner in navigating the complex landscape of higher education and unlocking your full potential.",
        ],
      },
      {
        title: "Background Analysis",
        body: [
          "Background Analysis for Academic Settings offers in-depth scrutiny of individuals' educational and professional backgrounds within academic contexts, catering to institutions' needs in admissions, research collaborations, faculty/staff screening, alumni tracking, and academic program evaluation.",
          "Our meticulous analysis encompasses verification of academic credentials, research contributions, work experience, and alumni achievements, enabling informed decision-making. With customized reporting presenting actionable insights, educational institutions can maintain high standards of academic integrity, select candidates best suited to their programs, foster research collaborations, and strengthen alumni relations, ultimately driving academic excellence and success.",
        ],
      },
      {
        title: "Career Support",
        body: [
          "We are dedicated to empowering individuals with the tools, resources, and guidance needed to navigate their professional journey successfully. Our experienced team offers personalized assistance in various aspects of career development, including resume writing, job search strategies, interview preparation, networking, and salary negotiation.",
          "Whether you're a recent graduate exploring entry-level opportunities or an experienced professional looking to advance your career, our tailored approach ensures that you receive the support you need to achieve your career goals. With Career Support, you can confidently navigate the complexities of the job market, maximize your professional potential, and embark on a path to long-term success and fulfillment.",
        ],
      },
    ],
  },
  {
    slug: "css-pms",
    title: "CSS/PMS",
    navTitle: "CSS/PMS",
    summary:
      "Our CSS/PMS test preparation experts offer customized study plans and strategies to help you qualify in this highly competitive exam.",
    heroTitle: "CSS / PMS",
    intro:
      "If you're serious about preparing for the Civil Services Examination, our consultancy can help you achieve your goals. We offer personalized study plans and strategies that have helped countless candidates succeed in the exam. With expert guidance from our experienced consultants, you'll have the tools you need to succeed.",
    steps: [
      {
        title: "Subject Selection",
        body: [
          "Choosing your optional subjects is one of the highest-leverage decisions in the whole examination. Our mentors — who have qualified CSS and PMS themselves — help you weigh your academic background, past paper trends, scoring patterns and the overlap between subjects so that your combination plays to your strengths rather than against them.",
          "We map out a realistic study plan around that combination, covering compulsory papers alongside your optionals, so you enter the exam cycle with a schedule you can actually sustain.",
        ],
      },
      {
        title: "Essay Writing",
        body: [
          "The essay paper decides more results than any other single paper. We work with you on outlining, thesis construction, argument sequencing and evidence, and then review your drafts line by line with the kind of feedback examiners never give you.",
          "You write, we critique, you rewrite — repeated across a range of topics until structure and clarity become second nature under timed conditions.",
        ],
      },
      {
        title: "Attempting Paper",
        body: [
          "We specialize in providing comprehensive guidance to individuals preparing for civil services examinations. Our team of experienced mentors offers personalized support tailored to each candidate's strengths, weaknesses, and aspirations. We provide in-depth knowledge about the examination process, including exam structure, syllabus coverage, and preparation strategies.",
          "From time management techniques to subject-specific guidance, we equip candidates with the tools and resources needed to excel in their exams. Whether you're aiming for national-level civil services or provincial examinations, we're here to help you navigate the complexities of the exam, build confidence, and achieve your career goals in public service.",
        ],
      },
      {
        title: "Interview Preparation",
        body: [
          "At edunki, we specialize in guiding individuals through the intricacies of interview preparation, ensuring they are well-equipped to showcase their skills and experiences effectively. Our expert team offers personalized support tailored to each candidate's industry, role, and specific interview requirements.",
          "We provide comprehensive coaching on interview techniques, including mock interviews, behavioral question practice, and constructive feedback sessions. Additionally, we offer guidance on crafting compelling responses, highlighting key achievements, and addressing potential challenges.",
          "Whether you're preparing for a job interview, graduate school admission interview, or professional advancement opportunity, we're here to help you present your best self and confidently navigate the interview process. With our support, you can approach interviews with poise, clarity, and confidence, increasing your chances of success in achieving your career aspirations.",
        ],
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
