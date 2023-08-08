import logoIcon from "./images/logo.png";
import "./LogIn.css";
export function LogIn(){
    return (<div className="login-container-outer">
                <div className="innerContainer">
                    <div className="logo-container">
                        <img src={logoIcon} style={{width: '45px', height: '30.452px'}}/>
                        <h2>INTERNCONNECT</h2>
                    </div>
                    <div className="header-container">
                        <h1>Welcome back</h1>
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
                    <div>
                        <div>Don't have an account? </div>
                        <div>Sign up</div>
                    </div>
                </div>
        </div>);
}