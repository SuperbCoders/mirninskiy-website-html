var mySwiper = new Swiper('.news-slider-wrap', {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

$(document).ready(function () {
    $("body").on("click", ".nav-catalog", function (event) {
        $(".nav-dropdown").toggleClass("active");
    }).on("click", ".nav-search, .nav-search-dropdown-close", function (event) {
        $(".nav-search-dropdown").toggleClass("active");
    }).on("click", ".nav-link-mobile", function (event) {
        $(".nav-list").toggleClass("active");
    });
});
