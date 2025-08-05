import React from "react";
import { Link } from "react-router-dom";
import "./description.css";

function Description(){
    return(
        <div className="container">
            <Link to={"/navbar"}></Link>
        </div>
    );
};

export default Description;