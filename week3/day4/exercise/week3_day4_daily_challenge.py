import psycopg2
import os
from dotenv import load_dotenv
import requests
import random

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

connection = psycopg2.connect(database=DB_NAME,
    user=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT
    )

cursor = connection.cursor()

url = 'https://restcountries.com/v3.1/all'

response = requests.get(url)
countries = response.json()

random_countries = random.sample(countries, 10)

query = '''
INSERT INTO random_countries (name, capital, flag_code, subregion, population)
VALUES (%s, %s, %s, %s, %s)'''

for country in random_countries:
    name = country.get('name').get('common')
    capital = country.get('capital', None)[0]
    flag = country.get('flags', {}).get('png')
    subregion = country.get('subregion')
    population = country.get('population')

    cursor.execute(query, (name, capital, flag, subregion, population))

connection.commit()
cursor.close()
connection.close()

print("10 random countries have been added to the database.")