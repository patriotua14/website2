// JavaScript File
$('.iconformenu').click(function () {
    $('.iconformenu').toggleClass('animat');
    $('.navbar').toggleClass('animat1');
    $('.myname').toggleClass('animat2');
    $('.about').animate({
        "top": "-200px"
    }, 500).hide();
    $('.portfolio').animate({
        "top": "-200px"
    }, 500).hide();
    $('.contact').animate({
        "top": "-200px"
    }, 500).hide();
    
});

 var timeAnimate = 400;
 
$('#about').click(function () {
    $('.about').addClass('about1');
    $('.about').animate( {
        "left": "50px",
        "top": "50px"
    }, 600);
    $('.navbar').removeClass('animat1');
    $('.about').show();
});

    $('#portfolio').click(function () {
    $('.portfolio').addClass('portfolio');
    $('.portfolio').animate( {
        "left": "50px",
        "top": "50px"
    }, 500);
    $('.portfolio').show();
    $('.navbar').removeClass('animat1');
    });    
    
    $('#contact').click(function () {
    $('.contact').addClass('contact1');
    $('.contact').animate( {
        "left": "40px",
        "top": "50px"
    }, 600);
    $('.contact').show();
    $('.navbar').removeClass('animat1');
    });
    
    $('.canhelpclose' ).click(function () {
         $('.contact').animate({
             "right": "-200px"
         }, 400).hide(timeAnimate);
    $('.iconformenu').removeClass('animat');
    $('.myname').toggleClass('animat2');
    });
    
    $('.canhelpclose' ).click(function () {
         $('.portfolio').animate({
             "right": "-200px"
         }, 400).hide(timeAnimate);
    $('.iconformenu').removeClass('animat');
    $('.myname').toggleClass('animat2');
    });
    
    $('.canhelpclose' ).click(function () {
         $('.about').animate({
             "right": "-200px"
         }, 400).hide(timeAnimate);
         $('.about').removeClass('.about1')
    $('.iconformenu').removeClass('animat');
    $('.myname').toggleClass('animat2');
        
    });