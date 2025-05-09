import express from "express";
import listActivities from "../controllers/listActivities.js";
import bookActivity from "../controllers/bookActivity.js";
import listBookings from "../controllers/listBookings.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/list", listActivities);
router.post("/book", authenticateUser, bookActivity); 

export default router;
