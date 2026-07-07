const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  loginUser,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Public Routes
router.post("/", createUser);
router.post("/login", loginUser);

// Protected Admin Route
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getUsers
  
);

module.exports = router;