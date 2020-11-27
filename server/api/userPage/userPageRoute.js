const express = require("express");
const router = express.Router();
const authToken = require("../../middleware/authToken");
const uploadMulter = require("../../middleware/upload");

const userAuth = require("./userAuth");
const userCtrl = require("./userPageCtrl");

// @route GET api/graduate/profile
// @desc get user data for the frontend
// @access PRIVATE
router.get("/graduate/profile/:id", authToken, userAuth.loadUser);

// @route POST api/user/register
// @desc Register user
// @access PUBLIC
router.post("/auth/register", userAuth.handleRegister);

// @route POST api/user/login
// @desc Login user
// @access PUBLIC
router.post("/auth/login", userAuth.handleLogin);

// @route POST api/graduate/update-profile
// @desc update user data for the frontend
// @access PRIVATE
router.put(
  "/graduate/update-profile/:id",
  uploadMulter,
  userCtrl.handleUpdateProfile
);

module.exports = router;
