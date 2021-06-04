$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    })

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    })


    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: `<button type="button" class="article-slider__arrow article-slider__arrowleft">
        <img src="images/arrow-slide-left.svg" alt="arrow left">
        </button>`,
        nextArrow: `<button type="button" class="article-slider__arrow article-slider__arrowright">
        <img src="images/arrow-slide-right.svg" alt="arrow right">
        </button>`,
    });


    // Gallery Filtering
    let containerEl = document.querySelector('.gallery__inner');
    let mixer;

    if (containerEl) {
        mixer = mixitup(containerEl, {
            load: {
                filter: '.living'
            }
        });
    }
})