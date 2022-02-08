<?php
header('Access-Control-Allow-Origin: *');

include_once "./procesos/Controller.php";

$exec = $_GET["opc"];
$proceso = null;

switch ($exec) {
    case 1:
        // obtiene todos los prestamos
        $proceso = new Controller();
        $response = $proceso->getPrestamos();

        echo json_encode( $response );
        break;

    case 2:
        // obtiene prestamos buscando por nombre
        $proceso = new Controller();
        $nombre = $_GET["nombre"];
        $response = $proceso->getPrestamoCliente($nombre);

        echo json_encode( $response );
        break;

    case 3:
        // inserta nuevo prestamo
        $proceso = new Controller();
        $nombre = $_GET["nombre"];
        $apellido = $_GET["apellido"];
        $monto = $_GET["monto"];
        $plazo = $_GET["plazo"];
        $response = $proceso->putPrestamo($nombre, $apellido, $monto, $plazo);

        echo json_encode( $response );
        break;

    case 4:
        // obtiene amortizacion
        include_once "procesos/calculaAmortizacion.php";

        $monto = $_GET["monto"];
        $plazo = $_GET["plazo"];
        $response = amortizacion($monto, $plazo);

        echo json_encode( ["response" => $response] );
        break;
    
    default:
        // obtiene todos los montos
        $proceso = new Controller();
        $response = $proceso->getMontos();

        echo json_encode( $response );
        break;
}
