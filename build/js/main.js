'use strict';

console.log('File 1');

foo1.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_1_none");
    getClass.classList.toggle('questions__answer_block');
};
foo2.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_2_none");
    getClass.classList.toggle('questions__answer_block');
};
foo3.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_3_none");
    getClass.classList.toggle('questions__answer_block');
};
foo4.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_4_none");
    getClass.classList.toggle('questions__answer_block');
};
foo5.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_5_none");
    getClass.classList.toggle('questions__answer_block');
};
foo6.onclick = function () {
    this.classList.toggle('rotate');
    var getClass = document.querySelector(".questions__answer_6_none");
    getClass.classList.toggle('questions__answer_block');
};

var button = document.getElementsByClassName("header__nav-menu");
button[0].addEventListener("click", display);

function display() {
    var bu = document.querySelector(".nav-menu_none");
    bu.classList.toggle('nav-menu_block');
}

var button = document.getElementsByClassName("header__nav-menu-icon-img_search");
button[0].addEventListener("click", display2);

function display2() {
    var getClass = document.querySelector(".header-search-field_none");
    getClass.classList.toggle('header-search-field_block');
}

console.log('File 2');