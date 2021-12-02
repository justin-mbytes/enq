"use strict";
require(["jquery","coda-slider","jquery-easing","after-scroll", "common"],
function( $      , coda_slider , jquery_easing , after_scroll , common){

	var $window = $(window);
	var mob_menu_status = 0;

	//subject buttons
	$("#contents_subjects_math").click(function(){
		$("#contents_subjects_math").addClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_english').attr('id','bt_contents_math');
		$('#bt_contents_physics').attr('id','bt_contents_math');
		$('#bt_contents_chemistry').attr('id','bt_contents_math');
		$('#bt_contents_biology').attr('id','bt_contents_math');
		$("#contents_math").css('display', 'block');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');
	});

	$("#contents_subjects_english").click(function(){
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").addClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_english');
		$('#bt_contents_physics').attr('id','bt_contents_english');
		$('#bt_contents_chemistry').attr('id','bt_contents_english');
		$('#bt_contents_biology').attr('id','bt_contents_english');	
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'block');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');							
	});

	$("#contents_subjects_physics").click(function(){	
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").addClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_physics');
		$('#bt_contents_english').attr('id','bt_contents_physics');
		$('#bt_contents_chemistry').attr('id','bt_contents_physics');
		$('#bt_contents_biology').attr('id','bt_contents_physics');	
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'block');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');									
	});
	
	$("#contents_subjects_chemistry").click(function(){	
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").addClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_chemistry');
		$('#bt_contents_english').attr('id','bt_contents_chemistry');
		$('#bt_contents_physics').attr('id','bt_contents_chemistry');
		$('#bt_contents_biology').attr('id','bt_contents_chemistry');
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'block');
		$("#contents_biology").css('display', 'none');											
	});
	
	$("#contents_subjects_biology").click(function(){	
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").addClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_biology');
		$('#bt_contents_english').attr('id','bt_contents_biology');
		$('#bt_contents_physics').attr('id','bt_contents_biology');
		$('#bt_contents_chemistry').attr('id','bt_contents_biology');
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'block');								
	});

	$("#vce_btn").click(function(){
		$(".vce").css('display', 'block');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'none');	
		$("#vce_btn").addClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');											
	});	

	$("#act_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'block');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'none');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").addClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#sace_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'block');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'none');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").addClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');																
	});
	
	$("#wace_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'block');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'none');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").addClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#hsc_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'block');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'none');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").addClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#qld_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'block');
		$(".all").css('display', 'none');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").addClass('eleven_and_twelve_btn_selected');
		$("#all_btn").removeClass('eleven_and_twelve_btn_selected');																
	});		
	
	$("#all_btn").click(function(){
		$(".vce").css('display', 'none');
		$(".act").css('display', 'none');
		$(".sace").css('display', 'none');
		$(".wace").css('display', 'none');
		$(".hsc").css('display', 'none');
		$(".qld").css('display', 'none');
		$(".all").css('display', 'block');	
		$("#vce_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn").addClass('eleven_and_twelve_btn_selected');																
	});	

	$("#vce_btn_english").click(function(){
		$(".vce_english").css('display', 'block');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});	

	$("#act_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'block');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#sace_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'block');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});
	
	$("#wace_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'block');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#hsc_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'block');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#qld_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'block');
		$(".all_english").css('display', 'none');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").addClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").removeClass('eleven_and_twelve_btn_selected');																
	});		
	
	$("#all_btn_english").click(function(){
		$(".vce_english").css('display', 'none');
		$(".act_english").css('display', 'none');
		$(".sace_english").css('display', 'none');
		$(".wace_english").css('display', 'none');
		$(".hsc_english").css('display', 'none');
		$(".qld_english").css('display', 'none');
		$(".all_english").css('display', 'block');	
		$("#vce_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_english").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_english").addClass('eleven_and_twelve_btn_selected');																
	});	

	$("#vce_btn_physics").click(function(){
		$(".vce_physics").css('display', 'block');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});	

	$("#act_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'block');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#sace_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'block');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});
	
	$("#wace_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'block');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#hsc_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'block');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#qld_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'block');
		$(".all_physics").css('display', 'none');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").addClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").removeClass('eleven_and_twelve_btn_selected');																
	});		
	
	$("#all_btn_physics").click(function(){
		$(".vce_physics").css('display', 'none');
		$(".act_physics").css('display', 'none');
		$(".sace_physics").css('display', 'none');
		$(".wace_physics").css('display', 'none');
		$(".hsc_physics").css('display', 'none');
		$(".qld_physics").css('display', 'none');
		$(".all_physics").css('display', 'block');	
		$("#vce_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_physics").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_physics").addClass('eleven_and_twelve_btn_selected');																
	});

	$("#vce_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'block');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});	

	$("#act_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'block');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#sace_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'block');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});
	
	$("#wace_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'block');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#hsc_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'block');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#qld_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'block');
		$(".all_chemistry").css('display', 'none');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").addClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');																
	});		
	
	$("#all_btn_chemistry").click(function(){
		$(".vce_chemistry").css('display', 'none');
		$(".act_chemistry").css('display', 'none');
		$(".sace_chemistry").css('display', 'none');
		$(".wace_chemistry").css('display', 'none');
		$(".hsc_chemistry").css('display', 'none');
		$(".qld_chemistry").css('display', 'none');
		$(".all_chemistry").css('display', 'block');	
		$("#vce_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_chemistry").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_chemistry").addClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#vce_btn_biology").click(function(){
		$(".vce_biology").css('display', 'block');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});	

	$("#act_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'block');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});	
	
	$("#sace_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'block');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});
	
	$("#wace_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'block');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#hsc_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'block');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});	
		
	$("#qld_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'block');
		$(".all_biology").css('display', 'none');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").addClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").removeClass('eleven_and_twelve_btn_selected');																
	});		
	
	$("#all_btn_biology").click(function(){
		$(".vce_biology").css('display', 'none');
		$(".act_biology").css('display', 'none');
		$(".sace_biology").css('display', 'none');
		$(".wace_biology").css('display', 'none');
		$(".hsc_biology").css('display', 'none');
		$(".qld_biology").css('display', 'none');
		$(".all_biology").css('display', 'block');	
		$("#vce_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#act_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#sace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#wace_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#hsc_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#qld_btn_biology").removeClass('eleven_and_twelve_btn_selected');
		$("#all_btn_biology").addClass('eleven_and_twelve_btn_selected');																
	});
	
	if(matchMedia){
		var winwidth = window.matchMedia("(min-width:426px)");
		winwidth.addListener(WidthChange);
		WidthChange(winwidth);
	};
	
	function WidthChange(winwidth){
		if(winwidth.matches){
			mob_menu_status = 0;
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');
			$("#mob_subject_menu_container").css('height', '0px');
			$("#mob_subject_menu_container").css('display', 'none');
		};
	};

	$(".mobile_contents_subject_btn").click(function(){
		if(mob_menu_status==0){
			mob_menu_status = 1;
			$("#mob_subject_menu_container").css('display', 'block');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_up.png")');	
			setTimeout(function(){
				$("#mob_subject_menu_container").css('height', '204.84px');	
			}, 50)			
		}else if(mob_menu_status==1){
			mob_menu_status = 0;
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');				
			setTimeout(function(){
				$("#mob_subject_menu_container").css('height', '0px');	
			}, 50)
			setTimeout(function(){
				$("#mob_subject_menu_container").css('display', 'none');
			}, 500)
		};
	});
	
	$("#mob_subject_menu_math_btn").click(function(){
		$("#contents_subjects_math").addClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_english').attr('id','bt_contents_math');
		$('#bt_contents_physics').attr('id','bt_contents_math');
		$('#bt_contents_chemistry').attr('id','bt_contents_math');
		$('#bt_contents_biology').attr('id','bt_contents_math');	
		$("#contents_math").css('display', 'block');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');	
		$(".bar_title").text("MATH");
		mob_menu_status = 0;		
		setTimeout(function(){
			$("#mob_subject_menu_container").css('height', '0px');	
		}, 50)
		setTimeout(function(){
			$("#mob_subject_menu_container").css('display', 'none');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');			
		}, 500)		
	});

	$("#mob_subject_menu_english_btn").click(function(){
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").addClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_english');
		$('#bt_contents_physics').attr('id','bt_contents_english');
		$('#bt_contents_chemistry').attr('id','bt_contents_english');
		$('#bt_contents_biology').attr('id','bt_contents_english');	
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'block');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');
		$(".bar_title").text("ENGLISH");		
		mob_menu_status = 0;		
		setTimeout(function(){
			$("#mob_subject_menu_container").css('height', '0px');	
		}, 50)
		setTimeout(function(){
			$("#mob_subject_menu_container").css('display', 'none');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');				
		}, 500)										
	});

	$("#mob_subject_menu_physics_btn").click(function(){
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").addClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_physics');
		$('#bt_contents_english').attr('id','bt_contents_physics');
		$('#bt_contents_chemistry').attr('id','bt_contents_physics');
		$('#bt_contents_biology').attr('id','bt_contents_physics');	
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'block');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'none');
		$(".bar_title").text("PHYSICS");
		mob_menu_status = 0;		
		setTimeout(function(){
			$("#mob_subject_menu_container").css('height', '0px');	
		}, 50)
		setTimeout(function(){
			$("#mob_subject_menu_container").css('display', 'none');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');				
		}, 500)											
	});
	
	$("#mob_subject_menu_chemistry_btn").click(function(){
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").addClass('subject_btn_selected');
		$("#contents_subjects_biology").removeClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_chemistry');
		$('#bt_contents_english').attr('id','bt_contents_chemistry');
		$('#bt_contents_physics').attr('id','bt_contents_chemistry');
		$('#bt_contents_biology').attr('id','bt_contents_chemistry');
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'block');
		$("#contents_biology").css('display', 'none');
		$(".bar_title").text("CHEMISTRY");		
		mob_menu_status = 0;		
		setTimeout(function(){
			$("#mob_subject_menu_container").css('height', '0px');	
		}, 50)
		setTimeout(function(){
			$("#mob_subject_menu_container").css('display', 'none');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');				
		}, 500)												
	});
	
	$("#mob_subject_menu_biology_btn").click(function(){
		$("#contents_subjects_math").removeClass('subject_btn_selected');
		$("#contents_subjects_english").removeClass('subject_btn_selected');	
		$("#contents_subjects_physics").removeClass('subject_btn_selected');
		$("#contents_subjects_chemistry").removeClass('subject_btn_selected');
		$("#contents_subjects_biology").addClass('subject_btn_selected');
		$('#bt_contents_math').attr('id','bt_contents_biology');
		$('#bt_contents_english').attr('id','bt_contents_biology');
		$('#bt_contents_physics').attr('id','bt_contents_biology');
		$('#bt_contents_chemistry').attr('id','bt_contents_biology');
		$("#contents_math").css('display', 'none');
		$("#contents_english").css('display', 'none');
		$("#contents_physics").css('display', 'none');
		$("#contents_chemistry").css('display', 'none');
		$("#contents_biology").css('display', 'block');
		$(".bar_title").text("BIOLOGY");		
		mob_menu_status = 0;		
		setTimeout(function(){
			$("#mob_subject_menu_container").css('height', '0px');	
		}, 50)
		setTimeout(function(){
			$("#mob_subject_menu_container").css('display', 'none');
			$("#mobile_subject_arrow").css('background-image','url("img/arrow_down.png")');				
		}, 500)										
	});	

	$("#section-1-btn").click(function(){	   
       $("#section-1").slideToggle("slow");
    });
	
	$("#section-2-btn").click(function(){	   
        $("#section-2").slideToggle("slow");
    });
	
	$("#section-3-btn").click(function(){	   
        $("#section-3").slideToggle("slow");
    });	
	
	$("#eng-section-1-btn").click(function(){	   
        $("#eng-section-1").slideToggle("slow");
    });
	
	$("#eng-section-2-btn").click(function(){	   
        $("#eng-section-2").slideToggle("slow");
    });
	
	$("#eng-section-3-btn").click(function(){	   
        $("#eng-section-3").slideToggle("slow");
    });		
	
	$(".contents-btn-icon").click(function() {
  		$( this ).toggleClass("contents-collapse contents-expand");
	});
	
	
	//Expand and collapse unit sections
	var s1 = 0;
	$("#section-1-btn").click(function(){
		if(s1 == 0){
			$("#content_01").slideToggle("slow");
			s1= 1;
		}else if(s1 == 1){
			$("#content_01").slideToggle("slow");
			s1= 0;
		};
    });

	var s2 = 0;
	$("#section-2-btn").click(function(){
		if(s2 == 0){
			$("#content_02").slideToggle("slow");
			s2= 1;
		}else if(s2 == 1){
			$("#content_02").slideToggle("slow");
			s2= 0;
		};
    });	
	
	var s3 = 0;
	$("#section-3-btn").click(function(){
		if(s3 == 0){
			$("#content_03").slideToggle("slow");
			s3= 1;
		}else if(s3 == 1){
			$("#content_03").slideToggle("slow");
			s3= 0;
		};
    });
});
