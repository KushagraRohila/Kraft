import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Shield, Heart, Zap, AlertCircle, HelpCircle } from "lucide-react";
import { Button } from "../components/ui/button";

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Women Safety Platform</h1>
          <p className="text-xl text-gray-700 mb-8">
            Real-time protection with AI-powered safety detection and emergency response
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={handleDownload} className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-lg text-white">
              <Download size={20} /> Download App
            </Button>
            <Link to="/features">
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-lg text-white">
                <Shield size={20} /> Explore Features
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-gray-600">Total Downloads: {downloads}</p>
        </motion.div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-3 md:px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Suraksha?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <feature.icon size={40} className={`mb-4 ${feature.color}`} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white p-12 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Emergency Support 24/7</h2>
          <p className="text-lg mb-6">Access toll-free emergency contacts and instant help</p>
          <Link to="/emergency">
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Emergency Contacts
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

import React from "react";
