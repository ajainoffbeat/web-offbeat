import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { featuresQuality } from "./featuresData";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Tech Stack",
              description: `At Offbeat Software Solutions, we leverage modern and scalable technologies to build high-performance applications. Our expertise spans frontend and backend development, ensuring seamless integration, speed, and security.`,
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-14">
            <h2 className="text-1xl mx-auto mb-6 text-center font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-[30px]">
              How we build
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-3 lg:grid-cols-3 xl:mt-2 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-1xl mx-auto mb-6 text-center font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-[30px]">
              How We Ensure Quality
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-4 lg:grid-cols-3 xl:mt-2 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {featuresQuality.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
