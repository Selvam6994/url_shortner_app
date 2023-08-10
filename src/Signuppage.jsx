import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import SignuppageMobile from "./Mobile view/SignuppageMobile";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import api from "./global";

function Signuppage() {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [otpInput, setOtpInput] = useState(false);
  const [passwordFields, setPasswordFields] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let signUpData = await fetch(`${api}/signUp`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (signUpData.status == 201) {
        setOtpInput(true);
        setErrorMessage("");
      } else if (signUpData.status == 400 || signUpData.status == 401) {
        setErrorMessage("Invalid credentials try any other email");
      }
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      otp: "",
    },

    onSubmit: async (values) => {
      let otpData = await fetch(`${api}/signUp/otpVerification`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (otpData.status == 200) {
        setPasswordFields(true);
        setErrorMessage("");
        document.getElementById("otp").value = "";
      } else if (otpData.status == 400) {
        setErrorMessage("OTP does not match");
      }
    },
  });

  const formikSignUp = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values) => {
      let userData = await fetch(`${api}/signUp/${formik.values.email}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (userData.status == 200) {
        navigate("/");
        setErrorMessage("");
      } else if (userData.status == 400) {
        setErrorMessage("Check the password");
      }
    },
  });

  return (
    <div className="signUpPage">
      {pageWidth == true ? (
        // desktop and tablet view starts
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          <div className="signUpFormCard">
            <div className="signUpCardTitle">
              <b>Sign Up</b>
            </div>
            {otpInput == false ? (
              <form
                className="signUpFormSection"
                onSubmit={formik.handleSubmit}
              >
                {/* email text field starts*/}
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
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                {errorMessage != "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  ""
                )}

                {formik.touched.email ? (
                  formik.values.email == "" ? (
                    <span style={{ color: "red" }}>Email is required</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {otpInput == false ? (
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
                      verify email
                    </Button>
                  </Paper>
                ) : (
                  ""
                )}
              </form>
            ) : passwordFields == false ? (
              <form
                className="signUpFormSection"
                onSubmit={formikOtp.handleSubmit}
              >
                {/* <FormControl
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
                  <Input
                    disabled
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                  />
                </FormControl> */}
                <span style={{ fontSize: "35px" }}>{formik.values.email}</span>
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
                    onChange={formikOtp.handleChange}
                  />
                </FormControl>
                {errorMessage != "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  ""
                )}
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
                    verify OTP
                  </Button>
                </Paper>
              </form>
            ) : (
              <form
                onSubmit={formikSignUp.handleSubmit}
                className="signUpFormSection"
              >
                <span style={{ fontSize: "30px" }}>{formik.values.email}</span>

                <FormControl
                  fullWidth
                  sx={{ m: 1, width: "400px" }}
                  variant="standard"
                >
                  <InputLabel
                    htmlFor="password"
                    style={{
                      fontFamily: "Edu SA Beginner",
                      fontSize: "20px",
                    }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formikSignUp.handleChange}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  sx={{ m: 1, width: "400px" }}
                  variant="standard"
                >
                  <InputLabel
                    htmlFor="confirmPassword"
                    style={{
                      fontFamily: "Edu SA Beginner",
                      fontSize: "20px",
                    }}
                  >
                    Confirm Password
                  </InputLabel>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formikSignUp.handleChange}
                  />
                </FormControl>
                {errorMessage != "" ? (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                ) : (
                  ""
                )}
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
                    Sign Up
                  </Button>
                </Paper>
              </form>
            )}
          </div>
        </Paper>
      ) : (
        <SignuppageMobile />
      )}
    </div>
  );
}

export default Signuppage;
