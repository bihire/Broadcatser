import app from './app'
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our api");
})

