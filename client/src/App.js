import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Communities } from "./components/communities/Communities";
import { Resources } from "./components/resources/Resources";
import { ResumeBuilder } from "./components/resume-builder/Resume-Builder";
// import { Sidebar } from "./components/resume-builder/Resume-Builder";
import { Join } from "./components/log-join/Join";
import { LogIn } from "./components/log-join/Log-In";
import { Home } from "./components/Homes/Home";
import { Profile } from "./components/profile/Profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  /* TODO: fix the hard code later! */
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2NhNjU1OWRiMTEwOGU1YTU3YTkyMSIsImlhdCI6MTY5MTEzNzQzN30.445NHeX9-0qHYKQTRLEhVmOn2YIPtfJgGGGegnnF3zM";
  const userId = "64cca6559db1108e5a57a921";
  return (
    <Provider store={store}>
      {localStorage.setItem("loggedIn", true)}
      {localStorage.setItem("userToken", userToken)}
      {localStorage.setItem("userId", userId)}
      {localStorage.setItem("userPicturePath", "Profile.png")}
      <Router>
        <Routes>
          <Route path="/communities" element={<Communities />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/join" element={<Join />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
