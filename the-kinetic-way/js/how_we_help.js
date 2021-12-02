"use strict";
require(["jquery","coda-slider","after-scroll","common"],
function( $      , coda_slider , after_scroll , common){

	var $window = $(window);
	var sectionBar = 0;
	
	$("#state_banner_option_box_01").click(function(){
		window.location.href = "../index.html#anchor_struggling_section";
	});
	
	$("#state_banner_option_box_02").click(function(){
		window.location.href = "../index.html#intermediate_section";
	});
	
	$("#state_banner_option_box_03").click(function(){
		window.location.href = "../index.html#advanced_section";
	});
	
	$("#state_banner_option_box_04").click(function(){
		window.location.href = "../index.html#special_needs_section";
	});
	
	$("#state_banner_option_box_05").click(function(){
		window.location.href = "../index.html#home_school_section";
	});
	
	$("#state_banner_option_box_06").click(function(){
		window.location.href = "../subject/maths-tutoring.html";
	});
	
	$("#state_banner_option_box_07").click(function(){
		window.location.href = "../subject/english-tutoring.html";
	});
	
});
