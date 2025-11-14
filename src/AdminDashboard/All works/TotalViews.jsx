// TotalViews.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const COLORS = {
  mediumGreen: "#79B055",
  textPrimary: "#1E1E1E",
  spanHighlight: "#79B055",
};

const TotalViews = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const chartData = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [120, 200, 150, 300, 250, 400],
        borderColor: COLORS.mediumGreen,
        backgroundColor: "rgba(121,176,85,0.2)",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // <— this allows custom height
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="flex flex-col p-10 font-mono bg-white min-h-screen">
      <h1
        className="text-4xl md:text-5xl font-normal mb-8"
        style={{ color: COLORS.textPrimary }}
      >
        <span className="font-bold">Overview</span>
      </h1>

      <div
        className="p-0 w-full rounded-xl border-2 mt-8 flex flex-col items-start bg-white"
        style={{ borderColor: COLORS.mediumGreen }}
      >
        <div className="w-full px-6 py-4 bg-gray-100 rounded-t-xl border-b border-gray-200">
          <h2
            className="text-xl font-normal uppercase"
            style={{ color: COLORS.textPrimary }}
          >
            Total{" "}
            <span className="font-bold" style={{ color: COLORS.spanHighlight }}>
              Views Overtime
            </span>
          </h2>
        </div>
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] px-6 py-6">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalViews;
