document.addEventListener("astro:page-load", () => {
  const shadow = document.getElementById("shadow") as HTMLDivElement;
  const readMoreBtn = document.getElementById("read-more") as HTMLButtonElement;
  const readLessBtn = document.getElementById("read-less") as HTMLButtonElement;
  const timeline = document.getElementById("timeline") as HTMLDivElement;

  let collapsedHeight: number;
  let isExpanded = false;

  readMoreBtn?.addEventListener("click", () => {
    collapsedHeight = timeline.clientHeight;

    const expandedHeight = timeline.scrollHeight;

    requestAnimationFrame(() => {
      timeline.style.height = `${expandedHeight}px`;
      shadow.style.visibility = "hidden";
    });
    isExpanded = true;
  });

  readLessBtn?.addEventListener("click", () => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: timeline.offsetTop,
        behavior: "auto",
      });

      timeline.style.height = `${collapsedHeight}px`;
      shadow.style.visibility = "visible";
      isExpanded = false;
    });
  });

  window.addEventListener("resize", () => {
    if (isExpanded) {
      timeline.style.height = "auto";
    }
  });
});
