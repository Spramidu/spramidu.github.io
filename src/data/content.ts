
export const siteUrl = 'https://spramidu.github.io'

// ==========================================
// PERSONAL PROFILE
// ==========================================

export const profile = {
  name: 'Pramidu Saumyajith',
  firstName: 'Pramidu',
  lastName: 'Saumyajith',
  fullName: 'Pramidu Saumyajith',

  role: 'Electronics Hardware Engineer',

  roleRotation: [
    'Photonics · Electronics · Robotics',
    'M.Sc. Photonics Scholar · ASP, FSU Jena',
  ],

  degree:
    'M.Sc. Photonics — Abbe School of Photonics, Friedrich Schiller University Jena',

  location: 'Jena, Germany',

  tagline:
    'Engineering innovative hardware solutions through electronics, photonics and physical sciences.',

  about:
    'I am an Electronics and Telecommunication Engineering graduate currently pursuing an M.Sc. in Photonics at the Abbe School of Photonics, Friedrich Schiller University Jena, Germany. My interests include electronics hardware engineering, power electronics, photonics, PCB design, RF and mixed-signal electronics, embedded systems, robotics, and emerging quantum and photonic technologies. I have practical experience in hardware development, PCB design, simulation, validation, debugging, testing, and prototyping. I am keen to expand my knowledge of photonics and explore its applications alongside electronics and physical sciences. I enjoy translating engineering concepts into practical hardware solutions and learning about technologies at the intersection of electronics, robotics, photonics, and physical sciences.',

  email: 'spramidu@gmail.com',
  phone: '+49 1523 3969305',

  cvUrl: 'Pramidu_Saumyajith_CV.pdf',

  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pramidu',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Spramidu',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/pramidu_saumyajith/',
    },
  ],
} as const


// ==========================================
// HERO TICKER
// ==========================================

export const heroTicker = [
  {
    lead: 'Photonics',
    trail: 'Electronics · Robotics',
  },
  {
    lead: 'M.Sc. Photonics Scholar',
    trail: 'ASP · FSU Jena',
    logo: 'logos/abbe_school.png',
  },
] as const


// ==========================================
// NAVIGATION
// ==========================================

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
] as const


// ==========================================
// EXPERIENCE
// ==========================================

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  logo?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Synapticon GmbH',
    role: 'Electronic Hardware Engineering Intern',
    period: 'December 2024 — May 2025',
    location: 'Schönaich, Germany',
    logo: 'logos/synapticon.png',
    bullets: [
      'Worked on electronic hardware engineering and development.',
      'Performed PCB design and hardware simulations.',
      'Conducted hardware validation, debugging and testing.',
      'Participated in prototyping and technical documentation.',
    ],
  },
]


// ==========================================
// EDUCATION LOGOS
// ==========================================

export const educationLogos = [
  {
    name: 'Abbe School of Photonics',
    logo: 'logos/abbe_school.png',
  },
  {
    name: 'University of Moratuwa',
    logo: 'logos/moratuwa.png',
  },
  {
    name: 'De Mazenod College',
    logo: 'logos/demazenod.png',
  },
]


// ==========================================
// TECHNICAL SKILLS
// ==========================================

export type SkillGroup = {
  id: string
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'photonics',
    label: 'Photonics & Optical Engineering',
    skills: [
      'Ansys Zemax OpticStudio',
    ],
  },
  {
    id: 'hardware',
    label: 'Electronics & Hardware Engineering',
    skills: [
      'Electronic Hardware Design',
      'Power Electronics',
      'PCB Design',
      'Schematic Design',
      'PCB Layout',
      'Hardware Development',
      'RF Electronics',
      'Mixed-Signal Electronics',
      'THT Soldering',
      'SMT Soldering',
      'Reflow Soldering',
    ],
  },
  {
    id: 'eda',
    label: 'Simulation & EDA Tools',
    skills: [
      'Altium Designer',
      'LTspice',
      'PSIM',
      'MATLAB',
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems & Programming',
    skills: [
      'C',
      'C++',
      'Python',
      'RTOS',
      'Microcontrollers',
      'Firmware Development',
      'ROS 2',
    ],
  },
  {
    id: 'digital',
    label: 'Digital Electronics & FPGA',
    skills: [
      'Verilog',
      'VHDL',
    ],
  },
  {
    id: 'testing',
    label: 'Testing & Measurement',
    skills: [
      'Oscilloscope',
      'Logic Analyzer',
      'Vector Network Analyzer (VNA)',
      'Differential Probing',
      'IR Thermal Imaging',
      'Climate Chamber Testing',
      'Current Measurement',
      'Impedance Measurement',
      'Hardware Debugging',
      'Hardware Validation',
    ],
  },
  {
    id: 'cad',
    label: 'CAD & Mechanical Design',
    skills: [
      'SolidWorks',
    ],
  },
]


// ==========================================
// ABOUT SECTION
// ==========================================

export type AboutTabId =
  | 'education'
  | 'certifications'
  | 'skills'
  | 'strengths'

export type AboutTabItem = {
  title: string
  location?: string
  period?: string
  detail?: string
  logo?: string
}

