// import Image from "../Image";
// import { Link } from "react-router-dom";
// import BlogData from "./BlogData";


// const RelatedPost = async () => {
//   return (
//     <>
//       <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
//         <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
//           Related Posts
//         </h4>

//         <div>
//           {BlogData.slice(0, 3).map((post, key) => (
//             <div
//               className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
//               key={key}
//             >
//               <div className="max-w-45 relative h-18 w-45">
//                 {post.mainImage ? (
//                   <Image fill src={post.mainImage} alt="Blog" />
//                 ) : (
//                   "No image"
//                 )}
//               </div>
//               <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
//                 <Link to={`/blog/blog-details`}>
//                   {" "}
//                   {post.title.slice(0, 40)}...
//                 </Link>
//               </h5>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RelatedPost;
