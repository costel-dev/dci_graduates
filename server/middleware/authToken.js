const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const token = await req.header("x-auth-token");
  // Check for token
  if (!token) {
    return res.status(401).json({ msg: "Access denied! Please login!!!" });
  }
  try {
    const auth = jwt.verify(token, process.env.TOKEN_SECRET);
    // add user from payload
    req.user = auth;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Invalid Token!" });
  }
};
