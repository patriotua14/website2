// JavaScript File
$('.iconformenu').click(function () {
    $('.iconformenu').toggleClass('animat');
    $('.navbar').toggleClass('animat1');
    $('.myname').toggleClass('animat2');
    $('.about').animate({
        "right": "-200px"
    }, 500).hide();
    $('.portfolio').animate({
        "top": "-200px"
    }, 500).hide();
    $('.contact').animate({
        "right": "-200px"
    }, 500).hide();
    
});

//$('.iconformenu').click(function () {
  // $('iconformenu').removeClass('animat');
  // $('iconformenu').scrollLeft(50);
//400);
 
$('#about').click(function () {
  $('.ab').addClass('about');
    $('.about').animate( {
        "right": "100px",
        "top": "50px"
    }, 600);
    $('.about').show();
    $('#contant').removeClass('.contact');
    $('#portfolio').removeClass('.portfolio');
});
 
/* $('#about').click(function () {
         $('.about').animate({
        "right": "-200px"
    }, 500).hide();});*/
    
    $('#portfolio').click(function () {
    $('.por').addClass('portfolio');
    $('.portfolio').animate( {
        "right": "100px",
        "top": "50px"
    }, 500);
    $('.portfolio').show();
    $('#contant').removeClass('contact');
    $('#portfolio').removeClass('.portfolio');
    });    
    
    $('#contact').click(function () {
    $('.con').addClass('contact');
    $('.contact').animate( {
        "right": "100px",
        "top": "50px"
    }, 600);
    $('.contact').show();
    $('#contant').removeClass('.contact');
    $('#portfolio').removeClass('.portfolio');
});
    
    $('.contact' ).click(function () {
         $('.contact').hide();
        
    });