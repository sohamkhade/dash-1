"use client";
import React from "react";
import { navigation } from "./navigation";
import { usePathname } from "next/navigation";

export default function MainDashboard({ children }) {

  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-start h-20 bg-black text-white pl-2">
        <p className="m-6 text-3xl">Dashboard</p>
      </div>

      {/* Main split in two bars */}
      <div className="flex flex-row w-full flex-1">
        {/* Col 1 */}
        <div className="w-1/6 h-full bg-gray-100 flex flex-col p-4 space-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.url;
            return (
              <a
                href={item.url}
                key={item.name}
                className={`text-lg font-semibold p-2 rounded-md transition duration-300 ${
              isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}>
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Col 2 */}
        <div className="w-5/6 h-full bg-green">{children}</div>
      </div>
    </div>
  );
}
