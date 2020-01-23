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

// Закрытие меню при клике на свободное пространство
    $(window).on('click', e => {
        let menu = $('.header__menu-list');
        let burger = $('.header__menu-btn');
        if(!menu.is(e.target) && !burger.is(e.target)
        && menu.hasClass('showed') && burger.hasClass('active')){
           burger.removeClass('active');
           menu.removeClass('showed');
        }
     });

// плагин Rangeslider для изменения величины площади(м2)
    $('.js-range-slider').ionRangeSlider({
        min: 0,
        max: 25000,
        from: 10000,
        postfix: " м2",
    });

// кастомизированный скроллбар
    $('.scrollbar-rail').scrollbar();

// Плавный скролл к якорным ссылкам
    $('a[href^="#"]').click(function(){
        var _href = $(this).attr("href");
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
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

// ОТправка данных из формы


// настойка калькулятора услуги

    // поле rangeSlider
    let areaRange = document.querySelector('.variants__area');
    // ползунок rangeSlider
    let handlerRange = document.querySelector('.irs-handle.single');
    // элемент с значением площади в rangeSlider
    let squareRange = document.querySelector('.irs-single');
    // поле выбора пакета услуги
    let packageArea = document.querySelector('.variants__package');
    // кнопки поля выбора пакета услуги
    let packageAreaBtns = document.querySelectorAll('.package__item-btn');
    // элемент с площадью на странице 
    let squareResult = document.querySelector('.js-square');
    // элемент с тарифом на странице 
    let tarifResult = document.querySelector('.js-tarif');
    // элемент с итоговой стоимостью на странице 
    let coastResult = document.querySelector('.js-coast');
    // тарифные ставки
    let tarif = [750, 900, 1250];

    // ***** Функции

    // удаление класса
    let delClass = (el, nameClass) => {
        el.classList.remove(nameClass);
    }

    // добавление класса
    let addClass = (el, nameClass) => {
        el.classList.add(nameClass);
    }

    // разбивка числа на разряды(возвращаем строку)
    let beautyfyNum = num => {
        return String(num).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    }
    // преобразование строки с площадбю в число
    let strToNum = str => {
        // убираем пробел и постфикс из строки => пребразуем в число
        let newStr = (str.slice(0, str.length - 3));

        return num = parseInt( (newStr.split(' ')).join('') );
    }

    // определение индекса выбранного тарифа
    let tarifIndex = elems => {
        for (let i = 0; i < elems.length; i++) {
            if(elems[i].classList.contains('active')) {
                return i;
            }
        }
    }

    // подсчет стоимости услуги
    let coastCalculate = (str, elems) => {
        // итоговая стоимость
        let result;
        // значение площади
        let squareVal =  strToNum(str);
        // индекс выбранного тарифа
        let i = tarifIndex(elems);
        
        return result = tarif[i] * squareVal;
    }

    //вызов калькулятора
    let showPrice = (str, elems) => {
        let coast = coastCalculate(str, elems);
        // заносим данные на страницу
        coastResult.textContent = `${beautyfyNum(coast)} тг`;
    }

    // *** Обработчики
    areaRange.addEventListener('click', e => {
        let target = e.target;

        if( target === handlerRange ) {

            // получим значение выбранной площади
            let squareValue = squareRange.textContent;
            // вставляем значение на страницу в поле с площадью
            squareResult.textContent = squareValue;
            
            showPrice(squareValue, packageAreaBtns);

        }
    });

    packageArea.addEventListener('click', e => {
        let target = e.target;

        if( target.classList.contains('package__item-btn') ){
            // убираем класс active
            packageAreaBtns.forEach(item => {
                delClass(item, 'active');
            });
            // добавляем active кнопке на которую кликнули
            addClass(target, 'active');
            // определяем индекс тарифа
            let i = tarifIndex(packageAreaBtns);
            // заносим значение тарифа на страницу
            tarifResult.textContent = `${tarif[i]} тг`;
        }

        // получим значение выбранной площади
        let squareValue = squareRange.textContent;
        // вставляем значение на страницу в поле с площадью
        squareResult.textContent = squareValue;

        showPrice(squareValue, packageAreaBtns);
    });

});