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
    flaskdocker,
    anomalydetector,
    atratohack,
    marianagarza,
    diegocastaneda,
    emiliohernandez,
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
      "Max has a talent for transforming ideas into real, impactful solutions. His mix of creativity and technical skill is unmatched!",
      name: "Mariana Garza",
      designation: "Campus Leader",
      company: "Notion",
      image: marianagarza,
    },
    {
      testimonial:
      "Working with Max is a breeze. He’s collaborative, open to feedback, and always keeps the energy positive.",
      name: "Emilio Hernandez",
      designation: "Computer Research Assistant",
      company: "Loyola University",
      image: emiliohernandez,
    },
    {
      testimonial:
        "Max made sure our project launched smoothly and ahead of schedule. He’s reliable, efficient, and exceeds expectations.",
      name: "Diego Alvarado",
      designation: "IT Applications Interns",
      company: "Schneider Electric",
      image: diegocastaneda,
    },
  ];
  
  const projects = [
    {
      name: "Anime CRUD App",
      description:
        "Flask web-app for managing an anime database (CRUD). Deployed in Docker with MySQL and Jenkins for automated redeployment.",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: flaskdocker,
      source_code_link: "https://github.com/mazerman03/Flask-CRUD-PIA",
    },
    {
      name: "Anomaly Detector In Server Usage",
      description:
        "Cleaned and analyzed real time data from server performance as json to recognize anomalies in server usage. While using an AI trained model to predict daily server usage.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "ARIMA",
          color: "pink-text-gradient",
        },
      ],
      image: anomalydetector,
      source_code_link: "https://github.com/mazerman03/legacy--AnomalyDetector",
    },
    {
      name: "AI Powered Finance Coach and Advisor",
      description:
        " NLP model trained on financial education books and curated data to help a specific bank provide information and guide possible customers as a webapp chatbot",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "LangChain",
          color: "pink-text-gradient",
        },
      ],
      image: atratohack,
      source_code_link: "https://github.com/mazerman03/service-desk-chatbot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };