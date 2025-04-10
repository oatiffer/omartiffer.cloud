import { openMobileNav } from "@scripts/utils/mobileNav";
import setTheme from "@scripts/utils/theme";

const hamburguerButton = document.getElementById("hamburguer-button");
const menuItems = document.querySelectorAll("#menu-item");

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
