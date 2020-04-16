import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import UserRequests from './UserRequests'



function SeriesDetails(props) {
  console.log("AlertDialog -> props", props.data);
  const handleClose = () => {
    props.handleClose();
    console.log(props.data)
  };


  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.data.tvShow && (
          <DialogTitle id="alert-dialog-title">
            {props.data.tvShow.name}
          </DialogTitle>
        )}
        <DialogContent>
          {props.data.tvShow && (
            <DialogContentText id="alert-dialog-description">
              {props.data.tvShow.description
                ? `Description: ${props.data.tvShow.description.replace(
                    "<br>",
                    ""
                  )}`
                : "Description: N/A"}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogContent>
          {props.data.tvShow && (
            <DialogContentText id="alert-dialog-description">
              {props.data.tvShow.rating
                ? `Rating: ${props.data.tvShow.rating}`
                : "Rating: N/A"}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogContent>
          {props.data.tvShow && (
            <DialogContentText id="alert-dialog-description">
              {props.data.tvShow.countdown
                ? `Last aired: S${props.data.tvShow.countdown.season}E${props.data.tvShow.countdown.episode}, 
                Title:${props.data.tvShow.countdown.name}`
                : "Last aired: N/A"}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogContent>
          {props.data.tvShow && (
            <DialogContentText id="alert-dialog-description">
              {props.data.tvShow.genres
                ? `Genre: ${props.data.tvShow.genres
                    .map((genre) => [genre])
                    .join(", ")} `
                : "Genre: N/A"}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Back{" "}
          </Button>
          <Button onClick={handleClose} color="primary" >
            Add{" "}
          </Button>
          {/* {handleClose && (
            <UserRequests 
              data={props.data}
            />
          )} */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SeriesDetails;
