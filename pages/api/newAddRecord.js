import axios from 'axios'
import formidable from 'formidable'

export default async function handler(req, res){
    try{
        const {
            data: { access_token: accessToken },
        } = await axios.get(process.env.ACCESSTOKEN_URL);

        const form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
          });
          res.json(req.body)
    }catch(error) {
        console.log("ERROR", error.response.data);
      }
}