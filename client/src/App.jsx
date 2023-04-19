import React, { useState } from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import Chat from "./components/Chat";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    border: "2px solid grey",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="">
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h4" align="center">
            Video Chat App
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      <Chat />
    </div>
  );
};

export default App;
