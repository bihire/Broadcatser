import app from '../../app'
import authRoutes from "./routes/auth"


app.get("/api/v1", (req, res) => {
    res.status(200).send({status: 200,message: 'initializing successful'})
});
app.use("/api/v1/auth", authRoutes);

