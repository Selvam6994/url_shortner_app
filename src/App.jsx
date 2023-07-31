import "./App.css";
import ForgotPassword from "./ForgotPassword";
import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";
import Signuppage from "./Signuppage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="signUp" element={<Signuppage />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="forgotPassword/signUp" element={<Signuppage />} />
        <Route path="mainPage" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
