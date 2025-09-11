const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Isadmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    favouritemeal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // <-- corrected (was timestamp)
  }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
