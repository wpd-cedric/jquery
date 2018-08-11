function openPopup(ID) {
   $('.popup').hide();
   $('.background').fadeIn(600);
   $("#" + ID).fadeIn(600);
}

function closePopup() {
	$('.background').fadeOut(300);
    $('.popup').fadeOut(300);
}