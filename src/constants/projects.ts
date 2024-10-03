import { Project } from '../types/types';

import mixtapeImage1 from '../assets/images/mixtape/1.png';
import mixtapeVideo1 from '../assets/videos/mixtape/1.mp4';
import wmsMainImage from '../assets/images/wms/main.jpg';
import wmsImage1 from '../assets/images/wms/1.jpg';
import wmsImage2 from '../assets/images/wms/2.jpg';
import wmsImage3 from '../assets/images/wms/3.jpg';
import wmsImage4 from '../assets/images/wms/4.jpg';
import wmsImage5 from '../assets/images/wms/5.jpg';
import ipacsReportsMainImage from '../assets/images/ipacs-reports/main.jpg';
import ipacsReportsImage1 from '../assets/images/ipacs-reports/1.jpg';
import trunkAuditMainImage from '../assets/images/trunk-audit/main.jpeg';
import trunkAuditImage1 from '../assets/images/trunk-audit/1.jpeg';
import trunkAuditImage2 from '../assets/images/trunk-audit/2.jpeg';
import trunkAuditImage3 from '../assets/images/trunk-audit/3.jpeg';
import trunkAuditImage4 from '../assets/images/trunk-audit/4.jpeg';
import trunkAuditImage5 from '../assets/images/trunk-audit/5.jpeg';
import trunkAuditImage6 from '../assets/images/trunk-audit/6.jpeg';


export const projects: Project[] = [
  {
    title: 'WebContent Saver',
    description:
      'Comprehensive content analysis and management system with multiple client applications. Features AI-powered content categorization, automated summary generation, and offline-first approach for seamless user experience.',
    mediaItems: [
      { type: 'image', url: mixtapeImage1 },
      { type: 'video', url: mixtapeVideo1 },
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
      { type: 'image', url:wmsMainImage },
      { type: 'image', url: wmsImage1},
      { type: 'image', url: wmsImage2 },
      { type: 'image', url: wmsImage3 },
      { type: 'image', url: wmsImage4 },
      { type: 'image', url: wmsImage5 },
    ],
    technologies: ['React.JS', 'Node.JS', 'Prisma', 'MongoDB'],
  },
  {
    title: 'iPACs Reports',
    description:
      'An advanced Key Performance Indicator (KPI) dashboard designed to revolutionize supply chain management decision-making. This intuitive interface visualizes critical metrics and strategic alignment data in real-time, offering comprehensive insights across the entire supply chain ecosystem. By integrating complex data streams into clear, actionable visualizations, the system empowers executives and managers to identify trends, optimize processes, and drive strategic improvements. Its customizable reports and predictive analytics capabilities enable proactive problem-solving and foster a data-driven culture, ultimately enhancing operational efficiency and supporting long-term business objectives.',
    mediaItems: [
      { type: 'image', url: ipacsReportsMainImage },
      { type: 'image', url: ipacsReportsImage1 },
    ],
    technologies: ['React.JS', 'Java Sring Boot', 'Oracle', 'Websockets'],
  },
  {
    title: 'Telco Trunks Audit',
    description:
      "Project to manage audit client's installed base to provide the service, this includes mapping installed base in Google Earth for generating reports in KML format. User uploads initial status of their systems (excel), and the goes directly to site and captures information. Information is cross-checked and updated for a final report.",
    mediaItems: [
      { type: 'image', url: trunkAuditMainImage },
      { type: 'image', url: trunkAuditImage1 },
      { type: 'image', url: trunkAuditImage2 },
      { type: 'image', url: trunkAuditImage3 },
      { type: 'image', url: trunkAuditImage4 },
      { type: 'image', url: trunkAuditImage5 },
      { type: 'image', url: trunkAuditImage6 },
    ],
    technologies: ['React.JS', 'Ionic', 'Node.JS', 'MySQL'],
  },
];
