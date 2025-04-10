import { openMobileNav } from "@scripts/utils/mobileNav";

const hamburguerButton = document.getElementById("hamburguer-button");

hamburguerButton?.addEventListener("click", () => {
  openMobileNav();
});
