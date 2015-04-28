//Hook up the tweet display

$(document).ready(function() {
	$("#countdown").countdown("2015/05/03",function(e){
		//$(this).text(e.strftime(" %D days %H hours %M minutes %S seconds"));
		$(".days").text(e.strftime("%D"));
		$(".hours").text(e.strftime("%H"));
		$(".minutes").text(e.strftime("%M"));
		$(".seconds").text(e.strftime("%S"));
	});
});
