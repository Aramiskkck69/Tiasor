$(document).ready(function(){
    var img_services = $('#section3 .col-md img');
    var boton = $('#section3 .col-md button');
    var div_services = $('#section3 .row .x');
    var cartera = $('.card-content');

//***********************************  Section 3 **************************
   $(div_services).mouseover(function() {
       $(":button", this).css({
           "background": "#b91817"});
       $(this).css({
            "-webkit-box-shadow": "4px 7px 9px 0px rgba(0,0,0,0.3)",
            "box-shadow": "4px 7px 9px 0px rgba(0,0,0,0.3)",
            "background": "#f6f5f5"
       });

    });
    $(div_services).mouseout(function() {
        $(":button", this).css({
            "background": "#333333"
        });
        $(this).css({
            "box-shodow" : "none",
            "-webkit-box-shadow": "none",
            "background": "none"
        });
    });

    $("#clients-logo").owlCarousel({
        autoPlay: 3000,
        items : 5,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,5],
    });




});







