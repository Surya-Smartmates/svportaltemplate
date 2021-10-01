import axios from "axios";
import bcrypt from "bcrypt";

import * as cookie from "cookie";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  try {
    const getAccessToken = await axios.get(process.env.ACCESSTOKEN_URL);

    // Get password and password_repeat from request body
    const { password, password_repeat, record_id } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // update Hashed_Password and Force_Password_Change
    const data = JSON.stringify({
      data: [
        {
          id: record_id,
          Hashed_Password: hashedPassword,
          Force_Password_Change: false,
        },
      ],
    });
    const updateDb = await axios.put(
      `https://www.zohoapis.com/crm/v2/Portal_Users/${record_id}`,
      data,
      {
        headers: {
          Authorization: getAccessToken.data.access_token,
        },
      }
    );

    // if error occured
    if (!updateDb.data) {
      await res.status(200).json({
        ok: false,
        error: "Something went wrong",
      });
      return;
    }

    if (updateDb.data) {
      await res.status(200).json({
        ok: true,
        message: "Password successfully updated",
      });
    }
  } catch (err) {
    console.log("CATCH ERR", err);
    await res.status(400).json({
      error: err,
    });
  }
}
