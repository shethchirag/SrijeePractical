export function changeNavbarBackground() {
  let navbar = document.querySelector(".navbar_style");

  if (window.scrollY > 780) {
    navbar.style.backgroundColor = "#0000008f";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}
