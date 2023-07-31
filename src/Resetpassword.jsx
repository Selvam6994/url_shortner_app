import React from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";
import SignuppageMobile from "./Mobile view/SignuppageMobile";
import Resetpasswordmobile from "./Mobile view/Resetpasswordmobile";

function Resetpassword() {
  const pageWidth = useMediaQuery("(min-width:700px)");
  const color = grey[900];
  return (
    <div className="resetPasswordPage">
      {pageWidth == true ? (
        // desktop and tablet view starts
        <Paper elevation={16} style={{ borderRadius: "20px" }}>
          <div className="resetFormCard">
            <div className="resetCardTitle">
              <b>Reset Password</b>
            </div>
            <form className="resetFormSection">
              {/* email text field starts*/}
             
              <span>abcd@gmail.com</span> 
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
                <Input type="password" id="newPassword" />
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
                <Input type="password" id="confirmPassword" />
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
