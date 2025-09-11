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

    // Create new user (password will be hashed in schema pre-save hook)
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
      user: {
        id: savedUser._id,
        firstname: savedUser.firstname,
        lastName: savedUser.lastName,
        Email: savedUser.Email,
        phonenumber: savedUser.phonenumber,
        favouritemeal: savedUser.favouritemeal,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

// LOGIN USER (with bcrypt)
const LoginUser = async (req, res) => {
  const { Email, password } = req.body;

  try {
    // Check if user exists
    const user = await Usermodel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstname: user.firstname,
        lastName: user.lastName,
        Email: user.Email,
        phonenumber: user.phonenumber,
        favouritemeal: user.favouritemeal,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = { Signup, LoginUser };
