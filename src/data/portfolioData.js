import {
  FaPython,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa'
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGooglecolab,
  SiNodedotjs,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbBrandCpp } from 'react-icons/tb'

export const personalInfo = {
  name: 'Muqadas Akram',
  role: 'Fresh Computer Science Graduate',
  title: 'Fresh Computer Science Graduate | Python Developer | Full Stack Developer | AI/ML Engineer | NLP',
  subtitle: 'AI · Machine Learning · NLP · Full Stack Development',
  email: 'muqadasakram.13@gmail.com',
  phone: '+92 319 828 8490',
  github: 'https://github.com/Muqadas1234',
  linkedin: 'https://www.linkedin.com/in/muqadas-akram/',
  location: 'Karachi, Sindh, Pakistan',
  heroImage: '/certificates/profile-image.png',
  aboutHome: [
    'Fresh Computer Science graduate and Python Developer with expertise in Artificial Intelligence, Machine Learning, NLP, and Full-Stack Development. Skilled in building intelligent, scalable, and AI-driven applications using modern technologies and frameworks.',
    'Experienced in international hackathons, programming competitions, and collaborative projects, with strong problem-solving, communication, and analytical skills.',
  ],
  aboutShort:
    'Fresh CS graduate skilled in AI, ML, NLP, and full-stack development — experienced in hackathons, collaborative projects, and delivering scalable applications.',
  aboutLong:
    'I am a fresh Computer Science graduate with expertise in AI, Machine Learning, NLP, and full-stack development. I have participated in international hackathons, programming competitions, and collaborative team projects, building intelligent and scalable solutions using Python and modern web frameworks.',
  resumeUrl: '/Muqadas Akram Resume.pdf',
}

const ELEVVO_GITHUB = 'https://github.com/Muqadas1234/Elevvo-Machine-Learning-Internship-Tasks'
const ICODEGURU_YOUTUBE =
  'https://www.youtube.com/watch?v=oyyR-cIXnMc&list=PLe-jr3hh4N_lmxV1j46KlVA1Jk7ihvGgp&index=5'

