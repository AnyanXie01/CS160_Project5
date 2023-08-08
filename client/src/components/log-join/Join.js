import logoIcon from "./images/logo.png";
import AddProfile from "./images/addprofile.png";
import { Link } from "react-router-dom";

export function Join() {
  return (
    <div className="login-container-outer">
      <div className="innerContainer">
        <div className="logo-header-container">
          <div className="logo-container-login">
            <img src={logoIcon} style={{ width: "45px", height: "30.452px" }} />
            <h2>INTERNCONNECT</h2>
          </div>
          <div>
            <h1>Create your account</h1>
          </div>
        </div>
        <div className="name-container">
          <div className="input-container">
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className="input-container">
            <p>Last Name</p>
            <input type="text" />
          </div>
        </div>
        <div className="input-container">
          <p>Username</p>
          <input type="text" />
        </div>
        <div className="input-container">
          <p>Email</p>
          <input type="email" />
        </div>
        <div className="input-container">
          <p>Password</p>
          <input type="password" />
        </div>
        <div className="profile-picture">
          {/* <img className="icon" src={AddProfile}></img> */}
          <label htmlFor="profileImageInput">
          <img className="icon" src={AddProfile} alt="Add Profile" />
          </label>
          <input
            type="file"
            id="profileImageInput"
            style={{ display: "none" }}
          />
        </div>
        <button>Create account</button>
        <div class="switch-to-sign-up">
          <div>Already have an account? </div>
          <Link to="/login" className="link">
            <div className="sign-up">Log in</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
