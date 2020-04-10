import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {red, grey} from "@material-ui/core/colors";
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
              variant="contained"
              className={clsx(classes.margin, classes.textField)}
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
