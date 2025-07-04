import SidebarLink from "./SidebarLink";
import docData from "./docData";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/src/images/features/research.jpg",
  "/src/images/features/testing.jpg",
  "/src/images/features/deploy.jpg",
];

export default function Docs() {
  const [currTab, setCurrTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mt-22 pb-16 pt-12 md:pb-20 md:pt-12 lg:pb-15 lg:pt-10">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Background ${index}`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
          />
        ))}
      </div>
      <div className="container relative mx-auto z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="w-full min-h-[60vh]">
              <div className="blog-details blog-details-docs shadow-three rounded-sm bg-opacity-90 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                {docData.map((item, index) => (
                  <React.Fragment key={index}>
                    {index === currTab && (
                      <>
                        <h1>{item.title}</h1>
                        {item.des.includes("\n\n") ? (
                          item.des.split("\n\n").map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-body-color text-base"
                            >
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="text-body-color dark:text-body-color-dark text-base">
                            {item.des}
                          </p>
                        )}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div className="sticky top-[74px] rounded-lg  p-4 transition-all dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink currTab={currTab} setCurrTab={setCurrTab} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// export default function Docs() {
//   const [currTab, setCurrTab] = useState(0);
//   return (
//     <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="w-full">
//               <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//                 {docData.map((item, index) => {
//                   return (
//                     <React.Fragment key={index}>
//                       {index === currTab && (
//                         <>
//                           <h1>{item.title}</h1>
//                           {item.des.includes("\n\n") ? (
//                             item.des.split("\n\n").map((paragraph, idx) => (
//                               <p
//                                 key={idx}
//                                 className="text-body-color dark:text-body-color-dark text-base"
//                               >
//                                 {paragraph}
//                               </p>
//                             ))
//                           ) : (
//                             <p className="text-body-color dark:text-body-color-dark text-base">
//                               {item.des}
//                             </p>
//                           )}
//                         </>
//                       )}
//                     </React.Fragment>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="w-full">
//               <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
//                 <ul className="space-y-2">
//                   <SidebarLink currTab={currTab} setCurrTab={setCurrTab} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="relative mx-auto hidden aspect-[562/490] md:flex md:justify-end">
//               <motion.img
//                 src="/src/images/features/research.jpg"
//                 alt={"title"}
//                 className="rounded-[20px] w-full h-full shadow-[0_3px_5px_rgba(0,0,0,1)]"
//                 initial={{ y: -10 }}
//                 animate={{ y: 10 }}
//                 transition={{
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   duration: 2,
//                   ease: "easeInOut",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
