import project1 from "../assets/projects/travel-landing-page.png";
import project2 from "../assets/projects/Epictetus.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello, this is the portfolio that I made. I am IT Support but this time want to try as front-end developer. With front-end technologies like Tailwind, React, and Next.js as weel as a little back-end technologies like Node.js, Express.js and MySql which has been built for almost last 3 years. So I can create a web application which is strong and responsive.`;

export const ABOUT_TEXT = `
I have worked in the IT sector for 6 years. I have interested in the field of web application development and want to make web application efficient and user-friendly. As a result,  I have studied and persevered of web application development for 2 years. The interest arose when my friend one by one become a web developer. Until now, there is a deep curiosity about web applications, I have studied various technologies such as Tailwind, React, Next.js, Node.js, Express.js and MySql, I continue to learn with new challenges in the future. Apart from all that, i am a humorous person, a bit introverted but that's not a problem. I speak as needed and listen more often. I also like sports, whatever it is, such as basketball, football, badminton and others
.`;

export const EXPERIENCES = [
  {
    year: "2017 - Present",
    role: "IT Staff",
    company: "PT. Tristan Engineering",
    description: `I have a duty to keep business processes running in the company. it is related to the software, hardware used by employees. keep network connections connected and backup data.`,
    technologies: [
      "Hardware",
      "Software",
      "Windows",
      "windows Server",
      "Networking",
    ],
  },
  {
    year: "2017 - 2021",
    role: "Informatics Engineering",
    company: "University of Banten Jaya",
    description: `learn the basics of programming, algorithms, databases, OOP (object oriented programming)`,
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Epictetus Blog",
    linkGithub: "https://slicing-epictetus-blog.vercel.app/",
    linkFigma:
      "https://www.figma.com/design/pBMZHBSjBGHSobIAJaExdb/Epictetus-(Copy)?node-id=639-2&t=a3pR0JSnhHBkYi8V-0",
    image: project2,
    description: "Slicing Landing Page Epictetus Blog responsive.",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
  },
  {
    title: "Website Learning courses",
    linkGithub: "https://responsive-website-learning.vercel.app/",
    linkFigma:
      "https://www.figma.com/design/t0106D0kOmmQm10eOUZLEi/Belajar-Responsive-Website-Next-Js-dan-Tailwind-CSS-(Community)?node-id=907-139&t=p5jq4UiZA1F1ZNKH-0",
    image: project3,
    description: "Slicing Landing Page responsive website learning courses .",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
  },
  {
    title: "E-Commerce Website",
    linkGithub: "https://github.com/omaymayudi/slicing-landing-page-travel",
    linkFigma:
      "https://www.figma.com/design/uhEpNIdls5vuEaZ1ChjLof/Travel?node-id=0-1&t=8kCNO9jYFQvdso1s-0",
    image: project1,
    description: "Slicing Landing Page Travel responsive.",
    technologies: ["HTML", "CSS", "Tailwind"],
  },
];

export const CONTACT = {
  address:
    "Jl. Penancangan Pasir Rt. 06/Rw. 04, Kel. Kaligandu Kec. Serang, Banten - Indonesia",
  phoneNo: "+62 838 7528 0443",
  email: "mayudiophok@gmail.com",
};
