document.addEventListener("astro:after-swap", () => {
  // Get system theme preference on load
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // Set the initial theme based on localStorage
  const savedTheme = localStorage.getItem("theme");
  const themeToSet = savedTheme || systemTheme;

  // Set the initial theme
  setTheme(themeToSet);
});

document.addEventListener("astro:page-load", () => {
  // Listen for theme changes emitted by the theme toggler
  document.addEventListener("theme-toggle", (event: Event) => {
    const customEvent = event as CustomEvent;
    const { theme } = customEvent.detail;

    // Update the theme based on the event
    setTheme(theme);
  });
});

function setTheme(theme: string) {
  // Set the theme in the document
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");

  // Persist the theme in localStorage
  localStorage.setItem("theme", theme);
}
