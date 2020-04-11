import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  Paper: {
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
  },
  textField: {
    width: "25ch",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(8),
      width: theme.spacing(60),
      height: theme.spacing(40),
    },
  },
}));

function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted", values);
    let user = {
      username: values.username,
      password: values.password,
    };
    handleRequest(user);
  }

  // handles the format of the axios req

  const handleRequest = (user) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/user/login",
      data: user,
    }).then((response) => {
      console.log("SignUp -> response", response);
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper elevation={3} className={classes.Paper}>
          <Grid item xs={12} className={classes.withoutLabel}>
            Log in and tell us what you watched
            <FormHelperText id="my-helper-text">
              I am not a Serial Watcher yet..
              <Link to="/signup">Sign me Up!</Link>
            </FormHelperText>
          </Grid>
          <Grid item xs={6} className={classes.withoutLabel}>
            <div className="form">
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-username">Username</InputLabel>
                <OutlinedInput
                  id="outlined-username"
                  type="text"
                  value={values.username}
                  onChange={handleChange("username")}
                  labelWidth={100}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  aria-describedby="my-helper-text"
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={100}
                />
                <FormHelperText id="my-helper-text">
                  Password must be at least 5 characters.
                </FormHelperText>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6}>
            <ColorButton
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              className={clsx(classes.margin, classes.textField)}
              size="large"
            >
              Take me in!
            </ColorButton>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
