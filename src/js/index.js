"use strict";

document.querySelector("body").addEventListener("click", handleDocumentClick);

function handleDocumentClick(e) {
  const objectId = e.target.id;

  if (objectId === "menu__icon") {
    document
      .querySelector(".menu__items")
      .classList.toggle("menu__items--display");
  }
}
