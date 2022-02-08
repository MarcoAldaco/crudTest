USE crudpoo;

CREATE TABLE if NOT EXISTS montos
(
	id_monto INT NOT NULL AUTO_INCREMENT,
	monto BIGINT NOT NULL DEFAULT 0,

	PRIMARY KEY(id_monto)
);

CREATE TABLE if NOT EXISTS prestamos
(
	id_prestamo INT NOT NULL AUTO_INCREMENT,
	cliente VARCHAR(200) NOT NULL DEFAULT '',
	id_monto INT NOT NULL DEFAULT 0,
	plazo TINYINT NOT NULL DEFAULT 0,
	fecha DATE NOT NULL DEFAULT '1900-01-01',

	PRIMARY KEY(id_prestamo),
	INDEX (id_monto),
	FOREIGN KEY (id_monto) REFERENCES montos (id_monto)
);

CREATE TABLE if NOT EXISTS amortizacion
(
	id_amortizacion INT NOT NULL AUTO_INCREMENT,
	id_prestamo INT NOT NULL DEFAULT 0,
	fecha DATE NOT NULL DEFAULT '1900-01-01',
	prestamo INT NOT NULL DEFAULT 0,
	interes INT NOT NULL DEFAULT 0,
	abono INT NOT NULL DEFAULT 0,
	estatus BOOLEAN NOT NULL DEFAULT 0,
	
	PRIMARY KEY(id_amortizacion),
	INDEX (id_prestamo),
	FOREIGN KEY (id_prestamo) REFERENCES prestamos (id_prestamo)
);