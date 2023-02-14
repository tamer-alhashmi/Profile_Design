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
  }
};
scrBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// End Creating ScrollUp Button

// Start Creating Top Scroll Bar

// let topScroll = document.createElement("div");
// topScroll.classList = "topScrollStyle";
// sideBar.before(topScroll);
// topScroll.style.cssText =
//   "width: 0px; height: 5px; background-color: var(--blue-color); position: fixed; z-index: 100; top: 0px; left: 0;";

// window.onscroll = function (topScroBar) {

// }
//   // let scroHeight = Window.scrollY;
//   if (window.scrollY >= 0) {
//     console.log(`Scrolling Value Is ${window.scrollY}`);
//     // console.log(`topScroll.style.width = ${window.scrollY}px);
//     // console.log(topScroll.style.width);
//     topScroll.style.width = scrollY;
//   } else {
//     topScroll.style.width = 0;
//   }
// };


