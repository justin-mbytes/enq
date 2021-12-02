<?php

require_once dirname(dirname(dirname(__DIR__))).'/emailer.php';
if (email_already_sent()) output_page_and_exit(true);
// Client-side Javascript validation ensures only valid forms are submitted here by 
// users. Bots may submit invalid forms, which should be discarded; we don't even log 
// anything, but display a generic error page.
if (!input_is_valid()) output_page_and_exit(false);
// The @ suppresses errors so we don't fill logs when email is missing.
$reply = @$_REQUEST['email'];
// Don't pass an invalid reply address to send_email_and_redirect(), as we don't need 
// to log it: the emails include the user input; reply-to is just a convenience.
if ($reply && !email_is_valid($reply)) $reply = null;
// If mail is successfully sent, the browser redirects to this script such that 
// email_already_sent() above will be true.
$succeeded = send_email_and_redirect(
	/*To:*/ "leads@kineticeducation.com.au",
	/*Subject:*/ "Is doing ok - School landing form",
	construct_email_body(),
	$reply
);
// Even if we redirect, we include the success page; otherwise a generic error page.
output_page_and_exit($succeeded);

function input_is_valid() {
	// The @ suppresses errors, so we don't fill up logs with messages when fields do 
	// not even exist. If one doesn't exist, it will still be 'false'.
	if (@!$_REQUEST['First-Name']) return false;
	if (@!$_REQUEST['Last-Name']) return false;	
	if (@!$_REQUEST['email']) return false;
	if (@!$_REQUEST['Mobile']) return false;
	if (@!$_REQUEST['State']) return false;
	if (@!$_REQUEST['Postcode']) return false;	
	if (@!$_REQUEST['Children']) return false;
    if (@!$_REQUEST['Comments']) return false;
	return true;
}

function construct_email_body() {
	ob_start();

?>
<style>
	p {
		font-family: Verdana, Arial, Helvetica, sans-serif;
		font-size: 18px;
	}
</style>
<p><strong>Is doing ok - School landing form</strong></p>
<p>&nbsp;</p>
<p>First Name: <strong><?=$_REQUEST['First-Name']?></strong></p>
<p>Surname: <strong><?=$_REQUEST['Last-Name']?></strong></p>
<p>Email: <strong><a href="mailto:<?=$_REQUEST['email']?>"><?=$_REQUEST['email']?></a></strong></p>
<p>Mobile: <strong><?=$_REQUEST['Mobile']?></strong></p>
<p>State: <strong><?=$_REQUEST['State']?></strong></p>
<p>Postcode: <strong><?=$_REQUEST['Postcode']?></strong></p>
<p>Number of children: <strong><?=$_REQUEST['Children']?></strong></p>
<p>Comments:: <strong><?=$_REQUEST['Comments']?></strong></p>


<?php

	$body = ob_get_contents();
	ob_end_clean();
	return $body;
}

function output_page_and_exit($succeeded) {

?>

<!DOCTYPE html>
<!-- This site was created in Webflow. http://www.webflow.com-->
<!-- Last Published: Wed Jul 20 2016 10:25:47 GMT+0000 (UTC) -->
<html data-wf-site="577dbbdde3f0f3221583121b" data-wf-page="578ae9777b80d9142babcb0d">
<head>
  <meta charset="utf-8">
  <title>Thank You</title>
  <meta property="og:title" content="Thank You Page">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="generator" content="Webflow">
  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/webflow.css">
  <link rel="stylesheet" type="text/css" href="css/kinetic-landing-page.webflow.css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
  <script>
    WebFont.load({
      google: {
        families: ["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","Montserrat:400,700"]
      }
    });
  </script>
  <script type="text/javascript" src="js/modernizr.js"></script>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1752366208309426'); 
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" 
src="https://www.facebook.com/tr?id=1752366208309426&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
  <link rel="shortcut icon" type="image/x-icon" href="images/32x32.png">
  <link rel="apple-touch-icon" href="images/256x256.jpg">
</head>
<body class="body">
  <div class="top-section">
    <div class="logo-bar w-container"><a href="http://www.kineticeducation.com.au" target="_blank"><img alt="Kinetic Education logo" class="logo" src="images/ke_logo.png"></a>
    </div>
  </div>
  <div class="top-bar">
    <div class="header-container w-container">
      <div class="top-headline">Thank you for your enquiry.</div>
    </div>
  </div>
  <div class="top-image-bar">
    <div class="w-container">
      <div class="subheading">We will contact you in the next 24 - 48 hours to arrange your FREE online demonstration.</div>
    </div>
    <div class="sub-div">
      <div class="w-container"><img alt="Happy student" src="images/AdobeStock_56908638_happy.jpg">
      </div>
    </div>
  </div>
  <div class="slider-bar">
    <div class="w-container">
      <div class="slider w-slider" data-animation="slide" data-autoplay="1" data-delay="4000" data-duration="500" data-infinite="1">
        <div class="slide-mask w-slider-mask">
          <div class="slide-1 w-slide">
            <div class="slider-heading">Customer Feedback</div>
            <div class="slide-text-1">Maths Wiz is really exciting, it never gets boring ... When I started using Maths Wiz, it was fantastic, I went from a C to a B minus, to a B plus, to an A.</div>
            <div class="slider-text-name">Ebony, Grade 5 Student</div>
          </div>
          <div class="w-slide">
            <div class="slider-heading">Customer Feedback</div>
            <div class="slide-text-1 slide2">I have referred other families to this program and recommend it for anyone who wants to see their children enjoy the learning process and give them a competitive edge at school.</div>
            <div class="slide2 slider-text-name">Mrs. Mann, Mother of 2 Children</div>
          </div>
          <div class="w-slide">
            <div class="slider-heading">Customer Feedback</div>
            <div class="slide-text-1 slide3">On a personal level and as a teacher who genuinely loves maths, I have no hesitation in recommending Maths Wiz to anyone who is looking for a comprehensive and extensive maths programme for school children to improve their maths skills, understanding of key concepts as well as boosting their confidence and self-esteem.</div>
            <div class="slide2 slider-text-name">Leena Sheth, School Teacher</div>
          </div>
        </div>
        <div class="w-hidden-tiny w-slider-arrow-left">
          <div class="w-icon-slider-left"></div>
        </div>
        <div class="w-hidden-tiny w-slider-arrow-right">
          <div class="w-icon-slider-right"></div>
        </div>
        <div class="w-round w-slider-nav"></div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="w-container">
        <div class="footer-text"><a class="link2" href="http://www.kineticeducation.com.au" target="_blank">Kinetic Education</a> &nbsp;| &nbsp;Level 1, 506 Nepean Hwy, Frankston VIC 3199 &nbsp;| &nbsp;ABN 16 009 407 550 &nbsp;| &nbsp;<a class="link2" href="http://www.kineticeducation.com.au/enquiry/privacy.html" target="_blank">Privacy Policy</a><br></div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script type="text/javascript" src="js/webflow.js"></script>
  <!--[if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]-->
</body>
</html>

<?php

	exit(0);
}
