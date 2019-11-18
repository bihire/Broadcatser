import jsonwebtoken from "jsonwebtoken"
import express from "express"
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.set(process.env.SECRET, "super-secret-secret");

export default (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    jsonwebtoken.verify(token, app.get(process.env.SECRET), (err, token) => {
      if (err) {
        return res.status(404).json({
          status: "error",
          data: `failed to authanticate token: ${err}`
        });
      }
      res.token = token;
      next();
    });
  } else {
    res.status(403).json({
      status: "error",
      data: "please provide token"
    });
  }
};
