import dom from "./dom";

const event = (() => {
  function modeListener() {
    const buttonMode = document.querySelector("#buttonMode");
    buttonMode.addEventListener("click", () => {
      dom.changeMode();
    });
  }

  function dataListener() {
    const searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener("click", () => {
      dom.search();
    });
  }

  function tempListener() {
    const buttonTemp = document.querySelector("#buttonTemp");
    buttonTemp.addEventListener("click", () => {
      dom.changeTemp();
    });
  }

  return {
    modeListener: modeListener,
    dataListener: dataListener,
    tempListener: tempListener
  };
})();

export default event;
