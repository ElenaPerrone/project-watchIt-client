import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
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
    marginTop: theme.spacing(0),
  },
  textField: {
    width: "25ch",
    height: "7ch",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(8),
      width: theme.spacing(60),
      height: theme.spacing(40),
    },
  },
}));

function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    showPassword: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted", values);
    let user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      password: values.password,
      // favourites: {
      // items: [{ showId: {type: Schema.Types.ObjectId}, required: true}]
      // }
    };
    handleRequest(user);
  }
  // handles the format of the axios req
  const handleRequest = (user) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/user/add",
      data: user,
    }).then((response) => {
      console.log("SignUp -> response", response);
    });
  };
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
    <div className={classes.root}>
      <Grid container>
        <Paper elevation={3}>
          <Grid item xs={12} className={classes.withoutLabel}>
            Create your SerialWatcher account
            <FormHelperText id="my-helper-text">
              I am already a Serial Watcher..
              <Link to="/login">Log me In!</Link>
            </FormHelperText>
          </Grid>
          <Grid item xs={6} className={classes.withoutLabel}>
            <div className="form">
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-firstname">First name</InputLabel>
                <OutlinedInput
                  id="outlined-firstname"
                  type="text"
                  value={values.firstName || ""}
                  onChange={handleChange("firstName")}
                  labelWidth={100}
                />
                <FormHelperText id="my-helper-text">
                  *Required field{" "}
                </FormHelperText>
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-lastname">Last name</InputLabel>
                <OutlinedInput
                  id="outlined-lastname"
                  type="text"
                  value={values.lastName || ""}
                  onChange={handleChange("lastName")}
                  labelWidth={100}
                />
                <FormHelperText id="my-helper-text">
                  *Required field{" "}
                </FormHelperText>
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-email">E-mail</InputLabel>
                <OutlinedInput
                  id="outlined-email"
                  type="email"
                  value={values.email || ""}
                  onChange={handleChange("email")}
                  labelWidth={100}
                />
                <FormHelperText id="my-helper-text">
                  *Required field{" "}
                </FormHelperText>
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-username">Watchername</InputLabel>
                <OutlinedInput
                  id="outlined-username"
                  type="text"
                  value={values.username || ""}
                  onChange={handleChange("username")}
                  labelWidth={100}
                />
                <FormHelperText id="my-helper-text">
                  *Required field{" "}
                </FormHelperText>
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
            <Link to="/profile">
              <ColorButton
                // component={Link}
                // to="/profile"
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                className={clsx(classes.margin, classes.textField)}
                size="large"
              >
                Done
              </ColorButton>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
