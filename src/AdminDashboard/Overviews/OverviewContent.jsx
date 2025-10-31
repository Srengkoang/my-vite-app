// OverviewContent.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const COLORS = {
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
    spanHighlight: '#00A819',
};

const OverviewContent = ({ data }) => {
    const KpiCard = ({ unit, value, placeholderText }) => {
        const content = value > 0
            ? <p className="text-4xl font-extrabold mb-2" style={{ color: COLORS.darkAccent }}>{value}</p>
            : <p className="text-lg font-normal text-gray-500">{placeholderText}</p>;

        return (
            <div className="p-6 w-full md:w-[calc(50%-1rem)] rounded-xl border-2 flex flex-col items-center justify-center font-mono bg-white"
                 style={{ borderColor: COLORS.mediumGreen }}>
                <h2 className="text-xl font-normal uppercase mb-2" style={{ color: COLORS.textPrimary }}>
                    Total <span className='font-bold' style={{ color: COLORS.spanHighlight }}>{unit}</span>
                </h2>
                {content}
            </div>
        );
    };

    const GraphCard = () => {
        // Sample data
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const chartData = {
            labels,
            datasets: [
                {
                    label: 'Views',
                    data: [120, 200, 150, 300, 250, 400],
                    borderColor: COLORS.mediumGreen,
                    backgroundColor: 'rgba(121,176,85,0.2)',
                    tension: 0.3,
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: false },
            },
            scales: {
                y: { beginAtZero: true },
            },
        };

        return (
            <div className="p-0 w-full rounded-xl border-2 mt-8 flex flex-col items-start bg-white" style={{ borderColor: COLORS.mediumGreen }}>
                <div className="w-full px-6 py-4 bg-gray-100 rounded-t-xl border-b border-gray-200">
                    <h2 className="text-xl font-normal uppercase" style={{ color: COLORS.textPrimary }}>
                        Total <span className='font-bold' style={{ color: COLORS.spanHighlight }}>Views Overtime</span>
                    </h2>
                </div>
                <div className="w-full h-80 px-6 py-6">
                    <Line data={chartData} options={options} />
                </div>
            </div>
        );
    };

    return (
        <div className="flex-grow p-4 md:p-10 font-mono">
            <h1 className="text-4xl md:text-5xl font-normal mb-8" style={{ color: COLORS.textPrimary }}>
                <span className='font-bold'>Overview</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <KpiCard unit="Works" value={data.totalWorks} placeholderText="No works" />
                <KpiCard unit="Users" value={data.totalUsers} placeholderText="No users" />
            </div>

            <GraphCard />
        </div>
    );
};

export default OverviewContent;

