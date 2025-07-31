import React, {useState} from "react";
import "./signUp.css";

function Signup(){
    const [formData,updateData] = useState(
        {name:"",email:"",password:"",confirmPassword:""}
    );//taking the input from signup form

    const [error,setError] = useState("");//for checking any error in inputted data
    const [success,setSuccess] = useState("");//if no error found

    const handleChange = (e) =>{
        updateData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };
    //handle the form submission
    const handleSubmit = (e)=>{
        e.preventDefault();
        const{name,email,password,confirmPassword} = formData;

        if(!name || !email || !password || !confirmPassword){
            setError("Some fields are mmissing!");
            return;
        }

        if(password != confirmPassword){
            setError("Passwords are not matching!");
            return;
        }
        if(password.length < 6){
            setError("Password should be atleast 6 characters!");
            return;
        }

        setError("");
        setSuccess("User signed up successfully!");
    };

    return (
        <div className="section">
            <div className="signup-container">
                <h2 className="heading">Create Account</h2>
                <p className="para">(Password must be atleast 6 characters!)</p>

                <form onSubmit={handleSubmit} className="form-cls">
                    <input
                        type="text"
                        name = "name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}
                    />
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
                    <input
                        type="password"
                        name = "confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    {error && <p className="err-msg">{error}</p>}
                    {success && <p className="succ-msg">{success}</p>}

                    <button type = "submit"className="signup-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;