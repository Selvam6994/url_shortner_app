import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import SignuppageMobile from "./Mobile view/SignuppageMobile";
import Resetpasswordmobile from "./Mobile view/Resetpasswordmobile";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import api from "./global";

function Resetpassword({ email }) {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  const [errorMsg, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const updatePassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      let reset = await fetch(`${api}/${email}/resetPassword`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (reset.status == 200) {
        navigate("/");
      } else {
        setErrorMessage("Check the password");
      }
    },
  });
  console.log(updatePassword.values);

  return (
    <div className="resetPasswordPage">
      {pageWidth == true ? (
        // desktop and tablet view starts
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          <div className="resetFormCard">
            <div className="resetCardTitle">
              <b>Reset Password</b>
            </div>
            <form
              className="resetFormSection"
              onSubmit={updatePassword.handleSubmit}
            >
              {/* email text field starts*/}

              <span>{email}</span>
              {/* email text field ends*/}
              {/* new password text field starts*/}
              <FormControl
                fullWidth
                sx={{ m: 1, width: "400px" }}
                variant="standard"
              >
                <InputLabel
                  htmlFor="newPassword"
                  style={{ fontFamily: "Edu SA Beginner", fontSize: "20px" }}
                >
                  New Password
                </InputLabel>
                <Input
                  type="password"
                  id="newPassword"
                  name="password"
                  onChange={updatePassword.handleChange}
                />
              </FormControl>
              {/* new password text field ends*/}
              {/* confirm password text field starts*/}
              <FormControl
                fullWidth
                sx={{ m: 1, width: "400px" }}
                variant="standard"
              >
                <InputLabel
                  htmlFor="confirmPassword"
                  style={{ fontFamily: "Edu SA Beginner", fontSize: "20px" }}
                >
                  Confirm Password
                </InputLabel>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={updatePassword.handleChange}
                />
              </FormControl>

              {/* confirm password text field ends*/}
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
                  Reset
                </Button>
              </Paper>
            </form>
          </div>
        </Paper>
      ) : (
        <Resetpasswordmobile />
      )}
    </div>
  );
}

export default Resetpassword;
