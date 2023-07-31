import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import ForgotpasswordMobile from "./Mobile view/ForgotpasswordMobile";

function ForgotPassword() {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  const [otpField, setOtpField] = useState(false);
  return (
    <div className="forgotPasswordPage">
      {pageWidth == true ? (
        // desktop and tablet view *starts*
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          <div className="forgotPasswordPageFormCard">
            <div className="forgotPasswordCardTitle">
              <b>Forgot Password</b>
            </div>
            <div className="forgotPasswordFormSection">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "400px" }}
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

              {otpField == false ? (
                <Paper
                  elevation={8}
                  style={{
                    width: "200px",
                    height: "45px",
                    borderRadius: "10px",
                  }}
                >
                  <Button
                    onClick={() => setOtpField(true)}
                    variant="contained"
                    style={{
                      width: "200px",
                      height: "45px",
                      borderRadius: "10px",
                      fontFamily: "Edu SA Beginner",
                      fontSize: "20px",
                      backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
                    }}
                  >
                    Send OTP
                  </Button>
                </Paper>
              ) : (
                <form className="verifyOtpForm">
                  <FormControl
                    fullWidth
                    sx={{ m: 1, width: "400px" }}
                    variant="standard"
                  >
                    <InputLabel
                      htmlFor="otp"
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      OTP
                    </InputLabel>
                    <Input type="email" id="otp" />
                  </FormControl>
                  <Paper
                    elevation={8}
                    style={{
                      width: "200px",
                      height: "45px",
                      borderRadius: "10px",
                    }}
                  >
                 <Link to="resetPassword">
                    <Button
                     
                      onClick={() => setOtpField(true)}
                      variant="contained"
                      style={{
                        width: "200px",
                        height: "45px",
                        borderRadius: "10px",
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                        backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
                      }}
                    >
                      Verify OTP
                    </Button>
                    </Link>
                  </Paper>
                </form>
              )}
            </div>

            <div className="forgotPasswordOtherOptions">
              <Link to="signUp">
                <Button
                  variant="text"
                  style={{
                    minWidth: "200px",
                    height: "45px",
                    borderRadius: "10px",
                    fontFamily: "Edu SA Beginner",
                    fontSize: "25px",
                    color: color,
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      ) : (
        <ForgotpasswordMobile />
      )}
    </div>
  );
}

export default ForgotPassword;
