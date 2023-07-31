import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

function ForgotpasswordMobile() {
    const color = grey[900];
    const [otpField, setOtpField] = useState(false);
  return (
    // desktop and tablet view *ends*
    // mobile view *starts*
    <Paper elevation={16} style={{ borderRadius: "20px" }}>
      <div className="forgotPasswordFormCardMobile">
        <div className="forgotPasswordCardTitleMobile">
          <b>Forgot Password</b>
        </div>
        <div className="forgotPasswordFormSectionMobile">
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

          {otpField == false ? (
            <Paper
              elevation={8}
              style={{
                width: "150px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <Button
                onClick={() => setOtpField(true)}
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
                Send OTP
              </Button>
            </Paper>
          ) : (
            <form className="verifyOtpFormMobile">
              <FormControl
                fullWidth
                sx={{ m: 1, width: "245px" }}
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
                  width: "150px",
                  height: "40px",
                  borderRadius: "10px",
                }}
              >
                <Button
                  type="submit"
                  onClick={() => setOtpField(true)}
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
                  Verify OTP
                </Button>
              </Paper>
            </form>
          )}
          <div className="forgotPasswordDivideLineMobile"></div>
        </div>

        <div className="forgotPasswordOtherOptionsMobile">
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
        </div>
      </div>
    </Paper>
    // mobile view *ends*
  );
}

export default ForgotpasswordMobile;
