import { Blog } from "../types/blog"; 

const ServiceData: Blog[] = [
  {
    _id: 1,
    mainImage: "/src/images/blog/dev-assistance.jpg",
    title: "Development Assistance",
    metadata:
      "We offer expert development support in React.js, Next.js, Angular, .NET, NestJS, and Node.js to help you build scalable and efficient applications. Whether you need help with new projects, backlog clearing, or enhancing existing systems, our team ensures seamless execution from planning to deployment.",
  },
  {
    _id: 2,
    mainImage: "/src/images/blog/mobile-dev.jpg",
    // title: "Desktop & Web Application",
    title: "Web & Desktop Application Development",
    metadata:
      "Our team builds secure and feature-rich web and desktop applications using React.js, Next.js, Angular, .NET (Blazor, WPF), and Electron.js. Whether it’s a SaaS platform, enterprise solution, or automation tool, we ensure fast, reliable, and scalable applications.",
  },
  {
    _id: 3,
    mainImage: "/src/images/blog/development.jpg",
    title: "Website Development",
    metadata:
      "We create modern, SEO-optimized, and mobile-responsive websites using React.js, Next.js, ASP.NET. Whether you need a corporate website, e-commerce store, or a portfolio site, we focus on speed, performance, and user engagement.",
  },
  {
    _id: 4,
    mainImage: "/src/images/blog/testing.jpg",
    title: "Software QA & Testing",
    metadata:
      "Ensuring software reliability is our priority. We offer manual and automated testing using tools like Cypress, Selenium, NUnit, and Postman. Our testing covers functional, security, performance, and UAT, making sure your application runs smoothly without bugs or vulnerabilities.",
  },
  {
    _id: 5,
    mainImage: "/src/images/blog/data.jpg",
    title: "Data Management",
    metadata:
      "We provide secure data storage, migration, and integration solutions using SQL Server, MySQL, PostgreSQL, Firebase, and MongoDB. Our expertise ensures structured, optimized, and protected data for seamless business operations.",
  },
  {
    _id: 6,
    mainImage: "/src/images/blog/cloud.jpg",
    title: "Cloud Computing",
    metadata:
      "Leverage the power of the cloud with our expertise in AWS, Azure, and Google Cloud. We offer cloud migration, infrastructure setup, and cost optimization to improve your system’s scalability, security, and efficiency.",
  },
];

export default ServiceData;
