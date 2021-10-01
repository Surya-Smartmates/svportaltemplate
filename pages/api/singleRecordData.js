import axios from "axios";

export default async function handler(req, res) {
  try {
    //Access token
    const getAccessToken = await axios.get(process.env.ACCESSTOKEN_URL);
    const { moduleName, record_id } = req.body;

    console.log(getAccessToken.data.access_token, moduleName, record_id);
    //Module Records
    const getRecordData = await axios.get(
      `https://www.zohoapis.com/crm/v2/${moduleName}/${record_id}`,
      {
        headers: {
          Authorization: getAccessToken.data.access_token,
        },
      }
    );

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
