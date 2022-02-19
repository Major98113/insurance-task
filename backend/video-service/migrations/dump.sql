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

INSERT INTO directors ( first_name, last_name ) VALUES ( 'aaa94b08-312a-4fae-9127-1c7a89afe14a', 'Steven', 'Spielberg');
INSERT INTO directors ( first_name, last_name ) VALUES ( '73a97beb-f45d-4639-9366-2b64a990d363', 'James', 'Cameron');
INSERT INTO directors ( first_name, last_name ) VALUES ( '94cc6ac7-24dc-46cc-8b57-34fd132f2e93', 'Quentin', 'Tarantino');
INSERT INTO directors ( first_name, last_name ) VALUES ( '2a3d6696-6228-49e2-ad2e-a0685bb77f89', 'Christopher', 'Nolan');

INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '58778e97-9bcf-4304-80e8-22efb88de719', 'Back to the Future', 1985, 'Steven', 'Spielberg');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( 'cdb9561a-76a7-4d14-ba7e-43175491b3d9', 'Underwater Odyssey', 1993, 'Steven', 'Spielberg');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '06666e81-0f88-4873-aa60-cfbba9d8f6ab', 'Men in Black', 1997, 'Steven', 'Spielberg');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '94c75eb3-638c-42b8-8a63-0de6381b1429', 'Men in Black 2', 2002, 'Steven', 'Spielberg');

INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '1d730b3e-efcb-42c4-bbac-3a6b9b720117', 'Terminator', 1984, 'James', 'Cameron');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '8a832ecf-f1d0-471b-b7ec-4c928250eda3', 'Aliens', 1986, 'James', 'Cameron');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '987c4e10-a375-4ec2-9bc9-d60ae09e2c00', 'Titanic', 1997, 'James', 'Cameron');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '112fd55b-997a-4dd4-a4fe-c5248cfad85e', 'Avatar', 2009, 'James', 'Cameron');


INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '45d5b5a9-5acc-483b-a75c-da9aa4c1ef05', 'Kill Bill. Movie 1', 2003, 'Quentin', 'Tarantino');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '147f4f5b-f33f-4d3f-b50c-a440e6388236', 'Kill Bill. Movie 2', 2004, 'Quentin', 'Tarantino');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '07723ae9-28b7-43ab-a62c-ff34eb8140d3', 'Sin City', 2005, 'Quentin', 'Tarantino');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '72fbdd2d-46cd-43b4-a4c0-774c736579ad', 'Inglourious Basterds', 2009, 'Quentin', 'Tarantino');


INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '72a5daf1-7798-4c86-bc60-e0332330f193', 'Memento', 2000, 'Christopher', 'Nolan');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( 'e1dbdcb1-ff1f-458d-9b92-7ac785e50b08', 'The Prestige', 2006, 'Christopher', 'Nolan');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '4aeff4a3-3aaa-47d8-95e4-3b963307f941', 'The Dark Knight Rises', 2012, 'Christopher', 'Nolan');
INSERT INTO movies ( id, name, release_year, director_first_name, director_last_name ) VALUES ( '3ff7b64c-9324-43b1-a80d-84dc14f94f99', 'Inception', 2010, 'Christopher', 'Nolan');