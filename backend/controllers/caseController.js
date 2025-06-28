const Case = require("../models/case");

exports.getCase = async (req,res)=>{
    const queryVal = req.query.query;
    console.log("Received query:", queryVal);
    const cases = await Case.find({title : { $regex: queryVal, $options: "i" }});
    console.log("Matching cases found:", cases.length);
    return res.json(cases);
};