import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Toolbar,
  IconButton,
  AppBar,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: red[700],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <VideoLibraryIcon />
          </IconButton>
          <FormGroup edge='end'>
                  
            <FormControlLabel
              control={
                <Switch
                  className={classes.toggleButton}
                  checked={auth}
                  color="default"
                  size="small"
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? "Logout" : "Login"}
            />
          </FormGroup>{" "}
        </Toolbar>
      </AppBar>
    </div>
  );
}
