'use strict';

console.log('File 1');

var questions = document.getElementsByClassName("questions__img");
console.log(questions);
questions = [].slice.apply(questions);
console.log(questions);

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        this.classList.toggle('rotate');
        this.parentNode.parentNode.classList.toggle("questions__answer_on");
    });
});

var headerNavMenu = document.getElementsByClassName("header__nav-menu");
headerNavMenu[0].addEventListener("click", display);

function display() {
    var classToggle = document.querySelector(".nav-menu_none");
    classToggle.classList.toggle('nav-menu_block');
}

var iconImgSearch = document.getElementsByClassName("header__nav-menu-icon-img_search");
iconImgSearch[0].addEventListener("click", display2);

function display2() {
    var classToggle = document.querySelector(".header-search-field_none");
    classToggle.classList.toggle('header-search-field_block');
}

console.log('File 2');