<?php

$servidor="localhost";
$usuario="root";
$clave="";
$basededatos="form";

$enlace = mysqli_connect($servidor, $usuario, $clave, $basededatos);

if(!$enlace){
 echo "error con la conexion con el servidor";


}




?>