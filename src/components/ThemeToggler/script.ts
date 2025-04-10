import setTheme from "../../utils/theme.ts";

// Add event listeners to the buttons
const themeButtons = document.querySelectorAll("[data-theme]");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme") ?? "";

    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
});
