import { closeMobileNav } from "@scripts/utils/mobileNav.ts";

const closeButton = document.getElementById("close-button");
const menuItems = document.querySelectorAll("#menu-item");

// Close the mobile menu after view transition
document.addEventListener("astro:after-swap", () => {
  closeMobileNav();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("text-primary"));
    item.classList.add("text-primary");
  }
  );
});

closeButton?.addEventListener("click", () => {
  closeMobileNav();
});
