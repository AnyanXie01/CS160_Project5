import logoIcon from "./images/logo.png";
import AddProfile from "./images/addprofile.png";
import { Link } from "react-router-dom";
import { register } from "../../utils.js";

export function Join() {
  const pictureArray = [
    "Profile.png",
    "proj4_1.png",
    "proj4_2.png",
    "proj4_3.png",
    "sc2.png",
    "place-holder.png",
    "climate_change.jpeg",
    "cyber.jpeg",
    "game.png",
    "ar.jpg"
  ];
  const fixPicturePath = (path) => {
    if (path === "") {
      return "";
    }
    const parts = path.split(/[\\\/]/);
    return parts[parts.length - 1];
  };
  const handleClick = async () => {
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    const firstName = document.getElementById("firstName_input").value;
    const lastName = document.getElementById("lastName_input").value;
    const picture = document.getElementById("profileImageInput").value;
    if (
      email === null ||
      password === null ||
      firstName === null ||
      lastName === null
    ) {
      alert("Please enter first four fields");
      return;
    }
    if (picture !== "" && !pictureArray.includes(fixPicturePath(picture))) {
      alert(
        "Upload picture feature is in progress. Please choose the picture from src/picture folder."
      );
      document.getElementById("profileImageInput").value = "";
      return;
    }
    const credential = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      userPicturePath: fixPicturePath(picture),
    };
    try {
      const resp = await register(credential);
      alert("Successfully created!");
      window.location.href = "http://localhost:3000/login";
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
            <h1>Create your account</h1>
          </div>
        </div>
        <div className="name-container">
          <div className="input-container">
            <p>First Name</p>
            <input type="text" id="firstName_input" />
          </div>
          <div className="input-container">
            <p>Last Name</p>
            <input type="text" id="lastName_input" />
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
        <button onClick={handleClick}>Create account</button>
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
