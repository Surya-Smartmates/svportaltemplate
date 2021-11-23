import React from "react";
// import HHW__Content from "../components/HHW__Outline/HHW__Content";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import dynamic from "next/dynamic";
import useTrackedStore from "../../store/useTrackedStore";
import { useRouter } from "next/router";

import PdfSlider from "../../components/pdf-slider/PdfSlider";

const HhwOutline = () => {
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
  const HHW__Content = dynamic(
    () => import("../../components/HHW__Outline/HHW__Content")
    // No need for SSR, when the module includes a library that only works in the
    // browser.
    // { ssr: false }
  );

  return (
    <>
      <Navbar topbarLinks={topbarLinks} profileUserName={profileUserName} />
      <div class="main-root">
        <Sidebar />
        <HHW__Content>
          <ul style = {{ listStyleType: "disc" }}>
              <li>ELICOS A</li>
              <li>ELICOS B</li>
              <li>ELICOS C</li>
              <li>ELICOS D</li>
              <li>ELICOS E</li>
              <li>M1</li>
              <li>M2</li>
              <li>M3</li>
              <li>M4</li>
              <li>M5</li>
              
          </ul>
        </HHW__Content>
      </div>
    </>
  );
};

export default HhwOutline;
