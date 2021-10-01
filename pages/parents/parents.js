import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Parent__Content from "../../components/User__Profile/Parent/Parent__Content";
import useTrackedStore from "../../store/useTrackedStore";
const Parents = () => {
  const state = useTrackedStore();
  const router = useRouter();
  const topbarLinks = [
    {
      href: "/parents",
      label: `View Your Profile`,
    },
    {
      href: "/student",
      label: `View ${state?.studentsResp?.[0]?.Full_Name} Profile`,
    },
  ];

  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  const profileUserName = `${
    state?.studentsResp?.[0]?.Full_Name || ""
  }'s Parents`;
  return (
    <>
      <Navbar topbarLinks={topbarLinks} profileUserName={profileUserName} />
      <div class="main-root">
        <Sidebar />
        <Parent__Content />
      </div>
    </>
  );
};

export default Parents;
