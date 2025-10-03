import ChartCard from "../components/ChartCard";
import { sampleCareerChart } from "../utils/formatData";

export default function Dashboard() {
  return (
    <div className="p-6 mt-24 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-indigo-600 mb-8 text-center drop-shadow-md">
        Your Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
          <ChartCard
            title="Top Career Matches"
            data={sampleCareerChart()}
            textColor="text-white"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
          <ChartCard
            title="Job Market Trends"
            data={sampleCareerChart()}
            textColor="text-white"
          />
        </div>
      </div>

      {/* Optional: Add a small info or CTA section */}
      <div className="mt-8 text-center text-gray-600 italic">
        Explore these insights to plan your career journey effectively!
      </div>
    </div>
  );
}
