import React from "react";
// import HHW__Content from "../components/HHW__Outline/HHW__Content";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import dynamic from "next/dynamic";
import useTrackedStore from "../../store/useTrackedStore";

const HhwOutline = () => {
    const state = useTrackedStore();
    const topbarLinks = [
        {
            href: "/student",
            label: `View Profile`,
        },
    ];
    const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;
    const HHW__Content = dynamic(
        () => import("../../components/HHW__Outline_Student/HHW__Content")
        // No need for SSR, when the module includes a library that only works in the
        // browser.
        // { ssr: false }
    );
    console.log(HHW__Content);
    return (
        <>
            <Navbar
                profileUserName={profileUserName}
                topbarLinks={topbarLinks}
            />
            <div class='main-root'>
                <Sidebar />
                <HHW__Content />
            </div>
        </>
    );
};

export default HhwOutline;
