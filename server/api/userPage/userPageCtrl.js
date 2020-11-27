const User = require("../../models/User");

const userCtrl = {};

userCtrl.handleUpdateProfile = async (req, res) => {
  //destructuring frontend inputs
  const {
    first_name,
    last_name,
    image_name,
    address,
    city,
    country,
    zip,
    about_me,
    quote,
    field_interest,
    seeking,
    personal_website,
    github,
    linkedin,
    xing,
  } = await req.body;
  // caching path to our image into a variable

  const image = req.file.path;

  /*  console.log("image", image); */
  // converting skills string into and array
  const tech_skills = req.body.tech_skills.split(",");
  console.log(tech_skills);

  const { id } = await req.params;
  try {
    const updatedProfile = await User.findByIdAndUpdate(id, {
      $set: {
        first_name,
        last_name,
        image,
        image_name,
        address,
        city,
        country,
        zip,
        about_me,
        quote,
        field_interest,
        tech_skills,
        seeking,
        personal_website,
        github,
        linkedin,
        xing,
      },
    });
    res.json({
      msg: "Profile Succesfully Updated!",
      user: updatedProfile,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = userCtrl;
