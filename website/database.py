```python
import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect(':memory:') # create a database in RAM
        return conn
    except Error as e:
        print(e)

def saveTask(task):
    conn = create_connection()
    with conn:
        cursor = conn.cursor()
        task_query = """ INSERT INTO tasks(taskSchema)
                  VALUES(?) """
        cursor.execute(task_query, (task,))
        return cursor.lastrowid

def loadTasks():
    conn = create_connection()
    with conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM tasks")
        tasks = cursor.fetchall()
        return tasks

def create_table(conn):
    try:
        sql_create_tasks_table = """ CREATE TABLE IF NOT EXISTS tasks (
                                        id integer PRIMARY KEY,
                                        taskSchema text NOT NULL
                                    ); """
        if conn is not None:
            conn.execute(sql_create_tasks_table)
        else:
            print("Error! cannot create the database connection.")
    except Error as e:
        print(e)

if __name__ == '__main__':
    conn = create_connection()
    if conn is not None:
        create_table(conn)
    else:
        print("Error! cannot create the database connection.")
```