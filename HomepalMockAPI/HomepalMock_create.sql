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
	RegionName TEXT NOT NULL PRIMARY KEY
);

CREATE TABLE RealEstates (
	RealEstateId INTEGER PRIMARY KEY AUTOINCREMENT,
	RealEstateName TEXT,
	RegionName TEXT NOT NULL,
	OwnerId INTEGER NOT NULL,
	FOREIGN KEY(RegionName) REFERENCES Regions(RegionName),
	FOREIGN KEY(OwnerId) REFERENCES Owners(OwnerId)
);

CREATE TABLE Buildings (
	BuildingId INTEGER PRIMARY KEY AUTOINCREMENT,
	BuildingClass TEXT,
	BuildingStreetName TEXT,
	BuildingStreetNumber TEXT,
	BuildingPostalCode TEXT,
	RealEstateId INTEGER NOT NULL,
	FOREIGN KEY(RealEstateId) REFERENCES RealEstates(RealEstateId)
);

CREATE TABLE Agents (
	AgentId INTEGER PRIMARY KEY AUTOINCREMENT,
	AgentName TEXT
);

CREATE TABLE Owners (
	OwnerId INTEGER PRIMARY KEY,
	FOREIGN KEY(OwnerId) REFERENCES Agents(AgentId)
);

CREATE TABLE Customers (
	CustomerId INTEGER PRIMARY KEY,
	FOREIGN KEY(CustomerId) REFERENCES Agents(AgentId)
);

CREATE TABLE Leasables (
	LeasableId INTEGER PRIMARY KEY AUTOINCREMENT,
	LeasableClass TEXT,
	LeasablePrice INTEGER,
	LeasableDescription TEXT,
	LeasableSize TEXT,
	CustomerId INTEGER NOT NULL,
	OwnerId INTEGER NOT NULL,
	BuildingId INTEGER NOT NULL,
	FOREIGN KEY(CustomerId) REFERENCES Customers(CustomerId),
	FOREIGN KEY(OwnerId) REFERENCES Owners(OwnerId),
	FOREIGN KEY(BuildingId) REFERENCES Buildings(BuildingId)
);

INSERT INTO Regions(RegionName)
VALUES ("Skåne"), ("Norrland"), ("Södermanland"), ("Dalarna");

INSERT INTO Agents(AgentName)
VALUES ("Mitt Malmö"), ("Norrlandshus"), ("Kingens bostäder"), ("LKAB"), ("Stina Andersson"), ("Fia Andersson"), ("Erik Karlsson"), ("Kent Larsson");

INSERT INTO Owners(OwnerId)
VALUES (1), (2), (3), (4);

INSERT INTO Customers(CustomerId)
VALUES (5), (6), (7), (8);

INSERT INTO RealEstates(RealEstateName, RegionName, OwnerId)
VALUES ("Alfa", "Skåne", 1), ("Beta", "Norrland", 2), ("Gamma", "Södermanland", 3), ("Theta", "Dalarna", 4);

INSERT INTO Buildings(BuildingClass, BuildingStreetName, BuildingStreetNumber, BuildingPostalCode, RealEstateId)
VALUES ("ApartmentBuilding", "Skånegatan", "20", "223 33", 1), 
       ("ApartmentBuilding", "Umeåvägen", "18", "333 44", 2), 
	   ("LaundryBuilding", "Drottninggatan", "12", "453 11", 3), 
	   ("EnvironmentalBuilding", "Hockeygatan", "76", "141 21", 4); 

INSERT INTO Leasables(LeasableClass, LeasablePrice, LeasableDescription, LeasableSize, CustomerId, OwnerId, BuildingId)
VALUES ("ResidentialPremise", 3483, "Apartment in central Malmö", "73 m²", 5, 1, 1),
	   ("ResidentialPremise", 2500, "Apartment in the outskirts of Umeå", "145 m²", 6, 2, 2),
	   ("StoragePremise", 1500, "Storage unit in connection with Laundry in Stockholm", "10 m²", 7, 3, 3),
	   ("GaragePremise", 100, "Storage unit in connection with Environmental in Mora", "5 m²", 8, 4, 4);