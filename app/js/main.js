$(function(){

    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').toggleClass('showed');
    });

    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 250000,
        from: 100000,
        postfix: " м2",
    });


    var mixer = mixitup('.portfolio__inner-items');
});