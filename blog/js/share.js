function getCurrentUrl() {
  return window.location.href;
}

function shareWhatsApp() {
  const url = getCurrentUrl();
  window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
}

function shareFacebook() {
  const url = getCurrentUrl();
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    "_blank"
  );
}

function shareTwitter() {
  const url = getCurrentUrl();
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    "_blank"
  );
}

function copyLink() {
  const url = getCurrentUrl();
  navigator.clipboard.writeText(url).then(() => {
    const msg = document.getElementById("copy-message");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}
