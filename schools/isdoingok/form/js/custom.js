$(document).ready(function(){
$(".featu").hover(
function() {
$(".step p", this).toggleClass("step-hover", 300);

},
function() {
$(".step p", this).toggleClass("step-hover", 300);});

});


$(document).ready(function(){
$(".testi").hover(
function() {
$(".quote img", this).toggleClass("quote-hover", 300);

},
function() {
$(".quote img", this).toggleClass("quote-hover", 300);});

});



 $(function() {
$( "#tabs" ).tabs( { show: { effect: "fade", duration: 500 }});
});

 

$(document).ready(function(){
$("img.b").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});

$(document).ready(function(){
$(".top-button").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 'slow');
  return false;
});
});




