import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Users, Target, Lightbulb, Award, Globe } from "lucide-react";

export default function AboutUsPage() {
  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", icon: "👩‍💼" },
    { name: "Dr. Priya Sharma", role: "Chief Technology Officer", icon: "👨‍💻" },
    { name: "Maya Patel", role: "Head of Safety", icon: "🛡️" },
    { name: "Amit Kumar", role: "Lead Developer", icon: "🔧" },
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "We care deeply about every user's safety and well-being" },
    { icon: Users, title: "Community", description: "Building a supportive network of women helping women" },
    { icon: Target, title: "Impact", description: "Our mission is to prevent crimes and save lives" },
    { icon: Lightbulb, title: "Innovation", description: "Using cutting-edge technology for safety solutions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Suraksha</h1>
          <p className="text-xl text-gray-700">Building a safer world for women, one SOS at a time</p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Suraksha is dedicated to empowering women with real-time safety solutions. Through our innovative platform,
            we combine AI technology, community support, and emergency response systems to create a protective shield
            around every user. We believe that every woman deserves to feel safe, confident, and supported wherever she goes.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            A world where women can walk freely without fear. Where technology and compassion work together to prevent
            crimes, respond quickly to emergencies, and support survivors. We envision a future where safety is a right,
            not a privilege, and where every woman has the tools and support to protect herself.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <value.icon size={40} className="mx-auto text-pink-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "7,500+", label: "Users Protected" },
              { number: "8,450", label: "Emergencies Handled" },
              { number: "28s", label: "Avg Response Time" },
              { number: "15+", label: "Countries Served" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-pink-600">{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-5xl mb-3">{member.icon}</div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-pink-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">Have questions? We'd love to hear from you.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:hello@suraksha.com" className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
              hello@suraksha.com
            </a>
            <a href="tel:1800-SURAKSHA" className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
              1800-SURAKSHA
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
