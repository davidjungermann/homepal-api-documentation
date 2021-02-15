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
	owner_id INTEGER NOT NULL,
	FOREIGN KEY(owner_id) REFERENCES Agents(agent_id)
);

CREATE TABLE Customers (
	customer_id INTEGER NOT NULL,
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