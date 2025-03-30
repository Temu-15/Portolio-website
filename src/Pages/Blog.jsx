import React from "react";
import animationConstruction from "../assets/animation/Animation-construction.json";
import Lottie from "lottie-react";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <div className="relative lg:max-w-[1280px] mx-auto max-w-[768px] md:px-[6.4rem] px-[2.4rem] w-full">
      <div className="mt-[140px] lg:mt-[205px] w-full relative grid lg:grid-cols-[1.2fr,1.2fr] grid-cols-1 gap-x-6 justify-items-center text-white  ">
        <div className="order-2 lg:order-none">
          <div className="flex flex-col justify-center items-start h-[400px] ">
            <h1 className="text-[4rem] tracking-tight">This page is </h1>
            <h2 className="text-[4rem]">under construction</h2>
            <p className="text-lg text-gray-400">
              We are working hard to bring you an amazing experience. Stay
              tuned!
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center h-[400px] max-h-[384px]">
          <Lottie
            animationData={JSON.parse(JSON.stringify(animationConstruction))}
            height={400}
            width={400}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

// import React from "react";
// import animationConstruction from "../assets/animation/Animation-construction.json";
// import Lottie from "lottie-react";
// import Footer from "../Components/Footer";
// // import { motion } from "framer-motion";

// const Blog = () => {
//   return (
//     <div className="relative max-w-[1280px] mx-auto w-full px-6 md:px-16 lg:px-24">
//       {/* Hero Section */}
//       <div className="mt-28 lg:mt-40 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center text-white">
//         {/* Left Section - Text Content */}
//         <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
//           Website
//         </h1>
//         <h2 className="text-4xl md:text-5xl font-semibold text-gray-300">
//           under construction
//         </h2>
//         <p className="text-lg text-gray-400">
//           We are working hard to bring you an amazing experience. Stay tuned!
//         </p>
//         {/* <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex flex-col items-start space-y-4"
//         >
//         </motion.div> */}

//         {/* Right Section - Lottie Animation */}
//         {/* <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-[80%] max-w-[400px] flex justify-center"
//         >
//         </motion.div> */}
//         <Lottie animationData={animationConstruction} />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Blog;
