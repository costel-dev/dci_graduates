const User = require("../../models/User");

const graduatesCtrl = {};

graduatesCtrl.loadGraduates = async (req, res) => {
  try {
    const findGraduates = await User.find().select("-password");
    res.json({ graduates: findGraduates });
  } catch (error) {
    res.status(404).json({ msg: "Graduates not found!" });
  }
};

module.exports = graduatesCtrl;
