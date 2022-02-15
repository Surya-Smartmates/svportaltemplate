import axios from "axios";
import fs from "fs";
const path = require("path");
const configDirectory = path.resolve(process.cwd());

const config = [
  {
    client_secret: "d704d23e8c1919c862f1928e6afbb668dcf4eb8604",
    client_id: "1000.1I3Q1OBHDLF2HCLKERR96ZKZ7Y1FTO",
    file_name: "token1.json",
    url: process.env.ACCESSTOKEN_URL,
  },
  {
    client_secret: "acb207fcad91f040fb6c65cf7e32d9cc80ae617629",
    client_id: "1000.6W29Q83U4U19303UQP72UXW40DPK4V",
    file_name: "token2.json",
    url: process.env.ACCESSTOKEN_URL2,
  },
];

const getAccessTokenFromLocal = async (index) =>
  new Promise((resolve, reject) => {
    axios
      .get(config[index].url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (e) {
        reject(e);
      });
  });
// const getAccessTokenFromLocal =
//     async (index) =>
//         new Promise((resolve, reject) => {
//             fs.readFile(path.join(configDirectory, config[index].file_name), 'utf-8', (err, data) => {
//                 if (err) {
//                     console.log(process.cwd())
//                     reject(err)
//                     // [Error: ENOENT: no such file or directory, open 'C:\Users\Lenovo\Desktop\komang\exec\token1.json'] {
//                     //   errno: -4058,
//                 } else {
//                     console.log("data")
//                     let fileResult = JSON.parse(data)
//                     // cek expirednya
//                     if (fileResult.expired_date < (new Date()).getTime()) {
//                         // refresh  token
//                         resolve(refreshAccessToken(index, fileResult.refresh_token))
//                     } else {
//                         console.log("else");
//                         resolve(fileResult)
//                     }
//                 }
//             })
//         })

const refreshAccessToken = async (index, refresh_token) =>
  new Promise((resolve, reject) => {
    let url = "https://accounts.zoho.com/oauth/v2/token";

    try {
      const params = new URLSearchParams();
      params.append("client_id", config[index].client_id);
      params.append("client_secret", config[index].client_secret);
      params.append("grant_type", "refresh_token");
      params.append("refresh_token", refresh_token);

      const configHeaders = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      console.log("start requesting refresh token");
      axios
        .post(url, params, configHeaders)
        .then(function (res) {
          console.log("masuk res");
          if (res.error) {
            // todo : error contoh : {"error":"invalid_code"} karna grant token expired
          } else {
            res.data.expired_date =
              new Date().getTime() + res.data.expires_in * 1000;
            res.data.refresh_token = refresh_token;
            fs.writeFile(
              path.join(configDirectory, config[index].file_name),
              JSON.stringify(res.data),
              "utf8",
              function readFileCallback(err, data) {
                if (err) {
                  console.log(err);
                } else {
                  // todo : unit test jika yang ditulis apa
                  console.log("Sukses ditulis ke json");
                  resolve(res.data);
                }
              }
            );
          }
        })
        .catch(function (e) {
          console.log("error when generating access token");
          console.log(e);
          reject(e);
          // change to logger
          fs.writeFile(
            "myjsonfile.json",
            JSON.stringify(e),
            "utf8",
            function readFileCallback(err, data) {
              if (err) {
                console.log(err);
              } else {
              }
            }
          );
        });
    } catch (e) {
      console.log("error when trying");
      console.log(e);
      reject(e);
      // change to logger
      fs.writeFile(
        "myjsonfile.json",
        JSON.stringify(e),
        "utf8",
        function readFileCallback(err, data) {
          if (err) {
            console.log(err);
          } else {
          }
        }
      );
    }
  });

const generateAccessToken = async function generateAccessToken(
  index,
  grantToken
) {
  let url = "https://accounts.zoho.com/oauth/v2/token";

  try {
    const params = new URLSearchParams();
    params.append("client_id", config[index].client_id);
    params.append("client_secret", config[index].client_secret);
    params.append("grant_type", "authorization_code");
    params.append("code", grantToken);

    const configHeaders = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    console.log("start requesting");
    axios
      .post(url, params, configHeaders)
      .then(function (res) {
        console.log("masuk res");
        if (res.error) {
          // todo : error contoh : {"error":"invalid_code"} karna grant token expired
        } else {
          res.expired_date = new Date().getTime() + res.expires_in * 1000;
          fs.writeFile(
            path.join(configDirectory, config[index].file_name),
            JSON.stringify(res.data),
            "utf8",
            function readFileCallback(err, data) {
              if (err) {
                console.log(err);
              } else {
                // todo : unit test jika yang ditulis apa
                console.log("Sukses ditulis ke json");
              }
            }
          );
        }
      })
      .catch(function (e) {
        console.log("error when generating access token");
        console.log(e);
        // change to logger
        fs.writeFile(
          "myjsonfile.json",
          JSON.stringify(e),
          "utf8",
          function readFileCallback(err, data) {
            if (err) {
              console.log(err);
            } else {
            }
          }
        );
      });
  } catch (e) {
    console.log("error when trying");
    console.log(e);
    // change to logger
    fs.writeFile(
      "myjsonfile.json",
      JSON.stringify(e),
      "utf8",
      function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
        }
      }
    );
  }
};

module.exports.generateAccessToken = generateAccessToken;
module.exports.getAccessTokenFromLocal = getAccessTokenFromLocal;
module.exports.refreshAccessToken = refreshAccessToken;
