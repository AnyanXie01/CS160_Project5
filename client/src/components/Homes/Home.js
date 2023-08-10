import { Link } from "react-router-dom";
import LogoImage from "./images/Logo.png";
import teachImage from "./images/teach.png";
import "./Home.css"
export function Home(){
    return (<div className="home-page">
                <div className="container">
                    <div className="left">
                        <div className="logo-container">
                            <img src={LogoImage} alt="logo" className="logo-image" style={{width:"120px", height:"81px"}}/>
                            <h2>InternConnect</h2>
                        </div>
                        <h1>Connect and land your CS internship</h1>
                        <p>InternConnect connects by uniting students, mentors, and professionals in one community. We simplify the path to your ideal internship. Join us now and get your internship.</p>
                        <div className="button-container">
                            <Link to="/join" className="link"><button className="join-button" aria-label="join button">Join</button></Link>
                            <Link to="/login"  className="link"><button  className="log-in-button" aria-label="login button">Log In</button></Link>
                        </div>
                    </div>
                    <img src={teachImage} alt="a picture of discussing" className="teaching-image" style={{ width: '500px', height: '500px'}}/>
                </div>
            </div>)
}