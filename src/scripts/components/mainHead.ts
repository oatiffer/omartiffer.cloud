import setTheme from "@scripts/utils/theme";

const loadTheme = () => {
    // Get system theme preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

    // Set the initial theme based on localStorage
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        setTheme(systemTheme);
    } else {
        setTheme(savedTheme);
    }
}

document.addEventListener("astro:after-swap", () => {
    loadTheme();
});

document.addEventListener("astro:page-load", () => {
    loadTheme();
});