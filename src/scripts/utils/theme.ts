const setTheme = (theme: string) => {
  const DARK_THEME = "dark";
  const LIGHT_THEME = "light";

  const darkButton = document.getElementById("button-dark");
  const lightButton = document.getElementById("button-light");

  switch (theme) {
    case DARK_THEME:
      if (!document.documentElement.classList.contains(DARK_THEME)) {
        document.documentElement.classList.add(DARK_THEME);
      }
      document.documentElement.classList.remove(LIGHT_THEME);
      darkButton?.classList.add("hidden");
      lightButton?.classList.remove("hidden");
      break;
    case LIGHT_THEME:
      if (!document.documentElement.classList.contains(LIGHT_THEME)) {
        document.documentElement.classList.add(LIGHT_THEME);
      }
      document.documentElement.classList.remove(DARK_THEME);
      darkButton?.classList.remove("hidden");
      lightButton?.classList.add("hidden");
      break;
  }
};

export default setTheme;
