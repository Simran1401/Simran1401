

jQuery("document").ready(function ($) {
    var nav = $('#first-nav');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40.5) {
            nav.addClass("nav-hidden");
        } else {
            nav.removeClass("nav-hidden");
        }
    });
});

jQuery("document").ready(function ($) {
    var nav = $('#second-nav');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40.5) {
            nav.addClass("nav-hidden");
        } else {
            nav.removeClass("nav-hidden");
        }
    });
});
