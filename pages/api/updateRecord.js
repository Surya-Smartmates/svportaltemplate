import axios from "axios";

export default async function handler(req, res) {
  try {
    //Access token
    const getAccessToken = await axios.get(process.env.ACCESSTOKEN_URL);
    const { moduleName, record_id, updated_data } = req.body;

    console.log(
      getAccessToken.data.access_token,
      moduleName,//SV_Tasks
      record_id,
      updated_data
    );
    //Update Records
    const updateRecord = await axios.put(
      `https://www.zohoapis.com/crm/v2/${moduleName}`,
      updated_data,
      {
        headers: {
          Authorization: getAccessToken.data.access_token,
        },
      }
    );
    //if record data isn't updated properly
    if (!updateRecord.data) {
      await res.status(200).json({
        ok: false,
        error: "Something went wrong",
      });
    }

    //if record data is updated successfully
    if (updateRecord.data.data[0].status === "success") {
      await res.status(200).json({
        ok: true,
        message: "Record data is updated successfully",
      });
    }
  } catch (err) {
    console.log("CATCH ERR", err);
    await res.status(400).json({
      ok: false,
      error: err,
    });
  }
}
