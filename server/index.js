import app from './app'
app.get("/", (req, res) => {
  res.status(200).json({status:200,message:"Welcome to our api"});
})

