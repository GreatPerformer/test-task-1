$(function() {
    $('.menu__item_services').mousemove(function() {
        $('.submenu__wrapper').css('display', 'block');
    }),
    $('.menu__item_services').mouseout(function() {
        $('.submenu__wrapper').css('display', 'none');
    }),
    $('.submenu__wrapper').mousemove(function() {
        $('.submenu__wrapper').css('display', 'block');
    }),
    $('.submenu__wrapper').mouseout(function() {
        $('.submenu__wrapper').css('display', 'none');
    }),
    $('.submenu__item_sites').click(function() {
        $('.submenu__wrapper').css('display', 'none'),
        $('.submenu2__wrapper').css('display', 'block');
    }),
    $('.submenu2__item__back').click(function() {
        $('.submenu2__wrapper').css('display', 'none'),
        $('.submenu__wrapper').css('display', 'block');
    })
});