export const aboutTabs: {
  id: AboutTabId
  label: string
  items: AboutTabItem[]
}[] = [
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        title: 'Abbe School of Photonics',
        location: 'Jena, Germany',
        period: 'October 2026 – Present',
        detail: 'M.Sc. Photonics · Friedrich Schiller University Jena',
      },
      {
        title: 'University of Moratuwa',
        location: 'Moratuwa, Sri Lanka',
        period: '2022 – June 2026',
        detail:
          'B.Sc. Eng. (Hons), Electronic & Telecommunication Engineering',
      },
      {
        title: 'De Mazenod College',
        location: 'Kandana, Sri Lanka',
        period: '2007 – 2020',
        detail:
          'G.C.E. Advanced Level – Physical Science · 2020 · Combined Mathematics: A · Physics: A · Chemistry: A · Top 2% nationally',
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Courses',
    items: [
      {
        title: 'Altium Education PCB Basic Design Course',
        detail: 'PCB design fundamentals',
        logo: 'logos/altium-education.png',
      },
    ],
  },
  {
    id: 'skills',
    label: 'Languages',
    items: [
      {
        title: 'English',
        detail: 'C1',
      },
      {
        title: 'German',
        detail: 'A1',
      },
      {
        title: 'Sinhala',
        detail: 'Native',
      },
    ],
  },
  {
    id: 'strengths',
    label: 'Strengths',
    items: [
      {
        title: 'Critical Thinking',
      },
      {
        title: 'Fast Learning',
      },
      {
        title: 'Problem Solving',
      },
      {
        title: 'Analytical Thinking',
      },
      {
        title: 'Technical Adaptability',
      },
      {
        title: 'Practical Skills',
      },
      {
        title: 'Attention to Detail',
      },
      {
        title: 'Research and Independent Learning',
      },
      {
        title: 'Teamwork and Collaboration',
      },
    ],
  },
]


// ==========================================
// PROJECTS
// ==========================================

export const projectFilters = [
  'All',
  'Electronics',
  'Embedded Systems',
  'Robotics',
  'Research',
] as const

export type ProjectFilter = (typeof projectFilters)[number]

export type Project = {
  title: string
  description: string
  image?: string
  href?: string
  tags: string[]
  categories: Exclude<ProjectFilter, 'All'>[]
  images?: string[]
  videos?: string[]
}

export const projects: Project[] = [
  {
    title: 'RF Front End for GNSS – ML-Based Spoofing Detection',
    description:
      'Final-year research project focused on the design and development of an RF front end for a GNSS receiver. The work involves RF hardware development, signal conditioning, filtering and signal processing for machine-learning-based GNSS spoofing detection.',
    image: '/projects/gnss-front.png',
    images: [
      '/projects/gnss-front.png',
      '/projects/gnss-back.png',
    ],
    tags: [
      'RF Electronics',
      'GNSS',
      'PCB Design',
      'Signal Processing',
      'Machine Learning',
    ],
    categories: [
      'Electronics',
      'Research',
    ],
  },
  {
    title: 'IoT-Based Freezer Monitoring System',
    description: '',
    image: '/projects/freezer-01.jpg',
    images: [
      '/projects/freezer-01.jpg',
      '/projects/freezer-02.jpg',
    ],
    tags: [
      'IoT',
      'Embedded Systems',
      'Electronics',
    ],
    categories: [
      'Electronics',
      'Embedded Systems',
    ],
  },
  {
    title: 'Sri Lankan Robotics Challenge 2024',
    description: '',
    tags: [
      'Robotics',
      'Hardware Design',
      'Embedded Systems',
    ],
    categories: [
      'Robotics',
      'Embedded Systems',
    ],
    videos: [
      'https://www.youtube.com/embed/9X1hkZENcs8',
      'https://www.youtube.com/embed/aink8tEluaA',
    ],
  },
  {
    title: 'Embedded Energy-Monitoring Device',
    description: '',
    tags: ['Embedded Systems', 'Energy Monitoring'],
    categories: ['Embedded Systems'],
  },
  {
    title: 'Enhanced Medibox',
    description: '',
    tags: ['Embedded Systems', 'MQTT', 'Node-RED'],
    categories: ['Embedded Systems'],
  },
  {
    title: 'Guitar Headphone Amplifier',
    description: '',
    tags: ['Analog Electronics', 'Circuit Design'],
    categories: ['Electronics'],
  },
  {
    title: 'Robot Design and Competition',
    description: '',
    tags: ['Robotics', 'Electronics'],
    categories: ['Robotics'],
  },
  {
    title: 'Innovative Automated Mosquito Net',
    description: '',
    tags: ['Automation', 'Engineering Design'],
    categories: ['Electronics'],
  },
]


// ==========================================
// PUBLICATIONS
// ==========================================

export const publications = [
  {
    title:
      'NEMESIS: Neural Embeddings for Modern Electronic-Warfare Spoofing Identification System',
    venue:
      '2026 International Applied Computational Electromagnetics Society Symposium (ACES)',
    date: '2026',
    authors: 'Pramidu Saumyajith – Co-author',
    description:
      'A self-supervised JEPA-based framework for GNSS spoofing detection, combining wavelet time-frequency analysis with a custom GNSS L1 RF front-end to identify spoofing attacks using unlabeled RF data.',
    href:
      'https://ieeexplore.ieee.org/abstract/document/11585567',
  },
  {
    title:
      'NEMESIS-Shield: Learning Resilient Signal Representations for GNSS Integrity via JEPA',
    venue:
      '2026 IEEE 104th Vehicular Technology Conference (VTC2026-Fall)',
    date: '2026',
    authors: 'Pramidu Saumyajith – Co-author',
    description:
      'An advanced JEPA-based framework for robust GNSS spoofing detection in autonomous vehicles and other safety-critical applications, using wavelet-domain signal representation learning and neural network classification.',
    href:
      'https://ieeexplore.ieee.org/abstract/document/11758470',
  },
]


// ==========================================
// LEADERSHIP & ACTIVITIES
// ==========================================

export const leadership = [
  'IEEE Student Member',
  'Webmaster – UoM IEEE MTT-S Student Branch Chapter',
  'Electronics Club',
  'Swimming',
]


// ==========================================
// CONTACT FORM
// ==========================================

export const contactFormEndpoint = ''
