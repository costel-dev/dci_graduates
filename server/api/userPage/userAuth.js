const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const userAuthCtrl = {};

// ### REGISTER ###
userAuthCtrl.handleRegister = async (req, res) => {
  // destructuring the values from register inputs
  const {
    first_name,
    last_name,
    class_name,
    graduate_id,
    email,
    password,
  } = await req.body;
  try {
    // validate the user before saving into db
    /*  const valid = await validSchema.userSchema.validateAsync(req.body);
    if (valid) */
    // check the fields before sending data to DB
    if (
      !first_name ||
      !last_name ||
      !class_name ||
      !graduate_id ||
      !email ||
      !password
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    // check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists!" });
    }
    // create newUser
    const newUser = new User({
      first_name,
      last_name,
      class_name,
      graduate_id,
      email,
      password,
    });
    //hash the password before sending to db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // set hashed password to user
    newUser.password = hashedPassword;
    // save user
    const savedUser = await newUser.save();
    // create and assign a token
    const token = jwt.sign({ id: savedUser.id }, process.env.TOKEN_SECRET, {
      expiresIn: 36000,
    });
    res.json({
      msg: "Account succesfully created!",
      token,
      user: {
        id: savedUser.id,
        first_name: savedUser.first_name,
        last_name: savedUser.last_name,
      },
    });
  } catch (error) {
    res.json({ msg: "Register failed!" });
  }
};

// ### LOGIN ###
userAuthCtrl.handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    // checking if the user email exists in db
    const findUser = await User.findOne({ email });
    if (!findUser)
      return res.status(400).json({ msg: "Email or password incorect!" });

    // chacking if password match
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Email or password incorect!" });

    // create and assign a token
    const token = jwt.sign({ id: findUser.id }, process.env.TOKEN_SECRET, {
      expiresIn: 360000,
    });
    res.json({
      msg: "Succesfully logged!",
      token,
      user: {
        id: findUser.id,
        first_name: findUser.first_name,
        last_name: findUser.last_name,
        email: findUser.email,
        class_name: findUser.class_name,
        image: findUser.image,
        image_name: findUser.image_name,
        address: findUser.address,
        city: findUser.city,
        zip: findUser.zip,
        country: findUser.country,
        about_me: findUser.about_me,
        quote: findUser.quote,
        field_interest: findUser.field_interest,
        tech_skills: findUser.tech_skills,
        seeking: findUser.seeking,
        personal_website: findUser.personal_website,
        github: findUser.github,
        linkedin: findUser.linkedin,
        xing: findUser.xing,
      },
    });
  } catch (error) {
    res.status(400).json({ msg: "Login failed!" });
  }
};

// @route GET api/auth/user
// @desc get user data for the frontend
// @access PRIVATE ROUTE
userAuthCtrl.loadUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.user.id).select("-password");
    res.json({ user: findUser });
  } catch (error) {
    res.status(404).json({ msg: "User not found!" });
  }
};

module.exports = userAuthCtrl;
