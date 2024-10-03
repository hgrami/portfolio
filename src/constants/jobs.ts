import { Job } from '../types/types';

export const jobs: Job[] = [
  {
    title: 'Senior Software Engineer (Contractor)',
    company: 'BENEFIT FLOW',
    period: 'May 2024 - Current',
    description: [
      'Spearheading the implementation of application-wide filters using Redux Saga and leading the migration to React Query for improved state management and data fetching.',
      'Optimized query performance, reducing payload size from 500MB to 150MB through efficient use of React Query and strategic caching, significantly improving application responsiveness.',
      'Developing with a modern tech stack: ReactJS (Frontend), AWS Serverless with Node.js (Backend), PostgreSQL and Elasticsearch (Databases).',
    ],
    technologies: [
      'React',
      'Redux Saga',
      'React Query',
      'AWS Serverless',
      'Node.js',
      'PostgreSQL',
      'Elasticsearch',
    ],
  },
  {
    title: 'Senior Software Engineer (Contractor)',
    company: 'BONUSLY',
    period: 'July 2023 - May 2024',
    description: [
      'Worked with Micro-Frontends architecture to improve scalability and maintainability of the application.',
      'Developed and shipped a bookmarking feature, enhancing user experience and content accessibility.',
      'Created a performance enablement feedback system, improving employee development processes.',
      'Built a comprehensive 1-on-1 meeting feature integrated with Tip-tap, facilitating better team communication.',
      "Integrated AI capabilities using ChatGPT API for generating recommendations, enhancing the product's intelligent features.",
    ],
    technologies: [
      'React.js',
      'Micro-Frontends',
      'Java',
      'Ruby',
      'MongoDB',
      'ChatGPT API',
    ],
  },
  {
    title: 'Software Engineer II (Contractor)',
    company: '7SHIFTS',
    period: 'April 2022 - July 2023',
    description: [
      'Designed and developed stream chat functionality for effective restaurant manager-employee communication.',
      'Implemented and maintained integrations with major payroll and POS providers (ADP, Toast, Square, Clover).',
      'Led the implementation of two new POS integrations (Lightspeed K and Oracle Micros Symphony), managing sales, labor, and tip data.',
    ],
    technologies: ['React.js', 'PHP', 'Apollo/GraphQL', 'MySQL'],
  },
  {
    title: 'Senior Software Engineer (Tech-Lead) / Solution Architect',
    company: 'TECH MAHINDRA',
    period: 'May 2018 - April 2022',
    description: [
      'Managed large-scale supply chain development program for AT&T, handling 10k+ concurrent users and 10k+ monthly orders.',
      'Designed and implemented inventory traceability solution using React.js, Java Spring Boot, and Oracle 12c.',
      "Developed a Reports Portal for AT&T's Board of Directors, integrating data from multiple systems (CRM, ERP, IMS) using React.js, Node.js, and Oracle 12c.",
    ],
    technologies: ['React.js', 'Java Spring Boot', 'Node.js', 'Oracle 12c'],
  },
];
