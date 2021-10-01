import * as cookie from "cookie";

const removeDataFromCookie = async (parsedCookies, context) => {
  console.log({ parsedCookies, context });
  parsedCookies.name &&
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("name", String(parsedCookies.name), {
        httpOnly: true,
        maxAge: 0,
      })
    );

  parsedCookies.user_email &&
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("user_email", String(parsedCookies.user_email), {
        httpOnly: true,
        maxAge: 0,
      })
    );
  parsedCookies.remember &&
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("remember", String(parsedCookies.remember), {
        httpOnly: true,
        maxAge: 0,
      })
    );
  parsedCookies.record_id &&
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("record_id", String(parsedCookies.record_id), {
        httpOnly: true,
        maxAge: 0,
      })
    );
};

export default removeDataFromCookie;
