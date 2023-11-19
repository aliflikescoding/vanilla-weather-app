import evenFunction from "./evenFunction";


const event = (() => {
  function modeListener() {
    const buttonMode = document.querySelector("#buttonMode");
    buttonMode.addEventListener("click", () => {
      evenFunction.changeMode();
    });
  }

  function dataListener() {
    const searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener("click", async (event) => {
      event.preventDefault();
      evenFunction.search();
    });
  }

  function tempListener() {
    const buttonTemp = document.querySelector("#buttonTemp");
    buttonTemp.addEventListener("click", () => {
      evenFunction.changeTemp();
    });
  }

  return {
    modeListener: modeListener,
    dataListener: dataListener,
    tempListener: tempListener
  };
})();

export default event;
