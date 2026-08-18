/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");

  menuToggle.classList.toggle("open");

  const menuAberto = menu.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", menuAberto);
});

/* =========================================
   FECHAR MENU AO CLICAR NUM LINK
========================================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");

    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});
