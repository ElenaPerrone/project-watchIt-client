import React, { useEffect, useState } from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./Profile.css";
import UserRequests from "../utils/UserRequests";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

function Profile(props) {
  const [userShows, setUserShows] = useState([]);
  console.log("Profile -> userShows", userShows);

  const myShows = async () => {
    let id = localStorage.getItem("userId");
    if (id) {
      let resp = await UserRequests.getUserSeries();
      console.log("handleRequest -> resp", resp);
    } else console.log("logout");
  };

  useEffect(() => {
    if (props.user.user) {
      setUserShows(props.user.user.series);
    } else myShows();
  }, []);

  return (
    <div>
      {/* {props.user._id ? ( */}
      <Grid container style={{ backgroundColor: "#212121", height: "92.5vh" }}>
        <Grid item xs={12}>
          <Paper elevation={3} className="user-item">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h1>
              Welcome, {props.user.firstName} {props.user.lastName}
            </h1>

            <p>this is your serial Watcher profile page</p>
            <Grid container item xs={12} style={{ color: "white" }} spacing={1}>
              <h1>Shows in progress</h1>
            </Grid>
            <Grid>
              <List>
                {userShows.length > 0 &&
                  userShows.map((serie) => (
                      <Grid container direction="row" key={serie._id}>
                        <Grid item xs={4}>
                          <ListItemAvatar>
                            <img
                              src={`${serie.image_thumbnail_path}`}
                              alt=""
                              width="180vw"
                              height="200vh"
                            />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs={4}>
                          <ListItemText>
                            <h2> {serie.name} </h2>
                            <p>Start Date: {serie.start_date}</p>
                            <p>Status: {serie.status}</p>
                            <p>Network: {serie.network}</p>
                          </ListItemText>
                        </Grid>
                        <Grid item xs={4}>
                          <ListItem>
                            {/* <Grid container direction="column"> */}
                            <Grid
                              item
                              xs={12}
                              style={{ marginTop: "10vh", width: "25vw" }}
                            >
                              {/* <Button
                                variant="outlined"
                                size="small"
                                // onClick={handleModal}
                              >
                                More
                              </Button> */}
                            </Grid>
                            {/* </Grid> */}
                          </ListItem>
                        </Grid>
                      </Grid>
                  ))}
              </List>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* ) : (
        <Unauthorized />
      )} */}
    </div>
  );
}

export default Profile;
