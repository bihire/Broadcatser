import fs from "fs"
import path from "path"
import express from "express"
import morgan from "morgan"
import bodyparser from "body-parser"
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(morgan("combined"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    let version = req.url.match(/\/api\/(v[0-9]+).*/) || [];

    version = version[1] || "";
    if (version != "") {
        const appPath = path.join(__dirname, `./api/${version}/index.js`);
        if (!fs.existsSync(appPath)) {
            return res.status(404).send({
                status: 404,
                error: "sorry we don't offer that version of endpoints"
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
