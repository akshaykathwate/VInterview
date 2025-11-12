import express from "express"
import { getStreamToken } from "../controller/chatController";
import { protectRoute } from './../middleware/protectRoute';

const router = express.Router();


router.get("/token",protectRoute,getStreamToken)

export default router;