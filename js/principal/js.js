$(document).ready(function(){
    var img_services = $('#section3 .col-md img');
    var boton = $('#section3 .col-md button');
    var div_services = $('#section3 .row .col-md');

   $(div_services).mouseover(function() {
       $(":button", this).css({
           "background": "#b91817"});
       $(this).css({
            "-webkit-box-shadow": "4px 7px 9px 0px rgba(0,0,0,0.3)",
            "box-shadow": "4px 7px 9px 0px rgba(0,0,0,0.3)"
       });

    });
    $(div_services).mouseout(function() {
        $(":button", this).css({
            "background": "#333333"
        });
        $(this).css({
            "box-shodow" : "none",
            "-webkit-box-shadow": "none"
        });
    });


});







