import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Edit2, Mail, Phone, MapPin, LogOut, Save } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    emergencyContacts: user?.emergencyContacts || [],
  });
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setFormData((prev) => ({
        ...prev,
        emergencyContacts: [...prev.emergencyContacts, newContact],
      }));
      setNewContact({ name: "", phone: "" });
    }
  };

  const handleRemoveContact = (index) => {
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    await updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 px-3 md:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
          <p className="text-gray-600">Manage your account and emergency contacts</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold"
            >
              <Edit2 size={20} /> {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <Button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                <Save size={20} /> Save Changes
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Basic Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Full Name</div>
                  <div className="text-lg font-bold text-gray-800">{user?.name}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Email</div>
                  <div className="text-lg font-bold text-gray-800 break-all">{user?.email}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Phone</div>
                  <div className="text-lg font-bold text-gray-800">{user?.phone || "Not provided"}</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-1">Account Status</div>
                  <div className="text-lg font-bold text-green-700">Active</div>
                </div>
              </div>

              {/* Location Info */}
              {user?.location && (
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Last Known Location</div>
                  <div className="text-sm text-gray-700">
                    <div>Latitude: {user.location.latitude?.toFixed(4)}</div>
                    <div>Longitude: {user.location.longitude?.toFixed(4)}</div>
                    {user.location.updatedAt && (
                      <div className="text-xs text-gray-500 mt-1">
                        Updated: {new Date(user.location.updatedAt).toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Member Since */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg">
                <div className="text-sm font-semibold text-gray-600 mb-1">Member Since</div>
                <div className="text-lg font-bold text-gray-800">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Recently"}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-xl font-bold mb-4">Emergency Contacts</h3>

          {formData.emergencyContacts.length > 0 && (
            <div className="space-y-3 mb-4">
              {formData.emergencyContacts.map((contact, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-semibold">{contact.name}</div>
                    <div className="text-gray-600 text-sm">{contact.phone}</div>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveContact(i)}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {isEditing && (
            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-semibold">Add New Contact</h4>
              <input
                type="text"
                placeholder="Contact name"
                value={newContact.name}
                onChange={(e) =>
                  setNewContact((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={newContact.phone}
                onChange={(e) =>
                  setNewContact((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Button
                onClick={handleAddContact}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Add Contact
              </Button>
            </div>
          )}
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium"
          >
            <LogOut size={20} /> Logout
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
