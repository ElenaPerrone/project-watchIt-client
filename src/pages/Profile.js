import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./Profile.css";
import Unauthorized from "../components/Unauthorized/Unauthorized";

function Profile(props) {
  console.log(props.user);

  return (
    <div>
      {/* {props.user._id ? ( */}
        <Grid container>
          <Paper elevation={3} className="user-item">
            <Grid item xs={12}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <h1>Hello, {props.user.firstName} </h1>
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
      {/* ) : (
        <Unauthorized />
      )} */}
    </div>
  );
}

export default Profile;
