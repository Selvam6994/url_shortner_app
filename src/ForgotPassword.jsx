import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import ForgotpasswordMobile from "./Mobile view/ForgotpasswordMobile";
import { useFormik } from "formik";
import Resetpassword from "./Resetpassword";
import api from "./global";

function ForgotPassword() {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  const [otpField, setOtpField] = useState(false);
  const [passwordFields, setPasswordFields] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const forgotPassword = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let signUpData = await fetch(`${api}/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (signUpData.status == 201) {
        document.getElementById("email").value = "";
        setOtpField(true);
        setErrorMessage("");
      } else if (signUpData.status == 400 || signUpData.status == 401) {
        setErrorMessage("Invalid credentials try any other email");
      }
    },
  });

  const otpVerification = useFormik({
    initialValues: {
      otp: "",
    },

    onSubmit: async (values) => {
      let otpData = await fetch(`${api}/forgotPassword/otpVerification `, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (otpData.status == 200) {
        setPasswordFields(true);
        document.getElementById("otp").value = "";
      } else if (otpData.status == 400) {
        setErrorMessage("OTP does not match");
        setPasswordFields(true);
      }
    },
  });

  return (
    <div className="forgotPasswordPage">
      {pageWidth == true ? (
        // desktop and tablet view *starts*
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          {passwordFields == false ? (
            <div className="forgotPasswordPageFormCard">
              <div className="forgotPasswordCardTitle">
                <b>Forgot Password</b>
              </div>
              {otpField == false ? (
                <form
                  className="forgotPasswordFormSection"
                  onSubmit={forgotPassword.handleSubmit}
                >
                  <FormControl
                    fullWidth
                    sx={{ m: 1, width: "400px" }}
                    variant="standard"
                  >
                    <InputLabel
                      htmlFor="email"
                      style={{
                        fontFamily: "Edu SA Beginner",
                        fontSize: "20px",
                      }}
                    >
                      Email
                    </InputLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      onChange={forgotPassword.handleChange}
                    />
                  </FormControl>

                  <Paper
                    elevation={8}
                    style={{
                      width: "200px",
                      height: "45px",
                      borderRadius: "10px",
                    }}
                  >
                    <Button
                      type="submit"
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
                </form>
              ) : (
                <div className="forgotPasswordFormSection">
                  <form
                    className="verifyOtpForm"
                    onSubmit={otpVerification.handleSubmit}
                  >
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
                      <Input
                        type="number"
                        id="otp"
                        name="otp"
                        onChange={otpVerification.handleChange}
                      />
                    </FormControl>
                    <Paper
                      elevation={8}
                      style={{
                        width: "200px",
                        height: "45px",
                        borderRadius: "10px",
                      }}
                    >
                      <Button
                        type="submit"
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
                    </Paper>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <Resetpassword email={forgotPassword.values.email} />
          )}
        </Paper>
      ) : (
        <ForgotpasswordMobile />
      )}
    </div>
  );
}

export default ForgotPassword;
