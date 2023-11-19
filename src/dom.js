import domLogic from "./domLogic";

const dom = (() => {
  const main = document.querySelector("main");

  function showCurrent(data) {
    const temp = domLogic.getTemp(data);
    const tempFeelsLike = domLogic.getFeelsLikeTemp(data);

    const currentCurrentCard1 = `
    <div class="current-card-1">
      <h1 id="locationText" class="some-text"><i class="bi bi-geo-alt-fill"></i> ${data.location.name}, ${data.location.country}</h1>
      <h3 class="text-shade">${domLogic.formatDate(data.location.localtime)}</h3>
    </div>
    `;
    const currentCurrentCard2 = `
    <div class="card current-card-2">
      <h1 class="five-rem some-text"></i>${temp}</h1>
      <div class="flex">
      <img src="${data.current.condition.icon}" height="80px" width="80px" alt="icon"> 
        <div class="flex flex-column">
          <h2 class="two-rem">${data.current.condition.text}</h2>
          <h2 class="two-rem text-shade">Feels like ${tempFeelsLike}</h2>
        </div>
      </div>
    </div>
    `;
    const currentCurrentCard3 = `
    <div class="card current-card-3">
      <div class="card-container">
        <div>
          <h2 class="some-text"><i class="bi bi-wind"></i>  wind</h2>
          <h1 class="text-shade">${domLogic.getWind(data)}</h1>
        </div>
        <div>
          <h2 class="some-text"><i class="bi bi-eye"></i>  visibility</h2>
          <h1 class="text-shade">${domLogic.getVis(data)}</h1>
        </div>
        <div>
          <h2 class="some-text"><i class="bi bi-droplet-fill"></i> humidity</h2>
          <h1 class="text-shade">${data.current.humidity}</h1>
        </div>
      </div>
    </div>
    `;
    const currentCurrentCard4 = `
          <div class="card current-card-4">
            <div class="card-container">
              <div>
                <h2 class="some-text"><i class="bi bi-cloud-fill"></i>  cloud</h2>
                <h1 class="text-shade">${data.current.cloud}</h1>
              </div>
              <div>
                <h2 class="some-text"><i class="bi bi-tornado"></i>  wind degree</h2>
                <h1 class="text-shade">${data.current.wind_degree}</h1>
              </div>
              <div>
                <h2 class="some-text"><i class="bi bi-brightness-high-fill"></i> UV</h2>
                <h1 class="text-shade">${data.current.uv}</h1>
              </div>
            </div>
          </div>
    `;
    const currentCurrentCard5 = `
          <div class="card current-card-5">
            <div class="card-container">
              <div>
                <h2 class="some-text"><i class="bi bi-compass-fill"></i>  wind direction</h2>
                <h1 class="text-shade">${data.current.wind_dir}</h1>
              </div>
              <div>
                <h2 class="some-text">gust</h2>
                <h1 class="text-shade">${domLogic.getGust(data)}</h1>
              </div>
              <div>
                <h2 class="some-text"><i class="bi bi-arrow-down-square-fill"></i> Pressure</h2>
                <h1 class="text-shade">${domLogic.getPressure(data)}</h1>
              </div>
            </div>
          </div>
    `;
    const current = `
      <div class="current">
        ${currentCurrentCard1}
        ${currentCurrentCard2}
        ${currentCurrentCard3}
        ${currentCurrentCard4}
        ${currentCurrentCard5}
      </div>
    `;

    main.innerHTML = current;
  }

  return {
    showCurrent: showCurrent,
  };
})();

export default dom;
