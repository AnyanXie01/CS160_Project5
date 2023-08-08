import logoIcon from "./images/logo.png";
import "./LogIn.css";
import { Link } from "react-router-dom";
export function LogIn(){
    return (<div className="login-container-outer">
                <div className="innerContainer">
                    <div className="logo-header-container">
                        <div className="logo-container-login">
                            <img src={logoIcon} style={{width: '45px', height: '30.452px'}}/>
                            <h2>INTERNCONNECT</h2>
                        </div>
                        <div><h1>Welcome back</h1></div>
                    </div>
                    <div className="username-container">
                        <div>Username</div>
                        <input type="text"/>
                    </div>
                    <div className="email-input-container">
                        <div>Email</div>
                        <input type="email"/>
                    </div>
                    <div className="password-input-container">
                    <div>Password</div>
                        <input type="password"/>
                    </div>
                    <button>Log in</button>
                    <div class="switch-to-sign-up">
                        <div>Don't have an account? </div>
                        <Link to="/join" className="link"><div className="sign-up">Sign up</div></Link>
                    </div>
                </div>
        </div>);
}