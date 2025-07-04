import { FeatureTab } from "../../types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Research & Development",
    desc1: `We conduct market research, analyze trends, and leverage technologies like React.js, .NET,and Node.js to develop tailored solutions.`,
    desc2: ``,
    image: "/src/images/features/research.jpg",
    // image: "/src/images/hero/research.png",
    imageDark: "/src/images/features/research.jpg",
  },
  {
    id: "tabTwo",
    title: "Testing",
    desc1: `Using tools like Selenium, Cypress, and Postman, we ensure quality through manual and automated testing, covering performance, security, and UAT.`,
    desc2: ``,
    image: "/src/images/features/testing.jpg",
    imageDark: "/src/images/features/testing.jpg",
  },
  {
    id: "tabThree",
    title: "Deployment",
    desc1: `We implement CI/CD pipelines, deploy on AWS & Azure, and provide post-launch support for seamless performance and scalability.`,
    desc2: ``,
    image: "/src/images/features/deploy.jpg",
    imageDark: "/src/images/features/deploy.jpg",
  },
];

export default featuresTabData;
