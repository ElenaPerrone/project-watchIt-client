
export default class UserRequests {
  static getSelectedSeries = async (show) => {
    let token = localStorage.getItem("token");

    const rawResponse = await fetch(
      `${process.env.REACT_APP_API_BASE}/series/add`,
      {
        method: "POST",
        data: show,
        headers: {
          Authorization: "Token " + token,
        },
      }
    );

  };


  static getUserSeries = async (id) => {
    let token = localStorage.getItem("token");
    const rawResponse = await fetch(
      `${process.env.REACT_APP_API_BASE}/series/${id}`,
      {
        method: "GET",
        data: id,
        headers: {
          Authorization: "Token " + token,
        },
      }
    );
  };
}
