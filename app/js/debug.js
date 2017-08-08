var PageBg = "img/Mountains Landing Page.png";

$(document).ready(function(){
	console.log("debag start");

	// Create button
	$(".section").first().before('<button class="ayTest">OFF</button>');

	// Load styles
	$(".ayTest").css({
  		position: 'fixed',
  		top: '0',
  		left: '0',
  		zIndex: '100',
  		opacity: '1',
  		width: '35px',
  		backgroundColor: '#FFF',
  		color: '#000',
  		margin: '0',
  		padding: '0',
  		fontSize: '10px',
  		border: '2px solid #000',
  		height: '35px',
  		lineHeight: '35px'
	});
	$('html').css({
   		backgroundRepeat: 'no-repeat',
    	backgroundPosition:  '50% 0'
	})

	// button hover
	$(".ayTest").bind({
  		mouseenter: function(e) {
  			$(this).css('backgroundColor', '#ccc');
  		},
  		mouseleave: function(e) {
  			$(this).css('backgroundColor', '#fff');
  		}
	});

	// button click
	$(".ayTest").bind("click", function(){
		console.log($("body").css("opacity"));
		if ($("body").css("opacity") == 1) {
			$("body").css("opacity", 0.5);
			$("html").css('backgroundImage', 'url( "' + PageBg + '" )');
			$(this).text("on");
		} else {
			$("body").css("opacity", 1);
			$("html").css('backgroundImage', 'url()');
			$(this).text("off");
		}
	})
})