window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("onKlikGoingId").classList.remove("hidden");
  }, 2000);
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
