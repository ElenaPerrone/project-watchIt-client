import React from "react";

import Grid from "@material-ui/core/Grid";
import Skeleton from '@material-ui/lab/Skeleton';

const Skeletons = React.memo(function Skeletons() {
  return (
    <Grid container>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs={2}>
          <Skeleton
            animation="wave"
            variant="circle"
            width={80}
            height={80}
            style={{ backgroundColor: "#ECECEC" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Skeleton
            animation="wave"
            style={{ marginRight: "5vw", backgroundColor: "#ECECEC" }}
          />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs={2}>
          <Skeleton
            animation="wave"
            variant="circle"
            width={80}
            height={80}
            style={{ backgroundColor: "#ECECEC" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs={2}>
          <Skeleton
            animation="wave"
            variant="circle"
            width={80}
            height={80}
            style={{ backgroundColor: "#ECECEC" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs={2}>
          <Skeleton
            animation="wave"
            variant="circle"
            width={80}
            height={80}
            style={{ backgroundColor: "#ECECEC" }}
          />
        </Grid>
        <Grid item xs={10}>
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
          <Skeleton animation="wave" style={{ marginRight: "5vw" }} />
        </Grid>
      </Grid>
    </Grid>
  );
});

export default Skeletons;
