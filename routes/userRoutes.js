import express from "express";
import registerUser from "../controllers/registerUser.js";
import loginUser from "../controllers/loginUser.js";
import validateLoginInput from "../middleware/validateLoginInput.js";
import validateRegisterInput from "../middleware/validateRegisterInput.js";
import authenticateUser from "../middleware/authenticateUser.js";
import listBookings from "../controllers/listBookings.js";

const router = express.Router();

router.post("/register", validateRegisterInput, registerUser);
router.post("/login", validateLoginInput, loginUser);
router.get("/bookings", authenticateUser, listBookings); 

export default router;
