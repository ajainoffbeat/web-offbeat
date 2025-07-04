import Hero from "../components/Hero";
import Brands from "../components/Brands/Brands";
// import Feature from "../components/Features";
import FeaturesTab from "../components/FeaturesTab";
import FunFact from "../components/FunFact";
import Integration from "../components/Integration";
// import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
// import Blog from "../components/Blog";
// import HomeData from "../data.ts/HomeData";
function Home() {
  // const headerInfo = {
  //   title: `NEWS & BLOGS`,
  //   subtitle: `Latest News & Blogs`,
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
  // }
  return (
    <>
      <Hero />
      <Brands />
      {/* <Feature /> */}
      <Integration />
      <FeaturesTab />
      <FunFact />
      {/* <CTA /> */}
      <Testimonial />
      <FAQ />
      <Contact />
      {/* <Blog blogData={HomeData} headerInfo ={headerInfo} path="#"/> */}
    </>
  );
}

export default Home;
