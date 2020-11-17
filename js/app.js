$(function(){
    
    /*=========Fixed header=========*/
    let intro = $("#intro");
    let introH = intro.innerHeight(); //закинули в переменную высоту элемента интро включая пединги
    let header = $("#header"); // let - для объявления переменной, если бы мы обращались к классу, то писали бы .header если к айди то #header
    let scrollPos = $(window).scrollTop(); // закидываем в переменную значение сколько мы проскролили от верха страницы
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll load resize", function(){ // означает, что при скроле будет выполняться функция или load - при обновлении страници, resize - еще проверяем на переключение с мобильной на компьютерную
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop(); //каждую секунду во время скрола получаем в эту переменную значение, сравниваем и добавляем или убираем класс фиксед
        checkScroll(scrollPos, introH); // вызываем функцию
    });
    
    function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    
    /*=========Smooth scroll плавный скрол=========*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault(); // отменяет стандартное поведение ссылки при клике
        
        let elementId = $(this).data('scroll'); // закидываем в переменную значение атрибута дата скрол елемента на который мы нажали
        let elementOffset = $(elementId).offset().top; // закидываем в переменную значение сколько пикселей от верха до значения которое в нашей переменной elementId
        
        nav.removeClass("show");
        
        $("html, body").animate({ // для плавного скрола
            scrollTop: elementOffset - 58 // скролит
        }, 700); //после запятой значение в секундах оно скролит 1000 = 1с
     });
    
     /*=========navToggle=========*/
    
    navToggle.on("click", function(event){
       event.preventDefault(); // убираем стандартное поведение ссылки при клике
       nav.toggleClass("show")
    });
    
    /*=========Reviews  https://kenwheeler.github.io/slick/=========*/
    let slider = $("#reviewsSlider");
    
    slider.slick({
      infinite: true, // это значит, что если элементы заканчиваются, ни начинаются заново
      slidesToShow: 1, // сколько хотим показывать отзывов за раз
      slidesToScroll: 1, // сколько мы будем скролить слайдеров при клике на скрол
      fade: true, // чтобы затемнялись наши отзывы, один исчезал, второй появлялся
      arrows: false, // стрелочки
      dots: true // показывать точечки(сколько у нас отзывов)
    });
    
    
});