let ham = document.getElementById("hamburger_btn");
let mobile_menu = document.getElementById("mobile_menu");
let blur_div = document.getElementById("blur_effect");
let stat;
ham.addEventListener("click", () => {
  if (stat == 0 || stat == undefined) {
    console.log("dakhel");
    mobile_menu.className = "hidden_menu show";
    blur_div.className = "blur show";
    ham.src = "/images/icon-close.svg";
    stat = 1;
  } else {
    mobile_menu.className = "hidden_menu";
    blur_div.className = "blur";
    ham.src = "/images/icon-hamburger.svg";
    stat = 0;
  }
});
