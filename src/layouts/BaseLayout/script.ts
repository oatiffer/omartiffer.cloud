import setTheme from "@utils/theme";

// Re-apply theme after view transition
document.addEventListener("astro:page-load", () => {
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
});