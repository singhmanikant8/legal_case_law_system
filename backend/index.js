const express = require("express");
const cors = require("cors");

const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//import routes for cases
const caseRoutes = require("./routes/case");

//mounting quote api routes
app.use("/api/v1",caseRoutes);

app.get("/",(req,res)=>{
    res.send(`<h2>This is backend for legal-case-law-system</h2>`)
});

//connect the database
const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});