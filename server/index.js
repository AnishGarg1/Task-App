const express = require("express")
require("dotenv").config()
const fileUpload = require("express-fileupload")
const database = require("./config/database")
const { cloudinaryConnect } = require("./config/cloudinary")

const app = express();
const PORT = process.env.PORT || 3000;

database.connect();
cloudinaryConnect();

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/"
    })
);

app.get('/', (req, res) => {
    res.send("<h1>Task Management WebApp</h1>");
})

app.listen(PORT, () => {
    console.log(`App is started at port: ${PORT}`);
})