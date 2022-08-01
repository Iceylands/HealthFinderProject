CREATE TABLE Doctors(
	id INT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	Name VARCHAR(128) NULL,
	Specialty VARCHAR(64) NULL,
	Rating SMALLINT NULL,
	Location VARCHAR(128) NULL,
	Languages VARCHAR(256) NULL,
	Info VARCHAR(1024),
	PRIMARY KEY (id)
);