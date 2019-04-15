console.log('File 1')

let questions = document.getElementsByClassName("questions__img");
console.log(questions);
questions = [].slice.apply(questions);
console.log(questions);

questions.forEach(function (question){
    question.addEventListener('click', function () {
        this.classList.toggle('rotate')
        this.parentNode.parentNode.classList.toggle("questions__answer_on");
    })
})



let headerNavMenu = document.getElementsByClassName("header__nav-menu");
headerNavMenu[0].addEventListener("click", display);

function display() {
    let classToggle = document.querySelector(".nav-menu_none");
    classToggle.classList.toggle('nav-menu_block');
}


let iconImgSearch = document.getElementsByClassName("header__nav-menu-icon-img_search");
iconImgSearch[0].addEventListener("click", display2);

function display2() {
    let classToggle = document.querySelector(".header-search-field_none");
    classToggle.classList.toggle('header-search-field_block');
}

