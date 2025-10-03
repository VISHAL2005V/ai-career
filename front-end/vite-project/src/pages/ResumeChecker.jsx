import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function ResumeChecker() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = (e) => setFile(e.target.files[0]);

  const handleCheck = () => {
    if (!file) return alert("Please upload a resume.");
    // Placeholder: send file to backend for real matching
    setResult([
      { job: "Frontend Developer", match: 92 },
      { job: "Full Stack Developer", match: 88 },
      { job: "React Developer", match: 85 },
      { job: "UI/UX Designer", match: 80 },
    ]);
  };

  return (
    <div className="max-w-5xl mx-auto mt-28 p-6">
      <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-4 drop-shadow-md">
        Resume Checker
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Upload your resume and discover which jobs best match your skills.
      </p>

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <label className="flex items-center gap-2 cursor-pointer bg-white border-2 border-dashed border-indigo-400 rounded-xl px-4 py-3 hover:bg-indigo-50 transition-all">
          <UploadCloud size={24} className="text-indigo-600" />
          <span className="text-gray-700">{file ? file.name : "Upload Resume"}</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
        <button
          onClick={handleCheck}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transform transition-all shadow-lg"
        >
          Check Jobs
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200">
          {result.map((job, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-5 flex flex-col items-center justify-center cursor-pointer"
            >
              <h3 className="text-lg font-bold text-indigo-700 mb-2 text-center">{job.job}</h3>
              <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                <div
                  className="bg-indigo-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${job.match}%` }}
                ></div>
              </div>
              <span className="text-gray-700 font-medium">{job.match}% Match</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
