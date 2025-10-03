import express from "express";
import cors from "cors";
import careerRoutes from "./routes/careerRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/careers", careerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
