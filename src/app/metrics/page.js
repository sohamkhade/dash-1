import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import MainDashboard from "@/layouts/MainDashboard";

const MetricsPage = () => {
  return (
    <MainDashboard>
      <div className="p-4">
        {/* Header Section */}
        <div className="text-xl font-semibold mb-4">Metrics Dashboard</div>

        {/* 2x2 Grid for Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Chart 1: Line Chart */}
          <div className="p-2 w-full">
            <LineChart />
          </div>

          {/* Chart 2: Bar Chart */}
          <div className="p-2 w-full">
            <BarChart />
          </div>

          {/* Chart 3: Pie Chart */}
          <div className="p-2 w-full">
            <PieChart />
          </div>

          {/* Chart 4: Radar Chart */}
          <div className="p-2 w-full">
            <RadarChart />
          </div>
        </div>

        {/* Sample Data Row */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-lg font-semibold">Total Revenue</div>
              <div className="text-2xl font-bold text-green-600">$10,000</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Total Users</div>
              <div className="text-2xl font-bold text-blue-600">1,250</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Active Users</div>
              <div className="text-2xl font-bold text-orange-600">800</div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};

export default MetricsPage;
