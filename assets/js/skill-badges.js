document.querySelectorAll("[data-skill-badge-set]").forEach((set) => {
  const output = set.querySelector(".skill-badge-label");
  const badges = [...set.querySelectorAll(".skill-badge")];
  let pinnedBadge = null;

  const show = (badge) => {
    output.textContent = badge.dataset.skillLabel;
    output.hidden = false;
  };

  const clear = () => {
    output.textContent = "";
    output.hidden = true;
  };

  const unpin = () => {
    if (pinnedBadge) pinnedBadge.setAttribute("aria-pressed", "false");
    pinnedBadge = null;
  };

  badges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => show(badge));
    badge.addEventListener("mouseleave", () => {
      if (pinnedBadge) show(pinnedBadge);
      else clear();
    });
    badge.addEventListener("focus", () => show(badge));
    badge.addEventListener("blur", () => {
      if (pinnedBadge) show(pinnedBadge);
      else clear();
    });
    badge.addEventListener("click", () => {
      if (pinnedBadge === badge) {
        unpin();
        clear();
        return;
      }

      unpin();
      pinnedBadge = badge;
      badge.setAttribute("aria-pressed", "true");
      show(badge);
    });
  });
});

