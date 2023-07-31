import "./App.css";
import ForgotPassword from "./ForgotPassword";
import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";
import Mobileurlform from "./Mobile view/Mobileurlform";
import Resetpassword from "./Resetpassword";
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
        <Route path="forgotPassword/resetPassword" element={<Resetpassword />} />
        <Route path="mainPage" element={<Mainpage />} />
        <Route path="mainPage/urlForm" element={<Mobileurlform />} />
      </Routes>
    </div>
  );
}

export default App;
