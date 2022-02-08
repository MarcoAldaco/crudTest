<?php

class Model {
    public function getPrestamos() {
        require_once __DIR__ . "/../config/Conectar.php";

        $obj = new Conectar();
        $conexion = $obj->conexion();

        $result = null;

        $stmt = $conexion->prepare("CALL crud.sp_obtenerprestamos();");
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function getPrestamoCliente($nombre) {
        require_once __DIR__ . "/../config/Conectar.php";

        $obj = new Conectar();
        $conexion = $obj->conexion();

        $result = null;

        $stmt = $conexion->prepare("CALL crud.sp_obetenrPrestamoCliente(:nombre);");
        $stmt->bindParam(':nombre', $nombre, \PDO::PARAM_STR);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    public function putPrestamo($nombre, $apellido, $monto, $plazo) {
        require_once __DIR__ . "/../config/Conectar.php";

        $obj = new Conectar();
        $conexion = $obj->conexion();

        $result = null;

        $stmt = $conexion->prepare("CALL crud.sp_insertaprestamo(:nombre, :apellido, :monto, :plazo);");
        $stmt->bindParam(':nombre', $nombre, \PDO::PARAM_STR);
        $stmt->bindParam(':apellido', $apellido, \PDO::PARAM_STR);
        $stmt->bindParam(':monto', $monto, \PDO::PARAM_INT);
        $stmt->bindParam(':plazo', $plazo, \PDO::PARAM_INT);
        $stmt->execute();

        return [
            "mensaje" => "Datos insertados correctamente."
        ];
    }

    public function getMontos() {
        require_once __DIR__ . "/../config/Conectar.php";

        $obj = new Conectar();
        $conexion = $obj->conexion();

        $result = null;

        $stmt = $conexion->prepare("CALL crud.sp_obtenermontos();");
        $stmt->execute();

        return $stmt->fetchAll();
    }
}
