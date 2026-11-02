const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
toggle?.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.setAttribute(
    "aria-label",
    expanded ? "Menü öffnen" : "Menü schließen",
  );
  nav.classList.toggle("open", !expanded);
});
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Menü öffnen");
  }),
);
