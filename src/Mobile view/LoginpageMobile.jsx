import React from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

function LoginpageMobile() {
  const color = grey[900];
  return (
    // desktop and tablet view *ends*
    // mobile view *starts*
    <Paper elevation={16} style={{ borderRadius: "20px" }}>
      <div className="logInFormCardMobile">
        <div className="cardTitleMobile">
          <b>Login</b>
        </div>
        <form className="formSectionMobile">
          <FormControl
            fullWidth
            sx={{ m: 1, width: "245px" }}
            variant="standard"
          >
            <InputLabel
              htmlFor="email"
              style={{ fontFamily: "Edu SA Beginner", fontSize: "20px" }}
            >
              Email
            </InputLabel>
            <Input type="email" id="email" />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1, width: "245px" }}
            variant="standard"
          >
            <InputLabel
              htmlFor="password"
              style={{ fontFamily: "Edu SA Beginner", fontSize: "20px" }}
            >
              Password
            </InputLabel>
            <Input type="password" id="password" />
          </FormControl>
          <Paper
            elevation={8}
            style={{ width: "150px", height: "40px", borderRadius: "10px" }}
          >
            <Link to="mainPage">
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "150px",
                  height: "40px",
                  borderRadius: "10px",
                  fontFamily: "Edu SA Beginner",
                  fontSize: "20px",
                  backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
                }}
              >
                Login
              </Button>
            </Link>
          </Paper>
          <div className="divideLineMobile"></div>
        </form>

        <div className="otherOptionsMobile">
          <Link to="signUp">
            <Button
              variant="text"
              style={{
                minWidth: "200px",
                height: "45px",
                borderRadius: "10px",
                fontFamily: "Edu SA Beginner",
                fontSize: "20px",
                color: color,
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="forgotPassword">
            <Button
              variant="text"
              style={{
                minWidth: "200px",
                height: "45px",
                borderRadius: "10px",
                fontFamily: "Edu SA Beginner",
                fontSize: "20px",
                color: color,
              }}
            >
              Forgot Password?
            </Button>
          </Link>
        </div>
      </div>
    </Paper>
    // mobile view *ends*
  );
}

export default LoginpageMobile;
