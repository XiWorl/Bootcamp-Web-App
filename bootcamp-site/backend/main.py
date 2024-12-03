import sqlite3
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_lectures():
    # Connecting to our database
    con = sqlite3.connect("appdev.db")
    cur = con.cursor()
    data = [["Class", "Link"]]
    for c,l in cur.execute("SELECT class, link FROM lectures"):
        data.append([c,l])
        
            
    return json.dumps(data)


def get_homeworks():
    # Connecting to our database
    con = sqlite3.connect("appdev.db")
    cur = con.cursor()
    data = [["Class", "Link"]]
    for c,l in cur.execute("SELECT class, link FROM homeworks"):
        data.append([c,l])
        
            
    return json.dumps(data)

@app.get("/lecture_slides")
def return_lectures():
    return get_lectures()

@app.get("/homeworks")
def return_homeworks():
    return get_homeworks()

