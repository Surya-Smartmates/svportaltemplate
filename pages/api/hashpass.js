// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
  // const { password } = req.query;
  // console.log("password", password);
  const password = nanoid(8);
  const saltRounds = 10;
  console.log({ password });
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      await res.status(200).json({
        hashed_password: hash,
        password,
      });
    });
  });
}
