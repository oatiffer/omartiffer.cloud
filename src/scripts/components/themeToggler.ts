document.addEventListener("astro:page-load", () => {
  // Add event listeners to the buttons
  const lightButton = document.getElementById(
    "button-light"
  ) as HTMLButtonElement;
  const darkButton = document.getElementById(
    "button-dark"
  ) as HTMLButtonElement;

  lightButton.addEventListener("click", () => {
    toggleTheme("light");
  });
  darkButton.addEventListener("click", () => {
    toggleTheme("dark");
  });

  function toggleTheme(theme: string) {
    document.dispatchEvent(
      new CustomEvent("theme-toggle", { detail: { theme } })
    );
  }

  document.addEventListener("theme-toggle", (event: Event) => {
    const customEvent = event as CustomEvent;
    const { theme } = customEvent.detail;

    lightButton.hidden = theme === "light";
    darkButton.hidden = theme === "dark";
  });
});