const dom = (function() {
  function changeMode() {
    const body = document.querySelector("body");
    const root = document.documentElement;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      body.classList.add("light");
      root.style.setProperty("--background", "#f1f1f1");
      root.style.setProperty("--background-shade", "#ffffff");
      root.style.setProperty("--text", "#000000");
      root.style.setProperty("--some-text", "var(--light-blue)");
    }
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      root.style.setProperty("--background", "#0a1120");
      root.style.setProperty("--background-shade", "#1b212e");
      root.style.setProperty("--text", "#ffffff");
      root.style.setProperty("--some-text", "var(--text)");
    } else {
      body.classList.add("light");
      root.style.setProperty("--background", "#f1f1f1");
      root.style.setProperty("--background-shade", "#ffffff");
      root.style.setProperty("--text", "#000000");
      root.style.setProperty("--some-text", "var(--light-blue)");
    }
  }

  return {
    changeMode: changeMode
  }

})();

export default dom;