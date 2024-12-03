from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import json



app = FastAPI()

origins = [
    "http://localhost:5173",
    "localhost:5173"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


'''This is just testing '''
todos = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    }
]


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

@app.get("/todo", tags=["todo"])
async def get_todos() -> dict:
    return { "data": todos }



def get_homeworks():
    # Connecting to our database
    con = sqlite3.connect("./appdev.db")
    cur = con.cursor()
    data = []
    for c,l, i in cur.execute("SELECT class, link, img_link FROM homeworks"):
        data.append( {
        "class": c,
        "link": l,
        "img_link": i
    })
    return data


@app.get('/homeworks')
def return_homeworks():
    return { "data": get_homeworks() }



def get_lectures():
    # Connecting to our database
    con = sqlite3.connect("./appdev.db")
    cur = con.cursor()
    data = []
    for c,l, i, t in cur.execute("SELECT class, link, img_link, topics FROM lectures"):
        data.append( {
        "class": c,
        "link": l,
        "img_link": i,
        "topics": t
    })
    return data


@app.get('/lectures')
def return_homeworks():
    return { "data": get_lectures() }
