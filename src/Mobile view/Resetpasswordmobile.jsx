import React from "react";
import Paper from "@mui/material/Paper";
import { FormControl, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function Resetpasswordmobile() {
  return (
    // mobile view starts
    <Paper elevation={16} style={{ borderRadius: "20px" }}>
      <div className="resetFormCardMobile">
        <div className="resetCardTitleMobile">
          <b>Reset Password</b>
        </div>
        <form className="resetCardFormSectionMobile">
        <span>abcd@gmail.com</span> 
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
                fontSize: "14px",
                backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
              }}
            >
              Reset Password
            </Button>
          </Paper>
        </form>
      </div>
    </Paper>
    // mobile view ends
  )
}

export default Resetpasswordmobile