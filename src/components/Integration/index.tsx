import { motion } from "framer-motion";
import Image from "../Image";
import SectionHeader from "../Common/SectionHeader";
// import { useState } from "react";
const Integration = () => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 mt-10 mb-10 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Tech Stack",
              description: `At Offbeat Software Solutions, we leverage modern and scalable technologies to build high-performance applications. Our expertise spans frontend and backend development, ensuring seamless integration, speed, and security.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/src/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/src/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-y-10">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Slack
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-07.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Trello
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-08.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
            </motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Skype
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-09.svg"
                  alt="Brand"
                />
              </div>
            </motion.div> 

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
            </motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Discord
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-10.svg"
                  alt="Brand"
                />
              </div>
            </motion.div> 

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
            </motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Stripe
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-11.svg"
                  alt="Brand"
                />
              </div>
            </motion.div> 

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
            </motion.div>

            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1/6 relative group"
            >
              <motion.div className="absolute -top-10 left-[30%] -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ClickUp
              </motion.div>
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/src/images/brand/brand-12.svg"
                  alt="Brand"
                />
              </div>
            </motion.div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
