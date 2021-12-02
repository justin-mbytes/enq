<?php
require 'class.phpmailer.php';
require 'class.smtp.php';

function email_already_sent() {
	return (isset($_REQUEST['sent']));
}

function email_is_valid($email) {
	return (preg_match('/^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+'
			.'(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*'
			.'@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+'
			.'[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i',$email)==1);
}

function send_email_and_redirect($to,$subject,$body,$reply=null,$name=null) {

	if (!email_is_valid($to)) {
		error_log("invalid 'to' address: $to");
		return false;
	}

	if ($reply&&!email_is_valid($reply)) {
		error_log("invalid 'reply' address: $reply");
		$reply = null;
	}

	$mailer = new PHPMailer;

	// $mailer->SMTPDebug = 3;

	$mailer->isSMTP();

	// Code below for use at Microsoft Azure/Sendgrid
	$mailer->Host = 'smtp.sendgrid.net';
	$mailer->Port = 465;
	$mailer->SMTPSecure = 'ssl'; // 'tls';
	$mailer->SMTPAuth = true;
	// Code below for North Central US
	// $mailer->Username = 'azure_cb5cbefca29714d3bce016ab6c804639@azure.com';
	// $mailer->Password = 'AR4B40WRaVrdyOv';
	// Code below for Australia East
	$mailer->Username = 'azure_349bfb1a15af2b822887b6187f85ee20@azure.com';
	$mailer->Password = 'CTTR47dfpg29gWo';

	//	Code below for use with Office365
	// $mailer->Host = 'smtp.office365.com';
	// $mailer->Port = 25;
	// $mailer->SMTPSecure = 'ssl'; // 'tls';
	// $mailer->SMTPAuth = true;
	// $mailer->Username = 'tutor@m-bytes.com';
	// $mailer->Password = 'Getsmart11';

	//	Code below for use with Netregistry
	// $mailer->Host = 'localhost';
	// $mailer->Port = 25;

	$mailer->From = 'noreply@kineticeducation.com.au';
	$mailer->FromName = 'Kinetic Education Website';
	// $mailer->addCC('cc@example.com');
	$mailer->addAddress($to);
	if ($reply) {
		if (!$name) $name = $reply;
		$mailer->addReplyTo($reply,$name);
	}

	$mailer->isHTML(true);
	$mailer->Subject = $subject;
	$mailer->Body = $body;

	ignore_user_abort();
	set_time_limit(120);
	header("Pragma: no-cache");
	header("Cache-Control: no-cache");
	if (!$mailer->send()) {
		error_log($mailer->ErrorInfo);
		return false;
	} else {
		header("HTTP/1.1 303 See Other");
		header("Location: http://$_SERVER[SERVER_NAME]$_SERVER[SCRIPT_NAME]?sent");
	}

}
