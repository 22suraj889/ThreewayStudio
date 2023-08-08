const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const key = process.env.JWT;
function generateToken(email, id) {
  const token = jwt.sign({ email, id }, key, { expiresIn: "30m" });
  return token;
}

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      console.log("Password is incorrect");
      return res.status(404).json({ message: "Password is incorrect" });
    }

    const token = generateToken(email, user._id);
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.log(error);
  }
};

// register
const register = async (req, res) => {
  const { name, email, password, type, address } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("User already exists");
      return res.status(404).json({ message: "password not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      type: type.toLowerCase(),
      address,
    });

    const token = generateToken(email, newUser._id);
    res.status(200).json({ result: newUser, token });
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, register, getUsers };
