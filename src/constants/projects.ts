import { Project } from '../types/types';

export const projects: Project[] = [
  {
    title: 'WebContent Saver',
    description:
      'Comprehensive content analysis and management system with multiple client applications. Features AI-powered content categorization, automated summary generation, and offline-first approach for seamless user experience.',
    mediaItems: [
      { type: 'image', url: '/images/mixtape/1.png' },
      { type: 'video', url: '/videos/mixtape/1.mp4' },
    ],
    technologies: [
      'React Native',
      'NestJS',
      'GraphQL',
      'Prisma',
      'AI/ML libraries',
      'AWS',
    ],
  },
  {
    title: 'WMS',
    description:
      'A comprehensive Warehouse Management System designed to optimize inventory control and streamline operations in large-scale distribution centers. This solution features advanced cyclic counting capabilities, real-time tracking, and seamless integration with broader supply chain systems, significantly enhancing inventory accuracy and operational efficiency. By providing intuitive interfaces for warehouse staff and powerful analytics for management, the system enables data-driven decision-making and substantial improvements in overall supply chain performance.',
    mediaItems: [
      { type: 'image', url: '/images/wms/main.jpg' },
      { type: 'image', url: '/images/wms/1.jpg' },
      { type: 'image', url: '/images/wms/2.jpg' },
      { type: 'image', url: '/images/wms/3.jpg' },
      { type: 'image', url: '/images/wms/4.jpg' },
      { type: 'image', url: '/images/wms/5.jpg' },
    ],
    technologies: ['React.JS', 'Node.JS', 'Prisma', 'MongoDB'],
  },
  {
    title: 'iPACs Reports',
    description:
      'An advanced Key Performance Indicator (KPI) dashboard designed to revolutionize supply chain management decision-making. This intuitive interface visualizes critical metrics and strategic alignment data in real-time, offering comprehensive insights across the entire supply chain ecosystem. By integrating complex data streams into clear, actionable visualizations, the system empowers executives and managers to identify trends, optimize processes, and drive strategic improvements. Its customizable reports and predictive analytics capabilities enable proactive problem-solving and foster a data-driven culture, ultimately enhancing operational efficiency and supporting long-term business objectives.',
    mediaItems: [
      { type: 'image', url: '/images/ipacs-reports/main.jpg' },
      { type: 'image', url: '/images/ipacs-reports/1.jpg' },
    ],
    technologies: ['React.JS', 'Java Sring Boot', 'Oracle', 'Websockets'],
  },
  {
    title: 'Telco Trunks Audit',
    description:
      "Project to manage audit client's installed base to provide the service, this includes mapping installed base in Google Earth for generating reports in KML format. User uploads initial status of their systems (excel), and the goes directly to site and captures information. Information is cross-checked and updated for a final report.",
    mediaItems: [
      { type: 'image', url: '/images/trunk-audit/main.jpeg' },
      { type: 'image', url: '/images/trunk-audit/1.jpeg' },
      { type: 'image', url: '/images/trunk-audit/2.jpeg' },
      { type: 'image', url: '/images/trunk-audit/3.jpeg' },
      { type: 'image', url: '/images/trunk-audit/4.jpeg' },
      { type: 'image', url: '/images/trunk-audit/5.jpeg' },
    ],
    technologies: ['React.JS', 'Ionic', 'Node.JS', 'MySQL'],
  },
];
