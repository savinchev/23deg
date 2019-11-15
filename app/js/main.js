$(function(){

    // отображение меню, путем добавления класса showed
    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').toggleClass('showed');
        $('.header__menu-btn').toggleClass('active');
    });

    // Закрытие меню при клике на пункт меню
    $('.header__menu-list a').on('click', () => {
        $('.header__menu-btn').removeClass('active');
        $('.header__menu-list').removeClass('showed');
    });

    // // Закрытие меню при клике на свободное пространство
    // $(window).on('click', (e) => {
    //     var menu = $('.header__menu-list');
    //     var burger = $('.header__menu-btn');
    //     if(!menu.is(e.target) && !burger.is(e.target)
    //     && menu.hasClass('showed') && burger.hasClass('active')){
    //        $('.burger').removeClass('active');
    //        $('.header__menu-list').removeClass('showed');
    //     }
    //  });

    // плагин Rangeslider для изменения величины площади(м2)
    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 250000,
        from: 100000,
        postfix: " м2",
    });

    $('.scrollbar-rail').scrollbar();

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