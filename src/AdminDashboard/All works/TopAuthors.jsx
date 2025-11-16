// TopAuthors.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TopAuthors = ({ data }) => {

  const goBack = () => {
    if (onNavigate) onNavigate("Overview");
  };
  
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <button
        onClick={goBack}
        className="mb-6 self-start px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        ← Back to Overview
      </button>

      {/* Header */}
      <div className="border-b pb-2 mb-2">
        <h3 className="text-xl font-semibold">Top Authors</h3>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="author" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="booksSold" fill="#00A819" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopAuthors;

