const getData = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=94beffc60c1048cbabc81744231211&q=jakarta",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
    console.log(data.location.name);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
getData();