const event = (() => {
  function modeListener() {
    const buttonMode = document.querySelector("#buttonMode");
    buttonMode.addEventListener("click", () => {
      console.log("test");
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
    dataListener: dataListener
  }
})();

export default event;
