export default async function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("TEST COOKIE", String(query.name), {
      httpOnly: true,
      maxAge: 0,
    })
  );
}
