import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, LogOut, Home, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/features", label: "Features" },
    { path: "/stats", label: "Statistics" },
    { path: "/emergency", label: "Emergency Contacts" },
    { path: "/danger-zone", label: "Safety Guide" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
            🛡️ Suraksha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <button className="p-2 rounded-lg hover:bg-pink-100 transition">
                    <User size={24} className="text-pink-600" />
                  </button>
                </Link>
                <Button
                onClick={logout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                <LogOut size={18} /> Logout
              </Button>
              </>
            ) : (
              <Link to="/">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/profile"
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-pink-100"
                onClick={() => setIsOpen(false)}
              >
                👤 Profile
              </Link>
            )}
            <div className="pt-2">
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  <LogOut size={18} /> Logout
                </Button>
              ) : (
                <Link to="/" className="block">
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
