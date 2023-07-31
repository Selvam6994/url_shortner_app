import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import Mainpagetablet from "./Tablet view/Mainpagetablet";
import Mainpagemobile from "./Mobile view/Mainpagemobile";

function Mainpage() {
  const color = grey[900];
  const pageWidthDesktop = useMediaQuery("(min-width:700px)");
  const pageWidthTablet = useMediaQuery("(min-width:480px)");
  const shortenUrl = [
    {
      no: "01",
      destinationUrl: "www.mechnoderamindustry.com",
      shortenUrl: "samp.le/123 ",
      clicks: "5",
    },
  ];
  return (
    <>
      {pageWidthDesktop == true ? (
        <div className="mainPage">
          <form className="urlForm">
            <FormControl
              fullWidth
              sx={{ m: 1, width: "600px" }}
              variant="standard"
            >
              <InputLabel
                htmlFor="url"
                style={{
                  fontFamily: "Edu SA Beginner",
                  fontSize: "20px",
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
                width: "200px",
                height: "40px",
                borderRadius: "10px",
                fontFamily: "Edu SA Beginner",
                fontSize: "20px",
                backgroundImage: `linear-gradient(45deg, rgba(95,212,223), rgba(225,56,245))`,
              }}
            >
              Shorten URL
            </Button>
          </form>
          {/* <Paper className="historyTable" elevation={16}> */}
          <Paper className="historyTable" elevation={16}>
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

          {/* </Paper> */}
        </div>
      ) : (
        pageWidthTablet==true? <Mainpagetablet />
     :<Mainpagemobile/> )}
    </>
  );
}

export default Mainpage;
