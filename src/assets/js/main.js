$(function() {

	"use strict";
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};	
	fullHeight(); 
	console.log('salam')
	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});