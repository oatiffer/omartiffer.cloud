import { openMobileNav } from "@utils/mobileNav";

const hamburguerButton = document.getElementById("hamburguer-button");
const menuItems = document.querySelectorAll("#menu-item");

// Re-attach the event listener after view transition
document.addEventListener("astro:page-load", () => {

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("text-primary"));
      item.classList.add("text-primary");
    }
    );
  });

  hamburguerButton?.addEventListener("click", () => {
    openMobileNav();
  });
});
