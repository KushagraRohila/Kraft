import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle, Navigation, Mic, Heart, MapPin, Bell } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: AlertCircle,
      title: "One-Click SOS",
      description: "Instantly alert emergency contacts with your live location",
      details: "Send distress signals to trusted contacts with GPS coordinates in seconds"
    },
    {
      icon: Navigation,
      title: "Real-time Location Sharing",
      description: "Share your live location with emergency responders",
      details: "Continuous location tracking during emergencies with automatic updates"
    },
    {
      icon: Mic,
      title: "AI Sound Detection",
      description: "Automatic detection of screams or unusual sounds",
      details: "Machine learning algorithms detect and respond to distress sounds"
    },
    {
      icon: Heart,
      title: "Stress Level Monitoring",
      description: "Track vital signs and stress indicators",
      details: "Real-time health monitoring with predictive alerts"
    },
    {
      icon: MapPin,
      title: "Safe Route Navigation",
      description: "Get route recommendations based on safety data",
      details: "Avoid dangerous areas with community-reported incident data"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Personalized safety alerts and recommendations",
      details: "Receive contextual alerts based on your location and time"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Features</h1>
          <p className="text-xl text-gray-700">Comprehensive safety features designed for your protection</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6">
                  <feature.icon size={40} className="text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Advanced Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["AI Detection", "GPS Tracking", "Encryption", "Cloud Sync", "Real-time Alerts", "Data Privacy", "24/7 Monitoring", "Emergency Response"].map((tech, i) => (
              <div key={i} className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg text-center font-semibold">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
