DELIMITER //

CREATE OR REPLACE PROCEDURE sp_insertaprestamo(
	IN nombreCliente VARCHAR(100),
	IN apellidoCliente VARCHAR(100),
	IN idMonto INT,
	IN numPlazos INT
)
BEGIN
	DECLARE nomCliente VARCHAR(200);
	SET nomCliente = CONCAT(nombreCliente, ' ', apellidoCliente);

	INSERT INTO crud.prestamos (cliente, id_monto, plazo, fecha)
	VALUES (nomCliente, idMonto, numPlazos, DATE(NOW()));
END //

DELIMITER ;