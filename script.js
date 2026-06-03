// Get elements from the page
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");
let topBtn = document.getElementById("topBtn");
let year = document.getElementById("year");
let allLinks = document.querySelectorAll(".nav-links a");

// Show current year in footer
year.textContent = new Date().getFullYear();

// Mobile menu open and close
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Simple smooth scrolling for menu links
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    let sectionId = link.getAttribute("href");
    let section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.classList.remove("show");
  });
});

// Show back to top button after scrolling down
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Go back to top
topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
