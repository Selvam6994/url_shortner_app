import { Button, FormControl, Input, InputLabel, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

function Mainpagetablet({ data }) {
  const color = grey[900];

  return (
    <div className="mainPageTab">
      <form className="urlFormTab">
        <FormControl fullWidth sx={{ m: 1, width: "320px" }} variant="standard">
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
      {/* <Paper className="historyTable" elevation={16}> */}
     
        {data.length == 0 ? (
          <p>No data</p>
        ) : (
          data.map((ele) => (
            <Paper className="historyCardTab" elevation={16}>
              <div className="sNoTab">{data.indexOf(ele) + 1}</div>
              <div className="urlsTab">
                <div>Long URL:{ele.longUrl}</div>
                <a
                  onClick={() => urlHistory()}
                  href={ele.shortUrl}
                  target="_blank"
                >
                  {ele.shortUrl}
                </a>
              </div>
              <div className="clicksTab">{ele.click}</div>
            </Paper>
          ))
        )}


      {/* </Paper> */}
    </div>
  );
}

export default Mainpagetablet;
