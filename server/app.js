import fs from "fs"
import path from "path"
import express from "express"
import morgan from "morgan"
import bodyparser from "body-parser"
import dotenv from 'dotenv'
// import multer from 'multer'
// const upload = multer()
// import upload from '../server/api/v1/heplpers/multer'

dotenv.config()

const app = express();

app.use(morgan("combined"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(upload.fields([
//     {
//         name: 'image'
//     }, {
//         name: 'video'
//     }
// ])); 

app.use((req, res, next) => {
    let version = req.url.match(/\/api\/(v[0-9]+).*/) || [];
    // const { readdirSync } = require("fs");

    // const dirPath = path.join(__dirname, "./api");
    // const getDirectories = srcPath =>
    //     fs
    //         .readdirSync(srcPath)
    //         .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

    // const lastDir = getDirectories(dirPath)[getDirectories(dirPath).length - 1];
    // const callBackPath = path.join(__dirname, `./api/${lastDir}/index.js`);
    version = version[1] || "";
    if (version != "") {
        const appPath = path.join(__dirname, `./api/${version}/index.js`);
        if (!fs.existsSync(appPath)) {
            return res.status(404).send({
                message: "sorry we don't offer that version of endpoints"
            });
        }
        require(appPath)
    } else {
        require("./index")
    }
    next();
});

app.listen(process.env.PORT);
console.log(`Server started on port ${process.env.PORT}`);

export default app;
