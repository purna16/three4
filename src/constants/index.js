import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
  kubernetes,
  ts,
  apis,
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
    title: "Kubernetes Developer",
    icon: web,
  },
  {
    title: "Docker",
    icon: mobile,
  },
  {
    title: "Python",
    icon: backend,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "IIT Bombay",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Created a CI/CD pipeline for a Java application and deploy it on Kubernetes.",
      "Perform load testing on the deployed application using JMeter.",
      "Configure RBAC to grant different users permissions for deploying in Kubernetes.",
      "Set up pipelines for Python and Node.js applications and deploy them.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dummy Testomonial",
    name: "Jane Doe",
    designation: "CFO",
    company: "XYZ Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Dummy Testomonial",
    name: "John Doe",
    designation: "COO",
    company: "ABC Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Dummy Testomonial",
    name: "Human Being",
    designation: "CTO",
    company: "Vought Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Streamlining Application Deployments with GitLab and Kubernetes.",
    description:
      "I implemented an end-to-end CI/CD pipeline using GitLab for a Node.js Microservice.",
    tags: [
      {
        name: "gitlab",
        color: "gray-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://gitlab.com/shivar640/node-js",
  },
  {
    name: "CICD Pipeline for Java Application",
    description:
      "Developed and implemented CI/CD pipeline with Jenkins for Java app on EKS cluster.",
    tags: [
      {
        name: "Eks",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Nexus",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/purna16/Jenkins-CICD",
  },
  {
    name: "Deployed Website on AWS Using Python",
    description:
      "Designed and implemented scalable cloud-based solution using AWS for employee management app.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Dynamodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/purna16/Voting-Webapp",
  }, 
];

export { services, technologies, experiences, testimonials, projects };
