import express from "express";
import {ENV} from "./lib/env.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "api called" });
});

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.listen(3000, () => console.log("server is running on port 3000"));
