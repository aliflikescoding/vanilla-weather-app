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
      console.log("test2");
    });
  }

  return {
    modeListener: modeListener,
    dataListener: dataListener,
  };
})();

export default event;
