const express = require("express");
const router = express.Router();

const graduatesCtrl = require("./graduatesCtrl");

router.get("/", graduatesCtrl.loadGraduates);

module.exports = router;
