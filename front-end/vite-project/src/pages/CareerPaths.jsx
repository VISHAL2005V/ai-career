import { useState } from "react";
import { getCareerSuggestions } from "../services/careerService";
import Loader from "../components/Loader";
import { Search, Bookmark } from "lucide-react";

export default function CareerPaths() {
  const [skills, setSkills] = useState("");
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle suggestion button
  const handleSuggest = async () => {
    if (!skills.trim()) return alert("Enter at least one skill.");

    setLoading(true);

    try {
      const skillArray = skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "");

      if (skillArray.length === 0) {
        alert("Enter at least one valid skill.");
        setLoading(false);
        return;
      }

      const data = await getCareerSuggestions(skillArray);
      setCareers(data.careers || []);
    } catch (err) {
      console.error("Error fetching career suggestions:", err);
      alert("Error fetching suggestions.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto mt-28">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-indigo-700 text-center drop-shadow-md">
        Find Your Perfect Career Path
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Enter your skills and let AI suggest the best careers for you.
      </p>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="relative w-full md:w-auto flex-1">
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Enter skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
        <button
          onClick={handleSuggest}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all"
        >
          Suggest Careers
        </button>
      </div>

      {loading && <Loader />}

      {/* Career Suggestions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading && careers.length === 0 && (
          <p className="text-gray-500 italic col-span-full text-center">
            No suggestions yet
          </p>
        )}

        {careers.map((career, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 relative group"
          >
            {/* Save / Bookmark Button */}
            <button className="absolute top-3 right-3 text-indigo-500 hover:text-indigo-700 transition-all">
              <Bookmark size={20} />
            </button>

            {/* Career Title */}
            <h3 className="text-xl font-bold text-indigo-600 mb-3">
              {career.title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {(career.skills || []).map((skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Match Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-indigo-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${Math.round(career.score * 100)}%` }}
              ></div>
            </div>

            <span className="text-gray-700 font-medium">
              Match: {Math.round(career.score * 100)}%
            </span>

            {/* Optional Description */}
            {career.description && (
              <p className="text-gray-500 mt-2 text-sm">{career.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
