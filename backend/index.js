const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(`<h2>This is backend for legal-case-law-system</h2>`)
});

app.listen(4000,()=>{
    console.log("Server is running......");
});