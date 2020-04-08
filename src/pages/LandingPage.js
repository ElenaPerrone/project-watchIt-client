import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={6}>
          <Link to="/login">
            <Button variant="contained">Log In</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Sign Up</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
