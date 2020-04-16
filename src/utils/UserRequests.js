import axios from "axios";

export default class UserRequests {
    
    static getSelectedSeries = async (show) => {
        let token = localStorage.getItem("token")
    console.log("UserRequests -> staticgetSelectedSeries -> show", show)
        // console.log("UserRequests -> staticgetSelectedSeries -> user", user)
    const rawResponse = await fetch(`${process.env.REACT_APP_API_BASE}/series/add`, {
    method: "POST",
    data: show,
    headers: {
        "Authorization": "Token " + token
    }
    });

    // const addedSeries = await rawResponse.json()
    // console.log("UserRequests -> addedSeries", addedSeries)
    
  };
}
