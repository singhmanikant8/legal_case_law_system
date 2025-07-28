import { useState } from 'react'
import './signUp.css'
import {Link,useNavigate} from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';

function Signup(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e)=>{
        e.preventDefault();//prevents default reloading of website on form submission

        try{
            //sending data to backend via axios
            const response = await axiosInstance.post("/signup",{email,password});

            console.log("Response for signup:",response.data);

            alert("Signup successfully! You can now Login...");
            navigate("login");
        }
        catch(err){
            console.log(err.response?.data || err.message);
            alert("Signup failed!");
        }
    };

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSignup}>
                <h2>Sign up</h2>
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder='Enter your Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <button
                    type='submit'
                >
                    Enter
                </button>
                <p>
                    Already have an account?{' '}
                    <Link
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;