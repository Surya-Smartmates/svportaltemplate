import { useSession, signOut } from "next-auth/client";
import Login from "../../pages/login";

import { withRouter } from "next/router";
import { useEffect } from "react";
import FullLayout from "../../layouts/full-layout/FullLayout";
import Cookies from "js-cookie";
import { getSession } from "next-auth/client";

const Layout = ({ children, router, customizer }) => {
  const [session, loading] = useSession();

  useEffect(() => {
    // Remove those data from cookies which u saved in the cookies at the time of password reset
    Cookies.get("name") && Cookies.remove("name", { path: "" });
    Cookies.get("user_email") && Cookies.remove("user_email", { path: "" });
    Cookies.get("remember") && Cookies.remove("remember", { path: "" });
    Cookies.get("record_id") && Cookies.remove("record_id", { path: "" });
  }, []);

  let time;

  useEffect(() => {
    if (!!session && session.credentials) {
      time = setInterval(async () => {
        Cookies.set("expiredTime", Date.now() + 2 * 10000);
      }, 1000);
    }
  }, [!!session]);

  if (session && session.credentials && !session.remember) {
    // when the user signin first time, remember variable in cookie will be empty but session variable will contain exp thats why we have to check it first
    let expired = Date.now() > (Cookies.get("expiredTime") ?? session.exp);

    if (expired) {
      //remove remember from cookie
      if (Cookies.get("expiredTime")) {
        // Cookies.set("expiredTime", 0, { expires: 0 });
        Cookies.remove("expiredTime", { path: "" });
        signOut();
      }
      return <Login />;
    }
  }

  if (loading) return <div>Loading...</div>;

  if (session) {
    return (
      <FullLayout customizer={customizer}>
        <button
          onClick={async () => {
            if (session.credentials) {
              clearInterval(time);
              // Cookies.set("expiredTime", 0, { expires: 0 });
              Cookies.remove("expiredTime", { path: "" });
            }
            await signOut();
          }}
        >
          Sign out
        </button>
        {children}
      </FullLayout>
    );
  } else {
    return <Login />;
  }
};

export default withRouter(Layout);
