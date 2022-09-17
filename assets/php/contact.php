<?php

// ENTER YOUR EMAIL
$emailTo = "tjan.janice@gmail.com";

// ENTER IDENTIFIER
$emailIdentifier =  "Message sent via contact form from " . $_SERVER["smtp.gmail.com"];


if($_POST) {

    $name = addslashes(trim($_POST["name"]));
    $clientEmail = addslashes(trim($_POST["email"]));
    $message = addslashes(trim($_POST["message"]));
	$fhp_input = addslashes(trim($_POST["company"]));

    $array = array("nameMessage" => "", "emailMessage" => "", "messageMessage" => "","succesMessage" => "");

    if($name == "") {
    	$array["nameMessage"] = "NO NAME";
    }
	
    if(!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        $array["emailMessage"] = "INVALID EMAIL";
    }
	
    if($message == "") {
        $array["messageMessage"] = "NONE";
    }
	
    if($name != "" && filter_var($clientEmail, FILTER_VALIDATE_EMAIL) && $message != "" && $fhp_input == "") {
		
		$array["successMessage"] = "";
		
		$headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= "From: " . $name . " <" . $clientEmail .">\r\n";
		$headers .= "Reply-To: " . $clientEmail;
		
		mail($emailTo, $emailIdentifier, $message, $headers);
		
    }

    echo json_encode($array);

}

?>