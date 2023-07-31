import { Button, FormControl, Input, InputLabel, Paper } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function Mainpagemobile() {
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
    <div className="mainPageMobile">
      {/* <Paper className="historyTable" elevation={16}> */}
      <Paper className="historyTableMobile" elevation={16}>
        <table>
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
      <div className="addButton">
        <Link to="urlForm">
          <IconButton size="large">
            <AddCircleOutlineIcon sx={{ color: pink[50] }} fontSize="inherit" />
          </IconButton>
        </Link>
      </div>
      {/* </Paper> */}
    </div>
  );
}

export default Mainpagemobile;
