import React from "react";
import home from "../../../assets/img/home-gray.svg";
import laptop from "../../../assets/img/laptop-green.svg";
import file from "../../../assets/img/file-green.svg";
import user from "../../../assets/img/user-green.svg";
import call from "../../../assets/img/call-green.svg";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { useRouter } from "next/router";

const Sidebar = () => {
  const abcd = "";
  const state = useTrackedStore();
  const router = useRouter();
  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  return (
    <div className="sidebar-menu">
      <div className="main-menu">
        <nav>
          <ul>
            {state.navLinksMap?.[profile].map((navLink, index) => {
              return (
                <li key={index}>
                  <Link href={`/${profile}${navLink.href}`}>
                    <a
                      className={
                        `/${profile}${navLink.href}` === router.pathname
                          ? "active"
                          : ""
                      }
                    >
                      <Image
                        width={40}
                        height={40}
                        src={
                          `/${profile}${navLink.href}` === router.pathname
                            ? navLink.selectedImgSrc
                            : navLink.imgSrc
                        }
                        alt=""
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
            
          </ul>
        </nav>
      </div>

      <div className="hover-menu-wrapper">
        <ul>
          {state.navLinksMap?.[profile].map((navLink, index) => {
            return (
              <li>
                <Link href={`/${profile}${navLink.href}`}>
                  <a
                    className={
                      `/${profile}${navLink.href}` === router.pathname
                        ? "active"
                        : ""
                    }
                  >
                    {navLink.label}
                  </a>
                </Link>
              </li>
            );
          })}
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
