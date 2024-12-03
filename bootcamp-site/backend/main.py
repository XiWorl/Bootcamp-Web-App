# import sqlite3
# from datetime import datetime
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# import json




# app = FastAPI()

# origins = [
#     "http://localhost:5173",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_credentials=True,
#     allow_origins = origins,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# def get_lectures():
#     # Connecting to our database
#     con = sqlite3.connect("appdev.db")
#     cur = con.cursor()
#     #data = [["Class", "Link"]]
#     # for c,l in cur.execute("SELECT class, link FROM lectures"):
#     #     data.append([c,l])



#     return cur.execute("SELECT class, link FROM lectures")


# def get_homeworks():
#     # Connecting to our database
#     con = sqlite3.connect("appdev.db")
#     cur = con.cursor()
#     data = [["Class", "Link"]]
#     for c,l in cur.execute("SELECT class, link FROM homeworks"):
#         print(c,l)
#         data.append([c,l])
#     return json.load(data)


# @app.get("/lecture_slides")
# def return_lectures():
#     return get_lectures()


# @app.get('/homeworks')
# def return_homeworks():
#     return json.dumps({"name": "Alice", "age": 30, "city": "New York"})
    #return get_homeworks()


# from fastapi import FastAPI, Depends, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from typing import Annotated
# from sqlmodel import Field, Session, SQLModel, create_engine, select

# # Database tables

# class Homework(SQLModel, table=True):
#     id: int = Field(primary_key=True) # Field can let you specify certain things about the columns
#     link: str

# # Setting up to connect to the database
# # This stuff is just required for the engine to run
# sqlite_database_name = "appdev.db"
# sqlite_url = f"sqlite:///{sqlite_database_name}"

# # Allowing connections from multiple threads
# connect_args = {"check_same_thread": False}
# engine = create_engine(sqlite_url, connect_args=connect_args, echo=True)

# def create_db_and_tables():
#     SQLModel.metadata.create_all(engine)

# # Creating the session, the session communicates with the database
# def get_session():
#     with Session(engine) as session:
#         yield session


# SessionDep = Annotated[Session, Depends(get_session)]

# app = FastAPI()

# origins = [
#     "http://localhost",
#     "http://localhost:5173",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.on_event("startup")
# def on_startup():
#     create_db_and_tables()


# @app.get("/homeworks")
# async def get_homeworks(session: SessionDep):
#     return session.exec(select(Homework)).all()



import uvicorn


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)