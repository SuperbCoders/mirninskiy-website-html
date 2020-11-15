var mySwiper = new Swiper('.news-slider-wrap', {
    loop: false,
    spaceBetween: 30,
    slidesPerView: 5,

    // Navigation arrows
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev',
    },
});

$(document).ready(function () {
    $("body").on("click", ".nav-catalog", function (event) {
        $(".nav-dropdown").toggleClass("active");
    }).on("click", ".nav-search, .nav-search-dropdown-close", function (event) {
        $(".nav-search-dropdown").toggleClass("active");
    });
});
