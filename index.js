const bars = document.querySelector(".bars");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".links li");

bars.addEventListener("click", () => {
  links.classList.toggle("show");
  bars.classList.toggle("rotate");
  link.forEach((item) => {
    item.classList.toggle("fade");
  });
});

// tech

const techLinks = document.querySelectorAll(".ul li");
const firstLink = document.querySelector(".li-1");
