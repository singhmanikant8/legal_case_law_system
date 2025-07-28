import { useState } from 'react'
import './loginPage.css'
import {Link,useNavigate} from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();//prevents default reloading of website on form submission

        try{
            //sending data to backend via axios
            const response = await axiosInstance.post("/login",{email,password});

            console.log("Response for login:",response.data);

            alert("Login successfully!");
            navigate("/homepage");
        }
        catch(err){
            console.log(err.response?.data || err.message);
            alert("Login failed!");
        }
    };

    return (
        <div className="flex flex-col">
            <form>
                <h2>Login</h2>
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
                    Login
                </button>
                <p>
                    Don&apos;t have an account?{' '}
                    <Link
                        to="/signup"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;