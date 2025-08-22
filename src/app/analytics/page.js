
import BarChart from "@/components/Charts/BarChart";
import LineChart from "@/components/Charts/LineChart";
import MainDashboard from "@/layouts/MainDashboard";
import React from "react";

const  AnalyticsPage = () => {
    return <MainDashboard>
        <div> Analytics Page Start and ends</div>
        <div className="p-2">
            <LineChart />
            <BarChart/>
        </div>
    </MainDashboard>
}

export default AnalyticsPage;