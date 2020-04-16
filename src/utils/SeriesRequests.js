export default class SeriesRequests {
  static getTopSeries = async (page) => {
    const rawResponse = await fetch(
      ` https://www.episodate.com/api/most-popular?page=${page}`,
      {
        method: "GET",
      }
    );

    const content = await rawResponse.json();
    console.log("SeriesRequests -> staticgetTopSeries -> content", content)

    if (content && !content.error) {
      return await content;
    } else {
      // @TODO LOG TO ERROR LOG
      console.log(content);
    }
  };

  static getSerieInfo = async (id) => {
    const rawResponse = await fetch(
      ` https://www.episodate.com/api/show-details?q=${id}`,
      {
        method: "GET",
      }
    );

    const content = await rawResponse.json();

    if (content && !content.error) {
      return await content;
    } else {
      // @TODO LOG TO ERROR LOG
      console.log(content);
    }
  };

  static getsearchSerie = async (name, page) => {
    const rawResponse = await fetch(
      ` https://www.episodate.com/api/search?q=${name}&page=${page}`,
      {
        method: "GET",
      }
    );

    const content = await rawResponse.json();

    if (content && !content.error) {
      return await content;
    } else {
      // @TODO LOG TO ERROR LOG
      console.log(content);
    }
  };
}
