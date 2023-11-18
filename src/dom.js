const dom = (() => {
  const body = document.querySelector("body");
  const root = document.documentElement;
  const buttonModeText = document.querySelector("#buttonModeText");
  const buttonMode = document.querySelector("#buttonTemp");

  function checkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.remove("light");
      buttonModeText.classList.remove("bi-sun-fill");
      buttonModeText.classList.add("bi-moon-fill");
      root.style.setProperty("--background", "#0a1120");
      root.style.setProperty("--background-shade", "#1b212e");
      root.style.setProperty("--text", "#ffffff");
      root.style.setProperty("--some-text", "var(--text)");
    }
  }

  function changeMode() {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      buttonModeText.classList.remove("bi-sun-fill");
      buttonModeText.classList.add("bi-moon-fill");
      root.style.setProperty("--background", "#0a1120");
      root.style.setProperty("--background-shade", "#1b212e");
      root.style.setProperty("--text", "#ffffff");
      root.style.setProperty("--some-text", "var(--text)");
    } else {
      body.classList.add("light");
      buttonModeText.classList.remove("bi-moon-fill");
      buttonModeText.classList.add("bi-sun-fill");
      root.style.setProperty("--background", "#f1f1f1");
      root.style.setProperty("--background-shade", "#ffffff");
      root.style.setProperty("--text", "#000000");
      root.style.setProperty("--some-text", "var(--light-blue)");
    }
  }

  function search() {
    console.log('search');
  }

  function changeTemp() {
    if (body.classList.contains("celcius")) {
      body.classList.remove("celcius");
      body.classList.add("farenheit")
      buttonMode.textContent = "°F";
    }
    else {
      body.classList.remove("farenheit");
      body.classList.add("celcius")
      buttonMode.textContent = "°C";
    }
  }

  return {
    changeMode: changeMode,
    checkMode: checkMode,
    search: search,
    changeTemp: changeTemp
  }
})();

export default dom;