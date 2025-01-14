import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jenkins,
    typescript,
    html,
    aws,
    azure,
    csharp,
    css,
    postman,
    python,
    reactjs,
    redux,
    sql,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    steelcase,
    omm,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer & API Engineer",
      icon: web,
    },
    {
      title: "Back-End Developer & Cloud Architect",
      icon: mobile,
    },
    {
      title: "Data Analyst & AI Developer",
      icon: backend,
    },
    {
      title: "STEM Educator & Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    }, 
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
  ];
  const experiences = [
    {
      title: "Applications Engineer Intern",
      company_name: "Steelcase Inc",
      icon: steelcase,
      iconBg: "#EEB83D",
      date: "May 2024 - Present",
      points: [
        "Engineered and deployed robust web applications on Azure utilizing C#, seamlessly integrating company-specific and third-party APIs to support over 100 business and non-business designers.",
        "Developed and optimized in-house APIs for AI-driven smart template generation and automated design conversion to Revit files, enhancing the compatibility and functionality of the company’s 3D modeling tools.",
        "Oversaw the release cycles and deployment processes for software extensions and APIs, employing continuous integration and delivery (CI/CD) practices to ensure smooth updates and feature enhancements.",
      ],
    },
    {
      title: "Business Data Analyst Intern",
      company_name: "Steelcase Inc",
      icon: steelcase,
      iconBg: "#EEB83D",
      date: "Jan 2024 - May 2024",
      points: [
        "Conducted thorough data validation processes by verifying information provided by external or company dealers against the company's database standards and third-party sources, ensuring accuracy and integrity of entries.",
        "Facilitated integration of data entries from internal databases into Salesforce accounts, enhancing support for the Sales and Operations teams in the company.",
        "Collaborated with third-party database provider to facilitate updates and integration with internal company database, ensuring data synchronization.",
      ],
    },
    {
      title: "Middle School Mentor (Volunteer) ",
      company_name: "Mathematical Olympiad in Mexico",
      icon: omm,
      iconBg: "#E6DEDD",
      date: "Nov 2022 -  Present",
      points: [
        "Conducted engaging mathematics classes for students aged 9-15, employing varied teaching techniques to accommodate different learning styles and foster a supportive learning environment.",
        "Designed and assessed mathematics exams aligned with competition standards, ensuring the appropriate level of challenge and rigor while evaluating student comprehension effectively.",
        "Actively participated as a coach and staff member in national mathematics competitions and events, providing invaluable guidance and support to students, contributing to their growth and success in competitive mathematics.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };