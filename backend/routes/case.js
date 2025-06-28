const express = require("express");
const router = express.Router();

//import controller
const {getCase} = require("../controllers/caseController");

//mapping routes
router.get("/getCases",getCase);

module.exports = router;