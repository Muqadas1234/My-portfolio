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
  subtitle: 'AI Engineer · Full-Stack Developer · Machine Learning · NLP',
  email: 'muqadasakram.13@gmail.com',
  phone: '+92 319 828 8490',
  github: 'https://github.com/Muqadas1234',
  linkedin: 'https://www.linkedin.com/in/muqadas-akram/',
  location: 'Karachi, Sindh, Pakistan',
  heroImage: '/certificates/profile-image.png',
  aboutHome: [
    'Fresh Computer Science graduate and Python Developer with expertise in Artificial Intelligence, Machine Learning, NLP, and Full-Stack Development. Skilled in building intelligent, scalable, and AI-driven applications using modern technologies and frameworks.',
    'Experienced in international hackathons, programming competitions, and collaborative projects, with strong problem-solving, communication, and analytical skills.',
    'Actively seeking full-time software development, full-stack developer, and AI/ML engineering internships or job opportunities. Open to both remote and on-site/hybrid roles.',
  ],
  aboutShort:
    'Fresh CS graduate skilled in AI, ML, NLP, and full-stack development. Experienced in international hackathons and actively seeking remote or on-site job and internship opportunities as a Full-Stack Developer or AI/ML Engineer.',
  aboutLong:
    'I am a fresh Computer Science graduate with expertise in AI, Machine Learning, NLP, and full-stack development. Having built robust platforms and competed in global hackathons, I am actively seeking full-time software engineering, full-stack development, or AI/ML internships and job opportunities — available for both remote and on-site/hybrid positions.',
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
  { id: 'home', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'connect', label: 'Connect' },
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
  cgpa: '3.39',
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
    description: `Practice2Panel is an AI-powered interview platform designed to help candidates prepare for technical and behavioral interviews. It provides realistic mock simulations, interactive voice/text practice, and automated feedback in a single ecosystem.

Key Features:
I. User Authentication: Secure login, signup, and robust session management.
II. Profile & Context Selection: Select specific job roles, interview types, and target skills prior to practicing.
III. Skill Prep Module: Skill-specific questions with both voice and text response options.
IV. Mock Interview Module: Realistic interview simulations (greetings, follow-ups, and closing) using balanced question sets.
V. Voice Processing: Spoken question-to-text conversion and conversational flow using Whisper and VAPI.
VI. AI Evaluation & Feedback: Rubric-based numeric scoring and detailed qualitative feedback on answers.
VII. AI Assistant Support: Contextual guidance for all skill- and job-role-based questions, suggesting clear ways to improve response quality.
VIII. Progress Dashboard: Interactive history tracking for practice sessions, scores, and activity summaries.`,
    github: 'https://github.com/Muqadas1234/AI-Powered-Interview-Preparation-Platform',
    demo: 'https://practice2panel.vercel.app/',
    frontend: ['React 18', 'React Router', 'CSS3', 'Web Speech API'],
    backend: ['Flask', 'PostgreSQL', 'Whisper', 'VAPI'],
  },
  {
    id: 2,
    title: 'Global Durood Shareef Tracker',
    description: `A full-stack Web and Mobile application designed to foster a spiritual community. It empowers users to track daily devotions, stay updated on events, and browse media, all managed via a secure admin dashboard.

Key Features:
I. Dual-Platform: Synchronized experience across Web (Next.js) and Mobile (React Native).
II. Trilingual Support: Dynamic localization for English, Urdu, and Sindhi.
III. Activity Tracking: Users can log and visualize their daily Durood recitations.
IV. Event & Media Management: Admins can manage events, track attendance, and curate a filterable photo gallery with an interactive lightbox.
V. Secure Admin Dashboard: Role-based access for managing users, content, and downloadable PDF reports.`,
    github: 'https://github.com/Muqadas1234/durood-shareef-tracker',
    demo: 'https://durood-shareef-tracker.vercel.app',
    frontend: ['Next.js 14', 'React', 'Tailwind CSS', 'React Native', 'Expo'],
    backend: ['Node.js', 'Next.js API Routes', 'PostgreSQL (Neon)', 'JWT Auth', 'Vercel'],
  },
  {
    id: 3,
    title: 'Lost & Found AI System',
    description: `This is a comprehensive Lost and Found Management System that uses AI and Natural Language Processing (NLP) to automatically match lost and found items. Utilizing semantic understanding, this platform connects items even when descriptions use different words but convey the same meaning.

Key Features:
I. AI-Powered Semantic Matching: Uses NLP and sentence transformers to enable semantic item matching, word-variation resistance, and automatic category detection.
II. Image Support: Allows users to upload and view images of lost/found items for quick visual identification.
III. Email Notifications: Sends automated, HTML-formatted email alerts to users when potential matches are identified.
IV. User Authentication: Robust account security with secure registration, email verification, password reset, and Google OAuth integration.
V. Admin Panel: Comprehensive administrative dashboard for managing reports, resolving match cases, and viewing system statistics.
VI. Advanced Search: Enables real-time semantic search with filtering by lost/found status, keywords, or contextual descriptions.
VII. Responsive Design: Mobile-friendly, modern interface that works seamlessly on desktop, tablet, and mobile devices.`,
    github: 'https://github.com/Muqadas1234/lost-found-system',
    youtube: 'OOWcbktyj4E',
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['Flask', 'SQLite', 'Sentence Transformers', 'Google OAuth', 'Gmail SMTP'],
  },
  {
    id: 4,
    title: 'Multilingual AI Health Assistant',
    description: `A sophisticated, production-ready AI-powered health assistant that provides intelligent medical diagnosis, treatment suggestions, and comprehensive health guidance in multiple languages. It features a modern WhatsApp-style chat interface, advanced AI diagnostics, medicine database, PDF report generation, and text-to-speech capabilities.

Key Features:
I. AI-Powered Health Assistant: Intelligent symptom analysis and comprehensive medical guidance.
II. Multilingual Support: English, Urdu (native script), and Roman Urdu capability with automatic language detection.
III. Modern Chat Interface: Seamless WhatsApp-style conversational format supporting real-time messaging.
IV. PDF Report Generation: Generates highly detailed and comprehensive health consultation reports on-demand.
V. Text-to-Speech: Integrated voice output for enhanced accessibility and hands-free convenience.
VI. Medicine Database: Features drug information, interaction warnings, and an automated dosage calculator.
VII. AI Diagnostics: Advanced symptom analyzer, disease predictor, and genetic risk calculator.
VIII. Mental Health Assessment: Comprehensive mental health evaluation module.
IX. Child Health Monitor: Pediatric health monitoring, growth tracking, and health guidance.
X. State Persistence: Seamlessly maintains conversation histories and modal states across page refreshes.`,
    github: 'https://github.com/Muqadas1234/multilingual-ai-health-assistant',
    youtube: 'hZFOQIARnhU',
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['Flask', 'Groq API', 'gTTS', 'ReportLab'],
  },
  {
    id: 5,
    title: 'AI Travel Planner',
    description: `AI Travel Planner is an intelligent, AI-powered web app designed to simplify trip planning by creating personalized itineraries, smart budget breakdowns, and destination suggestions. Powered by LLaMA via Groq and integrated with Tavily and Booking.com APIs, it features a modern glassmorphism interface, graph-based traveler profiling, and secure authentication.

Key Features:
I. AI-Powered Itineraries: Personalized travel planning and custom itineraries generated using LLaMA models via Groq API.
II. Traveler Profiling: Advanced graph-based user profile management and interest-based recommendations built with NetworkX.
III. Real-Time Travel Data: Live flight search via Tavily API and seamless hotel booking data integrated with Booking.com RapidAPI.
IV. Plan Management: Fully-featured dashboard to create, view, edit, delete, and export travel plans to CSV format.
V. Security & Authentication: Complete user lifecycle management featuring secure email verification, password reset, and CSRF protection.
VI. Premium User Interface: Beautiful responsive web interface styled with Tailwind CSS, featuring floating animations and modern glassmorphism effects.
VII. Notification Engine: Professional HTML email templates with secure Gmail SMTP integration for reliable verification and alert delivery.`,
    github: 'https://github.com/Muqadas1234/AI-Travel-Planner',
    youtube: '6x5nJclSRRk',
    frontend: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Jinja2'],
    backend: ['Flask', 'SQLite', 'Groq API', 'NetworkX', 'Tavily API', 'Booking.com API', 'Gmail SMTP'],
  },
  {
    id: 6,
    title: 'AI Compliance Decision System',
    description: `AI Compliance Decision System is a secure, automated policy validation platform designed to solve manual review inconsistencies. The system ingests policy regulations, retrieves relevant rules using a semantic vector search, and generates automated decisions backed by a highly traceable audit trail.

Key Features:
I. Policy Ingestion: Secure ingestion of policy documentation into a high-performance Qdrant vector database.
II. Intelligent Retrieval: Context-aware retrieval of target policies for each incoming document using semantic search.
III. Multi-Agent Pipeline: Autonomous orchestration of Policy, Risk, and Workflow agents to compile comprehensive compliance audits.
IV. Policy Agent: Generates policy-specific analysis, finding summaries, and optional LLM context.
V. Risk Agent: Analyzes the compliance risk level, calculates risk scores, and provides audit explanations.
VI. Workflow Agent: Delivers the final decision (Approve / Flag / Escalate) based on automated agent consensus.
VII. Streamlit UI: Modern interactive dashboard featuring secure audit trails and clear evidence visualization.
VIII. Flexible Deployment: Works seamlessly with a local embedded Qdrant database or a containerized Docker Qdrant server.`,
    github: 'https://github.com/Muqadas1234/compliance-policy-ai',
    youtube: 'a2KrbP1mzcw',
    frontend: ['Streamlit'],
    backend: ['Python', 'Qdrant', 'LlamaIndex', 'Docker'],
  },
  {
    id: 7,
    title: 'AI Receptionist',
    description: `AI Receptionist is a production-ready, voice-driven scheduling platform designed for clinics and hospitals. It allows patients to book, reschedule, or cancel appointments through natural conversation with an AI assistant, while healthcare staff manage slots, fees, and logs through a secure administrative dashboard.

Key Features:
I. Voice Assistant: Conversational, natural-language appointment booking, rescheduling, and cancellation with instant confirmation powered by Vapi.
II. Provider Dashboard: Administrative management of medical providers, time slots, consultation fees in PKR, and patient FAQs.
III. Calendar Integration: Automated real-time Google Calendar synchronization to manage and block booked appointment slots.
IV. Automated Reminders: Instant patient alerts and appointment reminders sent via Twilio SMS and WhatsApp messaging.
V. Secure Web Portal: Complete admin interface to view appointment histories, notification delivery status, and system audit logs.
VI. JWT-Protected API: Highly secure backend routes protected by JSON Web Tokens (JWT) coupled with tool endpoints for the voice stack.`,
    note: 'Videos demonstrating booking, cancellation, and rescheduling workflows are available in the playlist.',
    github: 'https://github.com/Muqadas1234/AI-powered-hospital-appointment-agent',
    youtube: 'kn9bAX83H00',
    frontend: ['React', 'Vite'],
    backend: ['Python', 'FastAPI', 'PostgreSQL', 'Vapi', 'Google Calendar API', 'Twilio', 'SQLAlchemy', 'Alembic'],
  },
]

