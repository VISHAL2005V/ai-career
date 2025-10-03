import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../components/FormInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-pink-500">
      <div className="max-w-md w-full p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Welcome Back 👋</h2>
        {error && <p className="text-red-200 text-center mb-3">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-3 rounded-lg mt-4">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-white text-sm text-center mt-4">
          Don’t have an account? <Link to="/register" className="text-yellow-300 font-semibold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
