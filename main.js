// Start Creating ScrollUp Button 
let scrBtn = document.createElement("button");
scrBtn.className = "scroll-Up";

let scrIcon = document.createElement("i");
scrIcon.style.fontSize = "18px";

let sideBar = document.querySelector(".sidebar");

scrBtn.style.cssText =
  "background-color: var(--blue-alt-color); color: white; width: 30px; height: 30px; padding: 5px; border-radius: 5px; border: none; position: fixed; bottom: 20px; right: 20px; cursor: pointer; display: none; z-index: 100;";
scrIcon.className = "fa-solid fa-chevron-up";
scrBtn.append(scrIcon);
sideBar.after(scrBtn);

window.onscroll = function () {
  if (window.scrollY >= 600) {
    // console.log(`Scrolling Value Is ${window.scrollY}`);
    scrBtn.style.display = "block";

  } else {
    scrBtn.style.display = "none";
  };
};
scrBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// End Creating ScrollUp Button 
