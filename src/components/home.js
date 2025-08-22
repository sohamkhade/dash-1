"use client";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div className="p-6 w-full h-full bg-gray-50">
      {/* Analytics and Metrics Summary */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Analytics & Metrics</h1>
        <p className="text-xl text-gray-600">Summary of the latest data trends and key performance indicators</p>
      </div>

      {/* Four columns in a row for Summary Stats */}
      <div className="flex flex-row w-full space-x-4 mb-8">
        {/* Column 1 - Total Users */}
        <div className="w-1/4 m-2 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-gray-900">12,340</p>
          <div className="w-16 h-16 mt-2">
            <CircularProgressbar value={75} text={`${75}%`} strokeWidth={6} />
          </div>
        </div>

        {/* Column 2 - Sales */}
        <div className="w-1/4 m-2 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Sales</h3>
          <p className="text-2xl font-bold text-gray-900">$142,390</p>
          <div className="w-16 h-16 mt-2">
            <CircularProgressbar value={55} text={`${55}%`} strokeWidth={6} />
          </div>
        </div>

        {/* Column 3 - Active Sessions */}
        <div className="w-1/4 m-2 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-900">72</p>
          <div className="w-16 h-16 mt-2">
            <CircularProgressbar value={90} text={`${90}%`} strokeWidth={6} />
          </div>
        </div>

        {/* Column 4 - Conversion Rate */}
        <div className="w-1/4 m-2 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-900">4.3%</p>
          <div className="w-16 h-16 mt-2">
            <CircularProgressbar value={60} text={`${60}%`} strokeWidth={6} />
          </div>
        </div>
      </div>

      {/* Two rows and two columns grid for Detailed Metrics */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
        {/* Row 1, Col 1 - Monthly Revenue */}
        <div className="w-full rounded-lg shadow-lg p-4 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Monthly Revenue</h3>
          <p className="text-3xl font-bold text-gray-900">$50,230</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-md text-green-500 mt-2">+12% this month</p>
          </div>
        </div>

        {/* Row 1, Col 2 - Customer Satisfaction */}
        <div className="w-full h-full rounded-lg shadow-lg p-4 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Customer Satisfaction</h3>
          <p className="text-3xl font-bold text-gray-900">89%</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: "89%" }}></div>
            </div>
            <p className="text-md text-green-500 mt-2">+5% increase</p>
          </div>
        </div>

        {/* Row 2, Col 1 - New Signups */}
        <div className="w-full h-full rounded-lg shadow-lg p-4 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">New Signups</h3>
          <p className="text-3xl font-bold text-gray-900">1,120</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <p className="text-md text-green-500 mt-2">+8% this week</p>
          </div>
        </div>

        {/* Row 2, Col 2 - Traffic */}
        <div className="w-full h-full rounded-lg shadow-lg p-4 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Traffic</h3>
          <p className="text-3xl font-bold text-gray-900">45,230</p>
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-red-500 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-md text-red-500 mt-2">-2% decrease</p>
          </div>
        </div>
      </div>
    </div>
  );
}
