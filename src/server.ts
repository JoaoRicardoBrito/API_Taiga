import express from "express";
import taigaRoutes from "./routes/taiga.routes";

const app = express();
app.use(express.json());

app.use("/taiga", taigaRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});