"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // Selectors
  const icons = document.querySelectorAll(".drop-icons");
  const featureBtn = document.querySelector(".feature-btn");
  const featureUl = document.querySelector(".feature-ul");
  const companyBtn = document.querySelector(".company-btn");
  const companyUl = document.querySelector(".company-ul");
  const menuIcon = document.querySelector(".menu-bar")
  const closeIcon = document.querySelector(".close-menu")
  const parentNav = document.querySelector(".nav-links")
  const mobileBg = document.querySelector(".mobile-bg")

  // Events & Functions
  featureBtn.addEventListener("click", toggleFeature);
  companyBtn.addEventListener("click", toggleCompany);
  
  function toggleFeature() {
      toggleStatus();
      updateUI(featureUl, icons[0]);
  }
  
  function toggleCompany() {
      toggleStatus();
      updateUI(companyUl, icons[1]);
  }
  
  let status = false 
  function toggleStatus() {
      status = !status;
  }
  
  function updateUI(ulElement, icon) {
      icon.src = `./assets/images/icon-arrow-${status ? "up" : "down"}.svg`;
        ulElement.style.opacity = status ? 1 : 0;
  }

  menuIcon.addEventListener("click", function() {
    parentNav.classList.toggle("toggle-nav")
    mobileBg.classList.toggle("overlay")
  })

  closeIcon.addEventListener("click", function() {
    parentNav.classList.toggle("toggle-nav")
    mobileBg.classList.toggle("overlay")
  })
});