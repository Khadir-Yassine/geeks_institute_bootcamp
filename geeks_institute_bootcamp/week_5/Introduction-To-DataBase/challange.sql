CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR(50) NOT NULL,
 last_name VARCHAR(100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Matt','Damon','1970-10-08',5),
('George','Clooney','1961-05-06',2),
('Emma','Stone','1988-11-06',1),
('Scarlett','Johansson','1984-11-22',1);

SELECT COUNT(*) 
FROM actors;

INSERT INTO actors (first_name)
VALUES ('Tom');
-- because in creation the table we are do not null so we need enter all data (last_name,age,oscars)