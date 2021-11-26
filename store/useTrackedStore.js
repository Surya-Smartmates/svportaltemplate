import { produce, setAutoFreeze } from "immer";
import create from "zustand";
import { createTrackedSelector } from "react-tracked";
// import { Menuitems } from "../data/data";
import Cookies from "js-cookie";
import home from "../assets/img/home-greeen.svg";
import homeSelected from "../assets/img/home-gray.svg";
import laptop from "../assets/img/laptop-green.svg";
import laptopSelected from "../assets/img/laptop-gray.svg";
import file from "../assets/img/file-green.svg";
import fileSelected from "../assets/img/file-gray.svg";
import user from "../assets/img/user-green.svg";
import userSelected from "../assets/img/user-gray.svg";
import call from "../assets/img/call-green.svg";
import callSelected from "../assets/img/call-gray.svg";

setAutoFreeze(false);

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      console.log("New State ", get());
    },
    get,
    api
  );

const store = (set) => ({
  navLinksMap: {
    students: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc: homeSelected,
      },
      {
        href: "/program-calendar",
        label: "Program & Calendar",
        imgSrc: laptop,
        selectedImgSrc: laptopSelected,
      },
      {
        href: "/hhw-outline",
        label: "HHW Outline",
        imgSrc: file,
        selectedImgSrc: fileSelected,
      },
      {
        href: "/mentor",
        label: "Mentor Profile",
        imgSrc: user,
        selectedImgSrc: userSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: call,
        selectedImgSrc: callSelected,
      },
    ],
    parents: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc: homeSelected,
      },
      {
        href: "/program-calendar",
        label: "Program & Calendar",
        imgSrc: laptop,
        selectedImgSrc: laptopSelected,
      },
      {
        href: "/hhw-outline",
        label: "HHW Outline",
        imgSrc: file,
        selectedImgSrc: fileSelected,
      },
      {
        href: "/mentor",
        label: "Mentor Profile",
        imgSrc: user,
        selectedImgSrc: userSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: call,
        selectedImgSrc: callSelected,
      },
    ],
    agents: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc: homeSelected,
      },
       {
           href: "/profile",
           label: "Representatives",
           imgSrc: user,
           selectedImgSrc: userSelected,
       },
      /* {
        href: "/reports",
        label: "Reports",
        imgSrc: file,
        selectedImgSrc: fileSelected,
    },*/
      {
        href: "/resources",
        label: "Resources",
        imgSrc: laptop,
        selectedImgSrc: laptopSelected,
      },
      // {
      //     href: "/profile",
      //     label: "Your Profile",
      //     imgSrc: user,
      //     selectedImgSrc: userSelected,
      // },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: call,
        selectedImgSrc: callSelected,
      },
    ],
    mentors: [
      {
        href: "",
        label: "Home",
        imgSrc: home,
        selectedImgSrc: homeSelected,
      },
      {
        href: "/calendar",
        label: "Calendar",
        imgSrc: laptop,
        selectedImgSrc: laptopSelected,
      },
      {
        href: "/reports",
        label: "Reports",
        imgSrc: file,
        selectedImgSrc: fileSelected,
      },
      {
        href: "/your-students",
        label: "Your Students",
        imgSrc: user,
        selectedImgSrc: userSelected,
      },
      {
        href: "/contact",
        label: "Contact",
        imgSrc: call,
        selectedImgSrc: callSelected,
      },
    ],
  },
  parentsResp: {},
  setParentsResp: (parentsResp) =>
    set((state) => {
      state.parentsResp = parentsResp;
    }),
  studentsResp: [],
  setStudentsResp: (studentsResp) =>
    set((state) => {
      state.studentsResp = studentsResp;
    }),
  enrolmentsResp: [],
  setEnrolmentsResp: (enrolmentsResp) =>
    set((state) => {
      state.enrolmentsResp = enrolmentsResp;
    }),
  svTasksResp: [],
  setSvTasksResp: (svTasksResp) =>
    set((state) => {
      state.svTasksResp = svTasksResp;
    }),
  studentSupportersResp: [],
  setStudentSupportersResp: (studentSupportersResp) =>
    set((state) => {
      state.studentSupportersResp = studentSupportersResp;
    }),
  surveysResp: [],
  setSurveysResp: (surveysResp) =>
    set((state) => {
      state.surveysResp = surveysResp;
    }),
  portalUserResp: [],
  setPortalUserResp: (portalUserResp) =>
    set((state) => {
      state.portalUserResp = portalUserResp;
    }),
  agentsResp: [],
  setAgentsResp: (agentsResp) =>
    set((state) => {
      state.agentsResp = agentsResp;
    }),
  portalAssets: [],
  setPortalAssets: (portalAssets) =>
    set((state) => {
      state.portalAssets = portalAssets;
    }),
  parentsMeetingDescriptions: [],
  setParentsMeetingDescriptions: (parentsMeetingDescriptions) =>
    set((state) => {
      state.parentsMeetingDescriptions = parentsMeetingDescriptions;
    }),

  lifecycleDetails: [],
  setLifecycleDetails: (lifecycleDetails) =>
    set((state) => {
      state.lifecycleDetails = lifecycleDetails;
    }),
  allAssets: [],
  setAllAssets: (allAssets) =>
    set((state) => {
      state.allAssets = allAssets;
    }),
});

const useStore = create(log(immer(store)));
const useTrackedStore = createTrackedSelector(useStore);
export default useTrackedStore;
