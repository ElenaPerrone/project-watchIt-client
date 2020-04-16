import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
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
    color: theme.palette.getContrastText("#aa0909"),
    backgroundColor: "#aa0909",
    "&:hover": {
      backgroundColor: "red",
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
    fontWeight: "bold"

  },
  Paper: {
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    padding: "40px"
  },
  textField: {
    width: "25ch",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(8),
      width: theme.spacing(100),
      height: theme.spacing(30),
      
    },
    backgroundColor: "#212121",
    height: "92.5vh" 
  },
}));

function Login(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  function handleSubmit(event) {
    // event.preventDefault();
    console.log("submitted user");
    let user = {
      email: values.email,
      password: values.password,
    };
    props.onLogin(user)
  }

  // handles the format of the axios req

 
  //handles changes in the input values onChange
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // <--- end--->

  // <--- handles password visibility icon --->
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // <--- end--->

  return (
    <div className={classes.root} >
      <Grid container style={{paddingLeft: "30vw"}}>
        <Paper elevation={3} className={classes.Paper}>
          <Grid item xs={12} className={classes.withoutLabel}>
            LOG IN and tell us what you watched
            <FormHelperText id="my-helper-text">
              I am not a Serial Watcher yet..
              <Link to="/signup" style={{ textDecoration: "none" }}>Sign me Up!</Link>
            </FormHelperText>
          </Grid>
          <Grid item xs={6} className={classes.withoutLabel}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-email"
                type="text"
                value={values.email || ""}
                onChange={handleChange("email")}
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
                value={values.password || ""}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={100}
              />
              <FormHelperText id="my-helper-text">
                Password must be at least 5 characters.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Grid item xs={6}>
              <ColorButton
                onClick={e => handleSubmit(e)}
                type="submit"
                variant="contained"
                className={clsx(classes.margin, classes.textField)}
                size="large"
              >
                Take me in
              </ColorButton>
            </Grid>
          </Link>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
