import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginpageMobile from "./Mobile view/LoginpageMobile";
import { useFormik } from "formik";
import * as yup from "yup";
import api from "./global";

function Loginpage() {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      let logInData = await fetch(`${api}/logIn`, {
        method: "POST",
        headers: { "Content-type": "application/json" ,
        "x-auth-managerToken": localStorage.getItem("authrisationToken"),},
        body: JSON.stringify(values),
      });
      if (logInData.status == 200) {
        let token = await logInData.json();
        localStorage.setItem("authrisationToken", token.token);
        navigate(`/mainPage/${formik.values.email}`);
        console.log(token);
      } else {
        setErrorMessage("Invalid Credentials");
      }
    },
  });
  if ((<Navigate replace to="/"></Navigate>)) {
    localStorage.clear();
  }
  return (
    <div className="loginPage">
      {pageWidth == true ? (
        // desktop and tablet view *starts*
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          <div className="logInFormCard">
            <div className="cardTitle">
              <b>Login</b>
            </div>
            <form className="formSection" onSubmit={formik.handleSubmit}>
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
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormControl>

              {formik.values.email == "" ? (
                formik.touched.email ? (
                  <span style={{ color: "red" }}>Email is required</span>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <FormControl
                fullWidth
                sx={{ m: 1, width: "400px" }}
                variant="standard"
              >
                <InputLabel
                  htmlFor="password"
                  style={{ fontFamily: "Edu SA Beginner", fontSize: "20px" }}
                >
                  Password
                </InputLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormControl>
              {formik.values.password == "" ? (
                formik.touched.password ? (
                  <span style={{ color: "red" }}>Password is required</span>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <Paper
                elevation={8}
                style={{ width: "200px", height: "45px", borderRadius: "10px" }}
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
                  Login
                </Button>
              </Paper>
              <div style={{ color: "red", fontSize: "35px" }}>
                {errorMessage}
              </div>
              <div className="divideLine"></div>
            </form>

            <div className="otherOptions">
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
              <Link to="forgotPassword">
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
                  Forgot Password?
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      ) : (
        <LoginpageMobile />
      )}
    </div>
  );
}

export default Loginpage;
