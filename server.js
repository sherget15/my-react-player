import express from "express";
import cors from "cors";
import morgan from "morgan";

import db from "./db/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// gives access to req.body
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => res.send("<h1>Hello, world</h1>"));

db.on("connected", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, console.log(`Connected to port: ${PORT}`));
});