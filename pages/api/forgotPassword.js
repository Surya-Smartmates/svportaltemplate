import axios from "axios";
import bcrypt from "bcrypt";

import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";
import * as cookie from "cookie";
import Cookies from "js-cookie";

export default async function handler(req, res) {
  try {
    let resultAccessToken = await getAccessTokenFromLocal(0);

    // Get email from request body
    const { email } = req.body;

    let userFound = await axios.get(
      `https://www.zohoapis.com/crm/v2/Portal_Users/search?criteria=(Email:equals:${email})`,
      {
        headers: {
          Authorization: resultAccessToken.access_token,
        },
      }
    );

    if (userFound.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1);
      userFound = await axios.get(
        `https://www.zohoapis.com/crm/v2/Portal_Users/search?criteria=(Email:equals:${email})`,
        {
          headers: {
            Authorization: resultAccessToken1.access_token,
          },
        }
      );
    }

    //if user not found with this email
    if (!userFound.data) {
      console.log("USER EMAIL NOT FOUND");
      await res.status(200).json({
        ok: false,
        error: "Please input valid data",
      });
      return;
    }

    //if user already tried to reset password within 30 minutes then block him to change password
    if (userFound.data.data[0].Reset_Password) {
      await res.status(200).json({
        ok: false,
        error: "You can't change password within 30 minutes twice.",
      });
      return;
    }

    // reset password by setting Reset_Password field true
    const data = JSON.stringify({
      data: [
        {
          id: userFound.data.data[0].id,
          Reset_Password: true,
        },
      ],
    });

    const resetPasswordResponse = await axios.put(
      `https://www.zohoapis.com/crm/v2/Portal_Users`,
      data,
      {
        headers: {
          Authorization: resultAccessToken.access_token,
        },
      }
    );
    // if error occured
    if (!resetPasswordResponse.data) {
      await res.status(200).json({
        ok: false,
        error: "Something went wrong",
      });
      return;
    }
    console.log("RESPONSEEE", resetPasswordResponse.data);
    await res.status(200).json({
      ok: true,
      message: "Please check your email",
    });
  } catch (err) {
    console.log("CATCH ERR", err);
    await res.status(400).json({
      error: err,
    });
  }
}
