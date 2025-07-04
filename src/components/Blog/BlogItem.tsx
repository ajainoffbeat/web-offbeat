// "use client";
// import { Blog } from "../../types/blog";
// import { motion } from "framer-motion";
// import Image from "../Image";
// import { Link } from "react-router-dom";

// const BlogItem = ({ blog, path }: { blog: Blog,path:string }) => {
//   const { _id, mainImage, title, metadata } = blog;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
//       >
//         {/* <Link to={`/${path}/${_id}`} className="relative block aspect-[368/239]"> */}
//         <Link to={`#`} className="relative block aspect-[368/239]">
//           <Image className="rounded-md" src={mainImage} alt={title} fill />
//         </Link>

//         <div className="px-4">
//           <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
//             <Link to={`/blog/blog-details`}>
//               {title}
//               {/* {`${title.slice(0, 20)}...`} */}
//             </Link>
//           </h3>
//           <p className="line-clamp-3">{metadata}</p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default BlogItem;


"use client";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import Image from "../Image";
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogItem = ({ blog, path }: { blog: Blog; path: string }) => {
  const { _id, mainImage, title, metadata } = blog;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="relative rounded-lg bg-white p-4 pb-9 shadow-lg dark:bg-blacksection"
    >
      {/* Image Container with Overlay */}
      <div
        className="relative overflow-hidden rounded-md cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > 
        {/* Image */}
        <motion.div
          className="relative"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="rounded-md w-full" src={mainImage} alt={title} fill />
        </motion.div>
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-center text-sm">{metadata}</p>

          <Link
            to={`#`}
            className="mt-3 inline-block rounded bg-primary px-4 py-2 text-white transition hover:bg-opacity-80"
          >
            Book Appointment
          </Link>
        </div>
      </div>
      <div className="px-4">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link to={`/blog/blog-details/${_id}`}>{title}</Link>
        </h3>
        {/* <p className="line-clamp-3">{metadata}</p> */}
      </div>
    </motion.div>
  );
};

export default BlogItem;

