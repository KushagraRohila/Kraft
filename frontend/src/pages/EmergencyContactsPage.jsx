import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

export default function EmergencyContactsPage() {
  const emergencyContacts = [
    {
      name: "National Emergency",
      number: "911",
      description: "For immediate life-threatening emergencies",
      icon: AlertCircle,
      color: "text-red-600"
    },
    {
      name: "Women Helpline",
      number: "1800-123-4567",
      description: "24/7 women safety and support helpline",
      icon: Phone,
      color: "text-pink-600"
    },
    {
      name: "Police Control Room",
      number: "100",
      description: "Local police emergency response",
      icon: Phone,
      color: "text-blue-600"
    },
    {
      name: "Ambulance Service",
      number: "102",
      description: "Medical emergency and ambulance services",
      icon: Phone,
      color: "text-green-600"
    },
    {
      name: "Fire Department",
      number: "101",
      description: "Fire emergency and rescue services",
      icon: Phone,
      color: "text-orange-600"
    },
    {
      name: "Child Abuse Helpline",
      number: "1098",
      description: "Support for children in distress",
      icon: Phone,
      color: "text-purple-600"
    },
  ];

  const resources = [
    {
      title: "Domestic Violence Support",
      phone: "1800-DV-HELP",
      email: "support@dvshelter.org",
      hours: "24/7"
    },
    {
      title: "Mental Health Crisis",
      phone: "1800-273-8255",
      email: "crisis@mentalhealth.org",
      hours: "24/7"
    },
    {
      title: "Legal Aid & Counseling",
      phone: "1800-LEGAL-AID",
      email: "legal@womenrights.org",
      hours: "9 AM - 9 PM"
    },
    {
      title: "Safe House Network",
      phone: "1800-REFUGE",
      email: "shelter@safehouse.org",
      hours: "24/7"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Emergency Contacts</h1>
          <p className="text-xl text-gray-700">24/7 Toll-Free Support Services</p>
        </motion.div>

        {/* Emergency Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {emergencyContacts.map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <contact.icon size={40} className={`mb-4 ${contact.color}`} />
              <h3 className="text-lg font-bold mb-2">{contact.name}</h3>
              <div className={`text-3xl font-bold ${contact.color} mb-3`}>
                {contact.number}
              </div>
              <p className="text-gray-600">{contact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-pink-600" />
                    <span className="font-semibold">{resource.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-purple-600" />
                    <span className="text-sm break-all">{resource.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-blue-600" />
                    <span className="font-semibold">{resource.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-red-600">When to Call Emergency</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Immediate physical danger or threat</li>
            <li>✓ Feeling suicidal or in mental crisis</li>
            <li>✓ Active abuse or assault happening</li>
            <li>✓ Medical emergency or severe injury</li>
            <li>✓ Crime in progress</li>
            <li>✓ Any life-threatening situation</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
