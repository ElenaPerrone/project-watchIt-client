import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Profile() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <h1>Hello, </h1>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <h1>Shows in progress</h1>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <h1>My Shows to be</h1>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Profile;
