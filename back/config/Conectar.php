<?php

class Conectar {
    private $servidor = "localhost";
    private $usuario = "crud";
    private $contrasena = "Crud#123";
    private $bd = "crud";

    public function conexion() {
        return new \PDO(
            "mysql:host={$this->servidor};dbname={$this->bd};",
            $this->usuario,
            $this->contrasena,
            [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_OBJ
            ]
        );
    }
}
