<?php
if ( ! isset( $_POST['nombre'] ) ) {
    header("Location: gracias.html");
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$teléfono = $_POST['teléfono'];
$asunto = $_POST['asunto'];

//$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nAsunto" . $asunto;
//$destino = "hazardeddy1994@gmail.com";

var_dump($nombre);

$rta = mail( 'hazardeddy1994@gmail.com', "$nombre", $asunto, $headers );
var_dump($rta);

//Destino
//mail($destino, "Contacto", $contenido);
header("Location: gracias.html" );

?>
