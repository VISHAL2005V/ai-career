// src/pages/Home.jsx
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Protect route: only logged-in users
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <main className="w-full">
      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center text-center mt-16 px-4 md:px-0 overflow-hidden h-[80vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fadeIn mt-10">
            Discover Your Future Career
          </h1>
          <p className="mt-4 text-gray-100 text-base sm:text-lg md:text-xl max-w-xl animate-fadeIn delay-200">
            Enter your skills and interests, and let AI guide you to the career path of your dreams.
          </p>
          <Link
            to="/career-paths"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold 
                       shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition-all duration-300"
          >
            Explore Careers
          </Link>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="mt-20 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow-lg">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">AI Career Guide?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Personalized Guidance", desc: "AI analyzes your skills and interests to suggest the best career paths for you.", icon: "🎯" },
            { title: "Skill Development", desc: "Get recommendations on the skills you need to learn for your dream career.", icon: "💡" },
            { title: "Career Roadmaps", desc: "Step-by-step roadmap showing how to reach your chosen career efficiently.", icon: "🗺️" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                <span className="bg-indigo-500 text-white p-3 rounded-full mr-3 shadow-lg">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-bold text-indigo-600">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Benefits Section ===== */}
      <section className="mt-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-12 drop-shadow-md">
          Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Benefits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Save Time & Effort", desc: "No more guesswork. AI quickly matches your interests with the right career paths.", icon: "⏱️" },
            { title: "Stay Updated", desc: "Get insights into trending careers, skills in demand, and future opportunities.", icon: "📈" },
            { title: "Confidence Boost", desc: "Know your strengths and weaknesses to make informed decisions about your future.", icon: "💪" },
            { title: "Guided Learning", desc: "AI suggests courses, tutorials, and projects to enhance your skills effectively.", icon: "🎯" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col justify-center overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-20"></div>
              <div className="flex items-center mb-4">
                <span className="bg-indigo-500 text-white p-3 rounded-full shadow-lg mr-3 text-lg">{benefit.icon}</span>
                <h3 className="text-2xl font-semibold text-indigo-600">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="mt-20 px-4 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-12 drop-shadow-md">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Users Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Raj", img: "https://randomuser.me/api/portraits/men/32.jpg", text: "This platform helped me discover a career I truly love!" },
            { name: "Manoj", img: "https://randomuser.me/api/portraits/men/45.jpg", text: "AI guided me step by step to achieve my dream career." },
            { name: "Gopi", img: "https://randomuser.me/api/portraits/men/56.jpg", text: "A perfect mix of guidance and actionable insights!" },
          ].map((user, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center group relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 rounded-full opacity-20"></div>
              <img
                src={user.img}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-white group-hover:scale-105 transform transition-all duration-300"
              />
              <p className="text-gray-600 mb-4 italic">"{user.text}"</p>
              <h4 className="font-semibold text-indigo-600">- {user.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action Section ===== */}
      <section className="mt-20 text-center py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mx-4 md:mx-16 shadow-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
          Ready to Find Your <span className="text-yellow-300">Career Path?</span>
        </h2>
        <Link
          to="/career-paths"
          className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
