const hamburger = document.getElementById("hamburger");
const navbarItems = document.getElementById("navbar-items");
const button = document.getElementById("btn");

const menuMediaQuery = window.matchMedia("(max-width: 1024px)");

const displayMenu = () => {
  if (menuMediaQuery.matches) {
    navbarItems.classList.add("close");
    button.classList.add("close");
  } else {
    navbarItems.classList.remove("close");
    button.classList.remove("close");
  }
};

const toggleMenu = () => {
  if (
    navbarItems.classList.contains("close") ||
    button.classList.contains("close")
  ) {
    navbarItems.classList.remove("close");
    button.classList.remove("close");
  } else {
    navbarItems.classList.add("close");
    button.classList.add("close");
  }
};

window.addEventListener("resize", displayMenu);

hamburger.addEventListener("click", toggleMenu);
