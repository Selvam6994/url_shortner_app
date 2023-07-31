import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

function Mobileurlform() {
  const color = grey[900];
  return (
    <div className="mainPageMobile">
      <form className="urlFormTab">
        <FormControl fullWidth sx={{ m: 1, width: "280px" }} variant="standard">
          <InputLabel
            htmlFor="url"
            style={{
              fontFamily: "Edu SA Beginner",
              fontSize: "15px",
              fontWeight: "bolder",
              color: color,
            }}
          >
            Enter the URL
          </InputLabel>
          <Input type="url" id="url" color="grey" />
        </FormControl>

        <Button
          onClick={() => setTableContent(true)}
          variant="contained"
          style={{
            width: "150px",
            height: "30px",
            borderRadius: "10px",
            fontFamily: "Edu SA Beginner",
            fontSize: "15px",
            backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
          }}
        >
          Shorten URL
        </Button>
      </form>
    </div>
  );
}

export default Mobileurlform;
