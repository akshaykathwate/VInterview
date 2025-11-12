import cors from "cors";
import express from "express";
import { serve } from "inngest/express";
import path from "path";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { functions, inngest } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from './middleware/protectRoute';
import chatRoutes from "./Routes/chatRoutes.js";

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/app/inngest", serve({ client: inngest, functions }));

app.get("/run", (req, res) => {
  res.status(200).json({ msg: "api is running endpoint" });
});

// Chat Routes
app.use("/api/chat",chatRoutes);

app.use(clerkMiddleware());


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    const conn = await connectDB();
    app.listen(ENV.PORT || 4000, () => {
      console.log(`server started on ${ENV.PORT}`);
    });
  } catch (error) {
    console.log("Error in starting the Server");
  }
};

startServer();
