let scrBtn = document.querySelector(".scroll-Up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    // console.log(`SCROLLING VALUE IS ${window.scrollY}`);
    scrBtn.style.display = "block";
  } else {
    scrBtn.style.display = "none";
  }
};

scrBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};