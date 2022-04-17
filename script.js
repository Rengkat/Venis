"use strict";
//smooth scrolling
const links = document.querySelector(".links");

links.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    let newLink = e.target.getAttribute("href");
    let id = document.querySelector(newLink);
    id.scrollIntoView({ behavior: "smooth" });
  }
});

//animation hover
//ANIMATION FUNCTION
const animationLNav = (e, opacity) => {
  if (e.target.classList.contains("link")) {
    let link = e.target;
    let siblings = link.closest(".links").querySelectorAll(".link");
    siblings.forEach((child) => {
      if (child !== link) {
        child.style.opacity = opacity;
        child.style.transition = "0.7s all ease";
      }
    });
    let logo = document.querySelector("header");
    logo.style.opacity = opacity;
    logo.style.transition = "0.7s all ease";
  }
};
document.querySelector("nav").addEventListener("mouseover", (e) => {
  animationLNav(e, 0.5);
});

document.querySelector("nav").addEventListener("mouseout", (e) => {
  animationLNav(e, 1);
});

//STICK NAV
const nav = document.querySelector(".header-nav");
let grid = document.querySelector(".grid");
let stickyNavStart = grid.getBoundingClientRect();
// console.log(stickyNavStart);
window.addEventListener("scroll", () => {
  if (window.scrollY > stickyNavStart.top) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
});

//intersectional observer for animation
const aboutUs = document.querySelector(".rightFlex");
//intersectional ober CALLBACK
const observerCallback = (enteries, observer) => {
  const [entry] = enteries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("fade");
    // entry.target.classList.add('observer-aniation');
    // aboutUs.unobserve(entry.target)
    console.log(123);
  }
};

//option for observer
const observerOption = {
  root: null,
  threshold: 0.2,
};
//instantiating the API
const observer = new IntersectionObserver(observerCallback, observerOption);
observer.observe(aboutUs);
aboutUs.classList.add("fade");

//overlay
const menuOpen = document.querySelector(".open");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", (e) => {
  if (overlay.style.display === "none") {
    overlay.style.display = "flex";
    menuOpen.style.transform = "rotate(90%)";
  } else {
    overlay.style.display = "none";
  }
});
menuClose.addEventListener("click", (e) => {
  overlay.style.display = "none";
});
