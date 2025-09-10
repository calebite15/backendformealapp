const express = require("express");
const { Signup, LoginUser } = require("../controllers/Usercontroller");
const router = express.Router();

router.post("/api/Signup", Signup);
router.post(".api/Login", LoginUser);

module.exports = router;
