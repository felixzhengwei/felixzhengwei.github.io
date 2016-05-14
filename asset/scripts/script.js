$(document).ready(function()
{	
	scalePic();
	
	$(window).on("resize", scalePic);

		$(".image-wrapper").hover(function(){
			$(this).find("div:first").css({"opacity": 0.85});
		}, function(){
			$(this).find("div:first").css({"opacity": 0});
		});

	function scalePic() {
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			
		$("#one").css({
			'height' : windowHeight,
			'width' : windowWidth
		});

		$("#two").css({
			'height' : windowHeight*0.4,
			'width' : windowWidth
		});

		$("#three").css({
			'height' : windowHeight*0.4,
			'width' : windowWidth
		});

		var content = $('.titleOne');
            var top = (window.innerHeight - content.height()) / 2;
            content.css('top', Math.max(0, top) + 'px');

        var content = $('.titleTwo');
        var top = (window.innerHeight - content.height()) / 2;
        content.css('top', Math.max(0, top) + 'px');

        if(window.innerWidth < 700) {
        	var content = $('.top-message');
	        var top = (window.innerHeight - content.height()) / 2;
	        content.css('margin-top', Math.max(0, top) + 'px');
        } else {
        	var content = $('.top-message');
        	content.css('margin-top',0 + 'px');
        }
	}
	setTimeout(function(){ $(".loading").css("display", "none"); }, 2000);
	
})