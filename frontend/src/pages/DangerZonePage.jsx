import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { AlertTriangle, MapPin, Eye, Headphones, TrendingUp, Shield } from "lucide-react";
import DangerZoneMap from "../components/DangerZoneMap";

export default function DangerZonePage() {
  const safetyTips = [
    {
      icon: MapPin,
      title: "Avoid High-Risk Areas",
      tips: [
        "Check community safety reports before traveling",
        "Stick to well-lit, populated routes",
        "Share your location with trusted contacts",
        "Avoid isolated areas, especially after dark",
      ]
    },
    {
      icon: Eye,
      title: "Stay Alert & Aware",
      tips: [
        "Trust your instincts - leave if something feels wrong",
        "Keep your surroundings in view",
        "Avoid headphones or distractions",
        "Make eye contact and walk confidently",
      ]
    },
    {
      icon: Headphones,
      title: "Communication Safety",
      tips: [
        "Keep your phone charged and accessible",
        "Have emergency contacts saved with one-touch dialing",
        "Enable location sharing with family",
        "Set up emergency alerts on your device",
      ]
    },
    {
      icon: TrendingUp,
      title: "Personal Safety Planning",
      tips: [
        "Establish check-in routines with loved ones",
        "Create a personal safety plan",
        "Know your local emergency numbers",
        "Take self-defense classes regularly",
      ]
    },
    {
      icon: Shield,
      title: "In Case of Threat",
      tips: [
        "Call 911 immediately if you're in danger",
        "Move to a crowded, well-lit area",
        "Use the SOS button on Suraksha app",
        "Document and report incidents to authorities",
      ]
    },
    {
      icon: AlertTriangle,
      title: "Recognize Warning Signs",
      tips: [
        "Notice changes in someone's behavior",
        "Be aware of manipulation tactics",
        "Identify controlling behaviors early",
        "Listen to warnings from friends and family",
      ]
    },
  ];

  const dangerZoneIndicators = [
    { level: "🟢 Safe", description: "Well-lit, crowded, good visibility" },
    { level: "🟡 Caution", description: "Low foot traffic, dimly lit areas" },
    { level: "🔴 Danger", description: "Reported incidents, isolated areas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Safety Guidelines</h1>
          <p className="text-xl text-gray-700">Know the danger zones and stay protected</p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Danger Zone Map</h2>
          <DangerZoneMap />
        </motion.div>

        {/* Zone Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Area Safety Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dangerZoneIndicators.map((item, i) => (
              <div key={i} className="p-4 border-2 border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">{item.level}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyTips.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <category.icon size={40} className="text-pink-600 mb-4" />
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-pink-600 font-bold mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Emergency Action Plan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-red-600">Emergency Action Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">1. ASSESS</div>
              <p className="text-gray-700">Evaluate your safety situation. Are you in immediate danger?</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">2. ACT</div>
              <p className="text-gray-700">Press SOS, move to safety, or call 911 immediately.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">3. ALERT</div>
              <p className="text-gray-700">Share location with emergency contacts and authorities.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
