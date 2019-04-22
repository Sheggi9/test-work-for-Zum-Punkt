console.log('File 1')


// JS
// let questions = document.getElementsByClassName("questions__img");
// console.log(questions);
// questions = [].slice.apply(questions);
// console.log(questions);
//
// questions.forEach(function (question){
//     question.addEventListener('click', function () {
//         this.classList.toggle('rotate')
//         this.parentNode.parentNode.classList.toggle("questions__answer_on");
//     })
// })


//JQ
$('.questions__img').click(function (event) {
    $(this).toggleClass('rotate')
    $(this).parents( "div.questions__block" ).find('.questions__answer').slideToggle(600,function () {
    });

})


// JS
// let headerNavMenu = document.getElementsByClassName("header__nav-menu");
// headerNavMenu[0].addEventListener("click", display);
//
// function display() {
//     let classToggle = document.querySelector(".nav-menu_none");
//     classToggle.classList.toggle('nav-menu_block');
// }

//JQ
$('.header__nav-menu').click(function (event) {
    var navMenu = $('.nav-menu')
    if (navMenu.is(':visible')) {
        $('.nav-menu').fadeOut(200);
    } else {
        $(navMenu).fadeIn();
    }
})


// JS
// let iconImgSearch = document.getElementsByClassName("header__nav-menu-icon-img_search");
// iconImgSearch[0].addEventListener("click", display2);
//
// function display2() {
//     let classToggle = document.querySelector(".header-search-field_none");
//     classToggle.classList.toggle('header-search-field_block');
// }
//JQ
$('.header__nav-menu-icon-img_search').click(function (event) {

    var searchField = $('.header-search-field')
    if (searchField.is(':visible')) {
        $(searchField).fadeOut(200);
        $(this).css( {
            background: "",
            boxShadow: '',
        } )
    } else {
        $(searchField).fadeIn();
        $(this).css( {
            background: "#ededed",
            boxShadow: '0 0 55px #ededed',
        } )
    }
})

//JQ
$("input.header-search-field__input").keypress(function( event ) {
    if ( event.which == 13 ) {
        event.preventDefault();
        var searchInputVal = $(this).val()
        var searchInputValTrim = $.trim(searchInputVal).length

        // console.log(searchInputVal)
        // console.log(searchInputValTrim)

        if (searchInputValTrim < 5) {
            $(this).addClass('search-input-err');


            if (searchInputValTrim == 0) {
                $(this).val('').attr({
                    placeholder: "ПОЛЕ ПОИСКА ПУСТОЕ"
                })
                $(this).focus().focusout(function () {
                    $(this).removeClass('search-input-err').attr({
                        placeholder: "ПОИСК ТОВАРОВ"
                    });
                })
            }

            if (searchInputValTrim >= 1 && searchInputValTrim < 5) {
                $(this).val('').attr({
                    placeholder: "МИНИМУМ 5 СИМВОЛОВ"
                })
                $(this).focus().focusout(function () {
                    $(this).removeClass('search-input-err').attr({
                        placeholder: "ПОИСК ТОВАРОВ"
                    });
                })
            }
        } else {
            console.log('Вы искали ' + $(this).val())
            alert('Вы искали ' + $(this).val())
            $(this).val('').attr({
                placeholder: "ПОИСК ТОВАРОВ"
            })
            $(this).removeClass('search-input-err');
        }
    }
})
$(".header-search-field-img").click(function( event ) {
        var searchInput = $('.header-search-field__input')
        var searchInputVal = $('.header-search-field__input').val()
        var searchInputValTrim = $.trim(searchInputVal).length

        // console.log(searchInputVal)
        // console.log(searchInputValTrim)

        if (searchInputValTrim < 5) {
            $(searchInput).addClass('search-input-err');


            if (searchInputValTrim == 0) {
                $(searchInput).val('').attr({
                    placeholder: "ПОЛЕ ПОИСКА ПУСТОЕ"
                })
                $(searchInput).focus().focusout(function () {
                    $(searchInput).removeClass('search-input-err').attr({
                        placeholder: "ПОИСК ТОВАРОВ"
                    });
                })
            }

            if (searchInputValTrim >= 1 && searchInputValTrim < 5) {
                $(searchInput).val('').attr({
                    placeholder: "МИНИМУМ 5 СИМВОЛОВ"
                })
                $(searchInput).focus().focusout(function () {
                    $(searchInput).removeClass('search-input-err').attr({
                        placeholder: "ПОИСК ТОВАРОВ"
                    });
                })
            }
        } else {
            console.log('Вы искали ' + $(searchInput).val())
            alert('Вы искали ' + $(searchInput).val())
            $(searchInput).val('').attr({
                placeholder: "ПОИСК ТОВАРОВ"
            })
            $(searchInput).removeClass('search-input-err');
        }
})

//JQ
$(".main-block__delivery-options-form-button").click(function( event ) {
        var searchInput = $(".main-block__delivery-options-form-input")
        var searchInputVal = $(".main-block__delivery-options-form-input").val()
        var searchInputValTrim = $.trim(searchInputVal).length

        // console.log(searchInputVal)
        // console.log(searchInputValTrim)

        if (searchInputValTrim < 2) {
            $(searchInput).addClass('search-input-err');


            if (searchInputValTrim == 0) {
                $(searchInput).val('').attr({
                    placeholder: "ПОЛЕ ПОИСКА ПУСТОЕ"
                })
                $(searchInput).focus().focusout(function () {
                    $(searchInput).removeClass('search-input-err').attr({
                        placeholder: "Санкт-Петербург?"
                    });
                })
            }

            if (searchInputValTrim >= 1 && searchInputValTrim < 2) {
                $(searchInput).val('').attr({
                    placeholder: "МИНИМУМ 2 СИМВОЛА"
                })
                $(searchInput).focus().focusout(function () {
                    $(searchInput).removeClass('search-input-err').attr({
                        placeholder: "Санкт-Петербург?"
                    });
                })
            }
        } else {
            console.log('Ваш город: ' + $(searchInput).val())
            alert('Ваш город: ' + $(searchInput).val())
            $(searchInput).val('').attr({
                placeholder: "Санкт-Петербург?"
            })
            $(searchInput).removeClass('search-input-err');
        }
})
$("input.main-block__delivery-options-form-input").keypress(function( event ) {
    if ( event.which == 13 ) {
        event.preventDefault();
        var searchInputVal = $(this).val()
        var searchInputValTrim = $.trim(searchInputVal).length

        // console.log(searchInputVal)
        // console.log(searchInputValTrim)

        if (searchInputValTrim < 2) {
            $(this).addClass('search-input-err');


            if (searchInputValTrim == 0) {
                $(this).val('').attr({
                    placeholder: "ПОЛЕ ПОИСКА ПУСТОЕ"
                })
                $(this).focus().focusout(function () {
                    $(this).removeClass('search-input-err').attr({
                        placeholder: "Санкт-Петербург?"
                    });
                })
            }

            if (searchInputValTrim >= 1 && searchInputValTrim < 2) {
                $(this).val('').attr({
                    placeholder: "МИНИМУМ 2 СИМВОЛОВ"
                })
                $(this).focus().focusout(function () {
                    $(this).removeClass('search-input-err').attr({
                        placeholder: "Санкт-Петербург?"
                    });
                })
            }
        } else {
            console.log('Вы искали ' + $(this).val())
            alert('Вы искали ' + $(this).val())
            $(this).val('').attr({
                placeholder: "Санкт-Петербург?"
            })
            $(this).removeClass('search-input-err');
        }
    }
})





