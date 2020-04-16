import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
    marginTop: theme.spacing(0),
    fontWeight: "bold"
  },
  textField: {
    width: "25ch",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(60),
      height: theme.spacing(40),
    },
    backgroundColor: "#212121",
    height: "92.5vh" //hacky way to style 

  },
}));

function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  function handleSubmit(event) {
    if (
      values.firstName.length > 0 &&
      values.lastName.length > 0 &&
      values.email.length > 0 &&
      values.password.length > 0
    ) {
      // event.preventDefault();
      console.log("login submits user");
      let user = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        series: []
      };
      // handleRequest(user);
      props.onSignup(user);
    } else {
      alert('Error: No empty fields allowed!')
    }
  }

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
              <Link to="/login" style={{ textDecoration: "none" }}>
                Log me In!
              </Link>
            </FormHelperText>
          </Grid>
          <Grid item xs={6} className={classes.withoutLabel}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-firstname" required={true}>
                First name
              </InputLabel>
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
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                className={clsx(classes.margin, classes.textField)}
                size="large"
              >
                Done
              </ColorButton>
            </Grid>
          </Link>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
