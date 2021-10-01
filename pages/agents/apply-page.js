import { useRouter } from "next/router";
import React from "react";
import useTrackedStore from "../../store/useTrackedStore";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

const ApplyPage = () => {
  const router = useRouter();
  const state = useTrackedStore();
  const topbarLinks = [
    {
      href: "/profile",
      label: `View Profile`,
    },
  ];

  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  const profileUserName = `${state?.agentsResp?.[0]?.Agency_Name || ""}`;
  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            {/* apply-wrapper */}
            <div className="apply-main-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="apply-wrapper white-box">
                      <h4>Apply for StudyVillage Program</h4>
                      <p>Use the form below to apply for your student. </p>
                      <div className="apply-form-wrapp">
                        <form action>
                          <div className="single-input-wrap">
                            <label htmlFor>
                              Student’s Name, Middle Name, Last Name
                            </label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Email</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Phone</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Future University/College</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>City/Town</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>
                              StudyVillage Agent Name and Location
                            </label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Home Country</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Notes/Message</label>
                            <textarea
                              name
                              id
                              cols={30}
                              rows={10}
                              defaultValue={""}
                            />
                          </div>
                          <div className="register-btn pt-3">
                            <button type="submit" className="btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* apply-wrapper_End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;
