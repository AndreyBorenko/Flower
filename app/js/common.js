$(function() {

    // Toggle menu
    $('.icon-burger').click(function (e) {
        console.log($(this).siblings('.main-menu'));
        $('.hidden-menu .main-menu').slideToggle();
    })

});
