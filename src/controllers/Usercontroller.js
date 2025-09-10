const Usermodel = require("../models/Usermodel");
const bcrypt = require("bcryptjs");
// const Signup = async (req, res) => {
//   const { firstname, lastName, phonenumber, Email, password, favouritemeal } =
//     req.body;
//   try {
//     ///check is task exists in data base
//     const UserExist = await Usermodel.findOne({ Email });
//     if (UserExist) {
//       res.status(405).json({
//         message: "USER already exists",
//       });
//     }
//     ///to create new task
//     const createNewUser = await Usermodel.create({
//       firstname,
//       lastName,
//       phonenumber,
//       Email,
//       password,
//       favouritemeal,
//     });
//     const taskResult = await createNewUser.save();
//     res.status(200).json({
//       firstname: taskResult.firstname,
//       lastName: taskResult.lastName,
//       Email: taskResult.Email,
//       phonenumber: taskResult.phonenumber,
//       favouritemeal: taskResult.favouritemeal,
//         password: taskResult.password,
//     });
//   } catch (error) {
//     res.status(404).json({ message: "successful" });
//   }
// };
const Signup = async (req, res) => {
  const { firstname, lastName, phonenumber, Email, password, favouritemeal } = req.body;

  try {
    // Check if user exists
    const UserExist = await Usermodel.findOne({ Email });
    if (UserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const createNewUser = await Usermodel.create({
      firstname,
      lastName,
      phonenumber,
      Email,
      password,
      favouritemeal,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: createNewUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error: error.message });
  }
};

const LoginUser = async (req, res) => {
  const { Email, password } = req.body;
  try {
    // === To check if task exist in the DB under task collection ===
    const userExist = await Usermodel.findOne({ Email });
    if (!userExist) {
      return res.status(405).json({
        message: "user not found",
      });
    }

    const validPassword = await bcrypt.compare(password, userExist.password);
    if (!validPassword) {
      return res.status(405).json({
        message: "invalid password",
      });
    }

    // === To return data if successful ===
    // res.status(200).json(taskResult)

    // ** Alternative to the above **
    res.status(200).json({
      message: "Log in successful",
      _id: userExist._id,
      firstname: userExist.firstname,
      lastName: userExist.lastName,
      phonenumber: userExist.phonenumber,
      Email: userExist.Email,
      favouritemeal: userExist.favouritemeal,
      Isadmin: userExist.Isadmin,
      role: userExist.role,
    });
  } catch (error) {
    res.status(404).json({
      message: "login error",
    });
  }
};
module.exports = { Signup, LoginUser };
