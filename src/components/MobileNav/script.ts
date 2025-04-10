import { closeMobileNav } from "@utils/mobileNav";

const closeButton = document.getElementById("close-button");
const menuItems = document.querySelectorAll("#menu-item");

// Close the mobile menu after view transition
document.addEventListener("astro:after-swap", () => {
  closeMobileNav();
});

// Re-attach the event listener after view transition
document.addEventListener("astro:page-load", () => {
  closeButton?.addEventListener("click", () => {
    closeMobileNav();
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("text-primary"));
      item.classList.add("text-primary");
    }
    );
  });
});
