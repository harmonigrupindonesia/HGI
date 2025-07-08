window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("onKlikGoingId").classList.remove("hidden");
  }, 1000);
});

function closePopup() {
  document.getElementById("onKlikGoingId").classList.add("hidden");
}
function goToSection() {
  const target = document.getElementById("onProject");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    closePopup();
  }
}
function goSocial() {
  window.location.href = "/page/socials/index.html";
}
