import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function ChartCard({ title, data }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <Bar data={data} />
    </div>
  );
}
