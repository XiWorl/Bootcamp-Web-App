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
    for c,l in cur.execute("SELECT class, link FROM homeworks"):
        data.append( {
        "class": c,
        "link": l,
    })
    return data


@app.get('/homeworks')
def return_homeworks():
    return { "data": get_homeworks() }
    #return get_homeworks()