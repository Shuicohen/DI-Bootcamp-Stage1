SELECT COUNT(*) FROM actors;


INSERT INTO actors (first_name, last_name, age) VALUES ('', '', NULL);
-- the output to this would be
--ERROR:  Failing row contains (8, , , null, null).null value in column "age" of relation "actors" violates not-null constraint 

--ERROR:  null value in column "age" of relation "actors" violates not-null constraint
--SQL state: 23502
--Detail: Failing row contains (8, , , null, null).