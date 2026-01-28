import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function StatsPage() {
  const userGrowth = [
    { month: "Jan", users: 1200, active: 800 },
    { month: "Feb", users: 1800, active: 1200 },
    { month: "Mar", users: 2650, active: 1800 },
    { month: "Apr", users: 3900, active: 2700 },
    { month: "May", users: 5200, active: 3800 },
    { month: "Jun", users: 7500, active: 5500 },
  ];

  const sosResponse = [
    { response: "< 30s", count: 4200 },
    { response: "30-60s", count: 1800 },
    { response: "1-2min", count: 950 },
    { response: "> 2min", count: 350 },
  ];

  const safetyMetrics = [
    { name: "Incidents Resolved", value: 8450, color: "#ec4899" },
    { name: "Lives Protected", value: 12300, color: "#a855f7" },
    { name: "Emergency Contacts Used", value: 3200, color: "#f43f5e" },
  ];

  const stats = [
    { label: "Total Users", value: "7,500+", icon: "👥" },
    { label: "Active Users", value: "5,500+", icon: "📱" },
    { label: "SOS Calls Handled", value: "8,450", icon: "🆘" },
    { label: "Avg Response Time", value: "28s", icon: "⚡" },
    { label: "Safety Score", value: "94%", icon: "⭐" },
    { label: "Countries", value: "15+", icon: "🌍" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Platform Statistics</h1>
          <p className="text-xl text-gray-700">Real-time impact metrics and safety data</p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-pink-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#ec4899" strokeWidth={2} name="Total Users" />
                <Line type="monotone" dataKey="active" stroke="#a855f7" strokeWidth={2} name="Active Users" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* SOS Response Times */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">SOS Response Times</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sosResponse}>
                <XAxis dataKey="response" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#ec4899" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Safety Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">{metric.value}</div>
                <div className="text-gray-700 font-semibold">{metric.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
