import axios from "axios";
export default async function handler(req, res) {
    try {
        const {
            data: { access_token: accessToken },
        } = await axios.get(process.env.ACCESSTOKEN_URL);
        const { moduleApiName = "", criteria = "", fields = "" } = req.body;
        console.log(req.body.moduleApiName);
        if (moduleApiName === "") {
            res.json({
                status: "error",
                message: "Module API Name is not provided",
                data: {},
            });
            return;
        }
        let url = `https://www.zohoapis.com/crm/v2/${moduleApiName}`;
        if (criteria !== "") {
            url = `${url}/search?criteria=${criteria}`;
        }
        const headers = {
            headers: { Authorization: accessToken },
        };

        try {
            const resp = await axios.get(url, headers);
            res.json({
                status: "success",
                message: "Data fetched successfully",
                data: resp?.data?.data,
            });
            return;
        } catch (error) {
            res.json({
                status: "error",
                message: "Check error data",
                data: error.message,
            });
            return;
        }
    } catch (error) {
        res.json({
            status: "error",
            message: "Check error data",
            data: error.message,
        });
        return;
    }
}
