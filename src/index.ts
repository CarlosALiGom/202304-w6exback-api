import express from "express";
import students from "./students.js";

const app = express();

const port = 4005;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get("/students", (req, res) => {
  console.log("reques to get students");
  res.status(200).json({ students });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
