import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def _connect_db(self):
        return psycopg2.connect(database=DB_NAME,
                                user=DB_USER,
                                password=DB_PASSWORD,
                                host=DB_HOST,
                                port=DB_PORT
                                )
    
    def save(self):
        connection = self._connect_db()
        cursor = connection.cursor()
        query = f'''
        INSERT INTO Menu_Items (item_name, item_price) 
        VALUES ('{self.name}', {self.price})
        '''

        cursor.execute(query)
        connection.commit()
        cursor.close()
        connection.close()

    def delete(self):
        connection = self._connect_db()
        cursor = connection.cursor()
        query = f'''
        DELETE FROM Menu_Items
        WHERE item_name = '{self.name}'
        '''

        cursor.execute(query)
        connection.commit()
        cursor.close()
        connection.close()
    
    def update(self, new_name, new_price):
        connection = self._connect_db()
        cursor = connection.cursor()
        query = f'''
        UPDATE Menu_Items
        SET item_name = '{new_name}', item_price = {new_price}
        WHERE item_name = '{self.name}'
        '''

        cursor.execute(query)
        connection.commit()
        cursor.close()
        connection.close()
        self.name = new_name
        self.price = new_price