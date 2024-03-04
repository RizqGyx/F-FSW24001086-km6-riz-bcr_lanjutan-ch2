// Menu Responsive
const menuToggle = document.querySelector(".menu-toogle");
const closeMenuLinks = document.querySelectorAll(".close-menu");
const header = document.getElementById("myHeader");

menuToggle.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
  if (document.body.classList.contains("menu-open")) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "white";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    document.body.classList.remove("menu-open");
  }
});

closeMenuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("menu-open");
  });
});
