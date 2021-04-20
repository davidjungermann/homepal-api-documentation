PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS Regions;
DROP TABLE IF EXISTS RealEstates;
DROP TABLE IF EXISTS Buildings;
DROP TABLE IF EXISTS Agents;
DROP TABLE IF EXISTS Owners;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Leasables;
DROP TABLE IF EXISTS AuthTokens;


PRAGMA foreign_keys = ON;

CREATE TABLE Regions (
	name TEXT UNIQUE NOT NULL PRIMARY KEY
);

CREATE TABLE RealEstates (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	region_name TEXT NOT NULL,
	owner_id INTEGER NOT NULL,
	FOREIGN KEY(region_name) REFERENCES Regions(name) ON DELETE CASCADE,
	FOREIGN KEY(owner_id) REFERENCES Owners(id) ON DELETE CASCADE
);

CREATE TABLE Buildings (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	class_descriptor TEXT NOT NULL,
	street_name TEXT NOT NULL,
	street_number TEXT NOT NULL,
	postal_code TEXT NOT NULL,
	real_estate_id INTEGER NOT NULL,
	FOREIGN KEY(real_estate_id) REFERENCES RealEstates(id) ON DELETE CASCADE
);

CREATE TABLE Agents (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

CREATE TABLE Owners (
	id INTEGER PRIMARY KEY,
	FOREIGN KEY(id) REFERENCES Agents(id) ON DELETE CASCADE
);

CREATE TABLE Customers (
	id INTEGER PRIMARY KEY,
	FOREIGN KEY(id) REFERENCES Agents(id) ON DELETE CASCADE
);

CREATE TABLE Leasables (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	class_descriptor TEXT NOT NULL,
	price INTEGER NOT NULL,
	description TEXT NOT NULL,
	size INTEGER NOT NULL,
	customer_id INTEGER NOT NULL,
	owner_id INTEGER NOT NULL,
	building_id INTEGER NOT NULL,
	FOREIGN KEY(customer_id) REFERENCES Customers(id) ON DELETE CASCADE,
	FOREIGN KEY(owner_id) REFERENCES Owners(id) ON DELETE CASCADE,
	FOREIGN KEY(building_id) REFERENCES Buildings(id) ON DELETE CASCADE
);

CREATE TABLE AuthTokens (
	value TEXT PRIMARY KEY
);

INSERT INTO Regions(name)
VALUES ("Skåne"), ("Norrland"), ("Södermanland"), ("Dalarna");

INSERT INTO Agents(name)
VALUES ("Mitt Malmö"), ("Norrlandshus"), ("Kingens bostäder"), ("LKAB"), ("Stina Andersson"), ("Fia Andersson"), ("Erik Karlsson"), ("Kent Larsson");

INSERT INTO Owners(id)
VALUES (1), (2), (3), (4);

INSERT INTO Customers(id)
VALUES (5), (6), (7), (8);

INSERT INTO RealEstates(name, region_name, owner_id)
VALUES ("Alfa", "Skåne", 1), ("Beta", "Norrland", 2), ("Gamma", "Södermanland", 3), ("Theta", "Dalarna", 4);

INSERT INTO Buildings(class_descriptor, street_name, street_number, postal_code, real_estate_id)
VALUES ("ApartmentBuilding", "Skånegatan", "20", "223 33", 1), 
       ("ApartmentBuilding", "Umeåvägen", "18", "333 44", 2), 
	   ("LaundryBuilding", "Drottninggatan", "12", "453 11", 3), 
	   ("EnvironmentalBuilding", "Hockeygatan", "76", "141 21", 4); 

INSERT INTO Leasables(class_descriptor, price, description, size, customer_id, owner_id, building_id)
VALUES ("ResidentialPremise", 3483, "Apartment in central Malmö", 73, 5, 1, 1),
	   ("ResidentialPremise", 2500, "Apartment in the outskirts of Umeå", 145, 6, 2, 2),
	   ("StoragePremise", 1500, "Storage unit in connection with Laundry in Stockholm", 10, 7, 3, 3),
	   ("GaragePremise", 100, "Storage unit in connection with Environmental in Mora", 5, 8, 4, 4);