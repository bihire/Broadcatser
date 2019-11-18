import app from './app'
import responseMsg from './api/v1/heplpers/responseMsg'

app.get("/", (req, res) => {
  responseMsg.successMsg(res, 200, "Welcome to our api")
})

