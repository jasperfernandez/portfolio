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
  homepage: 'https://127.0.0.1:5174',
  title: 'JF',
};

const about = {
  name: 'Jasper Fernandez',
  role: 'Full Stacks Web Developer',
  description:
    "I'm a 21-year-old Computer Science graduate from Tandag City. I specialize in web development. I focus on building efficient backend solutions and user-friendly interfaces to create impactful digital experiences.",
  resume:
    'https://drive.google.com/file/d/1nPJL6-RGkdYEVJWnBAYWxHChkJpf7h9v/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
};

const projects = [
  {
    name: 'Election Management System',
    images: [project11, project12, project13, project14, project15],
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
    sourceCode: 'ssssssssss',
    livePreview: 'ssss',
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
