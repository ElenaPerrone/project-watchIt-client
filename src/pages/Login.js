import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(10),
      width: theme.spacing(70),
      height: theme.spacing(50),
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
      <Grid container justify="center" spacing={4}>
        <Paper elevation={3}>
          <Grid>
            <Grid item>
              Log in to start saving shows!
            </Grid>
          </Grid>
          <Grid item xs={6}>
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
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={10}>
            <Button variant="contained">Take me in!</Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
