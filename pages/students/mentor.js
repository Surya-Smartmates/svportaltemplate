import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Mentor_Content from "../../components/User__Profile/Mentor_Student/Mentor__Content";
import useTrackedStore from "../../store/useTrackedStore";

const mentor = () => {
    const state = useTrackedStore();
    const topbarLinks = [
        {
            href: "/student",
            label: `View Profile`,
        },
    ];
    const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;
    return (
        <>
            <Navbar
                profileUserName={profileUserName}
                topbarLinks={topbarLinks}
            />
            <div class='main-root'>
                <Sidebar />
                <Mentor_Content />
            </div>
        </>
    );
};

export default mentor;
