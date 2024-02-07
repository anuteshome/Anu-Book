'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);

//firebase contact From
const firebaseConfig = {
  apiKey: "AIzaSyALf-r1H8zdRqIQ2YheCtQGOJlpSgGyscQ",
  authDomain: "authentication-b0992.firebaseapp.com",
  databaseURL: "https://authentication-b0992-default-rtdb.firebaseio.com",
  projectId: "authentication-b0992",
  storageBucket: "authentication-b0992.appspot.com",
  messagingSenderId: "209647049275",
  appId: "1:209647049275:web:ff18da361de4c3d1c69a1e",
  measurementId: "G-R7LB2KM85V"
};

//initalize my project

firebase.initializeApp(firebaseConfig);