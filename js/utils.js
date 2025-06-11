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
const container = document.getElementById("sliderContainer");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const pagination = document.getElementById("pagination");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

let currentIndex = 0;

function updateMiddleClass() {
  const containerRect = container.getBoundingClientRect();
  const containerCenter = (containerRect.left + containerRect.right) / 2;

  let closestSlide = null;
  let minDistance = Infinity;
  let closestIndex = 0;

  slides.forEach((slide, i) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = (slideRect.left + slideRect.right) / 2;
    const distance = Math.abs(containerCenter - slideCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestSlide = slide;
      closestIndex = i;
    }
  });

  slides.forEach((slide) => {
    slide.classList.remove("middle");
  });

  if (closestSlide) {
    closestSlide.classList.add("middle");
    currentIndex = closestIndex;
    updatePagination(closestIndex);
  }
}

function snapToClosestSlide() {
  const containerRect = container.getBoundingClientRect();
  const containerCenter = (containerRect.left + containerRect.right) / 2;

  let closestSlide = null;
  let minDistance = Infinity;

  slides.forEach((slide) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = (slideRect.left + slideRect.right) / 2;
    const distance = Math.abs(containerCenter - slideCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestSlide = slide;
    }
  });

  if (closestSlide) {
    const slideRect = closestSlide.getBoundingClientRect();
    const offset = (slideRect.left + slideRect.right) / 2 - containerCenter;
    container.scrollBy({ left: offset, behavior: "smooth" });
  }
}

container.addEventListener("scroll", () => {
  requestAnimationFrame(updateMiddleClass);
});

container.addEventListener("mouseup", () => {
  setTimeout(snapToClosestSlide, 100);
});

container.addEventListener("touchend", () => {
  setTimeout(snapToClosestSlide, 100);
});

scrollLeftBtn.addEventListener("click", () => {
  scrollToIndex(currentIndex - 1);
});

scrollRightBtn.addEventListener("click", () => {
  scrollToIndex(currentIndex + 1);
});

function scrollToIndex(index) {
  if (index < 0 || index >= slides.length) return;
  const slide = slides[index];
  const containerRect = container.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();
  const offset =
    (slideRect.left + slideRect.right) / 2 -
    (containerRect.left + containerRect.right) / 2;
  container.scrollBy({ left: offset, behavior: "smooth" });
  currentIndex = index;
}

function updatePagination(activeIndex) {
  const buttons = pagination.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === activeIndex);
  });
}

function createPagination() {
  slides.forEach((_, i) => {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      scrollToIndex(i);
    });
    pagination.appendChild(button);
  });
  updateMiddleClass();
}

window.addEventListener("load", () => {
  createPagination();
  updateMiddleClass();
});
window.addEventListener("resize", updateMiddleClass);
