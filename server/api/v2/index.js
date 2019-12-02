import app from '../../app'
import authRoutes from "./routes/auth"
import redFlagRoutes from "./routes/redFlag-Intervention"
import responseMsg from './heplpers/responseMsg'


app.get("/api/v2", (req, res) => {
    responseMsg.successMsg(res, 200, 'initializing successful in v2')
});
app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/red-flags", redFlagRoutes);

