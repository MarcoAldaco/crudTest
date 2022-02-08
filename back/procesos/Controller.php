<?php
include_once "Model.php";

class Controller {
    
    public function getPrestamos() {
        $modelo = new Model();
        $response = null;

        try {
            $response = $modelo->getPrestamos();
        } catch (\Exception $ex) {
            $mensaje = $ex->getMessage();
            $log_file = __DIR__ . "/../log/errors.log";

            error_log("[" . __METHOD__ . "] Se lanzo la excepcion > $mensaje \n", 3, $log_file);

            return array('data' => [
                'status' => "Fallo",
                'count' => 0,
                'response' => [
                    'mensaje' => 'No fue posible completar la solicitud, intente de nuevo por favor.',
                    'internalCode' => 'E1000',
                ]
            ]);
        }

        return array('data' => [
            'status' => "OK",
            'count' => 1,
            'response' => $response
        ]);
    }

    public function getPrestamoCliente($nombre) {
        $modelo = new Model();
        $response = null;

        try {
            $response = $modelo->getPrestamoCliente($nombre);
        } catch (\Exception $ex) {
            $mensaje = $ex->getMessage();
            $log_file = __DIR__ . "/../log/errors.log";

            error_log("[" . __METHOD__ . "] Se lanzo la excepcion > $mensaje \n", 3, $log_file);

            return array('data' => [
                'status' => "Fallo",
                'count' => 0,
                'response' => [
                    'mensaje' => 'No fue posible completar la solicitud, intente de nuevo por favor.',
                    'internalCode' => 'E1000',
                ]
            ]);
        }

        return array('data' => [
            'status' => "OK",
            'count' => 1,
            'response' => $response
        ]);
    }

    public function putPrestamo($nombre, $apellido, $monto, $plazo) {
        $modelo = new Model();
        $response = null;
        $amortizacion = null;

        try {
            $response = $modelo->putPrestamo($nombre, $apellido, $monto, $plazo);
        } catch (\Exception $ex) {
            $mensaje = $ex->getMessage();
            $log_file = __DIR__ . "/../log/errors.log";

            error_log("[" . __METHOD__ . "] Se lanzo la excepcion > $mensaje \n", 3, $log_file);

            return array('data' => [
                'status' => "Fallo",
                'count' => 0,
                'response' => [
                    'mensaje' => 'No fue posible completar la solicitud, intente de nuevo por favor.',
                    'internalCode' => 'E1000',
                ]
            ]);
        }

        return array('data' => [
            'status' => "OK",
            'count' => 1,
            'response' => $response
        ]);
    }

    public function getMontos() {
        $modelo = new Model();
        $response = null;

        try {
            $response = $modelo->getMontos();
        } catch (\Exception $ex) {
            $mensaje = $ex->getMessage();
            $log_file = __DIR__ . "/../log/errors.log";

            error_log("[" . __METHOD__ . "] Se lanzo la excepcion > $mensaje \n", 3, $log_file);

            return array('data' => [
                'status' => "Fallo",
                'count' => 0,
                'response' => [
                    'mensaje' => 'No fue posible completar la solicitud, intente de nuevo por favor.',
                    'internalCode' => 'E1000',
                ]
            ]);
        }

        return array('data' => [
            'status' => "OK",
            'count' => 1,
            'response' => $response
        ]);
    }
}
