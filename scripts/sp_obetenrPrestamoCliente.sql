DELIMITER //

CREATE OR REPLACE PROCEDURE sp_obetenrPrestamoCliente(
	IN nombreCliente VARCHAR(100)
)
BEGIN
	SELECT a.cliente, b.monto AS 'monto_prestamo', a.plazo AS 'plazos'
	FROM crud.prestamos AS a
	JOIN crud.montos AS b
		ON(a.id_monto = b.id_monto)
	WHERE a.cliente LIKE CONCAT('%', nombreCliente, '%');
END //

DELIMITER ;