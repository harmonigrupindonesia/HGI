function hamburgerMenu() {
  const navBar = document.getElementById("nav-navbar");
  navBar.classList.toggle("active");
}
function about() {
  const about_ = document.querySelector(".active-learnmore");
  const button = document.getElementById("btnLmDes");
  about_.classList.toggle("show");
  button.style.display = "none";
}
function showPopup(imageSrc) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
