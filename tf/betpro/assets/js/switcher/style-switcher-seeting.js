jQuery(document).on('ready', function () {
    "use strict";

    $('.switch-button').on('click', function () {
        $('.color-panel').toggleClass('close');
    });

    $('.color-panel ul li').on('click', function () {
        $('.color-panel ul li').removeClass('active');
        $(this).toggleClass('active');
    });

});