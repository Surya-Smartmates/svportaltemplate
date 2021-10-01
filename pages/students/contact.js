import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Contact_Content from "../../components/Contact/Contact__Content";
import useTrackedStore from "../../store/useTrackedStore";
const Contact = () => {
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
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <Contact_Content />
      </div>
    </>
  );
};

export default Contact;
