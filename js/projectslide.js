const scrollPositions = {
  testiSlide: 0,
  ytSlider: 0,
};

function scrollSlider(id, direction) {
  const container = document.getElementById(id);
  const item = container.children[0];
  const itemHeight = item.getBoundingClientRect().height; // Dapatkan tinggi aktual elemen
  const maxScroll = (container.children.length - 1) * itemHeight;

  scrollPositions[id] += direction * itemHeight;
  scrollPositions[id] = Math.max(0, Math.min(scrollPositions[id], maxScroll));

  container.style.transform = `translateY(-${scrollPositions[id]}px)`;
}
