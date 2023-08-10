import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { Link, redirect, useParams } from "react-router-dom";
import Mainpagetablet from "./Tablet view/Mainpagetablet";
import { useFormik } from "formik";
import api from "./global";

function Mainpage() {
  const color = grey[900];
  const pageWidthDesktop = useMediaQuery("(min-width:700px)");
  const pageWidthTablet = useMediaQuery("(min-width:480px)");
  const [url, setUrlData] = useState([]);

  const longUrlForm = useFormik({
    initialValues: {
      longUrl: "",
      email: useParams(),
      clicks: "",
    },

    onSubmit: async (values) => {
      let urlData = await fetch(
        `${api}/urlShortner/${longUrlForm.values.email.email}`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (urlData.status == 200) {
        document.getElementById("url").value = "";
        urlHistory();
      }
    },
  });

  let email = useParams();
  const urlHistory = async () => {
    const getResponse = await fetch(`${api}/getHistory/${email.email}`, {
      method: "GET",
    });
    const urlData = await getResponse.json();
    setUrlData(urlData);
  };
  useEffect(() => {
    urlHistory();
  }, []);

  return (
    <>
      {pageWidthDesktop == true ? (
        <div className="mainPage">
          <form className="urlForm" onSubmit={longUrlForm.handleSubmit}>
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
              <Input
                type="url"
                id="url"
                color="grey"
                name="longUrl"
                onChange={longUrlForm.handleChange}
              />
            </FormControl>

            <Button
              // onClick={() => setTableContent(true)}
              type="submit"
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
          {/* <Paper className="historyCard" elevation={16}> */}

          {url.length == 0 ? (
            <p>No data</p>
          ) : (
            url.map((data) => (
              <Paper className="historyCard" elevation={16}>
                <div className="sNo">{url.indexOf(data) + 1}</div>
                <div className="urls">
                  <div>Long URL:{data.longUrl}</div>
                  <a
                    onClick={() => urlHistory()}
                    href={data.shortUrl}
                    target="_blank"
                  >
                    {data.shortUrl}
                  </a>
                </div>
                <div className="clicks">{data.click}</div>
              </Paper>
            ))
          )}

          {/* </Paper> */}
        </div>
      ) : pageWidthTablet == true ? (
        <Mainpagetablet data={url} />
      ) : (
        <Mainpagemobile data={url} />
      )}
    </>
  );
}

export default Mainpage;
