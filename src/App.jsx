import "./App.css";
import ForgotPassword from "./ForgotPassword";
import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";
import Mobileurlform from "./Mobile view/Mobileurlform";
import Resetpassword from "./Resetpassword";
import Signuppage from "./Signuppage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="signUp" element={<Signuppage />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="forgotPassword/signUp" element={<Signuppage />} />
        {/* <Route
          path="forgotPassword/resetPassword"
          element={<Resetpassword />}
        /> */}

        <Route
          path="mainPage/:email"
          element={
            <ProtectedRoute>
              <Mainpage />
              </ProtectedRoute>
          }
        />

        <Route
          path="mainPage/urlForm"
          element={
           <ProtectedRoute>
              <Mobileurlform />
              </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authrisationToken");
  console.log(token);
  return token ? (
    <section>{children}</section>
  ) : (
    <Navigate replace to="/"></Navigate>
  );
}

export default App;
