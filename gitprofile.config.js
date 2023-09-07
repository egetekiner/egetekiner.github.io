// gitprofile.config.js

const config = {
  github: {
    username: 'egetekiner', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'egetekiner',
    twitter: 'egetekiner',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    medium: 'egetekiner',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    telegram: 'egetekiner',
    //website: 'https://arifszn.com',
    //phone: '',
    email: 'egetekiner@gmail.com',
  },
  skills: [
    'Solidity',
    'Blockchain',
    'JavaScript',
    'Web3',
    'Python',
    'Rust',
    'Blockchain Datascience',
    'Blockchain Security',
    'MySQL',
    'MongoDB',
    'Git',
    'Academic Writing',
  ],
  experiences: [
    {
      company: 'Chainly Data Solutions',
      position: 'CTO - Founder',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://chainly.dev',
    },
    {
      company: 'Cisco Systems',
      position: 'Senior Blockchain Engineer',
      from: 'Jan 2023',
      to: 'Present',
      companyLink: 'https://cisco.com',
    },
    {
      company: 'Codex DF',
      position: 'Senior Blockchain and Distributed System Engineer',
      from: 'June 2022',
      to: 'Dec 2022',
      companyLink: 'https://codexdf.com',
    },
    {
      company: 'Crypto.com',
      position: 'Blockchain Security Engineer & Researcher',
      from: 'Apr 2022',
      to: 'June 2022',
      companyLink: 'https://crypto.com',
    },
    {
      company: 'NetTalk',
      position: 'Blockchain Project Architech',
      from: 'Sep 2022',
      to: 'Apr 2022',
      companyLink: 'https://nettalk.com',
    },
    {
      company: 'Florida International University',
      position: 'Blockchain Security Research Assistant',
      from: 'Sep 2019',
      to: 'Sep 2021',
      companyLink: 'https://nettalk.com',
    },
  ],
   certifications: [
    {
      name: 'Anti Money Laundering and Terror Financing',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://crypto.com'
    },
    
    {
      name: 'Responsible Conduct of Research for Engineers',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Mar 2021',
      link: 'https://www.citiprogram.org/verify/?w436f2ac3-a187-48ef-a711-beecd0ff4885-41826395'
    },

    {
      name: 'Academic Research Etiquette',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Nov 2019',
      link: 'https://nsf.gov'
    },
    
    
    
  ],
  education: [
    {
      institution: 'Florida International University',
      degree: 'Masters of Science in Computer Engineering',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Ankara University',
      degree: 'Computer Engineering',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SoK: Cryptojacking Malware                                                                                         ',
      description:
        'Today, a myriad of blockchain and cryp-tocurrency systems, applications, and technologies are widely available to companies, end-users, and even malicious actors who want to exploit the computational resources of regular users through cryptojacking malware',
      //imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ieeexplore.ieee.org/abstract/document/9581251?casa_token=KJyog5oGz2EAAAAA:q1c4fJeUKQ5tJnA7CnD6dYEYKvrHZyB4N_Yuz4aG3IF6TN-1plUywVUb8_lWIxsMx1vYZ4XDNws',
    },
    {
      title: 'A Lightweight IoT Cryptojacking Detection...',
      description:
        'Recently, cryptojacking malware has become an easy way of reaching and profiting from a large number of victims. Prior works studied the cryptojacking detection systems focusing on both in-browser and host-based cryptojacking malware',
      //imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ieeexplore.ieee.org/abstract/document/9581251?casa_token=KJyog5oGz2EAAAAA:q1c4fJeUKQ5tJnA7CnD6dYEYKvrHZyB4N_Yuz4aG3IF6TN-1plUywVUb8_lWIxsMx1vYZ4XDNws',
    },
    {
      title: 'A cost-efficient IoT forensics framework with blockchain',
      description:
        'IoT devices have been adopted widely in the last decade which enabled collection of various data from different environments. Data storage poses challenges since the data may be compromised during the storage and the integrity might be violated without being noticed.',
      //imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ZXtuelQAAAAJ&citation_for_view=ZXtuelQAAAAJ:u-x6o8ySG0sC',
    },
    {
      title: 'In-browser cryptomining for good: An untold story',
      description:
        'In-browser cryptomining uses the computational power of a website visitors to mine cryptocurrency, i.e., to create new coins. With the rise of ready-to-use mining scripts distributed by service providers (e.g., Coinhive), it has become trivial to turn a website into a cryptominer by copying and pasting the mining script.',
      //imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ieeexplore.ieee.org/abstract/document/9581251?casa_token=KJyog5oGz2EAAAAA:q1c4fJeUKQ5tJnA7CnD6dYEYKvrHZyB4N_Yuz4aG3IF6TN-1plUywVUb8_lWIxsMx1vYZ4XDNws',
    },

  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'egetekiner', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
      'corporate',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Ege Tekiner, 2023 - All Rights Reseved`,
};

export default config;
