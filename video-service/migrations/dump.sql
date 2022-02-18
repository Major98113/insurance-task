CREATE TABLE directors (
	id TEXT not null,
	first_name TEXT not null,
	last_name TEXT not null,
	PRIMARY KEY (first_name, last_name)
);

CREATE TABLE movies (
	id TEXT not null,
	name TEXT not null,
	release_year INTEGER not null,
	director_first_name TEXT not null,
	director_last_name TEXT not null,
	FOREIGN KEY (director_first_name, director_last_name) REFERENCES directors (first_name, last_name),
	PRIMARY KEY (name)
);

INSERT INTO directors ( first_name, last_name ) VALUES ( 'Steven', 'Spielberg');
INSERT INTO directors ( first_name, last_name ) VALUES ( 'James', 'Cameron');
INSERT INTO directors ( first_name, last_name ) VALUES ( 'Quentin', 'Tarantino');
INSERT INTO directors ( first_name, last_name ) VALUES ( 'Christopher', 'Nolan');

INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Back to the Future', 1985, 'Steven', 'Spielberg');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Underwater Odyssey', 1993, 'Steven', 'Spielberg');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Men in Black', 1997, 'Steven', 'Spielberg');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Men in Black 2', 2002, 'Steven', 'Spielberg');

INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Terminator', 1984, 'James', 'Cameron');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Aliens', 1986, 'James', 'Cameron');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Titanic', 1997, 'James', 'Cameron');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Avatar', 2009, 'James', 'Cameron');


INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Kill Bill. Movie 1', 2003, 'Quentin', 'Tarantino');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Kill Bill. Movie 2', 2004, 'Quentin', 'Tarantino');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Sin City', 2005, 'Quentin', 'Tarantino');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Inglourious Basterds', 2009, 'Quentin', 'Tarantino');


INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Memento', 2000, 'Christopher', 'Nolan');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'The Prestige', 2006, 'Christopher', 'Nolan');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'The Dark Knight Rises', 2012, 'Christopher', 'Nolan');
INSERT INTO movies ( name, release_year, director_first_name, director_last_name ) VALUES ( 'Inception', 2010, 'Christopher', 'Nolan');