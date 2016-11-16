// Calling Accessible Menu
/*global jQuery */
if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {
            // initialize the megamenu
            //$('.dropdown').accessibleMegaMenu();

            $('.megamenu').accessibleMegaMenu();

            // hack so that the megamenu doesn't show flash of css animation after the page loads.
            setTimeout(function () {
                $('body').removeClass('init');

            }, 100);
        });
    }(jQuery));
}

jQuery( document ).ready(function( $ ) {
    $('.fullHeight').setFullHeight();

    $(window).resize(function(){
        $('.fullHeight').setFullHeight();
    });

    //Chosen select
    jQuery("select.chosen-select").chosen({width:'100%'});

    if($.fn.chosen){
        if($('.chosen-select').length){
            jQuery('.chosen-select').on('change', function (evt, params) {
                var selectedValue = params.selected;
                var arr = [];
                console.log(this.value);
                arr.push(selectedValue);
                arr.push( $( ".chosen-select option:selected" ).text());
                $('#chosen-output').text(arr.join(", "));
                console.log($( ".chosen-select option:selected" ).text());//output the text value
            });
        }
    }

    //Datatables
    if($.fn.dataTable){
        $('.dataTable').dataTable();
        $('.dataTables_length select.form-control').chosen();
    }

    //Datepicker call
    if($.fn.datepicker){
        if($('.datepicker').length){
            $('.datepicker').datepicker({
                autoclose: true
                //,endDate: '-1d'
            });
        }
    }

    //Radio button value
    $('.radio').on('toggle',function(e) {
        var $el = $(e.target);
        var elname = e.target.name;
        console.log($el.val());
        console.log(elname);
    });

    //Checkbox button value
    $('.checkbox').on('toggle',function(e) {
        var $el = $(e.target);
        var elname = e.target.name;
        console.log($el.val());
        console.log(elname);
        console.log($el.prop("checked"));
    });



});