// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Card, CardContent } from "./ui/card";
// import { Button } from "./ui/button";
// import { Mail, Lock, User, Phone } from "lucide-react";

// export default function LoginForm() {
//   const { login, register, loading } = useAuth();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (isLogin) {
//         const result = await login(formData.email, formData.password);
//         if (!result.success) {
//           setError(result.message || "Login failed");
//         }
//       } else {
//         const result = await register(formData.name, formData.email, formData.password, formData.phone);
//         if (!result.success) {
//           setError(result.message || "Registration failed");
//         }
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardContent className="p-6">
//         <h2 className="text-2xl font-bold mb-4">
//           {isLogin ? "Login" : "Register"}
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <>
//               <div className="mb-4">
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <User size={18} /> Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <Phone size={18} /> Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//                 />
//               </div>
//             </>
//           )}

//           <div className="mb-4">
//             <label className="flex items-center gap-2 text-sm font-medium mb-2">
//               <Mail size={18} /> Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="flex items-center gap-2 text-sm font-medium mb-2">
//               <Lock size={18} /> Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>

//           <Button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium"
//           >
//             {loading ? "Loading..." : isLogin ? "Login" : "Register"}
//           </Button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           {isLogin ? "Don't have an account? " : "Already have an account? "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-pink-500 font-medium hover:underline"
//           >
//             {isLogin ? "Register" : "Login"}
//           </button>
//         </p>
//       </CardContent>
//     </Card>
//   );
// }


import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Lock, User, Phone } from "lucide-react";

export default function LoginForm() {
  const { login, register, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const result = await login(formData.email, formData.password);
        if (!result.success) {
          setError(result.message || "Login failed");
        }
      } else {
        const result = await register(
          formData.name,
          formData.email,
          formData.password,
          formData.phone
        );
        if (!result.success) {
          setError(result.message || "Registration failed");
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-5xl shadow-lg rounded-xl overflow-hidden bg-white">
        
        {/* LEFT: Login/Register Form (UNCHANGED) */}
        <div className="w-full md:w-1/2 p-6">
          <Card className="w-full max-w-md mx-auto shadow-none border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {isLogin ? "Login" : "Register"}
              </h2>

              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <div className="mb-4">
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <User size={18} /> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Phone size={18} /> Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Mail size={18} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Lock size={18} /> Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium"
                >
                  {loading ? "Loading..." : isLogin ? "Login" : "Register"}
                </Button>
              </form>

              <p className="text-center mt-4 text-sm">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-pink-500 font-medium hover:underline"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: IMAGE (ADDED ONLY) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-pink-50">
          <img
            src="/images/kraft-sos.png"
            alt="Kraft SOS App"
            className="max-h-[600px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}

