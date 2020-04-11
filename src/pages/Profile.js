import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./Profile.css";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />

      <Grid container>
        <Paper elevation={3} className="user-item">
          <Grid item xs={12}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h1>Hello, username </h1>
          </Grid>
        </Paper>
        <Paper elevation={3} className="user-item1">
          <Grid item xs={12}>
            <h1>Shows in progress</h1>
          </Grid>
        </Paper>
        <Paper elevation={3} className="user-item1">
          <Grid item xs={12}>
            <h1>My Shows to be</h1>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Profile;
