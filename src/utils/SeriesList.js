import React, { useState, useEffect, Component } from "react";

import Skeletons from "./Skeleton";

import SeriesRequests from "./SeriesRequests";

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SeriesDetails from "./SeriesDetails";
import Unauthorized from "../components/Unauthorized/Unauthorized";

function SeriesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [topSeries, setTopSeries] = useState([]);
  const [searchSerie, setSearchSerie] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState({});
  const [openModal, setOpenModal] = useState(false);
  // const [searchResult, setSearchResult] = useState(false)

  const handleSearchSerie = (event) => {
    setSearchSerie(event);
  };

  const handleSearchSubmit = async () => {
    if (searchSerie.length) {
      let page = 1;
      setCurrentPage(1);
      let stringPage = page.toString();
      let results = await SeriesRequests.getsearchSerie(
        searchSerie,
        stringPage
      );
      console.log("handleSearchSubmit -> results", results);
      // setSearchResult(result)
    }
  };

  const handlePageChange = (value) => {
    if (value === "up") {
      let page = currentPage + 1;
      setCurrentPage(page);
      console.log("SeriesList -> page", page);
      handlePopularMovies();
    } else if (value === "down" && currentPage !== 1) {
      let page = currentPage - 1;
      setCurrentPage(page);
      handlePopularMovies();
    } else if (value === "down" && currentPage === 1) {
      //TODO show error
      console.log("error");
    }
  };
  const handlePopularMovies = async () => {
    setTopSeries([]);
    let series = await SeriesRequests.getTopSeries(currentPage);
    setLoadingState(true);
    setTopSeries(series.tv_shows);
    //TODO handle if hage is the same then no more movies
    // setCurrentPage(series.page)
  };

  const handleSerieInfo = async (id) => {
    let serie = await SeriesRequests.getSerieInfo(id);
    setSelectedSeries(serie);
  };

  const handleModal = () => {
    if (openModal) {
      setOpenModal(false);
    } else setOpenModal(true);
  };

  useEffect(() => {
    handlePopularMovies();
  }, []);

  useEffect(() => {
    if (topSeries.length === 0) {
      setLoadingState(false);
    } else setLoadingState(true);

    console.log("SeriesList -> topSeries", topSeries);
  }, [topSeries]);
  return (
    <div >
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ marginTop: "2em", backgroundColor: "#F3F3F3" }}
        >
          <Grid container>
            <Grid item xs={1}></Grid>

            <Grid item xs={8}>
              <TextField
                id="input-with-icon-grid"
                label="Search series"
                value={searchSerie}
                onChange={(event) => handleSearchSerie(event.target.value)}
              />

              <SearchIcon button="true" onClick={handleSearchSubmit} />
            </Grid>

            <Grid item xs={1}>
              <ArrowBackIosIcon
                button="true"
                onClick={() => handlePageChange("down")}
              />
            </Grid>
            <Grid item xs={1}>
              <span>{currentPage}</span>
            </Grid>
            <Grid item xs={1}>
              <ArrowForwardIosIcon
                button="true"
                onClick={() => handlePageChange("up")}
              />
            </Grid>
          </Grid>
        </Grid>
        {loadingState ? (
          <List>
            {topSeries.map((serie) => (
              <ListItem
                key={serie.id}
                button
                onClick={() => handleSerieInfo(serie.id)}
              >
                <Grid container direction="row" >
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
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={handleModal}
                        >
                          More
                        </Button>
                      </Grid>
                      {/* </Grid> */}
                    </ListItem>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        ) : (
          <Skeletons />
        )}
        {openModal && (
          <SeriesDetails
            data={selectedSeries}
            open={openModal}
            handleClose={handleModal}
          />
        )}
      </Grid>
    </div>
  );
}

export default SeriesList;
