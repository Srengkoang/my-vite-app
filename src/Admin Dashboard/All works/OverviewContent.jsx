import React from 'react';

const COLORS = {
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
    spanHighlight: '#00A819',
    lightGreen: '#C2F793',
};

export const OverviewContent = ({ data }) => {
    const KpiCard = ({ unit, value, placeholderText }) => (
        <div className="p-6 w-full md:w-[calc(50%-1rem)] rounded-xl border-2 flex flex-col items-center justify-center font-mono bg-white"
            style={{ borderColor: COLORS.mediumGreen }}>
            <h2 className="text-xl font-normal uppercase mb-2" style={{ color: COLORS.textPrimary }}>
                Total <span className='font-bold' style={{ color: COLORS.spanHighlight }}>{unit}</span>
            </h2>
            {value > 0 
                ? <p className="text-4xl font-extrabold mb-2" style={{ color: COLORS.darkAccent }}>{value.toLocaleString()}</p>
                : <p className="text-lg font-normal text-gray-500">{placeholderText}</p>
            }
        </div>
    );

    const GraphCard = () => (
        <div className="p-0 w-full rounded-xl border-2 mt-8 flex flex-col items-start bg-white" style={{ borderColor: COLORS.mediumGreen }}>
            <div className="w-full px-6 py-4 bg-gray-100 rounded-t-xl border-b border-gray-200">
                <h2 className="text-xl font-normal uppercase" style={{ color: COLORS.textPrimary }}>
                    Total <span className='font-bold' style={{ color: COLORS.spanHighlight }}>Views Overtime</span>
                </h2>
            </div>
            <div className="w-full h-80 px-6 py-6 flex items-center justify-center text-gray-500 font-mono text-lg">
                Graph here
            </div>
        </div>
    );

    return (
        <div className="flex-grow p-4 md:p-10 font-mono">
            <h1 className="text-4xl md:text-5xl font-normal mb-2" style={{ color: COLORS.textPrimary }}>
                <span className='font-bold' style={{ color: COLORS.spanHighlight }}>Overview</span>
            </h1>
            <p className="text-gray-500 mb-8 text-sm">Key performance indicators for the entire platform.</p>

            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <KpiCard unit="Works" value={data.totalWorks} placeholderText="No works" />
                <KpiCard unit="Users" value={data.totalUsers} placeholderText="No users" />
            </div>

            <GraphCard />
        </div>
    );
};
