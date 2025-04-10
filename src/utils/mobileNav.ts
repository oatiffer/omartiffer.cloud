const mobileNav = document.querySelector("#nav-mobile");
const container = document.querySelector("#global-container");

const openMobileNav = () => {
  mobileNav?.classList.remove("translate-x-full");
  mobileNav?.classList.add("-translate-x-full");
  container?.classList.add("blur");
  container?.classList.add("pointer-events-none");
  document.documentElement.classList.add("overflow-hidden");
};

const closeMobileNav = () => {
  mobileNav?.classList.remove("-translate-x-full");
  mobileNav?.classList.add("translate-x-full");
  container?.classList.remove("blur");
  container?.classList.remove("pointer-events-none");
  document.documentElement.classList.remove("overflow-hidden");
};

export { openMobileNav, closeMobileNav };
