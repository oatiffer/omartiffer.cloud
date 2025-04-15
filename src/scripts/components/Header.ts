document.addEventListener("astro:page-load", () => {
  const hamburguerBtn = document.getElementById(
    "hamburguer-button",
  ) as HTMLButtonElement;

  hamburguerBtn?.addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("mobile-nav-open", { detail: { isOpen: true } }),
    );
  });
});
