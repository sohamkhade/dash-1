import UserTable from "@/components/UserTable";
import MainDashboard from "@/layouts/MainDashboard";
import React from "react";

const ViewerPage = () => {
    return <MainDashboard>
        <div className="p-5"><UserTable /></div>
    </MainDashboard>;
}

export default ViewerPage;