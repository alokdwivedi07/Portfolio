export type Skill = {
  name: string
  category: 'Language' | 'AI/ML' | 'Cloud' | 'Data' | 'Frontend' | 'Backend' | 'Database'
}

export type Experience = {
  role: string
  organization: string
  duration?: string
}

export type Project = {
  title: string
  category: string
  description: string
  stack: string[]
}

export type Certificate = {
  title: string
  issuer: string
  url?: string
}

export type Achievement = {
  title: string
  description: string
}

export type PortfolioData = {
  profile: {
    name: string
    title: string
    location: string
    summary: string
    cgpa: string
  }
  skills: Skill[]
  experience: Experience[]
  projects: Project[]
  certificates: Certificate[]
  achievements: Achievement[]
}

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Alok Kumar Dwivedi',
    title: 'AI/ML Engineer | Full Stack Developer',
    location: 'Sultanpur Uttar Pradesh India',
    summary:
      'Aspiring Computer Science Engineer skilled in AI/ML, Cloud Technologies and Automation seeking opportunities to build scalable intelligent systems.',
    cgpa: '9.25',
  },
  skills: [
    { name: 'Python', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'SQL', category: 'Language' },
    { name: 'C', category: 'Language' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Scikit Learn', category: 'AI/ML' },
    { name: 'LangChain', category: 'AI/ML' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Pandas', category: 'Data' },
    { name: 'NumPy', category: 'Data' },
    { name: 'React', category: 'Frontend' },
    { name: 'NodeJS', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
  ],
  experience: [
    {
      role: 'AI/ML Intern',
      organization: 'NIELIT',
      duration: '2025-Present',
    },
    {
      role: 'MERN Intern',
      organization: 'SoftPro India',
    },
  ],
  projects: [
    {
      title: 'RAG Knowledge Assistant',
      category: 'Generative AI',
      description:
        'A retrieval augmented assistant that turns documents into searchable, context-aware responses.',
      stack: ['LangChain', 'Python', 'Vector DB', 'React'],
    },
    {
      title: 'AGRITECH AI Platform',
      category: 'AI Platform',
      description:
        'An intelligent agriculture concept for crop guidance, automation, and data-backed decisions.',
      stack: ['TensorFlow', 'Pandas', 'AWS', 'NodeJS'],
    },
    {
      title: 'Exam Prep Platform',
      category: 'Full Stack',
      description:
        'A focused learning platform with structured preparation flows and responsive student dashboards.',
      stack: ['React', 'NodeJS', 'MongoDB', 'JavaScript'],
    },
  ],
  certificates: [
    {
      title: 'Certificate Course on Artificial Intelligence',
      issuer: 'ICT Academy',
      url: 'https://drive.google.com/file/d/1nCo5Hh0nWDafpuc78fiMDC9dP-LePBl-/view?usp=drivesdk',
    },
    {
      title: 'Complete Generative AI',
      issuer: 'Udemy',
      url: 'https://drive.google.com/file/d/1SOv4TbM2ITmWqhlA9T-KWNRJcYxIYmbq/view?usp=drivesdk',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'AWS',
      url: 'https://drive.google.com/file/d/1o4Ji8sPtmoJkvqGBxozoMtq2OUEymivR/view?usp=drivesdk',
    },
    {
      title: 'GenAI Basics',
      issuer: 'Professional Learning',
      url: 'https://drive.google.com/file/d/1d_iN_uoCvxaZyrI_6nPmlVXYNDOLN0ot/view?usp=drivesdk',
    },
  ],
  achievements: [
    {
      title: '9.25 CGPA',
      description: 'Consistent academic performance in Computer Science Engineering.',
    },
    {
      title: 'AI/ML Internship',
      description: 'Applied machine learning concepts through current training at NIELIT.',
    },
    {
      title: 'Full Stack Practice',
      description: 'Built MERN-based applications with frontend, backend, and database workflows.',
    },
  ],
}
