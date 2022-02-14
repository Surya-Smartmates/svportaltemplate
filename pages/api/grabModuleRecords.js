import axios from "axios";

import {getAccessTokenFromLocal} from "./util/getAccessTokenFromLocal";

export default async function handler(req, res) {
  try {
    //Access token
    let resultAccessToken = await getAccessTokenFromLocal(0)
    const { moduleName, fields } = req.body;

    //Module Records
    const getFieldRecords = await axios.get(
      `https://www.zohoapis.com/crm/v2/${moduleName}?fields=${fields}`,
      {
        headers: {
          Authorization: "Zoho-oauthtoken " + resultAccessToken.access_token,
        },
      }
    );
    await res.status(200).json({
      ok: true,
      fieldRecords: getFieldRecords.data,
    });
  } catch (err) {
    console.log("CATCH ERR", err);
    await res.status(400).json({
      ok: false,
      error: err,
    });
  }
}
