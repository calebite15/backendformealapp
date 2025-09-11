const express = require("express");
const { Signup, LoginUser } = require("../controllers/Usercontroller");
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", LoginUser);

module.exports = router;
