// import Image from "./Image";
import { useState } from "react";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";
const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20">
        <div className="add-video h-[100vh] mx-auto pt-35 pb-10 relative max-w-c-1390 2xl:px-0">
          <div className="absolute inset-0 z-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-slate-500 to-transparent"></div>
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src="/src/images/hero/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative flex justify-center lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="flex-col md:w-1/2">
              {/* <motion.h4 className="mb-4.5 text-lg text-center font-medium text-white dark:text-white">
                WELCOME TO OFFBEAT SOFTWARE SOLUTIONS
              </motion.h4> */}
              <h1 className="mb-5 text-center text-3xl font-bold text-white dark:text-white xl:text-hero animate-slideIn">
                Providing Development & Software Solutions For {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  14+ Years
                </span>
              </h1>
              <p className="text-center text-white">
                Offbeat Software Solutions delivers 100% bug-free and 2x faster
                software . Trusted by 50+ firms, we turn ideas into reality.
              </p>
              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap justify-center gap-5"> 
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="relative flex items-center justify-center rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out overflow-hidden group hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      <span className="absolute left-0 top-0 h-full w-0 bg-primaryho transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span className="relative z-10">Get Started</span>   
                    </button>
                  </div>
                </form>
                {/* <p className="mt-5 text-center text-white dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <>
    //   <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
    //     <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    //       <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
    //         <div className=" md:w-1/2">
    //           <motion.h4
    //             className="mb-4.5 text-lg font-medium text-black dark:text-white"
    //             initial={{ y: -60 }} // Start higher
    //             animate={{ y: [0, -50, 0, -40, 0, -30, 0, -20, 0] }} // Decreasing height bounces
    //             transition={{ duration: 4, ease: "easeOut" }}
    //           >
    //             WELCOME TO OFFBEAT SOFTWARE SOLUTIONS
    //           </motion.h4>
    //           <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero animate-slideIn">
    //             Providing Development & Software Solutions For {"   "}
    //             <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark animate-pulse">
    //               14+ Years
    //             </span>
    //           </h1>
    //           <p>
    //             Over a decade of experience, Offbeat Software Solutions has
    //             helped 50+ software firms, SaaS companies, and freelancers
    //             deliver high-quality products. We specialize in seamless
    //             development, automation, and testing, ensuring 99.9% bug-free
    //             software and 2x faster time to market. Whether you're a startup
    //             or an enterprise, we provide the expertise to turn your vision
    //             into reality.
    //           </p>

    //           <div className="mt-10">
    //             <form onSubmit={handleSubmit}>
    //               <div className="flex flex-wrap gap-5">
    //                 <input
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   type="text"
    //                   placeholder="Enter your email address"
    //                   className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
    //                 />
    //                 <button
    //                   aria-label="get started button"
    //                   className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
    //                 >
    //                   Get Started
    //                 </button>
    //               </div>
    //             </form>

    //             <p className="mt-5 text-black dark:text-white">
    //               Try for free no credit card required.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="animate_right hidden md:w-1/2 lg:block">
    //           <div className="relative 2xl:-mr-7.5">
    //             <Image
    //               src="src/images/shape/shape-01.png"
    //               alt="shape"
    //               width={46}
    //               height={246}
    //               className="absolute -left-11.5 top-0 animate-pulse"
    //             />
    //             <Image
    //               src="src/images/shape/shape-02.svg"
    //               alt="shape"
    //               width={36.9}
    //               height={36.7}
    //               className="absolute bottom-0 right-0 z-10 animate-spin"
    //             />
    //             <Image
    //               src="src/images/shape/shape-03.svg"
    //               alt="shape"
    //               width={21.64}
    //               height={21.66}
    //               className="absolute -right-6.5 bottom-0 z-1 animate-spin"
    //             />
    //             <div className=" relative aspect-[700/444] w-full">
    //               <Image
    //                 className="shadow-solid-l dark:hidden"
    //                 // src="src/images/hero/hero-light1.png"
    //                 src="src/images/hero/front-page.svg"
    //                 alt="Hero"
    //                 fill
    //               />
    //               <Image
    //                 className="hidden shadow-solid-l dark:block"
    //                 src="src/images/hero/hero-dark.svg"
    //                 alt="Hero"
    //                 fill
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

export default Hero;
