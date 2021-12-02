"use strict";
require(["jquery","coda-slider","owl-carousel","after-scroll","common","lity"],
function( $      , coda_slider , owlCarousel , after_scroll , common, lity){

	var $window = $(window);
	var sectionBar = 0;
	
	
	$(function(){

		var $intermediate_img_girl = $('#intermediate_img_girl');

		function intermediate_img_girl(){
			var window_height = $window.height();
			var window_top_position = $window.scrollTop(); 
			var window_bottom_position = (window_top_position + window_height);

			var intermediate_img_girl_height = $intermediate_img_girl.outerHeight();	
			var intermediate_img_girl_top_position = $intermediate_img_girl.offset().top - 250;
			var intermediate_img_girl_bottom_position = (intermediate_img_girl_top_position + intermediate_img_girl_height);

			if(intermediate_img_girl_bottom_position >= window_top_position && intermediate_img_girl_top_position <= window_bottom_position){
				$('#intermediate_img_girl').addClass('appear_left');			
			}else{
				$('#intermediate_img_girl').removeClass('appear_left');	
			};
		};

		$window.on('resize', intermediate_img_girl);
		after_scroll.on(intermediate_img_girl);
		intermediate_img_girl();
	});
	
	
	$("#state_banner_option_box_01").click(function(){
		$("html, body").animate({
			scrollTop: $("#anchor_struggling_section").offset().top
		}, 1000);
	});
	
	$("#state_banner_option_box_02").click(function(){
		$("html, body").animate({
			scrollTop: $("#intermediate_section").offset().top
		}, 1000);
	});
	
	$("#state_banner_option_box_03").click(function(){
		$("html, body").animate({
			scrollTop: $("#advanced_section").offset().top
		}, 1000);
	});
	
	$("#state_banner_option_box_04").click(function(){
		$("html, body").animate({
			scrollTop: $("#special_needs_section").offset().top
		}, 1000);
	});
	
	$("#state_banner_option_box_05").click(function(){
		$("html, body").animate({
			scrollTop: $("#home_school_section").offset().top
		}, 1000);
	});
	
	$("#state_banner_option_box_06").click(function(){
		window.location.href = "../subject/maths-tutoring.html";
	});
	
	$("#state_banner_option_box_07").click(function(){
		window.location.href = "../subject/english-tutoring.html";
	});
	

	$(function(){
		var $tabanim = $('#home_school_break_div');

		function tabanim(){
			var window_height = $window.height();
			var window_top_position = $window.scrollTop(); 
			var window_bottom_position = (window_top_position + window_height);

			var tabanim_height = $tabanim.outerHeight();	
			var tabanim_top_position = $tabanim.offset().top + 300;
			var tabanim_bottom_position = (tabanim_top_position + tabanim_height);

			if(tabanim_bottom_position >= window_top_position && tabanim_top_position <= window_bottom_position){
				$('#home_school_break_div').css("overflow","visible");
				$('#home_school_break_front_img').addClass('home_school_break_front_img_class');
				$('#home_school_break_front_img').css("display","block");
			};
		};

		$window.on('resize', tabanim);
		after_scroll.on(tabanim);
		tabanim();
	});
	
	$(function(){

		function angle_align(){
			$("#angle_align").css({'width': ($("#advanced_section").width() + 'px')});
			$("#angle_align").css({'height': ($("#advanced_section").height() + 'px')});
			
			var parent_width = $('#advanced_section').width();
			parent_width = parent_width + "px";
			var child_width = $('#angle_align').width();
			child_width = child_width + "px";
		};

		$window.on('resize', angle_align);
		angle_align();
	});

	// Testimonial animation

	var testimonialCounter = 0;
	window.setInterval(function(){
		if(testimonialCounter==0){
			testimonialCounter = 1;
			setTimeout(function(){
				$("#twrapper").fadeOut();
				setTimeout(function(){
					document.getElementById("t1").style.display = 'none';
					document.getElementById("t2").style.display = 'block';
					document.getElementById("t3").style.display = 'none';
					document.getElementById("t4").style.display = 'none';
					document.getElementById("t5").style.display = 'none';							
					$("#twrapper").fadeIn();
				}, 300)
			}, 500);

		}else if(testimonialCounter==1){
			testimonialCounter = 2;
			setTimeout(function(){
				$("#twrapper").fadeOut();
				setTimeout(function(){
					document.getElementById("t1").style.display = 'none';
					document.getElementById("t2").style.display = 'none';
					document.getElementById("t3").style.display = 'block';
					document.getElementById("t4").style.display = 'none';
					document.getElementById("t5").style.display = 'none';
					$("#twrapper").fadeIn();
				}, 300)
			}, 500);
			
		}else if(testimonialCounter==2){
			testimonialCounter = 3;
			setTimeout(function(){
				$("#twrapper").fadeOut();
				setTimeout(function(){
					document.getElementById("t1").style.display = 'none';
					document.getElementById("t2").style.display = 'none';
					document.getElementById("t3").style.display = 'none';
					document.getElementById("t4").style.display = 'block';
					document.getElementById("t5").style.display = 'none';
					$("#twrapper").fadeIn();
				}, 300)
			}, 500);	
					
		}else if(testimonialCounter==3){
			testimonialCounter = 4;
			setTimeout(function(){
				$("#twrapper").fadeOut();
				setTimeout(function(){
					document.getElementById("t1").style.display = 'none';
					document.getElementById("t2").style.display = 'none';
					document.getElementById("t3").style.display = 'none';
					document.getElementById("t4").style.display = 'none';
					document.getElementById("t5").style.display = 'block';
					$("#twrapper").fadeIn();
				}, 300)
			}, 500);
			
		}else if(testimonialCounter==4){
			testimonialCounter = 0;
			setTimeout(function(){
				$("#twrapper").fadeOut();
				setTimeout(function(){
					document.getElementById("t1").style.display = 'block';
					document.getElementById("t2").style.display = 'none';
					document.getElementById("t3").style.display = 'none';
					document.getElementById("t4").style.display = 'none';
					document.getElementById("t5").style.display = 'none';
					$("#twrapper").fadeIn();
				}, 300)
			}, 500);
		}
		
	}, 5000);	

	// Sliding testimonials

	var theInt = null;
	var $crosslink, $navthumb;
	var curclicked = 0;

	var theInterval = function(cur){
		clearInterval(theInt);
		if (typeof cur !== 'undefined') curclicked = cur;
		$crosslink.removeClass("active-thumb");
		$navthumb.eq(curclicked).parent().addClass("active-thumb");
		$(".stripNav ul li a").eq(curclicked).trigger('click');
		theInt = setInterval(function(){
			$crosslink.removeClass("active-thumb");
			$navthumb.eq(curclicked).parent().addClass("active-thumb");
			$(".stripNav ul li a").eq(curclicked).trigger('click');
			curclicked++;
			if(6==curclicked) curclicked = 0;
		},6000);
	};

	$(function(){
		$("#main-photo-slider").codaSlider();
		$navthumb = $(".nav-thumb");
		$crosslink = $(".cross-link");
		$navthumb.click(function(){
			var $this = $(this);
			theInterval($this.parent().attr('href').slice(1) - 1);
			return false;
		});
		theInterval();
	});

	//News updates slider
      $("#news-slide").owlCarousel({
          navigation : true,
          slideSpeed : 320,
          pagination: false,
          singleItem:true,
		  touchDrag: false,
          autoPlay: 6000     
      });
	  
	// Open a URL in a lightbox
	$('#litbox').on('click', '[data-lightbox]', lity);
   
	
});
