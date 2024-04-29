import fs from "fs";
import path from "path";
import cors from "cors";
import https from "https";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const options = {
  cert: fs.readFileSync("./certificate.crt"),
  ca: fs.readFileSync("./ca_bundle.crt"),
  key: fs.readFileSync("./private.key"),
};

const server = https.createServer(options, app);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    server.listen(3000, () => {
      console.log(`Server is running!`);
    });
  })
  .catch((err) => {
    console.log(`error connecting: ${err}`);
  });
