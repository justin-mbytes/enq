"use strict";
require(["jquery","coda-slider","jquery-easing","after-scroll","common"],
function( $      , coda_slider , jquery_easing , after_scroll , common){

	var $window = $(window);
	var advanced_function_trigger = 0;

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
			scrollTop: $("#struggling_section").offset().top
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
	
	
	/**
	$(function(){

		var $kids_side_marker = $('#advanced_slide_left');

		function kids_side_marker(){
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			var kids_side_marker_height = $kids_side_marker.outerHeight();	
			var kids_side_marker_top_position = $kids_side_marker.offset().top - 250;
			var kids_side_marker_bottom_position = (kids_side_marker_top_position + kids_side_marker_height);

			if(kids_side_marker_bottom_position >= window_top_position && kids_side_marker_top_position <= window_bottom_position){
				$('#advanced_slide_left').addClass('appear_right');
				$('#advanced_slide_right').addClass('appear_left');		
			}else{
				$('#advanced_slide_left').removeClass('appear_right');
				$('#advanced_slide_right').removeClass('appear_left');
			};
		};

		$window.on('resize', kids_side_marker);
		after_scroll.on(kids_side_marker);
		kids_side_marker();
	});
	**/
	
	
	$(function(){
		var $advanced_section = $('#advanced_section');

		function advanced_section(){
			
			var window_height = $window.height();
			var window_top_position = $window.scrollTop(); 
			var window_bottom_position = (window_top_position + window_height);

			var advanced_section_height = $advanced_section.outerHeight();	
			var advanced_section_top_position = $advanced_section.offset().top + 800;
			var advanced_section_bottom_position = (advanced_section_top_position + advanced_section_height);

			if(advanced_section_bottom_position >= window_top_position && advanced_section_top_position <= window_bottom_position){
				
				
				$('#bullet_text_advanced_01').addClass('ad06');
				$('#bullet_text_advanced_01').css("opacity","1");
				
				$('#bullet_text_advanced_02').addClass('ad06');
				$('#bullet_text_advanced_02').css("opacity","1");
				
				$('#bullet_text_advanced_03').addClass('ad06');
				$('#bullet_text_advanced_03').css("opacity","1");
				
				$('#bullet_text_advanced_04').addClass('ad06');
				$('#bullet_text_advanced_04').css("opacity","1");
				
				$('#bullet_text_advanced_05').addClass('ad06');
				$('#bullet_text_advanced_05').css("opacity","1");
				
				$('#bullet_text_advanced_06').addClass('ad06');
				$('#bullet_text_advanced_06').css("opacity","1");
				

			};
		};

		$window.on('resize', advanced_section);
		after_scroll.on(advanced_section);
		advanced_section();
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
	
	
});