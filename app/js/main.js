$(function(){

    // отображение меню, путем добавления класса showed
    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').toggleClass('showed');
    });

    // плагин Rangeslider для изменения величины площади(м2)
    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 250000,
        from: 100000,
        postfix: " м2",
    });

    // Плавный скролл к якорным ссылкам
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    // скрипт для кнопки возврата вверх страницы
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
    }); 

    // плагин Mixitup для сортировки элементов портфолио
    var mixer = mixitup('.portfolio__inner-items');
});