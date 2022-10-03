// взаимодействие с корзиной
$(".cart__icon").on("click", function() {
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

$(".button_type_book button").on("click", function() {
    let target = $('.' + $(this).attr('data-atr'));
    $(target).addClass('show');
    $('.wrapper').css('filter', 'blur(5px)');
    return false;
})

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

//добавляем продукт в корзину
const updateLocalStorage = function () {
    try {
        localStorage.setItem('products', JSON.stringify(products));
    } catch(e) {
        if(e == QUOTA_EXCEEDED_ERR) {
            alert('Out of limit');
        };
    };
};

$('.button_type_order button').on('click', function() {
    let name = $(this).closest('.menu__card').children('.card__title').text();
    let price = $(this).closest('.menu__card').children('.card__img').children('.card__img-price').text();
    let url = $(this).closest('.menu__card').children('.card__img').children('.img-round').attr('src');

    console.log('name', name, 'url', url);

    let products = [];


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

