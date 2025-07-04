import { FeatureTab } from "../../types/featureTab";
import { motion } from "framer-motion";
// import Image from "../Image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:flex md:justify-end md:w-1/2  ">
          {/* <img
            src={image}
            alt={title}
            width="75%"
            className={`rounded-[20px] shadow-[0_3px_5px_rgba(0,0,0,1)]`}
          /> */}
          <motion.img
            src={image}
            alt={title}
            className="rounded-[20px] w-[94%] h-[400px]"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
