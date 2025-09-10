const Usermodel = require("../models/Usermodel");
const bcrypt = require("bcryptjs");
// SIGNUP USER
const Signup = async (req, res) => {
  const { firstname, lastName, phonenumber, Email, password, favouritemeal } = req.body;

  try {
    // Check if user already exists
    const UserExist = await Usermodel.findOne({ Email });
    if (UserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const createNewUser = new Usermodel({
      firstname,
      lastName,
      phonenumber,
      Email,
      password,
      favouritemeal,
    });

    const savedUser = await createNewUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

// LOGIN USER (SIMPLE)
const  LoginUser = async (req, res) => {
  const { Email, password } = req.body;

  try {
    // Check if user exists
    const user = await Usermodel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};
module.exports = { Signup, LoginUser };
