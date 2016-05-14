$(document).ready(function()
{	
	
	// $('a[href^="#"]').on('click',function (e) {
	//     e.preventDefault();

	//     var target = this.hash;
	//     $target = $(target);

	//     $('html, body').stop().animate({
	//         'scrollTop': $target.offset().top
	//     }, 900, 'swing', function () {
	//         window.location.hash = target;
	//     });
	// });

	scalePic();
	
	$(window).on("resize", scalePic);
	
	// $.stellar({
	// 	horizontalScrolling: false,
	//     verticalOffset: 0,
	//     parallaxBackgrounds: true,
	//     scrollProperty: 'scroll',
	//     responsive: true
	// });

		$(".image-wrapper").hover(function(){
			$(this).find("div:first").css({"opacity": 0.85});
		}, function(){
			$(this).find("div:first").css({"opacity": 0});
		});

	function scalePic() {
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			// var picheight = $("#picture").height();
			//console.log(picheight);
			// var textheight = $(".profiletext").height();
			//console.log(textheight);
			// var diff = picheight - textheight;

			
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

        //  if(window.innerWidth < 700) {
        // 	var content = $('.intro-wrapper');
	       //  var top = (window.innerHeight - content.height()) / 2;
	       //  content.css('margin-top', Math.max(0, top) + 'px');
        // } else {
        // 	var content = $('.intro-wrapper');
        // 	content.css('margin-top',0 + 'px');
        // }
        

		// $(".content").css({
		// 	'height' : windowHeight*0.6,
		// 	'width' : windowWidth
		// });

		// $(".profile").css({
		// 	'height' : windowHeight,
		// 	'width' : windowWidth
		// });

		// $(".tech").css({
		// 	'height' : windowHeight,
		// 	'width' : windowWidth
		// });

		// $(".travel").css({
		// 	'height' : windowHeight,
		// 	'width' : windowWidth
		// });

		// $("#picture").css({
		// 	'height' : windowHeight*0.8
		// });


		// $("#pic-text").css({
		// 	'height' : windowHeight*0.8,
		// 	"line-height": windowHeight*0.8,
		// 	"vertical-align": "middle",
		// 	"display": "table-cell"
		// });

		// $("#camerapic").css({
		// 	'height' : windowHeight*0.55
		// });

		// $("#arrow").css({
		// 	'height' : windowHeight*0.08	
		// });

		// var textPadding = windowHeight*0.25;
		// $(".text").css({"padding-top": textPadding});
			
		
		// var docScrollTop = $(document).scrollTop();
		// var docScrollLeft = $(document).scrollLeft();
		
		// $(document).on("scroll", function(){

		// 	var ensure = $("#open").height();
		// 	if(ensure === 0)
		// 	{
		// 		$('body').css({'position': "relative"});

		// 	}

		// 	var docScrollTop = $(document).scrollTop();
		// 	var namePosition = $("#name").offset();
		// 	if(namePosition.top - docScrollTop <= 0)
		// 	{
		// 		$(".navbar-fixed-top").css({"background-color": "#212121"});
		// 	}

		// 	if(namePosition.top - docScrollTop > 0)
		// 	{
		// 		$(".navbar-fixed-top").css({"background-color": "transparent"});
		// 	}
		
		// });

		// if ('ontouchstart' in window)
  //     	{
  //       	// Set the correct body class
	 //        $('#section2').removeClass('no-touch').addClass('touch');
	        
	 //        // Add the touch toggle to show text
	 //        $('div.boxInner img').click(function(){
	 //          $(this).closest('.boxInner').toggleClass('touchFocus');
	 //        });
  //    	 }
	}
	setTimeout(function(){ $(".loading").css("display", "none"); }, 2000);
	
})