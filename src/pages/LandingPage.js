import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

function LandingPage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h2> Welcome to Serial Watcher!</h2>
        <p>This is the place where you can track your shows and episodes</p>
      </Grid>
      <Grid item xs={6}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <ColorButton variant="contained">Log me In</ColorButton>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <ColorButton variant="contained">Sign me Up</ColorButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
