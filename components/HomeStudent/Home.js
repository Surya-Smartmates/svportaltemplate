import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Home__Content from "./Home__Content";
// const ZOHO = window.ZOHO;
const Home = () => {
    const [userProfile, setUserProfile] = useState({});
    // useEffect(async () => {
    //     await ZOHO.CREATOR.init();

    //     //* Fetch Profile for Email
    //     const config = {
    //         reportName: "All_Profiles",
    //         page: "1",
    //         pageSize: "1",
    //     };

    //     //get all records API
    //     const profile = await ZOHO.CREATOR.API.getAllRecords(config);
    //     if (profile.code === 3000) {
    //         setUserProfile(profile.data[0]);
    //     }
    // }, []);
    return (
        <>
            <Navbar />
            <div class='main-root'>
                <Sidebar />
                {!!userProfile && <Home__Content userProfile={userProfile} />}
            </div>
        </>
    );
};

export default Home;
