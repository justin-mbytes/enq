// Serverdown Alert Message
$(function() {
    $( "#dialog-message" ).dialog({
		autoOpen: false,
        modal: true,
		width: '380',
		minHeight: '200',
		draggable: false,
		resizable: false,
		dialogClass: "alert",
		title: "\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 Server under maintenance",
        buttons:{
            OK: function() {
				width: '300',
                $( this ).dialog( "close" );
            }
        }
    });
	
    $( "#login" ).click(function() {
      $( "#dialog-message" ).dialog( "open" );
    });
	
    $( "#login2" ).click(function() {
      $( "#dialog-message" ).dialog( "open" );
    });	
});

// Under Construction Alert Message
function construction(){
	alert("Under Construction. Coming soon.");
}


// APLUS Popup Display
var thevalue = getUrlVars()["id"];
if(thevalue=="a"){
	tup_a();
}else if(thevalue=="p"){
	tup_p();	
}else if(thevalue=="l"){
	tup_l();	
}else if(thevalue=="u"){
	tup_u();		
}else if(thevalue=="s"){
	tup_s();
}else if(thevalue=="i"){
	tup_i();
}


function tup_a(){
	TopUp.display("aplus_a.html", {type:'iframe', shaded:'1', height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_p(){
	TopUp.display("aplus_p.html", {type:'iframe', shaded:'1', height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_l(){
	TopUp.display("aplus_l.html", {type:'iframe', shaded:'1', height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_u(){
	TopUp.display("aplus_u.html", {type:'iframe', shaded:'1',height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_s(){
	TopUp.display("aplus_s.html", {type:'iframe', shaded:'1', height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_i(){
	TopUp.display("aplus_i.html", {type:'iframe', shaded:'1', height:'670px', width:'960px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_mcl_pri(){
	TopUp.display("mcl_pri.html", {type:'iframe', shaded:'1', height:'600px', width:'500px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_mcl_sec(){
	TopUp.display("mcl_sec.html", {type:'iframe', shaded:'1', height:'600px', width:'500px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_mcl_1112(){
	TopUp.display("mcl_1112.html", {type:'iframe', shaded:'1', height:'600px', width:'500px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_ecl_pri(){
	TopUp.display("ecl_pri.html", {type:'iframe', shaded:'1', height:'600px', width:'500px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function tup_ecl_sec(){
	TopUp.display("ecl_sec.html", {type:'iframe', shaded:'1', height:'600px', width:'500px', overlayClose:'1', layout:'dashboard', resizable:'0'}); 
}


function getUrlVars(){
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}






















