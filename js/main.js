jQuery( document ).ready(function( $ ) {
    $('.fullHeight').setFullHeight();

    $(window).resize(function(){
        $('.fullHeight').setFullHeight();
    });


});