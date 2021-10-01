import { useRouter } from "next/router";
import React from "react";

import MyCalendar from "../../components/Calendar/My__Calendar";
import useTrackedStore from "../../store/useTrackedStore";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import moment from "moment";
import Mentor__Content from "../../components/User__Profile/Mentor_Mentor/Mentor__Content";

const Mentor = () => {
  const router = useRouter();
  const state = useTrackedStore();
  const topbarLinks = [
    {
      href: "/mentor",
      label: `View Profile`,
    },
  ];

  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";
  const profileUserName = `${
    state?.studentSupportersResp?.[0]?.Vendor_Name || ""
  }`;
  return (
    <>
      <Navbar topbarLinks={topbarLinks} profileUserName={profileUserName} />
      <div class="main-root">
        <Sidebar />

        <Mentor__Content />
      </div>
    </>
  );
};

export default Mentor;
