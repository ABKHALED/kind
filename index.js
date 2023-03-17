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
import { dat } from "./data.js";

let hero = document.querySelector("main");
let leftbtn = document.querySelector("main .left");
let rightbtn = document.querySelector("main .right");
let title = document.querySelector("main .container .text h1");
let span = document.querySelector("main .container .text span");
let counter = 0;
window.addEventListener("DOMContentLoaded", function () {
  hero.style.backgroundImage = `url(${dat[0].image})`;
  title.innerText = dat[0].headig;
  span.innerText = dat[0].spa;
});
leftbtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = dat.length - 1;
  }
  show(counter);
});
rightbtn.addEventListener("click", function () {
  counter++;
  if (counter >= dat.length) {
    counter = 0;
  }
  show(counter);
});
setInterval(() => {
  counter++;
  if (counter >= dat.length) {
    counter = 0;
  }
  show(counter);
}, 10000);

function show(counter) {
  hero.style.backgroundImage = `url(${dat[counter].image})`;
  title.innerText = dat[counter].headig;
  span.innerText = dat[counter].spa;
}

/////////
const links = document.querySelectorAll(".links li .dd");
console.log(links);
links.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    links.forEach((el) => {
      el.classList.remove("active");
    });
    console.log(e.currentTarget);
    e.currentTarget.classList.add("active");
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const container = document
      .querySelector(".main-nav .container")
      .getBoundingClientRect().height;
    const element = document.getElementById(id);
    const navHeight = mainNav.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    const fixedNav = mainNav.classList.contains(".main-nav.stick");
    const topNav = document
      .querySelector(".top-navBar")
      .getBoundingClientRect().height;
    if (navHeight > 83.39) {
      position = position + container - topNav;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    mainNav.classList.remove("active");
    btns.classList.remove("active");
  });
});

////////////////////////////////////
const pics = document.querySelectorAll(".customers .container .photos .box");
let ps = document.querySelectorAll(".customers .container .q p");
let spns = document.querySelectorAll(".customers .container .toltip span");
pics.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    pics.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let id = e.currentTarget.dataset.name;
    let span = document.querySelector(`.${id}`);
    let p = document.getElementById(id);
    ps.forEach((ele) => {
      ele.classList.remove("active");
    });
    p.classList.add("active");
    spns.forEach((ele) => {
      ele.classList.remove("active");
    });
    span.classList.add("active");
  });
});
let conter = 0;

setInterval(() => {
  conter++;
  if (conter >= pics.length) {
    conter = 0;
  }
  pics.forEach((ele) => {
    ele.classList.remove("active");
  });
  pics[conter].classList.add("active");
  ps.forEach((ele) => {
    ele.classList.remove("active");
  });
  ps[conter].classList.add("active");
  spns.forEach((ele) => {
    ele.classList.remove("active");
  });
  spns[conter].classList.add("active");
}, 10000);

const time = document.querySelector("footer .time");
let ti = new Date().getFullYear();
time.innerHTML = ti;

const about = document.querySelector("#about");
let num1 = document.querySelector(".number1");
let num2 = document.querySelector(".number2");
let num1T = 0;
let num2T = 0;
let aboutHeight = about.offsetTop;
console.log(aboutHeight);
window.addEventListener("scroll", function () {
  let ff = window.scrollY + 200;
  if (ff >= aboutHeight && num1.innerHTML < 2009 && num2.innerHTML < 220) {
    hh();
  }
});

window.addEventListener("load", function () {
  let ff = window.scrollY;
  if (ff >= aboutHeight) {
    hh();
  }
});
function hh() {
  let k = setInterval(() => {
    num1T = num1T + 41;
    if (num1T <= 2009) {
      num1.innerHTML = num1T;
    }
    if (num1T >= 2009) {
      clearInterval(k);
    }
  }, 35);
  let d = setInterval(() => {
    num2T = num2T + 10;
    if (num2T <= 120) {
      num2.innerHTML = num2T;
    }
    if (num2T >= 120) {
      clearInterval(d);
    }
  }, 130);
}
