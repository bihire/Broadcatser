import app from "../../app";
import authRoutes from "./routes/auth";
import redFlagRoutes from "./routes/redFlag-Intervention";
import responseMsg from "./heplpers/responseMsg";

app.get("/api/v1", (req, res) => {
  responseMsg.successMsg(res, 200, "initializing successful");
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/red-flags", redFlagRoutes);
