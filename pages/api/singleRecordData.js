import axios from "axios";
import { getAccessTokenFromLocal } from "./util/getAccessTokenFromLocal";

export default async function handler(req, res) {
  try {
    const { moduleName, record_id } = req.body;

    //Access token
    let resultAccessToken = await getAccessTokenFromLocal(0);

    console.log(resultAccessToken.access_token, moduleName, record_id);
    //Module Records
    let getRecordData = await axios.get(
      `https://www.zohoapis.com/crm/v2/${moduleName}/${record_id}`,
      {
        headers: {
          Authorization: resultAccessToken.access_token,
        },
      }
    );

    if (getRecordData.status == 429) {
      //Access token
      let resultAccessToken1 = await getAccessTokenFromLocal(1);

      console.log(resultAccessToken1.access_token, moduleName, record_id);
      //Module Records
      let getRecordData = await axios.get(
        `https://www.zohoapis.com/crm/v2/${moduleName}/${record_id}`,
        {
          headers: {
            Authorization: resultAccessToken1.access_token,
          },
        }
      );
    }

    await res.status(200).json({
      ok: true,
      recordData: getRecordData.data.data[0],
    });
  } catch (err) {
    console.log("CATCH ERR", err);
    await res.status(200).json({
      ok: false,
      error: err,
    });
  }
}
