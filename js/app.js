// interactive with cart
$(".header__cart").on("click", function() {
    let target = $(this).attr('data-trigger');
    $(target).removeClass('hidden');
    $(target).addClass('show');
    $('.cart__close-btn img').on('click', function () {
        $(target).removeClass('show');
        $(target).addClass('hidden'); 
        return false;
    })
    return false;
    
});

//scroll to menu by button
$(".btn-menu").click(function() {
    $('html, body').animate({
        scrollTop:$(".menu").offset().top
    }, 1000)
    return false;
})

// scroll on page
$(".nav__list a").on("click", function() {      
    let href = $(this).attr('href');

    $("html, body").animate({                   
        scrollTop:$(href).offset().top          
    }, {
        duration: 500,                  
        easing: "linear"                       
    });
    return false;
});

$('.scrollUp-btn').hide();
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('.scrollUp-btn').fadeIn();
        } else {
            $('.scrollUp-btn').fadeOut();
        }
    })
    $('.scrollUp-btn a').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })
})

// open modal window to book, close modal window
$(".button_type_book button").on("click", function() {
    let target = $('.' + $(this).attr('data-atr'));
    $(target).addClass('show');
    $('.wrapper').css('filter', 'blur(5px)');

    $('.modal__btn_close img').click(function () {
        $(target).removeClass('show');
        $('.wrapper').css('filter', 'blur(0)');
        return false
    })
    
    $(".modal").click(function() {
        $(target).removeClass("show");
        $('.wrapper').css('filter', 'blur(0)');
        return false;

    })

    $(".modal__container").click(function(evt) {
        evt.stopPropagation();
    })

    return false;
})


//add products to cart
let sum = $('.sum').text();

let sumToNum = Number(sum);
$('.button_type_order button').on('click', function() {
    let name = $(this).closest('.menu__card').children('.card__title').text();
    let price = $(this).closest('.menu__card').children('.card__img').children('.card__img-price').text();
    let url = $(this).closest('.menu__card').children('.card__img').children('.img-round').attr('src');
    
    sumToNum += Number(price);

    $('.sum').text(String(sumToNum));



    let item = `
        <div class="cart__list">
            <div class="cart__item">
                <div class="item__img">
                    <img src=${url}>
                </div>
            <div class="item__name">${name}</div>
            <div class="item__price">${price}</div>
            </div>
        </div> 
    `
    $('.cart__list-wrapper').append(item);
})

//form validation
let validVar = {
    validName : false,
    validEmail: false,
    validPhone: false,
};
 $('form').submit(function(evt) {
    evt.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();

    let {validName, validEmail, validPhone} = validVar;

    if(name === '') {
        $("#name").addClass('has-error');

    }
    else {
        validName = true;
        $("#name").removeClass('has-error');
    }
    if (email === '') {
        $("#email").addClass("has-error");
    }
    else {
        validEmail = true;
        $("#email").removeClass('has-error');

    }
    if(phone === '') {
        $("#phone").addClass("has-error");
    }
    else {
        validPhone = true;
        $("#phone").removeClass('has-error');
    }

    if(validName && validEmail && validPhone) {
        console.log('should submit')
        $('form').unbind('submit').submit();
    }
})

// open burger menu 

$("#navToggle").click(function (evt) {
    evt.preventDefault();
    $(".nav").toggleClass('show');
    
})

//open feedback form
$(".btn-feedback").click(function() {
    let target = $(this).attr('data-atr');
    $(target).addClass('show');

    $('.feedback-modal__btn_close img').click(function () {
        $(target).removeClass('show');
        return false
    })
})