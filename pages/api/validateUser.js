import axios from "axios";
import bcrypt from "bcrypt";

import * as cookie from "cookie";
import {getAccessTokenFromLocal} from "./util/getAccessTokenFromLocal";

export default async function handler(req, res) {
    try {
        let resultAccessToken = await getAccessTokenFromLocal(0)
        console.log(resultAccessToken);
        const { email, password } = req.body;

        // if response doesn't contain accesstoken then return null
        if (!resultAccessToken.access_token) {
            await res.status(401).json({
                ok: false,
                error: "Access token not found",
            });
            return;
        }
        console.log("ACCESS TOKEN", resultAccessToken.access_token);
        let userFound = await axios.get(
            `https://www.zohoapis.com/crm/v2/Portal_Users/search?criteria=(Email:equals:${email})`,
            {
                headers: {
                    Authorization: resultAccessToken.access_token,
                },
            }
        );
        if(userFound.status == 429) {
            let resultAccessToken1 = await getAccessTokenFromLocal(1)
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

        //Check the password with DB password
        const checkPassword = await bcrypt.compare(
            password,
            userFound.data.data[0].Hashed_Password
        );

        console.log("CHECK PASSWORD", checkPassword);

        //if password not matched
        if (!checkPassword) {
            console.log("USER PASSWORD NOT FOUND");
            await res.status(200).json({
                ok: false,
                error: "Please input valid data",
            });
            return;
        }

        if(userFound.data.data[0].Has_Portal_Access) {
            //if email,password matched and forced password true then go to the reset password page
            if (userFound.data.data[0].Force_Password_Change) {
                console.log("FORCED PASSWORD");
                await res.status(200).json({
                    ok: true,
                    resetPassword: true,
                    email: userFound.data.data[0].Email,
                    record_id: userFound.data.data[0].id,
                    name: userFound.data.data[0].Last_Name,
                });
            } else { // if email and password matched but forced password false then go to the dashboard page
                await res.status(200).json({
                    ok: true,
                    resetPassword: false,
                    record_id: userFound.data.data[0].id,
                    email: userFound.data.data[0].Email,
                    name: userFound.data.data[0].Last_Name,
                });
            }
    
        } else {
            console.log("USER HAS NO ACCESS TO PORTAL");
            await res.status(403).json({
                ok: false,
                error: "No Access To Portal",
            });
            return;
        }

        } catch (err) {
        console.log("CATCH ERR", err);
        await res.status(400).json({
            error: err,
        });
    }
}