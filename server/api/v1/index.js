import app from '../../app'

app.get("/api/v1", (req, res) => {
    res.status(200).send({status: 200,message: 'initializing successful'})
});
