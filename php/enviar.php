<?php
$destino = "hazardeddy1994@gmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$asunto = $_POST["asunto"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nAsunto" . $asunto;

//Destino
mail($destino, "Contacto", $contenido);
header("Location:gracias.html")

?>