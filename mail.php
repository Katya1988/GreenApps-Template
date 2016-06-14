<?php
$to = "quitesensual@gmail.com" . ", ";

$message = "Имя пользователя: " .$_GET['name']. "<br>";
$message .= "Email: " .$_GET['mail']. "<br>";
$message .= "Комментарии: " .$_GET['message']. "<br>";
$headers = "From: $from_user <$from_email>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$res = mail($to, $tema, $message, $headers);
if ($res){
    echo ('1');
}
else {
    echo ('0');
}

?>