import React, { useState } from 'react';
import "./style.css";
import AuthenticationService from '../Service/Auth.service';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userLogin, setUserLogin] = useState({Username:"",Password:""});

    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate();

    const changeHandler = (e) =>{
        setUserLogin({...userLogin,[e.target.name]:e.target.value});
    }

    const clickHandler = async(e) =>{
        if(await AuthenticationService.login(userLogin)){
            navigate("/dashboard")
        }
        else{
            setErrorMsg(true);
            
        }
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {errorMsg && <span style={{color:"red"}}>Username and Password are not valid.</span>}
                <div className="form">
                    <div>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" name="Username" onChange={(e) => changeHandler(e)} required />

                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="Password" onChange={(e) => changeHandler(e)} required />

                        </div>
                        <div className="button-container">
                            <input type="submit" onClick={(e) => clickHandler(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login