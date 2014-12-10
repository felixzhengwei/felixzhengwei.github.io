$(document).ready(function()
{	
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	scalePic();

	$(window).on("resize", scalePic);

	function scalePic()
	{
		var height = $("#open").height();
		var picheight = $(".camerapic").height();

			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			
		if (!(height === 0))
		{
			

			$("#open").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			

			$('body').addClass('noscroll');
			//$("#content").addClass('nodisplay');
			

		}

		$(".cd-fixed-bg").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".profile").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".tech").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$(".travel").css({
				'height' : windowHeight,
				'width' : windowWidth
			});

			$("#picture").css({
				'height' : windowHeight*0.6
			});

			$("#camerapic").css({
				'height' : windowHeight*0.55,

			});
			

			var textPadding = windowHeight*0.25;
			$(".text").css({"padding-top": textPadding});

		
		var docScrollTop = $(document).scrollTop();
		var docScrollLeft = $(document).scrollLeft();
/*
		var minTop = docScrollTop;
		var maxTop = windowHeight + docScrollTop;
		var minLeft = docScrollLeft;
		var maxLeft = windowWidth + docScrollLeft;

	
		var elementOneHeight = elementOne.height()
		var elementOneWidth = elementOne.width();
		var elementOneOffset = elementOne.offset();
		*/
		$(document).on("scroll", function(){

			var ensure = $("#open").height();
			if(ensure === 0)
			{
				$('body').css({'position': "relative"});

			}

			var docScrollTop = $(document).scrollTop();
			var namePosition = $("#name").offset();
			if(namePosition.top - docScrollTop <= 0)
			{
				$(".navbar-fixed-top").css({"background-color": "#212121"});
			}

			if(namePosition.top - docScrollTop > 0)
			{
				$(".navbar-fixed-top").css({"background-color": "transparent"});
			}
		
		});

	}

	$("#send").click(function(){

			$("#open").css({
				"height": 0,
			});

			setTimeout(function(){$("#open").css({
				"display": "none"
			});}, 500);

			$("#text").css({
				"display":"none"
			});

			$("#send").css({
				"display":"none"
			});

			$('body').removeClass('noscroll');
	});


})