export const journey = [
  {
    title: 'AI/ML Intern',
    organization: 'Elevvo Pathways',
    type: 'Remote Internship · Cairo, Egypt',
    github: ELEVVO_GITHUB,
    certificateImage: '/certificates/elevvo-internship.png',
    certificateTitle: 'Elevvo Pathways — AI/ML Internship Certificate',
    highlights: [
      'Completed a remote AI/ML internship based in Cairo, Egypt',
      'Developed machine learning models for classification tasks (Logistic Regression, Decision Tree, Random Forest)',
      'Performed data preprocessing and feature engineering',
      'Evaluated models using Precision, Recall, and F1-score',
    ],
  },
  {
    title: 'Python Trainer',
    organization: 'iCodeGuru',
    type: 'Teaching & Mentorship',
    youtube: ICODEGURU_YOUTUBE,
    youtubeLabel: 'Python Training on YouTube',
    highlights: [
      'Online deliver Python sessions to students',
      'Mentor aspiring developers and simplify complex programming concepts',
      'Help students build strong problem-solving and coding fundamentals',
    ],
  },
  {
    title: 'International Hackathons',
    organization: 'Various global events',
    type: 'Hackathons & Contests',
    highlights: [
      'Participated in different international hackathons and programming contests',
      'Worked on diverse projects across multiple hackathon teams and themes',
      'Applied AI and full-stack development skills in fast-paced, collaborative settings',
    ],
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
]

export const certificateGroups = [
  {
    category: 'Hackathons (Lablab.ai)',
    items: [
      {
        id: 'raise-your-hack',
        title: 'Raise Your Hack',
        issuer: 'Lablab.ai',
        relatedProject: 'AI Travel Planner',
        issued: 'Hackathon',
        description:
          'Completed the Raise Your Hack AI hackathon and built the AI Travel Planner — personalized itineraries, budget planning, and Groq-powered recommendations.',
        skills: ['AI/ML', 'Groq API', 'Flask', 'Full Stack', 'Hackathon', 'Travel Tech'],
        url: 'https://lablab.ai/u/@Slate_Axon72yb/ai-hackathons/raise-your-hack/certificate',
        image: '/certificates/raise-your-hack.png',
      },
      {
        id: 'deriv-ai-talent-sprint',
        title: 'Deriv AI Talent Sprint',
        issuer: 'Lablab.ai',
        relatedProject: 'AI Compliance Decision System',
        issued: 'Hackathon',
        description:
          'Participated in Deriv AI Talent Sprint and developed an AI compliance system with policy retrieval, risk scoring, and auditable decisions.',
        skills: ['Qdrant', 'LlamaIndex', 'Streamlit', 'Multi-Agent AI', 'RAG', 'Hackathon'],
        url: 'https://lablab.ai/u/@Slate_Axon72yb/ai-hackathons/deriv-ai-talent-sprint/certificate',
        image: '/certificates/deriv-ai-talent-sprint.png',
      },
      {
        id: 'co-creating-gpt5',
        title: 'Co-Creating with GPT-5',
        issuer: 'Lablab.ai',
        relatedProject: 'AI Hackathons',
        issued: 'Hackathon',
        description:
          'Collaborative AI hackathon focused on building innovative applications with GPT-5 and modern LLM workflows in a team environment.',
        skills: ['GPT-5', 'LLM', 'Prompt Engineering', 'AI Applications', 'Hackathon', 'Team Collaboration'],
        url: 'https://lablab.ai/u/@Slate_Axon72yb/ai-hackathons/co-creating-with-gpt-5/certificate',
        image: '/certificates/co-creating-gpt5.png',
      },
    ],
  },
  {
    category: 'Coursera',
    items: [
      {
        id: 'python-everybody',
        title: 'Programming for Everybody (Getting Started with Python)',
        issuer: 'University of Michigan · Coursera',
        issued: 'Coursera',
        description:
          'Foundational Python course covering programming basics, variables, loops, functions, and problem-solving with hands-on assignments.',
        skills: [
          'Python Programming',
          'Programming Principles',
          'Computer Programming',
          'Computational Thinking',
          'Debugging',
          'Program Development',
        ],
        url: 'https://coursera.org/share/a900d93fb37f25790451b958d80834c0',
        image: '/certificates/python-everybody.png',
      },
      {
        id: 'python-data-structures',
        title: 'Python Data Structures',
        issuer: 'University of Michigan · Coursera',
        issued: 'Coursera',
        description:
          'Advanced Python course on lists, dictionaries, files, and data processing techniques for real-world programming tasks.',
        skills: [
          'Data Structures',
          'Python Programming',
          'File I/O',
          'Data Manipulation',
          'Data Analysis',
          'Dictionaries & Lists',
        ],
        url: 'https://coursera.org/share/8164e6262434957b722b812ef9c72701',
        image: '/certificates/python-data-structures.png',
      },
      {
        id: 'supervised-ml',
        title: 'Supervised Machine Learning: Regression and Classification',
        issuer: 'DeepLearning.AI · Stanford · Coursera',
        issued: 'Coursera',
        description:
          'Core machine learning course covering regression, classification, model training, evaluation, and feature engineering with Python.',
        skills: [
          'Machine Learning',
          'Supervised Learning',
          'Regression',
          'Classification',
          'NumPy',
          'Jupyter',
          'Feature Engineering',
        ],
        url: 'https://coursera.org/share/83a2d7439c5e9288ba3f2be678418890',
        image: '/certificates/supervised-ml.png',
      },
      {
        id: 'flask-intro',
        title: 'Introduction to Flask Framework',
        issuer: 'Coursera',
        issued: 'Coursera',
        description:
          'Hands-on introduction to building web applications and REST APIs with Flask, routing, templates, and deployment basics.',
        skills: [
          'Flask',
          'Web Frameworks',
          'REST APIs',
          'Python Programming',
          'Web Applications',
          'Debugging',
        ],
        url: 'https://coursera.org/share/43be6a7a9e640fd3ee0357494b1f83bb',
        image: '/certificates/flask-intro.png',
      },
      {
        id: 'fastapi-intro',
        title: 'Introduction to FastAPI Framework',
        issuer: 'Coursera',
        issued: 'Coursera',
        description:
          'Modern API development with FastAPI including routing, validation, documentation, testing, and deployment of Python backends.',
        skills: [
          'FastAPI',
          'REST APIs',
          'API Testing',
          'Data Validation',
          'JSON',
          'Application Deployment',
        ],
        url: 'https://coursera.org/share/a59bac18c6c08fd1104ff3aaddda8eaf',
        image: '/certificates/fastapi-intro.png',
      },
    ],
  },
  {
    category: 'Leadership Programs',
    items: [
      {
        id: 'aspire-leaders-program',
        title: 'Aspire Leaders Program',
        subtitle: 'AI-Integrated Leadership Program 2025 • Applied AI and Organizational Leadership',
        issuer: '',
        issued: 'Online Leadership Program',
        description:
          'Completed an intensive online leadership program focused on AI integration, organizational leadership, strategic thinking, and professional development in a global learning environment.',
        skills: [
          'AI Leadership',
          'Organizational Leadership',
          'Strategic Thinking',
          'Applied AI',
          'Online Mentorship',
          'Professional Development',
        ],
        image: '/certificates/aspire-leaders-program.jpeg',
      },
    ],
  },
  {
    category: 'Global Competitions',
    items: [
      {
        id: 'cs50x-puzzle-day-2026',
        title: 'CS50x Puzzle Day - 2026',
        subtitle: 'Global competition organized by Harvard University',
        issuer: 'Harvard University',
        issued: '2026',
        description:
          'Participated in CS50x Puzzle Day 2026, a global competition organized by Harvard University. This experience enhanced thinking ability and strengthened problem-solving skills. Special recognition to the CS50x team at Harvard University, especially David J. Malan, for creating and organizing such a challenging and inspiring global event.',
        skills: ['Problem Solving', 'Critical Thinking', 'Computational Thinking', 'Global Competition'],
        image: '/certificates/cs50x-puzzle-day.png',
      },
      {
        id: 'nasa-space-apps-2025',
        title: 'NASA Space Apps Challenge 2025 – Galactic Problem Solver',
        subtitle: 'NASA International Space Apps Challenge',
        issuer: 'NASA',
        issued: '2025',
        description:
          'Recognized as a Galactic Problem Solver at the 2025 NASA Space Apps Challenge for innovation, collaboration, and creative problem-solving.',
        skills: ['Innovation', 'Collaboration', 'Problem Solving', 'Space Tech'],
        image: '/certificates/nasa-space-apps-challenge-2025.png',
      },
      {
        id: 'meta-hacker-cup-2025',
        title: 'Meta Hacker Cup 2025',
        subtitle: 'Meta global programming challenge',
        issuer: 'Meta',
        issued: '2025',
        description:
          'Participated in Meta Hacker Cup 2025, organized by Meta (Facebook) — my first-ever attempt at this global competitive programming challenge.',
        skills: ['Competitive Programming', 'Algorithms', 'Problem Solving', 'Speed Coding'],
        image: '/certificates/meta-hacker-cup-2025.png',
      },
    ],
  },
]

export const experience = [
  {
    title: 'AI/ML Intern',
    company: 'Elevvo Pathways',
    location: 'Remote · Cairo, Egypt',
    period: 'Feb – Mar 2026',
    github: ELEVVO_GITHUB,
    certificateImage: '/certificates/elevvo-internship.png',
    certificateTitle: 'Elevvo Pathways — AI/ML Internship Certificate',
    highlights: [
      'Conducted a remote AI/ML internship for Elevvo Pathways, based in Cairo, Egypt',
      'Developed machine learning models for classification (Logistic Regression, Decision Tree, Random Forest)',
      'Performed data preprocessing and feature engineering',
      'Evaluated models using Precision, Recall, and F1-score',
    ],
  },
  {
    title: 'Python Trainer',
    company: 'iCodeGuru',
    location: 'Online',
    period: 'Jan – Feb 2026',
    youtube: ICODEGURU_YOUTUBE,
    youtubeLabel: 'Python Training on YouTube',
    highlights: [
      'Online deliver Python sessions to students',
      'Help learners build strong fundamentals and problem-solving skills',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Sukkur IBA University',
  cgpa: '3.31',
  duration: '2022 – 2026',
  programTitle: 'Aspire Leaders Program',
  programSubtitle: 'AI-Integrated Leadership Program 2025 • Applied AI and Organizational Leadership',
  programDuration: 'Oct - Dec 2025',
  programDescription:
    'Completed an intensive online leadership program focused on AI integration, organizational leadership, strategic thinking, and professional development in a global learning environment.',
}

export const skillGroups = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: TbBrandCpp },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Keras', icon: SiKeras },
      { name: 'NLP', icon: null },
      { name: 'FAISS', icon: null },
      { name: 'RAG Systems', icon: null },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Google Colab', icon: SiGooglecolab },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Interview Preparation Platform',
    badge: 'Final Year Project',
    github: 'https://github.com/Muqadas1234/AI-Powered-Interview-Preparation-Platform',
    demo: 'https://practice2panel.vercel.app/',
    frontend: ['React 18', 'React Router', 'CSS3', 'Web Speech API'],
    backend: ['Flask', 'PostgreSQL', 'Whisper'],
  },
  {
    id: 2,
    title: 'Lost & Found AI System',
    github: 'https://github.com/Muqadas1234/lost-found-system',
    youtube: 'OOWcbktyj4E',
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['Flask', 'SQLite', 'Sentence Transformers', 'Google OAuth'],
  },
  {
    id: 3,
    title: 'Multilingual AI Health Assistant',
    github: 'https://github.com/Muqadas1234/multilingual-ai-health-assistant',
    youtube: 'hZFOQIARnhU',
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['Flask', 'Groq API', 'gTTS', 'ReportLab'],
  },
  {
    id: 4,
    title: 'AI Travel Planner',
    github: 'https://github.com/Muqadas1234/AI-Travel-Planner',
    youtube: '6x5nJclSRRk',
    frontend: ['HTML', 'Tailwind CSS', 'JavaScript'],
    backend: ['Flask', 'SQLite', 'Groq API', 'NetworkX'],
  },
  {
    id: 5,
    title: 'AI Compliance Decision System',
    github: 'https://github.com/Muqadas1234/compliance-policy-ai',
    youtube: 'a2KrbP1mzcw',
    frontend: ['Streamlit'],
    backend: ['Python', 'Qdrant', 'LlamaIndex', 'Docker'],
  },
  {
    id: 6,
    title: 'AI Hospital Appointment Agent',
    github: 'https://github.com/Muqadas1234/AI-powered-hospital-appointment-agent',
    youtube: 'kn9bAX83H00',
    frontend: ['React'],
    backend: ['FastAPI', 'PostgreSQL', 'Twilio', 'VAPI'],
  },
]

