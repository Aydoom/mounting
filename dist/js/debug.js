$(document).ready(function(){
	$(".test").on("click", function(){
		console.log($("body").css("opacity"));
		if ($("body").css("opacity") == 1) {
			$("body").css("opacity", 0.5);
			$(".test").text("on");
		} else {
			$("body").css("opacity", 1);
			$(".test").text("off");
		}
	})
})