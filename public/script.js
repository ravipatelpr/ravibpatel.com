document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  const menu = document.querySelector(".nav-links");
  const button = document.querySelector(".menu-toggle");
  const open = menu.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.remove("open");
    document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
