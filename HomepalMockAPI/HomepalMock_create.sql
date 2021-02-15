PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS Regions;
DROP TABLE IF EXISTS RealEstates;
DROP TABLE IF EXISTS Buildings;
DROP TABLE IF EXISTS Agents;
DROP TABLE IF EXISTS Owners;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Leasables;


PRAGMA foreign_keys = ON;

CREATE TABLE Regions (
	region_name TEXT NOT NULL PRIMARY KEY
);

CREATE TABLE RealEstates (
	real_estate_id INTEGER PRIMARY KEY AUTOINCREMENT,
	real_estate_name TEXT,
	region_name TEXT NOT NULL,
	owner_id INTEGER NOT NULL,
	FOREIGN KEY(region_name) REFERENCES Regions(region_name),
	FOREIGN KEY(owner_id) REFERENCES Owners(owner_id)
);

CREATE TABLE Buildings (
	building_id INTEGER PRIMARY KEY AUTOINCREMENT,
	building_class TEXT,
	building_street_name TEXT,
	building_street_number TEXT,
	building_postal_code TEXT,
	real_estate_id INTEGER NOT NULL,
	FOREIGN KEY(real_estate_id) REFERENCES RealEstates(real_estate_id)
);

CREATE TABLE Agents (
	agent_id INTEGER PRIMARY KEY AUTOINCREMENT,
	agent_name TEXT
);

CREATE TABLE Owners (
	owner_id INTEGER PRIMARY KEY,
	FOREIGN KEY(owner_id) REFERENCES Agents(agent_id)
);

CREATE TABLE Customers (
	customer_id INTEGER PRIMARY KEY,
	FOREIGN KEY(customer_id) REFERENCES Agents(agent_id)
);

CREATE TABLE Leasables (
	leaseable_id INTEGER PRIMARY KEY AUTOINCREMENT,
	leasable_class TEXT,
	leasable_price INTEGER,
	leasable_description TEXT,
	leasable_size TEXT,
	customer_id INTEGER NOT NULL,
	owner_id INTEGER NOT NULL,
	building_id INTEGER NOT NULL,
	FOREIGN KEY(customer_id) REFERENCES Customers(customer_id),
	FOREIGN KEY(owner_id) REFERENCES Owners(owner_id),
	FOREIGN KEY(building_id) REFERENCES Buildings(building_id)
);

INSERT INTO Regions(region_name)
VALUES ("Skåne"), ("Norrland"), ("Södermanland"), ("Dalarna");

INSERT INTO Agents(agent_name)
VALUES ("Mitt Malmö"), ("Norrlandshus"), ("Kingens bostäder"), ("LKAB"), ("Stina Andersson"), ("Fia Andersson"), ("Erik Karlsson"), ("Kent Larsson");

INSERT INTO Owners(owner_id)
VALUES (1), (2), (3), (4);

INSERT INTO Customers(customer_id)
VALUES (5), (6), (7), (8);

INSERT INTO RealEstates(real_estate_name, region_name, owner_id)
VALUES ("Alfa", "Skåne", 1), ("Beta", "Norrland", 2), ("Gamma", "Södermanland", 3), ("Theta", "Dalarna", 4);

INSERT INTO Buildings(building_class, building_street_name, building_street_number, building_postal_code, real_estate_id)
VALUES ("ApartmentBuilding", "Skånegatan", "20", "223 33", 1), 
       ("ApartmentBuilding", "Umeåvägen", "18", "333 44", 2), 
	   ("LaundryBuilding", "Drottninggatan", "12", "453 11", 3), 
	   ("EnvironmentalBuilding", "Hockeygatan", "76", "141 21", 4); 

INSERT INTO Leasables(leasable_class, leasable_price, leasable_description, leasable_size, customer_id, owner_id, building_id)
VALUES ("ResidentialPremise", 3483, "Apartment in central Malmö", "73 m²", 5, 1, 1),
	   ("ResidentialPremise", 2500, "Apartment in the outskirts of Umeå", "145 m²", 6, 2, 2),
	   ("StoragePremise", 1500, "Storage unit in connection with Laundry in Stockholm", "10 m²", 7, 3, 3),
	   ("GaragePremise", 100, "Storage unit in connection with Environmental in Mora", "5 m²", 8, 4, 4);