import { Button, FormControl, Input, InputLabel, Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

function Mainpagetablet() {
  const color = grey[900];
  const shortenUrl = [
    {
      no: "01",
      destinationUrl: "www.mechnoderamindustry.com",
      shortenUrl: "samp.le/123 ",
      clicks: "5",
    },
  ];
  return (
    <div className="mainPageTab">
      <form className="urlFormTab">
        <FormControl fullWidth sx={{ m: 1, width: "400px" }} variant="standard">
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
      <Paper className="historyTableTab" elevation={16}>
        <table >
          <tr>
            <th>S.No</th>
            <th>Destination URL</th>
            <th>Shorten URL</th>
            <th>Clicks</th>
          </tr>
          {shortenUrl.map((data) => (
                <tr>
                  <td>{data.no}</td>
                  <td>{data.destinationUrl}</td>
                  <td>{data.shortenUrl}</td>
                  <td>{data.clicks}</td>
                </tr>
              ))}
        </table>
      </Paper>

      {/* </Paper> */}
    </div>
  );
}

export default Mainpagetablet;
