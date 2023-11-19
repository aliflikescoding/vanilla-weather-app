const domLogic = (() => {
  function getTemp(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.temp_c)}°C`;
    } else {
      return `${Math.floor(data.current.temp_f)}°F`;
    }
  }

  function getFeelsLikeTemp(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.feelslike_c)}°C`;
    } else {
      return `${Math.floor(data.current.feelslike_f)}°F`;
    }
  }

  function getWind(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.wind_kph)} kph`;
    } else {
      return `${Math.floor(data.current.wind_mph)} mph`;
    }
  }

  function getVis(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.vis_km)} km`;
    } else {
      return `${Math.floor(data.current.vis_miles)} miles`;
    }
  }

  function getGust(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.gust_kph)}`;
    } else {
      return `${Math.floor(data.current.gust_mph)}`;
    }
  }

  function getPressure(data) {
    const body = document.querySelector("body");
    if (body.classList.contains("celcius")) {
      return `${Math.floor(data.current.pressure_mb)} mb`;
    } else {
      return `${Math.floor(data.current.pressure_in)} in`;
    }
  }

  function getIcon(data) {
    const icon = "bi-moon-fill"

    return icon
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
  }

  return {
    getTemp: getTemp,
    getFeelsLikeTemp: getFeelsLikeTemp,
    formatDate: formatDate,
    getWind: getWind,
    getVis: getVis,
    getGust: getGust,
    getPressure: getPressure,
    getIcon: getIcon
  };
})();

export default domLogic;
