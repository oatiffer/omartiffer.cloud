import { openMobileNav } from "../../utils/mobileNav";

const menuItems = document.querySelectorAll("#menu-item");
// const currentPath = window.location.pathname;

// Highlight the current menu item
// menuItems.forEach((item) => {
//   const itemPath = item.getAttribute("href");
//   if (currentPath === itemPath) {
//     item.classList.add("text-primary");
//   } else {
//     item.classList.remove("text-primary");
//   }
// });

// Re-attach the event listener after view transition
document.addEventListener("astro:page-load", () => {
  const hamburguerButton = document.querySelector("#hamburguer-button");

  hamburguerButton?.addEventListener("click", () => {
    openMobileNav();
  });
});
