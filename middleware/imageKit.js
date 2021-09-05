const axios = require("axios");
const formData = require("form-data");

const imageKit = async (req, res, next) => {
    try {
        const newForm = new formData();
        const encodedFile = req.file.buffer.toString("base64");
        newForm.append("file", encodedFile);
        newForm.append("fileName", req.file.originalname);
        const encodedKey = Buffer.from(process.env.imageKitPrivate + ":").toString("base64");

        const result = await axios({
            method: "POST",
            url: "https://upload.imagekit.io/api/v1/files/upload",
            data: newForm,
            headers: {
                ...newForm.getHeaders(),
                Authorization: `Basic ${encodedKey}`
            }
        })


        if (result) {
            req.body.imgUrl = result.data.url
            next()
        } else {
            next({
                name: "NotFound"
            })
        }

    } catch (err) {
        next(err)
    }

}

module.exports = imageKit