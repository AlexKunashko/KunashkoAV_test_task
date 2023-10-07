"use strict";

export const burgerMenu = () => {
  const activeBtn = document.getElementById("mobile-btn-open");
  const closeBtn = document.getElementById("mobile-btn-close");
  const mobileHeader = document.getElementById("mobile-menu");

  activeBtn.addEventListener("click", () => {
    mobileHeader.classList.add("active-header");
  });
  closeBtn.addEventListener("click", () => {
    mobileHeader.classList.remove("active-header");
  });
};
