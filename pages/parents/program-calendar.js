import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Program__Calendar from "../../components/Program__Calendar/Program__Calendar";
import useTrackedStore from "../../store/useTrackedStore";
import { useRouter } from "next/router";
import Program__Content from "../../components/Program__Calendar/Program__Content";

const ProgramCalendar = () => {
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
  const events = [
    {
      title: "Meeting with Parents",
      start: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
      end: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
      up_down_ind: "N",
    },
  ];

  const quickLink = {
    href: "/parents/hhw-outline",
    label: "View Outlines >> ",
  };
  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <Program__Content quickLink={quickLink} events={events} />
      </div>
    </>
  );
};

export default ProgramCalendar;
