const multer = require('multer');

const memory = multer.memoryStorage();
const upload = multer({
    memory
});
const uploadImage = upload.single("imgUrl")

module.exports = uploadImage