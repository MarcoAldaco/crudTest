DELIMITER //

CREATE OR REPLACE PROCEDURE sp_obtenermontos()
BEGIN
	SELECT id_monto, monto FROM crud.montos
	ORDER BY monto ASC;
END //

DELIMITER ;