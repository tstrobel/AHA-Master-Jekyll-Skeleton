//jQuery Function
$.fn.setFullHeight = function() {
    var winWidth = $(window).width(),
        winHeight = $(window).height();
    var $el = $(this);
    $el.css({
        'width': 'auto',
        //'width': winWidth,
        'height': winHeight
    });
};