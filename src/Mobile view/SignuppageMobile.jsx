import React from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { grey } from "@mui/material/colors";

function SignuppageMobile() {
    const color = grey[900];
  return (
    // desktop and tablet view ends
    // mobile view starts
    <Paper elevation={16} style={{ borderRadius: "20px" }}>
      <div className="signUpFormCardMobile">
        <div className="signUpCardTitleMobile">
          <b>Sign Up</b>
        </div>
        <form className="signUpFormSectionMobile">
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
          {/* new password text field starts*/}
          <FormControl
            fullWidth
            sx={{ m: 1, width: "245px" }}
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
            sx={{ m: 1, width: "245px" }}
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
            style={{ width: "150px", height: "40px", borderRadius: "10px" }}
          >
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
              Sign Up
            </Button>
          </Paper>
        </form>
      </div>
    </Paper>
    // mobile view ends
  );
}

export default SignuppageMobile;
