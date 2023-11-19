import dom from "./dom";

const api = (() => {
  const key = "94beffc60c1048cbabc81744231211";

  const searchCurrent = async (location) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
        { mode: "cors" }
      );
      const loading = document.querySelector(".loading");
      loading.classList.remove("invis");
      const data = await response.json();
      dom.showCurrent(data);
      loading.classList.add("invis");
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return {
    searchCurrent: searchCurrent
  }
})();

export default api;