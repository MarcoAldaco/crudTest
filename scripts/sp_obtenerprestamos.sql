DELIMITER //

CREATE OR REPLACE PROCEDURE sp_obtenerprestamos()
BEGIN
	SELECT a.cliente, b.monto AS 'monto_prestamo', a.plazo AS 'plazos'
	FROM crud.prestamos AS a
	JOIN crud.montos AS b
		ON(a.id_monto = b.id_monto);
END //

DELIMITER ;