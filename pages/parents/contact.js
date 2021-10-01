import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Contact_Content from "../../components/Contact/Contact__Content";
import useTrackedStore from "../../store/useTrackedStore";
import { useRouter } from "next/router";
const Contact = () => {
  const router = useRouter();
  const state = useTrackedStore();
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
        <Contact_Content />
      </div>
    </>
  );
};

export default Contact;
