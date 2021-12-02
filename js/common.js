"use strict";
define(["jquery","jquery-easing","after-scroll"],
function( $     , jquery_easing , after_scroll){

	after_scroll.maxPerSecond(10);

	var $window = $(window);


	// Scrolling hash links

	$(function(){
		$('a[href*=#]:not([href=#])').click(function() {
			if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if(target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top-40
					}, 1000);
					return false;
				};
			};
		});
	});

	// Back-to-top

	var showingBackToTop = false; 
	after_scroll.on(function(){
		if ($window.scrollTop() > 1500){
			if(showingBackToTop !== true){
				$('a.back-to-top').fadeIn('slow');
				showingBackToTop = true;
			};
		}else{
			if(showingBackToTop !== false){
				$('a.back-to-top').fadeOut('slow');
				showingBackToTop = false;
			};
		};
	});

	$(function(){
		$('a.back-to-top, a.simple-back-to-top').click(function(e){
			$('html, body').animate({
				scrollTop: 0
			},700);
			e.preventDefault();
		});
	});


	// Menu icon

	var showingMenuIcon;
	after_scroll.on(function(){
		if ($window.scrollTop() > 180){
			if (showingMenuIcon !== true) {
				$('#scrolled_nav').addClass('scrolled_nav_opacity');
				$('#mobile_menu').addClass('mobile_menu_opacity');					
				showingMenuIcon = true;
			};
		}else{
			if(showingMenuIcon !== false) {
				$('#scrolled_nav').removeClass('scrolled_nav_opacity');
				$('#mobile_menu').removeClass('mobile_menu_opacity');
				document.getElementById('mobile_box').style.display = 'none';			
				showingMenuIcon = false;				
			};
		};
	});

	$(function(){
		var $mobile_menu = $('#mobile_menu');
		var $mobile_box = $('#mobile_box');

		function hide_account_box(){
			$window.off('mouseup.account_box touchend.account_box');
			$mobile_menu.css("backgroundPosition","0 0");
			$mobile_box.css("display","none");
		};

		function show_account_box() {
			$mobile_menu.css("background-position",'0 100%');
			$mobile_box.css("display","block");
			$window.on('mouseup.account_box touchend.account_box', hide_account_box);
		};

		$mobile_menu.click(show_account_box);

		$mobile_box.on("mouseup touchend",function(e){
			e.stopPropagation();
		});
	});
	
    $("#mobile_nav_ke_way").click(function(){
		$("#mobile_nav_our_subjects_expanded").hide();
		$("#mobile_nav_proven_results_expanded").hide();
        $("#mobile_nav_ke_way_expanded").slideToggle(300);
    });
    
    $("#mobile_nav_our_subjects").click(function(){
		$("#mobile_nav_ke_way_expanded").hide();
		$("#mobile_nav_proven_results_expanded").hide();
        $("#mobile_nav_our_subjects_expanded").slideToggle(300);
    });
    
    $("#mobile_nav_proven_results").click(function(){
		$("#mobile_nav_ke_way_expanded").hide();
		$("#mobile_nav_our_subjects_expanded").hide();
        $("#mobile_nav_proven_results_expanded").slideToggle(300);
    });
	
});
	

function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
};

function infVal(){
	var email=document.forms["demo_form_box"]["inf_field_Email"].value;
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
		document.getElementById('inf_field_Email').placeholder='Enter valid email';
		document.getElementById('inf_field_Email').value = 'Enter valid email';
		document.forms["demo_form_box"]["inf_field_Email"].focus();
		document.forms["demo_form_box"]["inf_field_Email"].select();
		$("#inf_field_Email").css("border-color", "#ed1769");
	}
	else{
		document.forms["demo_form_box"].action="https://xt275.infusionsoft.com/app/form/process/a33a96b8f74a9962cd2b1a2e2f14f5ee";
		document.forms["demo_form_box"].submit();
	}
	return false;
};


// Google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-1377519-1', 'auto');
  ga('send', 'pageview');
