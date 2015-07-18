$(document).ready(function() {
	$('.tab-section').hide();
    $('.tabs-nav li a').bind('click', function(e){
        $('.tabs-nav li a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
    }).filter(':first').click();

    //$('.mm').hide();
    //$('.nav-main li a').click(function(e) {
    //	$('.mm').slideToggle('slow');
    //	e.preventDefault();
   //});


});