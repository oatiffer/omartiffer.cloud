document.addEventListener("astro:page-load", () => {
  const closeButton = document.getElementById(
    "close-button",
  ) as HTMLButtonElement;

  // Close the mobile menu after view transition
  document.dispatchEvent(
    new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }),
  );

  closeButton.addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }),
    );
  });

  document.addEventListener("mobile-nav-open", (event) => {
    const customEvent = event as CustomEvent;
    const { isOpen } = customEvent.detail;
    const mobileNav = document.getElementById("nav-mobile") as HTMLElement;

    requestAnimationFrame(() => {
      mobileNav.classList.toggle("-translate-x-full", isOpen === true);
      mobileNav.classList.toggle("translate-x-full", isOpen === false);
    });
  });

  const mediaQuery = window.matchMedia("(min-width: 768px)");
  mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      document.dispatchEvent(
        new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }),
      );
    }
  });
});
