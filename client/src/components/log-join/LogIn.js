import logoIcon from "./images/logo.png";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { login } from "../../utils.js";

export function LogIn() {
  const handleClick = async () => {
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    if (email === "" || password === "") {
      alert("Please enter both fields");
      return;
    }
    const credential = { email: email, password: password };
    try {
      const resp = await login(credential);
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("userPicturePath");
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("firstName", resp.user.firstName);
      localStorage.setItem("lastName", resp.user.lastName);
      localStorage.setItem("userToken", resp.token);
      localStorage.setItem("userId", resp.user._id);
      localStorage.setItem("email", resp.user.email);
      localStorage.setItem("userPicturePath", resp.user.userPicturePath);
      alert("Successfully logged in");
      window.location.href = "http://localhost:3000/communities";
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  return (
    <div className="login-container-outer">
      <div className="innerContainer">
        <div className="logo-header-container">
          <div className="logo-container-login">
            <img src={logoIcon} style={{ width: "45px", height: "30.452px" }} />
            <h2>INTERNCONNECT</h2>
          </div>
          <div>
            <h1>Welcome back</h1>
          </div>
        </div>
        <div className="input-container">
          <p>Email</p>
          <input type="email" id="email_input" />
        </div>
        <div className="input-container">
          <p>Password</p>
          <input type="password" id="password_input" />
        </div>
        <button onClick={handleClick}>Log in</button>
        <div class="switch-to-sign-up">
          <div>Don't have an account? </div>
          <Link to="/join" className="link">
            <div className="sign-up">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
