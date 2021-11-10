<?php

@$name = addslashes($_POST['name']); 
@$email = addslashes($_POST['email']); 
@$subject = addslashes($_POST['subject']); 
@$message = addslashes($_POST['message']);

$cabeceras = "From: $email\n" . "Reply-To: $email\n"; 
$asunto = "$subject";
$email_to = "soniacelis@gmail.com";
$contenido = 
"\n" . 
"MENSAJES ENVIADOS DESDE FORMULARIO DE CONTACTO DE: soniacelis.es" . 
"\n" . 
"$name\n". 
"\n" . 
"$message\n" .
 "\n"; 

//Enviamos el mensaje

if ( @mail( $email_to, $asunto ,$contenido ,$cabeceras ) ){
    die("Gracias, su mensaje se envio correctamente.");
}else{
    die("Error: Su información no pudo ser enviada, intente más tarde");
}


?>