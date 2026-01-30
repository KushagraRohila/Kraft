
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Download, Shield, Heart, Zap, AlertCircle } from "lucide-react";
// import { Button } from "../components/ui/button";
// import Spline from "@splinetool/react-spline";

// export default function HomePage() {
//   const [downloads, setDownloads] = useState(1200);

//   const handleDownload = () => {
//     setDownloads(downloads + 1);
//     window.open("/app-download.apk", "_blank");
//   };

//   const features = [
//     { icon: AlertCircle, title: "Real-time SOS", desc: "One-click emergency alert to trusted contacts", color: "text-pink-500" },
//     { icon: Shield, title: "AI Detection", desc: "Automatic stress and sound detection", color: "text-purple-500" },
//     { icon: Heart, title: "Health Tracking", desc: "Monitor vital signs and safety metrics", color: "text-red-500" },
//     { icon: Zap, title: "Quick Response", desc: "Instant notifications to responders", color: "text-yellow-500" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 overflow-x-hidden">

//       {/* HERO SECTION WITH SPLINE */}
//       <section className="relative w-full h-[70vh] md:h-[85vh]">
//         <Spline
//           scene="https://prod.spline.design/4oYD7evRESZqi-wN/scene.splinecode"
//           className="absolute top-0 left-0 w-full h-full"
//         />

//         {/* Overlay Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/10 backdrop-blur-[2px]">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4"
//           >
//             Kraft : HerGuardian
//           </motion.h1>

//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
//             Real-time protection with AI-powered safety detection and emergency response
//           </p>

//           <div className="flex gap-4 flex-wrap justify-center">
//             <Button
//               onClick={handleDownload}
//               className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl text-white shadow-lg"
//             >
//               <Download size={20} /> Download App
//             </Button>

//             <Link to="/features">
//               <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl text-white shadow-lg">
//                 <Shield size={20} /> Explore Features
//               </Button>
//             </Link>
//           </div>

//           <p className="mt-4 text-white/80">Total Downloads: {downloads}</p>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-16 px-4 md:px-6 bg-white/60 backdrop-blur-md">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose <span className="text-pink-500">Kraft</span>?
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
//               >
//                 <feature.icon size={40} className={`mb-4 ${feature.color}`} />
//                 <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white p-12 rounded-3xl text-center shadow-xl"
//         >
//           <h2 className="text-3xl font-bold mb-4">Emergency Support 24/7</h2>
//           <p className="text-lg mb-6">Access toll-free emergency contacts and instant help</p>

//           {/* <Link to="/emergency">
//             <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow">
//               Emergency Contacts
//             </Button>
//           </Link> */}
//           <Link to="/emergency">
//   <Button
//     className="
//        text-pink-600 
//       hover:bg-pink-500 hover:scale-115
//       px-8 py-3 rounded-xl font-semibold
//       shadow-lg transition-all duration-200
//       border border-white/40
//     "
//   >
//     Emergency Contacts
//   </Button>
// </Link>

//         </motion.div>
//       </section>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Shield, Heart, Zap, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Spline from "@splinetool/react-spline";

export default function HomePage() {
  const [downloads, setDownloads] = useState(1200);

  const handleDownload = () => {
    setDownloads(downloads + 1);
    window.open("/app-download.apk", "_blank");
  };

  const features = [
    { icon: AlertCircle, title: "Real-time SOS", desc: "One-click emergency alert to trusted contacts", color: "text-pink-500" },
    { icon: Shield, title: "AI Detection", desc: "Automatic stress and sound detection", color: "text-purple-500" },
    { icon: Heart, title: "Health Tracking", desc: "Monitor vital signs and safety metrics", color: "text-red-500" },
    { icon: Zap, title: "Quick Response", desc: "Instant notifications to responders", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 overflow-x-hidden">

      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="relative w-full h-[78vh] md:h-[88vh] bg-black overflow-hidden">


  {/* SPLINE RIGHT SIDE */}
  <div className="absolute top-0 right-0 w-[55%] h-full z-0">
    <Spline
      scene="https://prod.spline.design/4oYD7evRESZqi-wN/scene.splinecode"
      className="w-full h-full"
    />
  </div>
  {/* HIDE SPLINE WATERMARK */}
<div className="absolute bottom-3 right-3 w-40 h-15 bg-black z-30 rounded-md"></div>


  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/25 z-10" ></div>

  {/* CONTENT */}
  <div className="relative z-20 h-full flex items-center">
    <div className="max-w-7xl mx-auto px-8 w-full">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl text-white"
      >

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight drop-shadow-lg">
          Kraft :{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            HerGuardian
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          AI-powered real-time safety detection with instant emergency
          response and smart protection for every situation.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-5 flex-wrap">

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              onClick={handleDownload}
              className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-xl text-white shadow-lg"
            >
              <Download size={20} />
              Get the App
            </Button>
          </motion.div>

          <Link to="/features">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-xl text-white shadow-lg"
              >
                <Shield size={20} />
                See Features
              </Button>
            </motion.div>
          </Link>

        </div>

        {/* DOWNLOAD COUNT */}
        <p className="mt-6 text-white/75 text-sm">
          Total Downloads: {downloads}
        </p>

      </motion.div>
    </div>
  </div>

</section>


      {/* FEATURES */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose <span className="text-pink-500">Kraft</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="
                  bg-white/80 backdrop-blur-md
                  p-7 rounded-3xl
                  shadow-md hover:shadow-xl
                  hover:-translate-y-2
                  transition duration-300
                  border border-gray-100
                "
              >
                <feature.icon size={40} className={`mb-4 ${feature.color}`} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-4 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            max-w-4xl mx-auto
            bg-gradient-to-r from-pink-500/90 to-purple-600/90
            text-white
            p-7 rounded-3xl
            text-center shadow-xl
          "
        >
          <h2 className="text-3xl font-bold mb-4">
            Emergency Support 24/7
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Access toll-free emergency contacts and instant help anytime.
          </p>

          <Link to="/emergency">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="
                  text-pink-600
                  hover:bg-gray-100
                  px-10 py-3 rounded-2xl
                  font-semibold shadow-md
                  transition-all
                "
              >
                Emergency Contacts
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
