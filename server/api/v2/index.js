import app from '../../app'
import authRoutes from "./routes/auth"
import redFlagRoutes from "./routes/redFlag-Intervention"
import adminRoutes from "./routes/admin"
import responseMsg from './heplpers/responseMsg'


app.get("/api/v2", (req, res) => {
    responseMsg.successMsg(res, 200, 'initializing successful in v2')
});
app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/red-flags", redFlagRoutes);
app.use("/api/v2/admin", adminRoutes);

