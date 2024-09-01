import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Spring, Springboot, MySQL, Oracle, Docker, AWS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Spring, Springboot, Oracle, MySQL, Docker, AWS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2022 - Present",
    role: "Java Developer",
    company: "SBI General Insurance Limited",
    description: `Developed Java-based applications utilizing Spring and Spring Boot frameworks, prioritizing performance and scalability for the KYC (Know Your Customer) project.Designed and implemented RESTful APIs (i.e Status API’s for OEM, Multiple Fetch Data API’s) to facilitate seamless integration between software components.Successfully deployed projects, overseeing the transition from development to production environments  Documented software architecture, SOPs (Standard Operating Procedures) and API documentation to facilitate knowledge sharing and faster collaboration among team members.`,
    technologies: ["Spring", "SpringBoot", "ReactJs", "Oracle", "AWS" ,"SVN"],
  },
  
];

export const PROJECTS = [
  {
    title: "Customer Notify Application",
    image: project1,
    description:
      "Implemented KYC notifications integrated with Bitly links for streamlined customer verification processes, enhancing efficiency and user experience. Designed a seamless routing mechanism within the application, directing customers to the KYC page for convenient submission of required data and official verification documents (OVDs), ensuring compliance and data accuracy, resulting in significant reductions in manual efforts by 95% ",
    technologies: ["Spring", "Hibernate", "JMS Queue", "Oracle", "Junit" ,"SVN" ,"Linux"],
  },
  {
    title: "Pipelink Data Integration",
    image: project2,
    description:
      "Engineered a robust system capable of parsing pipeline-separated Text files and extracting crucial information with precision. implemented a streamlined process for storing essential data in a centralized database, ensuring accessibility and reliability.Coordinated dynamic data synchronization mechanisms, enabling real-time updates by effectively crossreferencing multiple databases aimed at optimizing data processing efficiency.",
    technologies: ["SpringBoot", "SpringJPA", "Junit", "Oracle" ,"SVN", "Linux"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Workforce Administrator",
    image: project4,
    description:
      "Developed and implemented Create, Read, Update, and Delete (CRUD) operations for efficient management of Employee/Worker records.Designed a visually appealing user interface (UI) tailored for streamlined data input and retrieval processes. ",
    technologies: ["SpringBoot", "Spring JPA", "Thymeleaf", "Javascript", "Oracle" ,"Github"],
  },
];

export const CONTACT = {
  address: "B/2, Aditya Darshan, ArunodayaNagar, Mulund-East, Mumbai-400081",
  phoneNo: "+91 8104392174",
  email: "rajsawant2722001@gmail.com",
};
