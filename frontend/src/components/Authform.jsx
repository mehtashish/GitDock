import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Change to your actual image
    >
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-900/80 shadow-lg backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          {type === "login" ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={(e) => onSubmit(e, formData)} className="space-y-4">
          {type === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {type === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
            {type === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4 text-gray-300">
          {type === "login" ? (
            <p>
              New here?{" "}
              <Link to="/signup" className="text-blue-400 hover:text-blue-500">
                Create an account
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-500">
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
