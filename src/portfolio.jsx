import Bootstrap from './components/logos/Bootstrap';
import JQuery from './components/logos/JQuery';
import Laravel from './components/logos/Laravel';
import React from './components/logos/React';
import TailwindCss from './components/logos/TailwindCss';
import TypeScript from './components/logos/TypeScript';
import project11 from './assets/images/project1/1.png';
import project12 from './assets/images/project1/2.png';
import project13 from './assets/images/project1/3.png';
import project14 from './assets/images/project1/4.png';
import project15 from './assets/images/project1/5.png';

const header = {
  homepage: 'http://jasperfernandez.github.io/portfolio-v2/',
  title: 'JF',
};

const about = {
  name: 'Jasper Fernandez',
  role: 'Full Stack Web Developer',
  description:
    "I'm a 21-year-old Computer Science Graduate from Tandag City. I specialize in Web Development. I focus on building Efficient Backend Solutions and User-Friendly Interfaces to create Impactful Digital Experiences.",
  resume:
    'https://drive.google.com/file/d/1nPJL6-RGkdYEVJWnBAYWxHChkJpf7h9v/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/fernandezjasper/',
    github: 'https://github.com/jasperfernandez',
  },
};

const projects = [
  {
    name: 'Election Management System',
    images: [project11, project12, project13, project14, project15],
    description:
      'E-VotePro is an election management system designed to streamline the electoral process by providing a secure, efficient, and user-friendly platform for managing elections. It enables voters to cast their ballots online, reducing manual efforts and ensuring accurate results through automated tallying and reporting. This system includes features like voter authentication, real-time vote tracking, and result generation, making it ideal for schools, organizations, or small-scale elections. E-VotePro is my undergraduate thesis project.',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'JQuery',
        icon: <JQuery />,
      },
      {
        name: 'Bootstrap',
        icon: <Bootstrap />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Inventory Management System',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'JQuery',
        icon: <JQuery />,
      },
      {
        name: 'Bootstrap',
        icon: <Bootstrap />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Task Management System',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'JQuery',
        icon: <JQuery />,
      },
      {
        name: 'Bootstrap',
        icon: <Bootstrap />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Appointment System',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'JQuery',
        icon: <JQuery />,
      },
      {
        name: 'Bootstrap',
        icon: <Bootstrap />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Exam Results Management System',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'JQuery',
        icon: <JQuery />,
      },
      {
        name: 'Bootstrap',
        icon: <Bootstrap />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Barangay Management System with Chatbot using GPT-4o',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel />,
      },
      {
        name: 'React',
        icon: <React />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCss />,
      },
    ],
    sourceCode: '',
    livePreview: '',
  },
  // {
  //   name: 'Accident Reporting System',
  //   images: [
  //     'https://via.placeholder.com/150',
  //     'https://via.placeholder.com/150',
  //     'https://via.placeholder.com/150',
  //   ],
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stacks: [
  //     {
  //       name: 'Laravel',
  //       icon: <Laravel />,
  //     },
  //     {
  //       name: 'React',
  //       icon: <React />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Tailwind CSS',
  //       icon: <TailwindCss />,
  //     },
  //     {
  //       name: 'Flutter',
  //       icon: <TailwindCss />,
  //     },
  //   ],
  //   sourceCode: '',
  //   livePreview: '',
  // },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Java',
  'TypeScript',
  'React',
  'Laravel',
  'Tailwind CSS',
  'Git',
  'CI/CD',
  'MySQL',
];

const contact = {
  email: 'jasperfernandez322@gmail.com',
};

export { header, about, projects, skills, contact };
