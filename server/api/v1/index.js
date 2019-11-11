import authRoutes from "./routes/auth"
import app from '../../app'

app.use('/api/v1/auth', authRoutes);
