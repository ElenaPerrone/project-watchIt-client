import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./Profile.css";
import Unauthorized from "../components/Unauthorized/Unauthorized";

function Profile(props) {
  console.log(props.user);

const myShows = async () => {
  
}

  return (
    <div>
      {/* {props.user._id ? ( */}
      <Grid container style={{ backgroundColor: "#212121", height: "92.5vh" }}>
        <Grid item xs={12}>
          <Paper elevation={3} className="user-item">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h1>
              Welcome, {props.user.firstName} {props.user.lastName}
            </h1>

            <p>this is your serial Watcher profile page</p>
            <Grid item xs={12} style={{ color: "white" }} spacing={1}>
              <h1>Shows in progress</h1>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* ) : (
        <Unauthorized />
      )} */}
    </div>
  );
}

export default Profile;
