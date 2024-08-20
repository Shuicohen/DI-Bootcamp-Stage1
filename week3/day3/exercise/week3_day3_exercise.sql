--Exercise 1: 

SELECT *
FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Inception'),
('The Matrix'),
('Interstellar');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Amazing Movie!', 9, 'Inception was a mind-bending experience.'),
(2, 2, 'Classic Sci-Fi', 10, 'The Matrix is a revolutionary film.');

DELETE FROM new_film WHERE id = 1;


--Exercise 2:
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);  -- Assuming these IDs correspond to films you want to update

-- In the customer table, there are two important connections:
-- address_id: This links to the address table.
-- store_id: This links to the store table.
-- These connections make sure that the data stays accurate. When you add a new customer, you have to make sure that the address_id and store_id match with existing entries in the address and store tables. If you try to add a customer with an address_id or store_id that doesn't exist, it won’t work.

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
AND f.description LIKE '%sumo wrestler%';

SELECT title
FROM film
WHERE length < 60 AND rating = 'R' AND description LIKE '%documentary%';

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND f.rental_rate > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
