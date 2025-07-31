import React, {useState} from "react";
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import "./loginPage.css";

const Login = ()=>{
    const[formData,setData] = useState({
        email:"",password:""
    });

    const[error,setError] = useState("");
    const[success,setSuccess] = useState("");

    const handleChange = (e)=>{
        setData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const {email,password} = formData;
        if(!email || !password){
            setError("All feilds are mandatory!");
            return;
        }

        if(password.length < 6){
            setError("Enter correct password!");
            return;
        }

        //dummy success flow, will update after connecting frontend with backend
        setSuccess("Login Successfully!");
        setError("");
    };

    return (
        <div className="section">
            <div className="login-container">
                <h2 className="heading">Login to your Account</h2>

                <form onSubmit={handleSubmit} className="form-cls">
                    <input
                        type="email"
                        name = "email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name = "password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {error && <p className="err-msg">{error}</p>}
                    {success && <p className="succ-msg">{success}</p>}

                    <button type = "submit"className="login-btn">Login</button>

                    <p className="para">Don't have Account?</p><Link to="/signup">
                    <button className="btn-signup">Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;