import axios from "axios";

import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";

export default async function handler(req, res) {
  try {
    //Access token
    let resultAccessToken = await getAccessTokenFromLocal(0);
    const { moduleName, fields } = req.body;

    //Module Records
    let getFieldRecords = await axios.get(
      `https://www.zohoapis.com/crm/v2/${moduleName}?fields=${fields}`,
      {
        headers: {
          Authorization: resultAccessToken.access_token,
        },
      }
    );

    if (getFieldRecords.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1);

      getFieldRecords = await axios.get(
        `https://www.zohoapis.com/crm/v2/${moduleName}?fields=${fields}`,
        {
          headers: {
            Authorization: resultAccessToken1.access_token,
          },
        }
      );
    }

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
