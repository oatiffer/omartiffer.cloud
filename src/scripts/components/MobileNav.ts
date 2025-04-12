document.addEventListener("astro:page-load", () => {
  const closeButton = document.getElementById("close-button") as HTMLButtonElement;
  const menuItems = document.querySelectorAll("#menu-item") as NodeListOf<HTMLElement>;

  // Close the mobile menu after view transition
  document.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }));

  // menuItems.forEach((item) => {
  //   item.addEventListener("click", (event) => {
  //     menuItems.forEach((i) => i.classList.remove("text-primary"));

  //     const target = event.target as HTMLElement;
  //     target.classList.add("text-primary");
  //   });
  // });

  closeButton.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }));
  });

  document.addEventListener("mobile-nav-open", (event) => {
    const customEvent = event as CustomEvent;
    const { isOpen } = customEvent.detail;

    const mobileNav = document.getElementById("nav-mobile") as HTMLElement;
    mobileNav.classList.toggle("-translate-x-full", isOpen === true);
    mobileNav.classList.toggle("translate-x-full", isOpen === false);
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      document.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: { isOpen: false } }));
    }
  });
});
