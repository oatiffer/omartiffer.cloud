import { closeMobileNav } from "@utils/mobileNav";

const closeButton = document.getElementById("close-button");

// Close the mobile menu after view transition
document.addEventListener("astro:after-swap", () => {
  closeMobileNav();
});

// Re-attach the event listener after view transition
document.addEventListener("astro:page-load", () => {
  closeButton?.addEventListener("click", () => {
    closeMobileNav();
  });
});
