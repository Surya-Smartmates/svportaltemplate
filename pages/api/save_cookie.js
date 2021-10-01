import * as cookie from "cookie";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("TEST COOKIE", String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
  );
}
