import express from "express";
import cors from "cors";
import resumeRoutes from "./src/routes/resume.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("AI Resume Analyzer Backend ");
});

export default app;
