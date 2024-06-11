window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-15%";
  }
}
let OpenNav = function (icon) {
  let Nav = document.querySelector("nav");
  if (Nav.style.right == "0%") {
    Nav.style.right = "-100%"

    icon.classList.add("fa-bars")
    icon.classList.remove("fa-times")
  } else {
    Nav.style.right = "0%"
    icon.classList.add("fa-times")
    icon.classList.remove("fa-bars")
  }
}
let search = document.querySelector(".search");
search.onclick = function () {
  document.querySelector(".container").classList.toggle('active');
}

function url(){
  location.href = "https://www.hay88.one/?inviteCode=4837260";
}