import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Roadmap() {
  const domains = {
    "Full Stack": [
      "HTML, CSS & JS Basics",
      "Responsive Design",
      "React.js Fundamentals",
      "Node.js & Express",
      "Database Management (SQL/NoSQL)",
      "REST APIs & Authentication",
      "Full Stack Projects & Portfolio",
    ],
    "AI/ML": [
      "Python Basics",
      "Statistics & Probability",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Projects & Portfolio",
    ],
    "Data Science": [
      "Python & R Basics",
      "Data Wrangling & Cleaning",
      "Data Visualization",
      "Statistics & Probability",
      "Machine Learning",
      "Big Data & SQL",
      "Data Science Projects",
    ],
    "Cybersecurity": [
      "Networking Basics",
      "Linux & Scripting",
      "Web Application Security",
      "Ethical Hacking Fundamentals",
      "Penetration Testing",
      "Security Tools & Frameworks",
      "Cybersecurity Projects",
    ],
  };

  const [selectedDomain, setSelectedDomain] = useState("Full Stack");

  return (
    <div className="p-6 max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-extrabold text-indigo-600 mb-6 text-center drop-shadow-md">
        Explore Your Career Roadmap
      </h2>

      {/* Domain Buttons */}
      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        {Object.keys(domains).map((domain) => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
              selectedDomain === domain
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Vertical Scrollable Steps */}
      <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
        {domains[selectedDomain].map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex items-start cursor-pointer group"
          >
            <span className="bg-indigo-600 text-white p-3 rounded-full shadow-lg mr-4 flex-shrink-0 mt-1">
              <CheckCircle size={20} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-indigo-700 group-hover:text-indigo-900">
                Step {index + 1}: {step}
              </h3>
              <p className="text-gray-600 mt-1">
                {`Learn the fundamentals and practical applications of ${step}.`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-6 text-gray-500 italic">
        Scroll vertically to explore your {selectedDomain} roadmap!
      </p>
    </div>
  );
}
