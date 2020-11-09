$(document).ready(function () {
    $('body').on('click', '.tabs-head', function () {
        let tabs = $(this).data('tabs');
        $('.tabs-head, .tabs-dropdown').removeClass('active');
        $(this).addClass('active');
        $('#'+tabs).addClass('active');
    });
});
