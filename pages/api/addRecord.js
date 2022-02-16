import axios from "axios";
import formidable from "formidable";
import {getAccessTokenFromLocal} from "./util/getAccessTokenFromLocal";

// you might want to use regular 'fs' and not a promise one
var fs = require("fs");
var FormData = require("form-data");
var got = require("got");

//set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  try {
    //Access token
    let resultAccessToken = await getAccessTokenFromLocal(0)
    //this is required for multipart data
    const promise = new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.keepExtensions = true;
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });
    //read fields and files
    const { fields, files } = await promise;
    var form = new FormData();
    form.append("file", fs.createReadStream(files.file.path));
    console.log({ form });
    //we only send data for registration thats why we are sending fields in the body section
    let response = await axios.post(
      "https://www.zohoapis.com/crm/v2/Leads/4330516000006728064/Attachments",
      form,
      {
        headers: {
          ...form.getHeaders(),
          "Content-Type": "multipart/form-data",
          Authorization: resultAccessToken.access_token 
        },
      }
    );

    if(response.status == 429) {
      let resultAccessToken1 = await getAccessTokenFromLocal(1)
      response = await axios.post(
        "https://www.zohoapis.com/crm/v2/Leads/4330516000006728064/Attachments",
        form,
        {
          headers: {
            ...form.getHeaders(),
            "Content-Type": "multipart/form-data",
            Authorization: resultAccessToken1.access_token 
          },
        }
      );
    }
    console.log(response.data);
    //-----------------------------------//
    // //this is required for multipart data
    // const promise = new Promise((resolve, reject) => {
    //   const form = new formidable.IncomingForm();
    //   form.keepExtensions = true;
    //   form.parse(req, (err, fields, files) => {
    //     if (err) reject(err);
    //     resolve({ fields, files });
    //   });
    // });
    // //read fields and files
    // const { fields, files } = await promise;
    // const getAccessToken = await axios.get(process.env.ACCESSTOKEN_URL);
    // let url =
    //   "https://www.zohoapis.com/crm/v2/Leads/4330516000006728064/Attachments";
    // let headers = {
    //   Authorization: getAccessToken.data.access_token,
    // };
    // let requestBody = new FormData();
    // requestBody.append("file", fs.createReadStream(files.file.path));
    // let requestDetails = {
    //   method: "POST",
    //   headers: headers,
    //   body: requestBody,
    //   encoding: "utf8",
    //   throwHttpErrors: false,
    // };
    // let response = await got(url, requestDetails);
    // if (response != null) {
    //   console.log(response.statusCode);
    //   console.log(response.body);
    // }
  } catch (error) {
    console.log("ERROR", error.response.data);
  }
}
