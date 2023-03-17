let parent = document.querySelector(".parent");
let sub = document.querySelector(".sub");

parent.addEventListener("click", function () {
  sub.classList.toggle("active");
});

const btns = document.querySelector(".main-nav .btns");
const mainNav = document.querySelector(".main-nav");

btns.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  btns.classList.toggle("active");
});
let topNav = document
  .querySelector(".top-navBar")
  .getBoundingClientRect().height;
window.addEventListener("scroll", function (e) {
  let d = window.scrollY;
  if (d >= topNav) {
    mainNav.classList.add("stick");
  } else {
    mainNav.classList.remove("stick");
  }
});

const time = document.querySelector("footer .time");
let ti = new Date().getFullYear();
time.innerHTML = ti;

const divs = document.querySelectorAll(".do .container .box .tip div");

divs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    divs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

const lis = document.querySelectorAll(".do .container .box ul li:not(.la)");

lis.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
