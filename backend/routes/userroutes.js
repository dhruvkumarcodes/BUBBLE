import express from "express";
import { allUsers, login, logout, signup } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout)

router.get("/getUserProfile", secureRoute, allUsers);
export default router;